import { Link } from "react-router-dom";

import { mobileHeaderCx, navCx } from "./styles";

const MobileHeader = () => {
  return (
    <header className={mobileHeaderCx}>
      <nav className={navCx}>
        <div className="inner-nav">
          <Link to="/" className="brand">
            <h1>Movie</h1>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default MobileHeader;
