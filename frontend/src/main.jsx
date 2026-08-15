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
import Onboard from "./Pages/onboard.jsx";
import Profile from "./Pages/profile.jsx";
import Finance from "./Pages/finance.jsx";
import Careerdoc from "./Pages/careerdoc.jsx";
import Coach from "./Pages/coach.jsx";
import Organization from "./Pages/organization.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/protectedRoutes.jsx";
import PublicRoute from "./components/publicRoute.jsx";
import Notification from "./Pages/notification.jsx";
import Training from "./Pages/training.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
  },
  {
    path: "/sign-up",
    element: (
      <PublicRoute>
        <SignUp />
      </PublicRoute>
    ),
  },
  {
    path: "/sign-in",
    element: (
      <PublicRoute>
        <Signin />
      </PublicRoute>
    ),
  },
  {
    path: "/career",
    element: (
      <ProtectedRoute>
        <Career />
      </ProtectedRoute>
    ),
  },
  {
    path: "/aid",
    element: (
      <ProtectedRoute>
        <Aid />
      </ProtectedRoute>
    ),
  },
  {
    path: "/chat",
    element: (
      <ProtectedRoute>
        <Chat />
      </ProtectedRoute>
    ),
  },
  {
    path: "/progress",
    element: (
      <ProtectedRoute>
        <Progress />
      </ProtectedRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/onboard",
    element: (
      <ProtectedRoute>
        <Onboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/finance",
    element: (
      <ProtectedRoute>
        <Finance />
      </ProtectedRoute>
    ),
  },
  {
    path: "/career-doc",
    element: (
      <ProtectedRoute>
        <Careerdoc />
      </ProtectedRoute>
    ),
  },
  {
    path: "/career-coach",
    element: (
      <ProtectedRoute>
        <Coach />
      </ProtectedRoute>
    ),
  },
  {
    path: "/org",
    element: (
      <ProtectedRoute>
        <Organization />
      </ProtectedRoute>
    ),
  },
  {
    path: "/notifications",
    element: (
      <ProtectedRoute>
        <Notification />
      </ProtectedRoute>
    ),
  },
  {
    path: "/training",
    element: (
      <ProtectedRoute>
        <Training />
      </ProtectedRoute>
    ),
  },
  {
    path: "/profile/:id",
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
]);
const root = createRoot(document.getElementById("app"));

root.render(
  <div>
    <RouterProvider router={router} />
    <Toaster position="top-right" reverseOrder={false} />
  </div>,
);
