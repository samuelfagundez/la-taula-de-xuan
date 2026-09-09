import { content } from "../content";

export default function LocationMap() {
  return (
    <section id="ubicacion" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
        Cómo llegar
      </h2>
      <p className="mt-3 max-w-xl text-navy/75">{content.address.full}</p>
      <a
        href={content.mapLinkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-amber px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-amber-dark"
      >
        Abrir en Google Maps
      </a>

      <div className="mt-8 overflow-hidden rounded-2xl border border-navy/10">
        <iframe
          title={`Mapa de ubicación de ${content.name}`}
          src={content.mapEmbedSrc}
          width="100%"
          height="460"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block"
        />
      </div>
    </section>
  );
}
