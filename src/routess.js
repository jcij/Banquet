import { Navigate, useRoutes, Outlet } from "react-router-dom";
// import { lazy } from "react";

// layouts

import DashboardLayout from "./layouts/dashboard";
import LogoOnlyLayout from "./layouts/LogoOnlyLayout";
// pages
import LoginPage from "./pages/Auth/Login";
import LogoutPage from "./pages/Auth/Logout";
import DashboardApp from "./pages/home/DashboardApp";
import Transactions from "./pages/transactions/Transactions";
import RefundRequest from "./pages/refundRequest/RefundRequest";

import PointOfSale from "./pages/pointOfSale/PointOfSale";

import NotFound from "./pages/Page404/Page404.page";
// components
import PrivateRoute from "./components/privateRoute/PrivateRoute";

// import { ROUTES_URL } from "./constants/url.constant";
// const DashboardLayout = lazy(() => import("./layouts/dashboard"));
// const LogoOnlyLayout = lazy(() => import("./layouts/LogoOnlyLayout"));

// pages
// const LoginPage = lazy(() => import("./pages/Auth/Login"));
// const LogoutPage = lazy(() => import("./pages/Auth/Logout"));

// const DashboardApp = lazy(() => import("./pages/home/DashboardApp"));
// const NotFound = lazy(() => import("./pages/Page404/Page404.page"));
// components
// const PrivateRoute = lazy(() =>
//   import("./components/privateRoute/PrivateRoute")
// );
export default function NewRoutes() {
  return useRoutes([
    {
      path: "/dashboard",
      element: (
        <PrivateRoute>
          <DashboardLayout />
        </PrivateRoute>
      ),
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        {
          path: "app",
          element: <Outlet />,
          children: [{ path: "", element: <DashboardApp /> }],
        },
        {
          path: "transactions",
          element: <Outlet />,
          children: [{ path: "", element: <Transactions /> }],
        },
        {
          path: "refund_request",
          element: <Outlet />,
          children: [{ path: "", element: <RefundRequest /> }],
        },

        {
          path: "point_of_sale",
          element: <Outlet />,
          children: [{ path: "", element: <PointOfSale /> }],
        },
        {
          path: "logout",
          element: <Outlet />,
          children: [{ path: "", element: <LogoutPage /> }],
        },
      ],
    },

    {
      path: "/",
      element: <LogoOnlyLayout />,
      children: [
        { path: "login", element: <LoginPage /> },

        { path: "404", element: <NotFound /> },
        { path: "/", element: <Navigate to="/dashboard/app" /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },

    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
