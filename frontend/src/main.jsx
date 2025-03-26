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
import Doctor from "./Pages/aidoctor.jsx";
import Profile from "./Pages/profile.jsx";
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
]);
const root = createRoot(document.getElementById("app"));

root.render(
  <MyContextProvider>
    <RouterProvider router={router} />
  </MyContextProvider>
);