import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Service Area - Pooptopia",
  description:
    "Pooptopia serves Kenosha, Racine, and Walworth counties in Wisconsin and Lake County, Illinois.",
};

export default function Page() {
  return <ComingSoon />;
}
