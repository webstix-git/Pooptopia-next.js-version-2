import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "How to Get Rid of Skunk Smell on Your Dog - Pooptopia",
  description:
    "We all love our dogs, until they come barreling into the house, tail wagging, eyes bright, smelling like they just got back from a week-long road trip with a skunk.",
};

export default function Page() {
  return <ComingSoon />;
}
