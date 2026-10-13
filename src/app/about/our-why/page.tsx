import type { Metadata } from "next";
import { AboutReferencePage } from "@/components/AboutReferencePage";

export const metadata: Metadata = {
  title: "Our Why - Pooptopia",
  description:
    "Pooptopia began after the family lost Tico in 2021. The work continues with Olive and Louie.",
};

export default function Page() {
  return <AboutReferencePage />;
}
