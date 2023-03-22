import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import { LoginPage } from "../auth";

import { MarvelPage, DcPage, SearchPage, HeroPage } from "../heroes";
import { ErrorPage } from "../heroes/pages/ErrorPage";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRouter, PublicRouter } from "./";

const router = createBrowserRouter([
  {
    path: "login/*",
    element: (
      <PublicRouter>
        <LoginPage />
      </PublicRouter>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/*",
    element: (
      <PrivateRouter>
        <HeroesRoutes />
      </PrivateRouter>
    ),
    children: [
      {
        path: "marvel",
        element: <MarvelPage />,
      },
      {
        path: "dc",
        element: <DcPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "hero/:id",
        element: <HeroPage />,
      },
      {
        path: "/*",
        element: <Navigate to={"/marvel"} />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
