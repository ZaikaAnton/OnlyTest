import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { ROUTES } from "@/shared/model/routes";

export const router = createBrowserRouter([
  {
    path: ROUTES.MAIN,
    element: <App />,
    children: [
      {
        index: true,
        lazy: async () => {
          const module = await import("@/pages/StartPage");
          return { element: <module.default /> };
        },
      },
      {
        path: ROUTES.HISTORY,
        lazy: async () => {
          const module = await import("@/pages/ContentPage");
          return { element: <module.default /> };
        },
      },
    ],
  },
]);
