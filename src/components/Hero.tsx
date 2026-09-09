import { assetUrl } from "../lib/asset";
import { content, contactHref, reservationHref } from "../content";

export default function Hero() {
  const bg = content.gallery[0];

  return (
    <section id="inicio" className="relative flex min-h-[88vh] items-end overflow-hidden">
      <img
        src={assetUrl(bg.src)}
        alt={bg.alt}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-navy/20" />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-40 sm:px-6 sm:pb-20">
        <h1 className="font-display max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
          {content.name}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-white/90 sm:text-xl">
          {content.tagline}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={reservationHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-amber px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-dark"
          >
            Reservar mesa
          </a>
          <a
            href={contactHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
}
