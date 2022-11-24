import loadable from "@loadable/component";

const Lazy = loadable(() => import(/* webpackChunkName: "detail-page" */ "./Detail"));

export default Lazy;
