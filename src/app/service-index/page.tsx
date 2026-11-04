import type { Metadata } from "next";
import { ServiceIndexPage } from "@/components/ServiceIndexPage";

export const metadata: Metadata = {
  title: "Pooptopia Service Index - Dog Poop Pickup Services",
  description:
    "Pooptopia dog poop pickup services in Kenosha, WI: Premium weekly, Prestige twice-weekly, Precision Clean one-time / spring available any time of the year, Paw Protection yard sanitization, and Playtime Pickup.",
};

export default function Page() {
  return <ServiceIndexPage />;
}
