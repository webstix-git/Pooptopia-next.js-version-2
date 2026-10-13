import type { Metadata } from "next";
import { ServicesPage } from "@/components/ServicesPage";

export const metadata: Metadata = {
  title: "Dog Waste Removal Services & Packages | Pooptopia",
  description:
    "Regular and one-time dog waste removal, designed around the needs of each yard and each dog.",
};

export default function Page() {
  return <ServicesPage />;
}
