import { lazy } from "react";

const Lazy = lazy(() => import(/* webpackChunkName: "home-page" */ "./Home"));

export default Lazy;
