import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./src/components/HeaderComponent";
import BodyComponent from "./src/components/BodyComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./src/components/Contact";
import About from "./src/components/About";
import Error from "./src/components/Error";

//in background, react is converting this JSX into React.createElement() function call using babel compiler
const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
