import type { Metadata } from "next";
import { BackOfficeDashboard } from "@/components/backoffice/BackOfficeDashboard";

export const metadata: Metadata = {
  title: "Publishing Back Office",
  robots: { index: false, follow: false }
};

export default function BackOfficePage() {
  return <BackOfficeDashboard />;
}
