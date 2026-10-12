import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "FAQ - Pooptopia",
  description:
    "Answers about Pooptopia visits, winter pickup, waste haul-away, and how to request service in Kenosha, Racine, Walworth, and Lake County.",
};

export default function Page() {
  return <ComingSoon />;
}
