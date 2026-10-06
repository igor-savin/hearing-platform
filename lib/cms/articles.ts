import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  Timestamp,
  where,
  type DocumentData,
  type QueryDocumentSnapshot
} from "firebase/firestore";
import { getFirestoreDb } from "@/lib/cms/firebase";
import { baseUrl, type SitePage } from "@/lib/site";

export type CmsArticleStatus = "draft" | "scheduled" | "archived";

export type CmsArticleRecord = {
  id: string;
  path: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  category: string;
  format: string;
  body: string[];
  faqs: { question: string; answer: string }[];
  related: { label: string; href: string }[];
  heroImage: { src: string; alt: string };
  blogMeta: NonNullable<SitePage["blogMeta"]>;
  publishAt: Date;
  status: CmsArticleStatus;
};

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function stringArray(value: unknown) {
  return Array.isArray(value) ? value.map(text).filter(Boolean) : [];
}

function dateFromValue(value: unknown) {
  if (value instanceof Timestamp) return value.toDate();
  if (value && typeof value === "object" && "toDate" in value && typeof value.toDate === "function") {
    return value.toDate();
  }
  const parsed = new Date(String(value || ""));
  return Number.isNaN(parsed.getTime()) ? new Date(0) : parsed;
}

function recordFromData(id: string, data: DocumentData): CmsArticleRecord | null {
  const path = text(data.path);
  const title = text(data.title);
  const h1 = text(data.h1) || title;
  const blogMeta = data.blogMeta && typeof data.blogMeta === "object" ? data.blogMeta : {};

  if (!path.startsWith("/") || !title || !h1) return null;

  return {
    id,
    path,
    title,
    metaTitle: text(data.metaTitle) || title,
    metaDescription: text(data.metaDescription),
    h1,
    category: text(data.category) || "Hearing Health",
    format: text(data.format) || "Patient Guide",
    body: stringArray(data.body),
    faqs: Array.isArray(data.faqs)
      ? data.faqs
          .map((faq) => ({ question: text(faq?.question), answer: text(faq?.answer) }))
          .filter((faq) => faq.question && faq.answer)
      : [],
    related: Array.isArray(data.related)
      ? data.related
          .map((link) => ({ label: text(link?.label), href: text(link?.href) }))
          .filter((link) => link.label && link.href.startsWith("/"))
      : [],
    heroImage: {
      src: text(data.heroImage?.src) || "/assets/hearing-care-options-reviewing-paperwork.png",
      alt: text(data.heroImage?.alt) || h1
    },
    blogMeta: {
      frame: text(blogMeta.frame) || "Audiologist perspective",
      byline: text(blogMeta.byline) || "From the audiology desk",
      reviewedBy: text(blogMeta.reviewedBy) || "Audiology Associates of Westchester clinical team",
      readTime: text(blogMeta.readTime) || "6 min read",
      articleType: text(blogMeta.articleType) || "Patient guide",
      pullQuote: text(blogMeta.pullQuote),
      keyTakeaways: stringArray(blogMeta.keyTakeaways),
      patientQuestion: text(blogMeta.patientQuestion) || h1,
      storyLead: text(blogMeta.storyLead),
      sources: Array.isArray(blogMeta.sources)
        ? blogMeta.sources
            .map((source: { label?: unknown; href?: unknown }) => ({ label: text(source?.label), href: text(source?.href) }))
            .filter((source: { label: string; href: string }) => source.label && /^https:\/\//.test(source.href))
        : []
    },
    publishAt: dateFromValue(data.publishAt),
    status: data.status === "draft" || data.status === "archived" ? data.status : "scheduled"
  };
}

function recordFromSnapshot(snapshot: QueryDocumentSnapshot<DocumentData>) {
  return recordFromData(snapshot.id, snapshot.data());
}

export function cmsArticleToSitePage(article: CmsArticleRecord): SitePage {
  const lastModified = article.publishAt.toISOString().slice(0, 10);
  return {
    path: article.path,
    url: `${baseUrl}${article.path}`,
    title: article.title,
    metaTitle: article.metaTitle,
    metaDescription: article.metaDescription,
    h1: article.h1,
    type: "blog-post",
    lastModified,
    canonical: `${baseUrl}${article.path}`,
    heroImage: article.heroImage,
    images: [article.heroImage],
    sections: [article.category, article.format, article.blogMeta.frame, "Frequently asked questions"],
    body: article.body,
    faqs: article.faqs,
    related: article.related,
    blogMeta: article.blogMeta
  };
}

export async function getPublishedCmsArticles(): Promise<SitePage[]> {
  try {
    const now = Timestamp.now();
    const articlesQuery = query(
      collection(getFirestoreDb(), "scheduledArticles"),
      where("status", "==", "scheduled"),
      where("publishAt", "<=", now),
      orderBy("publishAt", "desc")
    );
    const snapshot = await getDocs(articlesQuery);
    return snapshot.docs
      .map(recordFromSnapshot)
      .filter((article): article is CmsArticleRecord => Boolean(article))
      .map(cmsArticleToSitePage);
  } catch (error) {
    const code = error && typeof error === "object" && "code" in error ? String(error.code) : "";
    if (code !== "permission-denied") {
      console.warn("Scheduled articles are unavailable; serving the static catalog.", error);
    }
    return [];
  }
}

export async function getPublishedCmsArticleByPath(path: string): Promise<SitePage | null> {
  const slug = path.replace(/^\//, "");
  if (!slug || slug.includes("/")) return null;

  try {
    const snapshot = await getDoc(doc(getFirestoreDb(), "scheduledArticles", slug));
    if (!snapshot.exists()) return null;
    const article = recordFromData(snapshot.id, snapshot.data());
    if (!article || article.status !== "scheduled" || article.publishAt.getTime() > Date.now()) return null;
    return cmsArticleToSitePage(article);
  } catch {
    return null;
  }
}
