import { LOGO_IMG } from "../utils/constants";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <>
      <div className="header">
        <div className="header-logo">
          <img className="logo" src={LOGO_IMG} alt="Logo" />
        </div>
        <div className="header-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
