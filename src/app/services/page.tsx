import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Pooptopia Services - Pooptopia",
  description:
    "Regular and one-time dog waste removal, designed around the needs of each yard and each dog.",
};

export default function Page() {
  return <ComingSoon />;
}
