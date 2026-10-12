import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Woof to Waste Blog - Pooptopia",
  description: "The Doggy Digest, the Woof to Waste blog from Pooptopia.",
};

export default function Page() {
  return <ComingSoon />;
}
