import { Global } from "@emotion/react";
import { render as _render, RenderOptions } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { QueryProvider } from "../context/QueryContext";
import { WatchlistProvider } from "../context/WatchlistContext";
import globalStyle from "../styles/globalStyle";

const render = (ui: React.ReactElement, options: RenderOptions = {}) =>
  _render(ui, {
    wrapper: ({ children }) => (
      <BrowserRouter>
        <QueryProvider>
          <WatchlistProvider>{children}</WatchlistProvider>
        </QueryProvider>
        <Global styles={globalStyle} />
      </BrowserRouter>
    ),
    ...options,
  });

export * from "@testing-library/react";
export { render };
