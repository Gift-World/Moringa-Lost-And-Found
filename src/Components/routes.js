import React from "react";
import reportWebVitals from "../reportWebVitals";
import Home from "../Pages/Home";
import Signup from "./Signup";
import Login from "./Login";
import LostItemList from "../Pages/LostItemList";
import FoundItemList from "../Pages/FoundItemList";
import LostAdminList from "../Pages/Admin";
import RecoveredItems from "../Pages/RecoveredItems";
import Claim from "../Pages/Claim";
import Reports from "../Pages/Reports";

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
    path: "/recovereditems",
    element: <RecoveredItems />,
  },
  {
    path: "/report",
    element: <Reports />,
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
