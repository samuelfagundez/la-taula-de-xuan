import { Outlet } from "react-router-dom";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

// vite-react-ssg ya envuelve la app entera en un HelmetProvider propio
// (necesario para extraer el <head> en el prerenderizado) — no anidar
// otro aquí o se rompe la extracción del SSR.
export default function App() {
  return (
    <>
      <Outlet />
      <FloatingWhatsApp />
    </>
  );
}
