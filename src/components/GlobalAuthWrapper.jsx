import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const GlobalAuthWrapper = ({ children }) => {
  const location = useLocation();
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  // Cache public routes using useMemo to prevent unnecessary re-renders
  const publicRoutes = useMemo(
    () => [
      "/",
      "/login",
      "/about",
      "/contact",
      "/reset-password",
      "/signup",
      "/home",
      "/upsale",
      "/site-resources",
      "/courses-info",
      "/blogs",
      "/blogdetails",
      "/books",
      "/work-with-me/coaching",
      "/coachingDetails",
      "/work-with-me/speaking",
      "/checkout",
      "/success",
      "/not-found",
      "/podcast",
      "/contact",
    ],
    []
  );

  // Improved Loading Experience with Spinner or Skeleton Loader
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader">Loading...</div>{" "}
      </div>
    );
  }

  if (!isAuthenticated && !publicRoutes.includes(location.pathname)) {
    return <Navigate to="/not-found" />;
  }

  return <>{children}</>;
};

export default GlobalAuthWrapper;
