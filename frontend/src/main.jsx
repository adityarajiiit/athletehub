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

import Profile from "./Pages/profile.jsx";
import { MyContextProvider } from "./context/context.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    element: <Career />,
  },
  {
    path: "/aid",
    element: <Aid />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  { path: "/progress", element: <Progress /> },
  { path: "/profile", element: <Profile /> },
]);
const root = createRoot(document.getElementById("app"));

root.render(
  <MyContextProvider>
    <RouterProvider router={router} />
  </MyContextProvider>
);
