import Link from "next/link";
import { VENUE } from "@/data/venue";

type VenueMapsLinkProps = {
  className?: string;
};

export function VenueMapsLink({ className }: VenueMapsLinkProps) {
  return (
    <Link
      href={VENUE.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className ?? "text-primary hover:underline"}
    >
      {VENUE.address.full}
    </Link>
  );
}
