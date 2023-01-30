import { lazy } from "react";

import { IRouter } from "types/router.model";
import { routerPaths } from "./router.paths";

const HomePage = lazy(() => import("pages/HomePage"));
const BookCarPage = lazy(() => import("pages/BookCarPage"));
const TestPage = lazy(() => import("pages/TestPage"));

export const routerList: IRouter[] = [
  {
    path: routerPaths.HOME,
    element: <HomePage />
  },
  {
    path: routerPaths.BOOK_CAR,
    element: <BookCarPage />,
    children: [
      {
        path: routerPaths.TEST,
        element: <TestPage />
      }
    ]
  }
];
