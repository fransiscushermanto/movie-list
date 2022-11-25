import { cx } from "@emotion/css";
import { ReactNode, useEffect } from "react";
import { FC } from "react";
import { useLocation } from "react-router-dom";
import Toolbar from "./Toolbar";

import { mainCx } from "./styles";

interface LayoutProps {
  children: ReactNode;
  hideToolbar?: boolean;
}

const Layout: FC<LayoutProps> = ({ children, hideToolbar }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <main className={cx(mainCx, { "with-toolbar": !hideToolbar })}>
        {children}
      </main>
      {!hideToolbar && <Toolbar />}
    </>
  );
};

export default Layout;
