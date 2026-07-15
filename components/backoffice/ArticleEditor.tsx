"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, Timestamp, updateDoc } from "firebase/firestore";
import { ArrowLeft, Save } from "lucide-react";
import { getFirebaseAuth, getFirestoreDb } from "@/lib/cms/firebase";
import { useCmsUser } from "@/components/backoffice/useCmsUser";

type EditableArticle = {
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  format: string;
  status: "draft" | "scheduled" | "archived";
  publishAt: string;
  body: string;
  faqs: string;
  related: string;
};

function localInputValue(date: Date) {
  const adjusted = new Date(date.getTime() - date.getTimezoneOffset() * 60_000);
  return adjusted.toISOString().slice(0, 16);
}

export function ArticleEditor({ articleId }: { articleId: string }) {
  const { user, authReady } = useCmsUser();
  const [article, setArticle] = useState<EditableArticle | null>(null);
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!user) return;
    getDoc(doc(getFirestoreDb(), "scheduledArticles", articleId))
      .then((snapshot) => {
        if (!snapshot.exists()) throw new Error("Article not found.");
        const data = snapshot.data();
        const publishAt = data.publishAt instanceof Timestamp ? data.publishAt.toDate() : new Date();
        setArticle({
          title: String(data.title || ""), h1: String(data.h1 || ""), metaTitle: String(data.metaTitle || ""),
          metaDescription: String(data.metaDescription || ""), category: String(data.category || ""), format: String(data.format || ""),
          status: data.status === "draft" || data.status === "archived" ? data.status : "scheduled",
          publishAt: localInputValue(publishAt),
          body: JSON.stringify(data.body || [], null, 2), faqs: JSON.stringify(data.faqs || [], null, 2), related: JSON.stringify(data.related || [], null, 2)
        });
      })
      .catch((error) => setMessage(error instanceof Error ? error.message : "The article could not be loaded."));
  }, [articleId, user]);

  async function save() {
    if (!user || !article) return;
    setSaving(true);
    setMessage("");
    try {
      const body = JSON.parse(article.body);
      const faqs = JSON.parse(article.faqs);
      const related = JSON.parse(article.related);
      if (!Array.isArray(body) || !Array.isArray(faqs) || !Array.isArray(related)) throw new Error("Body, FAQs, and related links must remain JSON arrays.");
      await updateDoc(doc(getFirestoreDb(), "scheduledArticles", articleId), {
        title: article.title.trim(), h1: article.h1.trim(), metaTitle: article.metaTitle.trim(), metaDescription: article.metaDescription.trim(),
        category: article.category.trim(), format: article.format.trim(), status: article.status,
        publishAt: Timestamp.fromDate(new Date(article.publishAt)), body, faqs, related,
        updatedAt: serverTimestamp(), updatedBy: user.email || user.uid
      });
      setMessage("Article saved.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "The article could not be saved.");
    } finally {
      setSaving(false);
    }
  }

  if (!authReady) return <p className="p-8">Loading…</p>;
  if (!user) return <div className="mx-auto max-w-lg p-10 text-center"><h1 className="text-3xl font-black">Sign in required</h1><button className="mt-6 bg-[#115e68] px-5 py-3 font-black text-white" onClick={() => signInWithPopup(getFirebaseAuth(), new GoogleAuthProvider())} type="button">Sign in with Google</button>{message ? <p className="mt-4">{message}</p> : null}</div>;
  if (!article) return <p className="p-8">{message || "Loading article…"}</p>;

  const set = (field: keyof EditableArticle, value: string) => setArticle((current) => current ? { ...current, [field]: value } : current);

  return (
    <section className="min-h-screen bg-[#eef4f4] px-5 py-10">
      <div className="mx-auto max-w-5xl">
        <Link className="inline-flex items-center gap-2 font-black text-[#115e68] underline" href="/back-office"><ArrowLeft size={18} /> Back to schedule</Link>
        <div className="mt-6 border border-[#d7e2e3] bg-white p-7 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-4"><div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#9f5c1e]">Article editor</p><h1 className="mt-2 text-4xl font-black">{article.title}</h1></div><button className="inline-flex items-center gap-2 bg-[#115e68] px-5 py-3 font-black text-white disabled:opacity-50" disabled={saving} onClick={save} type="button"><Save size={19} /> {saving ? "Saving…" : "Save article"}</button></div>
          {message ? <p className="mt-5 border-l-4 border-[#c57a34] bg-[#fff7ed] p-4 font-bold">{message}</p> : null}
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Field label="Title" value={article.title} onChange={(value) => set("title", value)} />
            <Field label="H1" value={article.h1} onChange={(value) => set("h1", value)} />
            <Field label="SEO title" value={article.metaTitle} onChange={(value) => set("metaTitle", value)} />
            <Field label="Category" value={article.category} onChange={(value) => set("category", value)} />
            <Field label="Format" value={article.format} onChange={(value) => set("format", value)} />
            <label className="block"><span className="font-black">Status</span><select className="mt-2 w-full border border-[#b8c8ca] px-4 py-3" onChange={(event) => set("status", event.target.value)} value={article.status}><option value="draft">Draft</option><option value="scheduled">Scheduled / live</option><option value="archived">Archived</option></select></label>
            <label className="block"><span className="font-black">Publication time</span><input className="mt-2 w-full border border-[#b8c8ca] px-4 py-3" onChange={(event) => set("publishAt", event.target.value)} type="datetime-local" value={article.publishAt} /></label>
            <label className="block md:col-span-2"><span className="font-black">Meta description</span><textarea className="mt-2 min-h-24 w-full border border-[#b8c8ca] px-4 py-3" onChange={(event) => set("metaDescription", event.target.value)} value={article.metaDescription} /></label>
            <JsonField label="Body sections (JSON array)" value={article.body} onChange={(value) => set("body", value)} />
            <JsonField label="FAQs (JSON array)" value={article.faqs} onChange={(value) => set("faqs", value)} />
            <JsonField label="Related links (JSON array)" value={article.related} onChange={(value) => set("related", value)} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return <label className="block"><span className="font-black">{label}</span><input className="mt-2 w-full border border-[#b8c8ca] px-4 py-3" onChange={(event) => onChange(event.target.value)} value={value} /></label>;
}

function JsonField({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return <label className="block md:col-span-2"><span className="font-black">{label}</span><textarea className="mt-2 min-h-72 w-full border border-[#b8c8ca] px-4 py-3 font-mono text-sm" onChange={(event) => onChange(event.target.value)} spellCheck={false} value={value} /></label>;
}
