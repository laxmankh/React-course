import { LOGO_IMG } from "../utils/constants";

const HeaderComponent = () => {
  return (
    <>
      <div className="header">
        <div className="header-logo">
          <img className="logo" src={LOGO_IMG} alt="Logo" />
        </div>
        <div className="header-nav">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
