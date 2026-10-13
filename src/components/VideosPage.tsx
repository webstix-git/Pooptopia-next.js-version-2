import { ReferencePageHero } from "@/components/ReferencePageHero";

const youtubeChannel = "https://www.youtube.com/@Pooptopia2023";

export function VideosPage() {
  return (
    <main className="reference-page reference-videos-page">
      <ReferencePageHero
        eyebrow="Pooptopia Videos"
        title="Inside Pooptopia"
        description="We had a chance to sit down the other day and create this video about why we decided to start a dog poop pickup service."
      />
      <section className="reference-videos-content">
        <div className="wrap reference-videos-layout">
          <article className="reference-video-feature">
            <h2>Videos</h2>
            <div className="reference-video-pair">
              <div className="reference-video-embed">
                <iframe
                  title="Inside Pooptopia"
                  src="https://player.vimeo.com/video/1081152204?badge=0&byline=0&h=25f1c776d6&portrait=0&title=0&autoplay=0&loop=0&muted=0&controls=1"
                  loading="lazy"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="reference-video-embed">
                <iframe
                  title="Pooptopia video"
                  src="https://player.vimeo.com/video/978234171?h=69325d8d33&autoplay=0&title=0&portrait=0&byline=0&badge=0&loop=0&muted=0&controls=1"
                  loading="lazy"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </article>
          <article className="reference-video-note-card">
            <p className="reference-section-eyebrow">Pet Friendly</p>
            <p>
              At Pooptopia we love visits from your furry friends. But not all dogs like to visit
              while we pick up poop. Either way, we love your dogs all the same.
            </p>
            <a className="reference-video-button" href={youtubeChannel} target="_blank" rel="noreferrer">
              Check us out on YouTube
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}
