import HeaderOnly from "~/component/Layout/HeaderOnly";

import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Search from "~/pages/Search";
import Upload from "~/pages/Upload";

export const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/upload", component: Upload, layout: HeaderOnly },
  { path: "/search", component: Search, layout: null },
];
