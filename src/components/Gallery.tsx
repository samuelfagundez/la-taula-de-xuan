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
    <section id="galeria" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
          Galería
        </h2>
        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Foto anterior"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors hover:border-amber hover:text-amber-dark"
          >
            ←
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Foto siguiente"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors hover:border-amber hover:text-amber-dark"
          >
            →
          </button>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {content.gallery.map((photo) => (
            <div
              key={photo.src}
              className="min-w-[78%] shrink-0 sm:min-w-[45%] lg:min-w-[31%]"
            >
              <img
                src={assetUrl(photo.src)}
                alt={photo.alt}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-2 sm:hidden">
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
