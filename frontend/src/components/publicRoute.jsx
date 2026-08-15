import React, { useEffect } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { Navigate } from "react-router-dom";
import KineticDotsLoader from "./ui/loading";

function PublicRoute({ children }) {
  const { user, isAuthLoading, checkAuth } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, []);

  if (isAuthLoading) {
    return (
      <div className="flex-1  w-full h-screen flex items-center justify-center">
        <KineticDotsLoader />
      </div>
    );
  }

  return user ? <Navigate to="/" replace /> : children;
}

export default PublicRoute;
