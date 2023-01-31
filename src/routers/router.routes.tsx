import { lazy } from "react";

import { IRouter } from "types/router.model";
import { routerPaths } from "./router.paths";
import { HomeIcon } from "icons";

const HomePage = lazy(() => import("pages/HomePage"));
const BookCarPage = lazy(() => import("pages/BookCarPage"));
const TestPage = lazy(() => import("pages/TestPage"));

export const routerList: IRouter[] = [
  {
    name: "Trang chủ",
    path: routerPaths.HOME,
    element: <HomePage />,
    icon: <HomeIcon width={16} height={16} fill="#ff7200" />
  },
  {
    name: "Đặt xe",
    path: routerPaths.BOOK_CAR,
    element: <BookCarPage />,
    icon: <HomeIcon width={16} height={16} fill="#ff7200" />,
    children: [
      {
        path: routerPaths.TEST,
        element: <TestPage />
      }
    ]
  }
];
