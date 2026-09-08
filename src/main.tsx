import { ViteReactSSG } from "vite-react-ssg";
import { HelmetProvider } from "react-helmet-async";
import { routes } from "./routes";
import "./index.css";

export const createRoot = ViteReactSSG(
  { routes },
  ({ isClient, router }) => {
    if (isClient) {
      // no-op: aquí se podrían registrar analíticas u otros efectos
      // de solo-cliente en el futuro.
    }
    void router;
  },
);
