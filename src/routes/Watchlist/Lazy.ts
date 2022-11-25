import loadable from "@loadable/component";

const Lazy = loadable(
  () => import(/* webpackChunkName: "watchlist-page" */ "./Watchlist"),
);

export default Lazy;
