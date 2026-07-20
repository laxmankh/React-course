import { LOGO_IMG } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const HeaderComponent = () => {
  const isOnline = useOnlineStatus();
  return (
    <>
      <div className="flex justify-between items-center p-4 bg-gray-800 text-white ">
        <div className="size-18">
          <img className="rounded-full" src={LOGO_IMG} alt="Logo" />
        </div>
        <div className="flex items-center">
          <ul className="flex">
            <li className="mx-4">
              <Link to="/">Home</Link>
            </li>
            <li className="mx-4">
              <Link to="/about">About</Link>
            </li>
            <li className="mx-4">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="mx-4">
              <Link to="/cart">Cart</Link>
            </li>
            <li className="mx-4">
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
