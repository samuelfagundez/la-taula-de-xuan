import { content } from "../content";

export default function Hours() {
  return (
    <section id="horario" className="bg-navy py-16 text-cream sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Horario</h2>
          <p className="mt-4 text-cream/70">
            Abrimos temprano para el esmorzar de toda la vida — te esperamos.
          </p>

          <dl className="mt-8 divide-y divide-cream/15">
            {content.hours.map((h) => (
              <div key={h.day} className="flex items-center justify-between py-3">
                <dt className="text-cream/80">{h.day}</dt>
                <dd className={h.hours === "Cerrado" ? "text-cream/50" : "font-medium"}>
                  {h.hours}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="self-start rounded-2xl border border-cream/15 bg-cream/5 p-6">
          <h3 className="font-display text-xl font-semibold">Precio medio</h3>
          <p className="mt-2 text-cream/80">{content.priceRangeDisplay}</p>
          <p className="mt-4 text-sm text-cream/60">
            Bar de esmorzars y bocadillos — se admiten tarjeta y efectivo.
          </p>
        </div>
      </div>
    </section>
  );
}
