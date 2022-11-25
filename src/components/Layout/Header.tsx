import ReactDOMServer from "react-dom/server";
import { FC, useEffect } from "react";
import BackArrow from "../../assets/icons/BackArrow";
import { headerCx, navCx } from "./styles";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
}

const Header: FC<HeaderProps> = (props) => {
  const navigate = useNavigate();
  const { title, showBackButton } = props;

  useEffect(() => {
    const root = document.getElementById("root");
    const header = document.createElement("header");
    header.classList.add(headerCx);
    header.classList.add("mobile-header");
    const nav = document.createElement("nav");
    nav.classList.add(navCx);
    const innerNav = document.createElement("div");
    innerNav.classList.add("inner-nav");
    const h1 = document.createElement("h1");
    h1.innerHTML = title;
    h1.classList.add("title");

    if (showBackButton) {
      const divBack = document.createElement("div");
      divBack.classList.add("back-btn");
      divBack.ariaRoleDescription = "button";
      divBack.onclick = () => navigate(-1);
      const icon = ReactDOMServer.renderToString(
        <BackArrow width={20} height={20} />,
      );
      divBack.innerHTML = icon;
      innerNav.append(divBack);
    }
    innerNav.append(h1);
    nav.append(innerNav);
    header.append(nav);
    root?.prepend(header);

    return () => {
      root?.removeChild(header);
    };
  }, [title, showBackButton, navigate]);

  return null;
};

export default Header;
