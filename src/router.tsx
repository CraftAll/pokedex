import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Home, HomeLoader } from "./components/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <Home />, loader: HomeLoader }],
  },
]);
