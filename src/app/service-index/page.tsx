import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "AI Readiness Service Index - Pooptopia",
  description:
    "Pooptopia services: weekly Premium, twice-weekly Prestige, one-time Precision Clean, Paw Protection, and Playtime Pickup.",
};

export default function Page() {
  return <ComingSoon />;
}
