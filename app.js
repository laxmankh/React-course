import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { id: "title" },
    React.createElement("h1", { id: "heading" }, "Namaste React!"),
    React.createElement("h2", { id: "subheading" }, "This is a subheading"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

