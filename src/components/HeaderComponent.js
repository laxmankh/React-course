import { LOGO_IMG } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const HeaderComponent = () => {
  const isOnline = useOnlineStatus();
  return (
    <>
      <div className="header ">
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
            <li>
              <Link to="/grossary">Grossary</Link>
            </li>
            <li>
              <span className={isOnline ? "online" : "offline"}>
                {isOnline ? "🟢" : "🔴"}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
