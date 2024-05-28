import { lazy } from "react";

const Layout = lazy(() => import("./Layout/Layout"));

const CustomReactSlick = lazy(
  () => import("./CustomReactSlick/CustomReactSlick")
);

export { CustomReactSlick, Layout };

