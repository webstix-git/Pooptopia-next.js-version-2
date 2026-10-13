import type { Metadata } from "next";
import { ServiceAreaPage } from "@/components/ServiceAreaPage";

export const metadata: Metadata = {
  title: "Dog Waste Removal Service Area | Pooptopia",
  description: "Pooptopia serves Kenosha, Racine, Union Grove, Somers, East Troy, and nearby communities.",
};

export default function Page() {
  return <ServiceAreaPage />;
}
