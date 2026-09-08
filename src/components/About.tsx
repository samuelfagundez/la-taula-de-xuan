import { content } from "../content";

export default function About() {
  return (
    <section id="sobre-nosotros" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <div>
          <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
            Sobre nosotros
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy/80">
            {content.description}
          </p>

          <div className="mt-6 flex items-center gap-2 text-navy">
            <span className="text-amber-dark">★★★★★</span>
            <span className="font-semibold">{content.rating.value}</span>
            <span className="text-navy/60">· {content.rating.countDisplay}</span>
          </div>
        </div>

        <ul className="grid gap-4 self-start rounded-2xl border border-navy/10 bg-white/60 p-6">
          {content.highlights.map((item) => (
            <li key={item} className="flex items-start gap-3 text-navy/85">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
