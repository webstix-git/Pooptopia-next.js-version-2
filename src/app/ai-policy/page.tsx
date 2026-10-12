import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "AI Policy - Pooptopia",
  description:
    "Pooptopia visits and follow-up are done by our team. Photographs on this website are Pooptopia photographs.",
};

export default function Page() {
  return <ComingSoon />;
}
