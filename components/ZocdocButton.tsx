import { CalendarDays } from "lucide-react";
import { zocdocPracticeId, zocdocUrl } from "@/lib/siteConfig";

type ZocdocButtonProps = {
  className?: string;
  label?: string;
  trackingId?: string;
};

export function ZocdocButton({
  className = "",
  label = "Book Online",
  trackingId = "appointment-zocdoc"
}: ZocdocButtonProps) {
  return (
    <a
      className={`zd-plugin focus-ring inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-4 py-3 font-bold text-white ${className}`}
      data-practice-id={zocdocPracticeId}
      data-track={trackingId}
      data-type="book-button"
      href={zocdocUrl}
      rel="noreferrer"
      target="_blank"
      title="Audiology Associates of Westchester"
    >
      <CalendarDays size={18} aria-hidden="true" />
      {label}
    </a>
  );
}
