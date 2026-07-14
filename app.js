import React from "react";
import ReactDOM from "react-dom/client";

//in background, react is converting this JSX into React.createElement() function call using babel compiler
const root = ReactDOM.createRoot(document.getElementById("root"));
const Jsxheading = () => {
  return (
    <>
      <h1> Namaste React! using JSX</h1>
    </>
  );
};

const FunctionalComponent = () => {
  return (
    <>
      <Jsxheading />
      <h1> Namaste React! using functional component</h1>
    </>
  );
};
root.render(<FunctionalComponent />);
