"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "firebase/auth";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  Timestamp,
  updateDoc,
  writeBatch,
  type DocumentData
} from "firebase/firestore";
import { CalendarClock, Edit3, LogIn, LogOut, Search, Sparkles } from "lucide-react";
import { getFirebaseAuth, getFirestoreDb } from "@/lib/cms/firebase";
import { useCmsUser } from "@/components/backoffice/useCmsUser";

type DashboardArticle = {
  id: string;
  title: string;
  category: string;
  status: "draft" | "scheduled" | "archived";
  publishAt: Date;
};

function dateFromValue(value: unknown) {
  if (value instanceof Timestamp) return value.toDate();
  return new Date(String(value || ""));
}

function localInputValue(date: Date) {
  const adjusted = new Date(date.getTime() - date.getTimezoneOffset() * 60_000);
  return adjusted.toISOString().slice(0, 16);
}

function defaultStartValue() {
  const date = new Date();
  date.setDate(date.getDate() + 3);
  date.setHours(9, 0, 0, 0);
  return localInputValue(date);
}

function articleFromData(id: string, data: DocumentData): DashboardArticle | null {
  const publishAt = dateFromValue(data.publishAt);
  if (!data.title || Number.isNaN(publishAt.getTime())) return null;
  return {
    id,
    title: String(data.title),
    category: String(data.category || "Hearing Health"),
    status: data.status === "draft" || data.status === "archived" ? data.status : "scheduled",
    publishAt
  };
}

export function BackOfficeDashboard() {
  const { user, authReady } = useCmsUser();
  const [articles, setArticles] = useState<DashboardArticle[]>([]);
  const [startAt, setStartAt] = useState(defaultStartValue);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!user) {
      setArticles([]);
      return;
    }

    const articlesQuery = query(collection(getFirestoreDb(), "scheduledArticles"), orderBy("publishAt", "asc"));
    return onSnapshot(
      articlesQuery,
      (snapshot) => {
        setArticles(snapshot.docs.map((item) => articleFromData(item.id, item.data())).filter((item): item is DashboardArticle => Boolean(item)));
        setMessage("");
      },
      (error) => setMessage(error.code === "permission-denied" ? "This Google account is not authorized for the publishing back office." : "The article queue could not be loaded.")
    );
  }, [user]);

  const filteredArticles = useMemo(() => {
    const needle = search.trim().toLowerCase();
    if (!needle) return articles;
    return articles.filter((article) => `${article.title} ${article.category} ${article.status}`.toLowerCase().includes(needle));
  }, [articles, search]);

  async function login() {
    setMessage("");
    try {
      await signInWithPopup(getFirebaseAuth(), new GoogleAuthProvider());
    } catch {
      setMessage("Google sign-in was not completed.");
    }
  }

  async function seedQueue() {
    if (!user || !startAt) return;
    setBusy(true);
    setMessage("Generating the 100-article schedule…");
    try {
      const token = await user.getIdToken();
      const response = await fetch("/api/back-office/seed", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ startAt: new Date(startAt).toISOString() })
      });
      const result = (await response.json()) as { ok?: boolean; message?: string; articles?: Array<Record<string, unknown> & { id: string; publishAt: string }> };
      if (!response.ok || !result.articles) throw new Error(result.message || "The schedule could not be generated.");

      for (let index = 0; index < result.articles.length; index += 400) {
        const batch = writeBatch(getFirestoreDb());
        result.articles.slice(index, index + 400).forEach((article) => {
          const { id, publishAt, ...data } = article;
          batch.set(doc(getFirestoreDb(), "scheduledArticles", id), {
            ...data,
            publishAt: Timestamp.fromDate(new Date(publishAt)),
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
            updatedBy: user.email || user.uid
          }, { merge: true });
        });
        await batch.commit();
      }
      setMessage("The 100-article queue is scheduled. Dates alternate every 3 and 4 days.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "The schedule could not be created.");
    } finally {
      setBusy(false);
    }
  }

  async function updateSchedule(article: DashboardArticle, status: DashboardArticle["status"], value: string) {
    const publishAt = new Date(value);
    if (Number.isNaN(publishAt.getTime())) return;
    await updateDoc(doc(getFirestoreDb(), "scheduledArticles", article.id), {
      status,
      publishAt: Timestamp.fromDate(publishAt),
      updatedAt: serverTimestamp(),
      updatedBy: user?.email || user?.uid || "unknown"
    });
  }

  if (!authReady) return <p className="p-8 text-lg">Loading the publishing back office…</p>;

  if (!user) {
    return (
      <section className="mx-auto max-w-xl px-5 py-24 text-center">
        <div className="border border-[#d7e2e3] bg-white p-10 shadow-xl">
          <CalendarClock className="mx-auto text-[#115e68]" size={48} />
          <h1 className="mt-6 text-4xl font-black text-[#253239]">Publishing back office</h1>
          <p className="mt-4 text-lg leading-7 text-[#5d6b72]">Sign in with an authorized Google account to manage drafts and scheduled release dates.</p>
          <button className="focus-ring mt-8 inline-flex items-center gap-2 bg-[#115e68] px-6 py-3 font-black text-white" onClick={login} type="button">
            <LogIn size={20} /> Sign in with Google
          </button>
          {message ? <p className="mt-5 font-bold text-[#9f2f2f]">{message}</p> : null}
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#eef4f4] px-5 py-10">
      <div className="mx-auto max-w-[1380px]">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#9f5c1e]">Audiology Associates</p>
            <h1 className="mt-2 text-4xl font-black text-[#253239]">Scheduled publishing</h1>
            <p className="mt-2 text-[#5d6b72]">Signed in as {user.email}</p>
          </div>
          <button className="focus-ring inline-flex items-center gap-2 border border-[#c5d2d3] bg-white px-4 py-2 font-bold" onClick={() => signOut(getFirebaseAuth())} type="button">
            <LogOut size={18} /> Sign out
          </button>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="border border-[#d7e2e3] bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Sparkles className="text-[#c57a34]" />
              <h2 className="text-2xl font-black">Seed the one-year queue</h2>
            </div>
            <p className="mt-3 leading-6 text-[#5d6b72]">Creates 100 complete articles and alternates 3-day and 4-day release intervals. Running it again updates the same queue rather than duplicating it.</p>
            <label className="mt-6 block text-sm font-black" htmlFor="start-at">First publication</label>
            <input className="mt-2 w-full border border-[#b8c8ca] px-4 py-3" id="start-at" onChange={(event) => setStartAt(event.target.value)} type="datetime-local" value={startAt} />
            <button className="focus-ring mt-4 w-full bg-[#115e68] px-5 py-3 font-black text-white disabled:opacity-50" disabled={busy} onClick={seedQueue} type="button">
              {busy ? "Building schedule…" : "Generate and schedule 100 articles"}
            </button>
          </div>

          <div className="border border-[#d7e2e3] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black">Queue summary</h2>
            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <Metric label="All" value={articles.length} />
              <Metric label="Drafts" value={articles.filter((article) => article.status === "draft").length} />
              <Metric label="Scheduled" value={articles.filter((article) => article.status === "scheduled" && article.publishAt.getTime() > Date.now()).length} />
              <Metric label="Live" value={articles.filter((article) => article.status === "scheduled" && article.publishAt.getTime() <= Date.now()).length} />
            </div>
            {message ? <p className="mt-5 border-l-4 border-[#c57a34] bg-[#fff7ed] p-4 font-bold">{message}</p> : null}
          </div>
        </div>

        <div className="mt-8 border border-[#d7e2e3] bg-white shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#d7e2e3] p-5">
            <h2 className="text-2xl font-black">Articles</h2>
            <label className="flex min-w-[280px] items-center gap-2 border border-[#b8c8ca] px-3 py-2">
              <Search size={18} />
              <input className="w-full border-0 outline-none" onChange={(event) => setSearch(event.target.value)} placeholder="Search title or category" value={search} />
            </label>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-left">
              <thead className="bg-[#f4f7f7] text-sm uppercase tracking-wide text-[#5d6b72]">
                <tr><th className="p-4">Article</th><th className="p-4">Status</th><th className="p-4">Publication time</th><th className="p-4">Edit</th></tr>
              </thead>
              <tbody>
                {filteredArticles.map((article) => (
                  <ArticleRow article={article} key={article.id} onSave={updateSchedule} />
                ))}
              </tbody>
            </table>
          </div>
          {!filteredArticles.length ? <p className="p-8 text-center text-[#5d6b72]">No articles match this view.</p> : null}
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return <div className="bg-[#eef6f6] p-4"><p className="text-sm font-bold text-[#5d6b72]">{label}</p><p className="mt-1 text-3xl font-black text-[#0a3d45]">{value}</p></div>;
}

function ArticleRow({ article, onSave }: { article: DashboardArticle; onSave: (article: DashboardArticle, status: DashboardArticle["status"], date: string) => Promise<void> }) {
  const [status, setStatus] = useState(article.status);
  const [date, setDate] = useState(localInputValue(article.publishAt));
  const [saving, setSaving] = useState(false);
  const isLive = status === "scheduled" && new Date(date).getTime() <= Date.now();

  useEffect(() => {
    setStatus(article.status);
    setDate(localInputValue(article.publishAt));
  }, [article]);

  return (
    <tr className="border-t border-[#e0e7e8] align-top">
      <td className="p-4"><p className="font-black text-[#253239]">{article.title}</p><p className="mt-1 text-sm text-[#5d6b72]">{article.category}</p></td>
      <td className="p-4">
        <select className="border border-[#b8c8ca] px-3 py-2" onChange={(event) => setStatus(event.target.value as DashboardArticle["status"])} value={status}>
          <option value="draft">Draft</option><option value="scheduled">{isLive ? "Live" : "Scheduled"}</option><option value="archived">Archived</option>
        </select>
      </td>
      <td className="p-4">
        <div className="flex gap-2"><input className="border border-[#b8c8ca] px-3 py-2" onChange={(event) => setDate(event.target.value)} type="datetime-local" value={date} /><button className="bg-[#0a3d45] px-4 py-2 font-bold text-white disabled:opacity-50" disabled={saving} onClick={async () => { setSaving(true); await onSave(article, status, date); setSaving(false); }} type="button">{saving ? "Saving" : "Save"}</button></div>
      </td>
      <td className="p-4"><Link className="focus-ring inline-flex items-center gap-2 font-black text-[#115e68] underline" href={`/back-office/articles/${article.id}`}><Edit3 size={17} /> Edit content</Link></td>
    </tr>
  );
}
