import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "How to Stop a Dog from Barking: A Guide to Sanity - Pooptopia",
  description:
    "If you’ve ever had your dog suddenly go full alert mode because a leaf blew past the window, or bark at absolutely nothing, then you know the struggle of excessive barking.",
};

export default function Page() {
  return <ComingSoon />;
}
