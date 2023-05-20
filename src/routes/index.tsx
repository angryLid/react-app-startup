import { createBrowserRouter } from "react-router-dom";
import Index from "../pages";

export const router = createBrowserRouter([
  {
    element: <Index />,
    path: "/",
  },
]);
