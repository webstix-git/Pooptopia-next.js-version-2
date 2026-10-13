import type { Metadata } from "next";
import { VideosPage } from "@/components/VideosPage";

export const metadata: Metadata = {
  title: "Pooptopia Videos - Pooptopia",
};

export default function Page() {
  return <VideosPage />;
}
