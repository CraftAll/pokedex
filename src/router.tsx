import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Home, HomeLoader } from "./components/Home";
import { Page, PageLoader } from "./components/Page";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home />, loader: HomeLoader },
      {
        path: "/:thing/:num",
        element: <Page />,
        loader: PageLoader,
      },
    ],
  },
]);
