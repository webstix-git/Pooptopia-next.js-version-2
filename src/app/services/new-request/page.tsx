import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "New Service Request - Pooptopia",
  description:
    "Request dog waste removal from Pooptopia. Tell us about your yard and your dogs in Kenosha, Racine, Walworth, or Lake County.",
};

export default function Page() {
  return <ComingSoon />;
}
