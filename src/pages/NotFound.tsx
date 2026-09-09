import { Helmet } from "react-helmet-async";
import { content } from "../content";
import { assetUrl } from "../lib/asset";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Página no encontrada — {content.name}</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-cream px-4 text-center">
        <h1 className="font-display text-4xl font-semibold text-navy">
          Página no encontrada
        </h1>
        <p className="text-navy/70">
          La página que buscas no existe o se ha movido.
        </p>
        <a
          href={assetUrl("/")}
          className="mt-2 rounded-full bg-amber px-6 py-3 text-sm font-semibold text-white hover:bg-amber-dark"
        >
          Volver al inicio
        </a>
      </main>
    </>
  );
}
