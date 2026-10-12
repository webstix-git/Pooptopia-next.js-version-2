import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Pooptopia Videos - Pooptopia",
};

export default function Page() {
  return <ComingSoon />;
}
