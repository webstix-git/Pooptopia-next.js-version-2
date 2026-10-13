import type { Metadata } from "next";
import { ReviewsPage } from "@/components/ReviewsPage";

export const metadata: Metadata = {
  title: "Reviews - Pooptopia",
};

export default async function Page() {
  return <ReviewsPage />;
}
