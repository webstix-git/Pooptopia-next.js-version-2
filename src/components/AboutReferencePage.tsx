import Link from "next/link";
import { ReferencePageHero } from "@/components/ReferencePageHero";
import { REQUEST_URL } from "@/lib/site";

export function AboutReferencePage() {
  return (
    <main className="reference-page reference-about-page">
      <ReferencePageHero
        eyebrow="About Us"
        title={
          <>
            We don&apos;t just remove waste.
            <br />
            We restore backyards.
          </>
        }
        description="Pooptopia began in January 2023 as a simple idea between Kim and David: if dogs give us unconditional love, the least we can do is give them a clean, safe yard to enjoy."
      />

      <section className="reference-about-intro">
        <div className="wrap reference-about-intro-grid">
          <img
            className="reference-about-wide-image"
            src="/images/reference/about-team.jpg"
            alt="The Pooptopia family with their dogs"
          />
          <div className="reference-about-copy">
            <p className="reference-section-eyebrow">Welcome to Pooptopia</p>
            <h2>A family solution that became a family business.</h2>
            <p>
              Alongside us is Logan, who has grown up watching firsthand what it means to show up,
              do the job right, and take pride in the little details that make a big difference. And
              of course, no Pooptopia story is complete without Olive and Louie, our four-legged
              quality control team and a daily reminder of why this work matters.
            </p>
            <p>
              Our approach is thorough, consistent, and intentionally personal. We treat every yard
              as if it belonged to our own dogs, because to us it isn&apos;t just about cleanliness,
              it&apos;s about safety, trust, and giving families their outdoor space back.
            </p>
          </div>
        </div>
      </section>

      <section className="reference-about-cards">
        <div className="wrap reference-about-cards-grid">
          <article className="reference-about-card">
            <img src="/images/reference/about-olive-louie.jpg" alt="Olive and Louie, the Pooptopia dogs" />
            <div>
              <h2>Louie &amp; Olive</h2>
              <p>
                When we first brought Olive home, she was suffering from parasites, as many puppies
                do. Our dog family understands the challenge these things present, proper cleanup
                is a vital part of helping a puppy recover. That&apos;s why we built a service dedicated
                to keeping your lawn clear of parasites while your dog heals.
              </p>
            </div>
          </article>

          <article className="reference-about-card">
            <img src="/images/reference/about-cleanup.jpg" alt="Pooptopia dog poop pick up in progress" />
            <div>
              <h2>It&apos;s no joke</h2>
              <p>
                Our top priority is your yard&apos;s cleanliness and your family&apos;s comfort. Pooptopia
                provides full-service dog waste removal and takes the waste away entirely, leaving
                your yard spotless and hassle-free. A clean yard with zero leftovers, guaranteed.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="reference-about-why">
        <div className="wrap reference-about-why-grid">
          <div className="reference-about-why-image" aria-hidden="true" />
          <div className="reference-about-copy">
            <p className="reference-section-eyebrow">Our why</p>
            <h2>Everyone has a why. Ours is named Tico.</h2>
            <p>
              We lost our first dog, Tico, unexpectedly in August 2021. He was only 4½ years old.
              Tico had epilepsy and suffered grand mal seizures about every 30 days. While staying
              at a local dog daycare he had a seizure, and due to improper care afterward he suffered
              irreversible damage. We had to say goodbye.
            </p>
            <p>
              After that, we searched for a way to honor his memory and spare other dog owners the
                same experience. We became fiercely careful with our new pups, Olive and Louie, what
              they ate, who trained them, who cared for them, and how clean their yard stayed. In the
              fall of 2023 we realized how many local families needed that same help.
            </p>
            <p>
              This business let us come full circle with losing Tico, and keep making a positive
              impact for dog families every single week.
            </p>
            <Link className="reference-page-button" href={REQUEST_URL}>
              Request Service
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
