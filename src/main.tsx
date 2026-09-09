import { ViteReactSSG } from "vite-react-ssg";
import { HelmetProvider } from "react-helmet-async";
import { routes } from "./routes";
import "./index.css";

// GitHub Pages de proyecto sirve el sitio bajo /nombre-repo/. Si el
// router de cliente no conoce ese prefijo (basename), al hidratar
// compara window.location.pathname ("/la-taula-de-xuan/") contra las
// rutas registradas ("/") y no matchea nada — cae al catch-all "*" y
// sustituye el Home ya renderizado por el SSR con la página de "no
// encontrada". BASE_URL ya trae el prefijo correcto en build (y "/"
// en local), así que hay que pasarlo explícitamente como basename.
export const createRoot = ViteReactSSG(
  { routes, basename: import.meta.env.BASE_URL },
  ({ isClient, router }) => {
    if (isClient) {
      // no-op: aquí se podrían registrar analíticas u otros efectos
      // de solo-cliente en el futuro.
    }
    void router;
  },
);
