import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// El sitio se publica como GitHub Pages "de proyecto"
// (https://usuario.github.io/nombre-repo/), así que necesita ese prefijo
// en todos los assets. VITE_BASE lo fija el workflow de despliegue;
// en local (`npm run dev`) cae a "/".
const base = process.env.VITE_BASE || "/";

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
});
