import { GalleryListing } from "@/components/GalleryListing";
import { ReferencePageHero } from "@/components/ReferencePageHero";

export function GalleryPage() {
  return (
    <main className="reference-page reference-gallery-page">
      <ReferencePageHero
        eyebrow="Gallery"
        title="A cleaner yard tells the story."
        description={
          <>
            See the before-and-after results, the dogs we work around, and the details that make
            <br />
            every Pooptopia visit feel complete.
          </>
        }
      />
      <section className="reference-gallery-content">
        <div className="wrap">
          <GalleryListing />
        </div>
      </section>
    </main>
  );
}
