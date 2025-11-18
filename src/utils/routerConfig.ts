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
    path: "new-product",
    component: () => import("../pages/new-product.tsx"),
    exact: true,
  },
  {
    path: "product/:id",
    component: () => import("../pages/edit-product.tsx"),
    exact: true,
    protected: true,
  },
  {
    path: "profile",
    component: () => import("../pages/profile.tsx"),
    exact: true,
    protected: true,
  },
  {
    path: "about",
    component: () => import("../pages/about.tsx"),
    exact: true,
  },
  {
    path: "*",
    component: () => import("../pages/404.tsx"),
    exact: false,
  },
];
