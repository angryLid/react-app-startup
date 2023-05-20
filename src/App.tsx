import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Index from "./pages";
const router = createBrowserRouter([
  {
    element: <Index />,
    path: "/",
  },
]);
export const App = () => {
  return <RouterProvider router={router} />;
};
