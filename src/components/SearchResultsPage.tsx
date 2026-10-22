import Link from "next/link";
import { ReferencePageHero } from "@/components/ReferencePageHero";
import { searchSite } from "@/lib/search";

const resultsPerPage = 10;

export function SearchResultsPage({ query, currentPage = 1 }: { query: string; currentPage?: number }) {
  const searchQuery = query.trim();
  const results = searchQuery ? searchSite(searchQuery) : [];
  const pageCount = Math.max(1, Math.ceil(results.length / resultsPerPage));
  const page = Math.min(Math.max(currentPage, 1), pageCount);
  const visibleResults = results.slice((page - 1) * resultsPerPage, page * resultsPerPage);

  function getPageHref(pageNumber: number) {
    const params = new URLSearchParams();
    if (searchQuery) params.set("s", searchQuery);
    if (pageNumber > 1) params.set("page", String(pageNumber));
    return `/search?${params.toString()}`;
  }

  return (
    <main className="reference-page site-search-page">
      <ReferencePageHero
        eyebrow="Search"
        title={searchQuery ? `Search Results for: ${searchQuery}` : "Search"}
        description={
          searchQuery
            ? `${results.length} ${results.length === 1 ? "page matches" : "pages match"} “${searchQuery}”.`
            : "Search pages, services, and blog posts."
        }
      />
      <section className="site-search-content">
        <div className="wrap">
          {searchQuery ? (
            <p className="site-search-crumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true"> / </span>
              <span>Search results for “{searchQuery}”</span>
            </p>
          ) : (
            <form className="blog-search" action="/search" method="get" role="search">
              <label className="sr-only" htmlFor="page-search">
                Search the site
              </label>
              <input id="page-search" name="s" type="search" placeholder="Search" required />
              <button type="submit">Search</button>
            </form>
          )}
          {searchQuery && results.length === 0 ? (
            <p className="site-search-empty">No pages matched “{searchQuery}”.</p>
          ) : (
            <div className="site-search-list">
              {visibleResults.map((result) => (
                <article key={`${result.href}-${result.title}`} className="site-search-item">
                  <h2>
                    <Link href={result.href}>{result.title}</Link>
                  </h2>
                  <p>{result.excerpt}</p>
                  <Link className="site-search-more" href={result.href}>
                    Read More
                  </Link>
                </article>
              ))}
            </div>
          )}
          {searchQuery && pageCount > 1 ? (
            <nav className="reference-blog-pagination" aria-label="Search pagination">
              {Array.from({ length: pageCount }, (_, index) => index + 1).map((pageNumber) => (
                <Link
                  key={pageNumber}
                  className={pageNumber === page ? "is-active" : ""}
                  href={getPageHref(pageNumber)}
                  aria-current={pageNumber === page ? "page" : undefined}
                >
                  {pageNumber}
                </Link>
              ))}
            </nav>
          ) : null}
        </div>
      </section>
    </main>
  );
}
