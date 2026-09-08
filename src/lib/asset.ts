// GitHub Pages de proyecto sirve el sitio bajo /nombre-repo/, así que
// cualquier ruta absoluta escrita a mano ("/gallery/x.jpg") se resuelve
// contra la raíz del dominio y rompe. Usar SIEMPRE este helper para
// imágenes de /public referenciadas en JSX.
const BASE_URL = import.meta.env.BASE_URL;

export function assetUrl(path: string): string {
  const clean = path.startsWith("/") ? path.slice(1) : path;
  return `${BASE_URL}${clean}`;
}
