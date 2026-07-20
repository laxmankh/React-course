import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./src/components/HeaderComponent";
import BodyComponent from "./src/components/BodyComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./src/components/Contact";
import About from "./src/components/About";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import useOnlineStatus from "./src/utils/useOnlineStatus";
import Cart from "./src/components/Cart";
import { lazy, Suspense } from "react";

//in background, react is converting this JSX into React.createElement() function call using babel compiler
const root = ReactDOM.createRoot(document.getElementById("root"));

const LazyGrossary = lazy(() => import("./src/components/Grossary"));

const AppLayout = () => {
  const isOnline = useOnlineStatus();
  return (
    <>
      <HeaderComponent />
      {isOnline ? (
        <Outlet />
      ) : (
        <h1>
          You are offline. Please check your internet connection and try again.
        </h1>
      )}
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
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grossary",
        element: (
          <Suspense fallback="Loading...">
            <LazyGrossary />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
