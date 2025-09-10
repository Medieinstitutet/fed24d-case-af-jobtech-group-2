import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { Ads } from "./pages/Ads";
import { AdDetails } from "./pages/AdDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/ads", element: <Ads /> },
      { path: "/ads/:id", element: <AdDetails /> },
    ],
  },
]);
