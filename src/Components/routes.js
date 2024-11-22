import React from "react";
import reportWebVitals from "../reportWebVitals";
import Home from "../Pages/Home";
import Signup from "./Signup";
import Login from "./Login";
import LostItemList from "../Pages/LostItemList";
import FoundItemList from "../Pages/FoundItemList";
import LostAdminList from "../Pages/Admin";
import Claim from "../Pages/Claim";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/lostadminlist",
    element: <LostAdminList />,
  },
  {
    path: "/lostitem",
    element: <LostItemList />,
  },
  {
    path: "/founditem",
    element: <FoundItemList />,
  },
  {
    path: "/claim",
    element: <Claim />,
  },
  

  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default routes;
reportWebVitals();
