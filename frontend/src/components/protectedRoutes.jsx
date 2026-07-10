import React, { useEffect } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { Navigate } from "react-router-dom";
import KineticDotsLoader from "./loading";

function ProtectedRoute({ children }) {
  const { user, isAuthLoading, checkAuth } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, []);
  console.log("ProtectedRoute: user =", user, "isAuthLoading =", isAuthLoading);
  if (isAuthLoading) {
    return (
      <div className="flex-1  w-full h-screen flex items-center justify-center">
        <KineticDotsLoader />
      </div>
    );
  }

  return user ? children : <Navigate to="/sign-in" replace />;
}

export default ProtectedRoute;
