export const ROUTE_CONFIGS = [
  {
    path: "",
    component: () => import("../pages/home.tsx"),
    exact: true,
  },
  {
    path: "login",
    component: () => import("../pages/login.tsx"),
    exact: true,
  },
  {
    path: "*",
    component: () => import("../pages/404.tsx"),
    exact: false,
  },
];
