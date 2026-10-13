import type { Metadata } from "next";
import { ServiceAreaPage } from "@/components/ServiceAreaPage";

export const metadata: Metadata = {
  title: "Service Area - Pooptopia",
  description:
    "Pooptopia serves Kenosha, Racine, and Walworth counties in Wisconsin and Lake County, Illinois.",
};

export default function Page() {
  return <ServiceAreaPage />;
}
