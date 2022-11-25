import { cx } from "@emotion/css";
import Home from "../../assets/icons/Home";
import { toolbarCx } from "./styles";
import { Link } from "react-router-dom";
import Bookmark from "../../assets/icons/Bookmark";

const menus = [
  {
    name: "home",
    path: "/",
    icon: <Home />,
  },
  {
    name: "watchlist",
    path: "/watchlist",
    icon: <Bookmark />,
  },
];

const Toolbar = () => {
  return (
    <div className={toolbarCx}>
      {menus.map(({ icon, name, path }) => (
        <Link key={name} to={path} className={cx("menu", name)}>
          <i>{icon}</i>
          <span>{name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Toolbar;
