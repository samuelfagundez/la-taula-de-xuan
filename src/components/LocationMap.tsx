import { content } from "../content";

export default function LocationMap() {
  return (
    <section id="ubicacion" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
        Cómo llegar
      </h2>
      <p className="mt-3 max-w-xl text-navy/75">{content.address.full}</p>

      <div className="mt-8 grid gap-6 md:grid-cols-[1.3fr_0.7fr]">
        <div className="overflow-hidden rounded-2xl border border-navy/10">
          <iframe
            title={`Mapa de ubicación de ${content.name}`}
            src={content.mapEmbedSrc}
            width="100%"
            height="380"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block"
          />
        </div>

        <div className="flex flex-col justify-center gap-4 rounded-2xl border border-navy/10 bg-white/60 p-6">
          <div>
            <p className="text-sm font-medium text-navy/60">Dirección</p>
            <p className="text-navy">{content.address.full}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-navy/60">Teléfono</p>
            <a href={`tel:${content.phone}`} className="text-navy hover:text-amber-dark">
              {content.phoneDisplay}
            </a>
          </div>
          <a
            href={content.mapLinkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-amber px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-amber-dark"
          >
            Abrir en Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
