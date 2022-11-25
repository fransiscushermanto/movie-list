import loadable from "@loadable/component";

const Lazy = loadable(
  () => import(/* webpackChunkName: "not-found-page" */ "./NotFound"),
);

export default Lazy;
