import { Global } from "@emotion/react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { QueryProvider } from "./context/QueryContext";
import reportWebVitals from "./reportWebVitals";
import globalStyle from "./styles/globalStyle";

import Layout from "./components/Layout";

import Home from "./routes/Home";
import Detail, { DetailLoader } from "./routes/Detail";
import NotFound from "./routes/NotFound";
import Watchlist from "./routes/Watchlist";
import { WatchlistProvider } from "./context/WatchlistContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/detail/:imdbID",
    loader: DetailLoader,
    errorElement: <NotFound />,
    element: (
      <Layout hideToolbar>
        <Detail />
      </Layout>
    ),
  },
  {
    path: "/watchlist",
    element: (
      <Layout>
        <Watchlist />
      </Layout>
    ),
  },
]);

root.render(
  <QueryProvider>
    <WatchlistProvider>
      <RouterProvider router={router} />
      <Global styles={globalStyle} />
    </WatchlistProvider>
  </QueryProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
