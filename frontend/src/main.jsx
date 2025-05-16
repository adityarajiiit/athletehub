import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SignUp from "./Auth/sign up.jsx";
import Signin from "./Auth/signin.jsx";
import Career from "./Pages/career.jsx";
import Aid from "./Pages/aid.jsx";
import Chat from "./Pages/chat.jsx";
import Progress from "./Pages/progress.jsx";
import Onboard from "./constants/onboard.jsx"
import Doctor from "./Pages/aidoctor.jsx"
import Profile from "./Pages/profile.jsx";
import Finance from "./Pages/finance.jsx";
import Careerdoc from "./Pages/careerdoc.jsx";
import Coach from "./Pages/coach.jsx";
import Organization from "./Pages/organization.jsx";
import { MyContextProvider } from "./context/context.jsx";
import AuthCheck from "./Auth/authcheck.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthCheck><App /></AuthCheck>,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <Signin />,
  },
  {
    path: "/career",
    element: <AuthCheck><Career /></AuthCheck>,
  },
  {
    path: "/aid",
    element: <AuthCheck><Aid /></AuthCheck>,
  },
  {
    path: "/chat",
    element: <AuthCheck><Chat /></AuthCheck>,
  },
  {
    path:"/doctor",
    element: <AuthCheck><Doctor /></AuthCheck>,
  },
  { path: "/progress", element: <AuthCheck><Progress /></AuthCheck> },
  { path: "/profile", element: <AuthCheck><Profile /></AuthCheck> },
  { path: "/onboard", element: <AuthCheck><Onboard /></AuthCheck> },
  { path: "/finance", element: <AuthCheck><Finance /></AuthCheck> },
  {
    path: "/career-doc",
    element: <Careerdoc />,
  },
  {
    path: "/career-coach",
    element: <Coach />,
  },
  {
    path: "/org",
    element: <Organization />,
  },
]);
const root = createRoot(document.getElementById("app"));

root.render(
  <MyContextProvider>
    <RouterProvider router={router} />
  </MyContextProvider>
);