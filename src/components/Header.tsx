import { useState } from "react";
import { content, contactHref, reservationHref } from "../content";

const NAV = [
  { label: "Sobre nosotros", href: "#sobre-nosotros" },
  { label: "Galería", href: "#galeria" },
  { label: "Horario", href: "#horario" },
  { label: "Cómo llegar", href: "#ubicacion" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur border-b border-navy/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#inicio" className="font-display text-lg font-semibold text-navy sm:text-xl">
          {content.shortName}
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy/80 transition-colors hover:text-amber-dark"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={contactHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-navy/20 px-4 py-2 text-sm font-medium text-navy transition-colors hover:border-amber hover:text-amber-dark"
          >
            Contáctanos
          </a>
          <a
            href={reservationHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-amber px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-amber-dark"
          >
            Reservar mesa
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/20 md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-navy/10 bg-cream md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-2 text-sm font-medium text-navy/80 hover:bg-navy/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <a
                href={contactHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-navy/20 px-4 py-2 text-center text-sm font-medium text-navy"
              >
                Contáctanos
              </a>
              <a
                href={reservationHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-amber px-4 py-2 text-center text-sm font-semibold text-white"
              >
                Reservar mesa
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
