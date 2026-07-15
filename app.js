import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./src/components/HeaderComponent";
import BodyComponent from "./src/components/BodyComponent";

//in background, react is converting this JSX into React.createElement() function call using babel compiler
const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
    </>
  );
};
root.render(<AppLayout />);
