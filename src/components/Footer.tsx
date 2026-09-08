import { content } from "../content";

export default function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-cream py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-xl font-semibold text-navy">{content.name}</p>
          <p className="mt-2 max-w-sm text-sm text-navy/70">{content.address.full}</p>
          <a
            href={`tel:${content.phone}`}
            className="mt-1 block text-sm text-navy/70 hover:text-amber-dark"
          >
            {content.phoneDisplay}
          </a>
        </div>

        {content.social.instagram && (
          <div>
            <p className="text-sm font-semibold text-navy">Síguenos</p>
            <a
              href={content.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-sm text-navy/70 hover:text-amber-dark"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.4a4.9 4.9 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.16.46.35 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.4 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.46.16-1.26.35-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.16-.46-.35-1.26-.4-2.43C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.97.4-2.43a4.9 4.9 0 0 1 1.15-1.77A4.9 4.9 0 0 1 5.6 1.8c.46-.16 1.26-.35 2.43-.4C9.3 1.34 9.68 1.33 12 1.33Zm0 1.8c-3.14 0-3.5.01-4.73.07-.99.05-1.53.21-1.89.35-.47.18-.8.4-1.16.75a3.1 3.1 0 0 0-.75 1.16c-.14.36-.3.9-.35 1.89-.06 1.23-.07 1.6-.07 4.73s.01 3.5.07 4.73c.05.99.21 1.53.35 1.89.18.47.4.8.75 1.16.36.36.69.57 1.16.75.36.14.9.3 1.89.35 1.23.06 1.6.07 4.73.07s3.5-.01 4.73-.07c.99-.05 1.53-.21 1.89-.35.47-.18.8-.4 1.16-.75.36-.36.57-.69.75-1.16.14-.36.3-.9.35-1.89.06-1.23.07-1.6.07-4.73s-.01-3.5-.07-4.73c-.05-.99-.21-1.53-.35-1.89a3.1 3.1 0 0 0-.75-1.16 3.1 3.1 0 0 0-1.16-.75c-.36-.14-.9-.3-1.89-.35-1.23-.06-1.6-.07-4.73-.07Zm0 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 1.8a3.7 3.7 0 1 0 0 7.4 3.7 3.7 0 0 0 0-7.4Zm5.7-1.99a1.28 1.28 0 1 1-2.57 0 1.28 1.28 0 0 1 2.57 0Z" />
              </svg>
              @latauladexuan
            </a>
          </div>
        )}

        <p className="text-xs text-navy/50 md:self-end">
          © {new Date().getFullYear()} {content.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
