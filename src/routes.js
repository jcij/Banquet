import { lazy, memo } from "react";
import { Navigate, useRoutes, Outlet } from "react-router-dom";
// constants
import { ROUTES_URL } from "./constants/url.constant";
// components
import PrivateRoute from "./components/privateRoute/PrivateRoute";
// layouts
const DashboardLayout = lazy(() => import("./layouts/dashboard"));
const LogoOnlyLayout = lazy(() => import("./layouts/LogoOnlyLayout"));
// pages
const LoginPage = lazy(() => import("./pages/Auth/Login"));
const LogoutPage = lazy(() => import("./pages/Auth/Logout"));

const DashboardApp = lazy(() => import("./pages/home/DashboardApp"));
// const Category = lazy(() => import("./pages/category/Category"));

// const CreateCategory = lazy(() =>
//   import("./pages/category/form/CreateCategory")
// );
// const Portfolio = lazy(() => import("./pages/portfolio/Portfolio"));

// const PortfolioForm = lazy(() =>
//   import("./pages/portfolio/form/PortfolioForm")
// );

// const Section = lazy(() => import("./pages/section/Section"));
// const SectionForm = lazy(() => import("./pages/section/form/SectionForm"));

// const Slider = lazy(() => import("./pages/slider/Slider"));
// const SliderForm = lazy(() => import("./pages/slider/form/SliderForm"));

// const GeneralForm = lazy(() => import("./pages/general/form/GeneralForm"));

const NotFound = lazy(() => import("./pages/Page404/Page404.page"));
// components
// const PrivateRoute = lazy(() =>
//   import("./components/privateRoute/PrivateRoute")
// );

const NewRoutes = () => {
  return useRoutes([
    {
      path: ROUTES_URL.DASHBOARD,
      element: (
        <PrivateRoute>
          <DashboardLayout />
        </PrivateRoute>
      ),
      children: [
        { element: <Navigate to={ROUTES_URL.DASHBOARD + "/home"} replace /> },
        {
          path: "",
          element: <Navigate to={ROUTES_URL.DASHBOARD + "/home"} replace />,
        },
        {
          path: "home",
          element: <Outlet />,
          children: [{ path: "", element: <DashboardApp /> }],
        },
        // {
        //   path: "category",
        //   element: <Outlet />,
        //   children: [
        //     { path: "", element: <Category /> },
        //     { path: "createUpdate", element: <CreateCategory /> },
        //   ],
        // },
        // {
        //   path: "portfolio",
        //   element: <Outlet />,
        //   children: [
        //     { path: "", element: <Portfolio /> },
        //     { path: "createUpdate", element: <PortfolioForm /> },
        //   ],
        // },
        // {
        //   path: "section",
        //   element: <Outlet />,
        //   children: [
        //     { path: "", element: <Section /> },
        //     { path: "createUpdate", element: <SectionForm /> },
        //   ],
        // },
        // {
        //   path: "slider",
        //   element: <Outlet />,
        //   children: [
        //     { path: "", element: <Slider /> },
        //     { path: "createUpdate", element: <SliderForm /> },
        //   ],
        // },
        // {
        //   path: "general",
        //   element: <Outlet />,
        //   children: [{ path: "createUpdate", element: <GeneralForm /> }],
        // },
        {
          path: "logout",
          element: <Outlet />,
          children: [{ path: "", element: <LogoutPage /> }],
        },
      ],
    },

    {
      path: ROUTES_URL.HOME,
      element: <LogoOnlyLayout onlyChildren />,
      children: [
        { path: "login", element: <LoginPage /> },

        { path: "404", element: <NotFound /> },
        {
          path: "/",
          element: <Navigate to={ROUTES_URL.DASHBOARD + "/home"} />,
        },
        { path: "*", element: <Navigate to={ROUTES_URL.NOT_FOUND} /> },
      ],
    },
    { path: "*", element: <Navigate to={ROUTES_URL.NOT_FOUND} replace /> },
  ]);
};

export default memo(NewRoutes);
