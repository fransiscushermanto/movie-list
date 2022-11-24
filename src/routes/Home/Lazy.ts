import loadable from "@loadable/component";

const Lazy = loadable(
  () => import(/* webpackChunkName: "home-page" */ "./Home"),
);

export default Lazy;
