import { ReactNode } from "react";
import { FC } from "react";

import MobileHeader from "./MobileHeader";
import { mainCx } from "./styles";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <MobileHeader />
      <main className={mainCx}>{children}</main>
    </>
  );
};

export default Layout;
