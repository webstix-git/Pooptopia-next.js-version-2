import type { Metadata } from "next";
import { ContactReferencePage } from "@/components/ContactReferencePage";

export const metadata: Metadata = {
  title: "Contact - Pooptopia",
  description:
    "Contact Pooptopia in Kenosha, Wisconsin. Call (262) 351-2147, email admin@pooptopia.dog, or send a note about your yard.",
};

export default function Page() {
  return <ContactReferencePage />;
}
