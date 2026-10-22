import type { Metadata } from "next";
import { Suspense } from "react";
import { SearchResultsPage } from "@/components/SearchResultsPage";

export const metadata: Metadata = {
  title: "Search - Pooptopia",
  description: "Search Pooptopia pages, services, and blog posts.",
};

type SearchParams = Promise<{
  s?: string | string[];
  page?: string | string[];
}>;

function firstParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}

async function SearchListing({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const page = Number.parseInt(firstParam(params.page) || "1", 10);
  return (
    <SearchResultsPage
      query={firstParam(params.s)}
      currentPage={Number.isFinite(page) && page > 0 ? page : 1}
    />
  );
}

export default function Page({ searchParams }: { searchParams: SearchParams }) {
  return (
    <Suspense fallback={<SearchResultsPage query="" />}>
      <SearchListing searchParams={searchParams} />
    </Suspense>
  );
}
