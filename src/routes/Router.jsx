import { Suspense } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import HomePage from "../pages/landing";
// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <Suspense>
          <Outlet />
        </Suspense>
      ),
      children: [{ element: <HomePage />, index: true }],
    },
  ]);

  return routes;
}
