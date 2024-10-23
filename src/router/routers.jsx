
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "../components/HOC/RootLayout";
import Home from "../Pages/Home";
import MyProjects from "../Pages/MyProjects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: (
          <Home />
        ),
      },
      {
        path: "/myProjects",
        element: (
          <MyProjects />
        ),
      },
    ],
  },

],
  {
    basename: "/Portfolio/",
  }
);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
