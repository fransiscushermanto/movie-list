import { Link } from "react-router-dom";
import { notFoundCx } from "./style";

const NotFound = () => {
  return (
    <div className={notFoundCx}>
      <div className="title">
        <span>404 | Not Found</span>
      </div>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFound;
