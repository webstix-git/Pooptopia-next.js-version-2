import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Can You Put Neosporin on a Dog? What You Need to Know - Pooptopia",
  description:
    "If you’ve ever owned a dog, you know that at some point, they’re going to come limping inside with a mysterious scrape, scratch, or cut.",
};

export default function Page() {
  return <ComingSoon />;
}
