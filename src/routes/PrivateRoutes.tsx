import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes: React.FC = () => {
  let auth = { token: true };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};
