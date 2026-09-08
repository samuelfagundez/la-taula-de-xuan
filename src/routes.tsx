import type { RouteRecord } from "vite-react-ssg";
import App from "./App";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];
