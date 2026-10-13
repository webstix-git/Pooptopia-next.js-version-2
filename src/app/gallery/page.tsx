import type { Metadata } from "next";
import { GalleryPage } from "@/components/GalleryPage";

export const metadata: Metadata = {
  title: "Gallery - Pooptopia",
};

export default function Page() {
  return <GalleryPage />;
}
