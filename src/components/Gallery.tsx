import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { assetUrl } from "../lib/asset";
import { content } from "../content";

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);

  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="galeria" className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pb-24 sm:pt-12">
      <h2 className="mb-8 font-display text-3xl font-semibold text-navy sm:text-4xl">
        Galería
      </h2>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {content.gallery.map((photo) => (
              <div
                key={photo.src}
                className="shrink-0 grow-0 basis-[90%] sm:basis-[45%] lg:basis-[27%]"
              >
                <img
                  src={assetUrl(photo.src)}
                  alt={photo.alt}
                  loading="lazy"
                  className="aspect-[4/5] w-full rounded-2xl object-cover sm:aspect-[4/3]"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Foto anterior"
          className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-navy/20 bg-cream/90 text-navy shadow-md backdrop-blur transition-colors hover:border-amber hover:text-amber-dark"
        >
          ←
        </button>
        <button
          type="button"
          onClick={scrollNext}
          aria-label="Foto siguiente"
          className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-navy/20 bg-cream/90 text-navy shadow-md backdrop-blur transition-colors hover:border-amber hover:text-amber-dark"
        >
          →
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {content.gallery.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            aria-label={`Ir a la foto ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === selected ? "bg-amber" : "bg-navy/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
