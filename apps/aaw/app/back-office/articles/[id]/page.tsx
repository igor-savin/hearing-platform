import type { Metadata } from "next";
import { ArticleEditor } from "@/components/backoffice/ArticleEditor";

export const metadata: Metadata = {
  title: "Edit Scheduled Article",
  robots: { index: false, follow: false }
};

export default async function ArticleEditorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ArticleEditor articleId={id} />;
}
