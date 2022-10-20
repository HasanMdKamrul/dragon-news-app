import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div>Loading....</div>;
  }

  if (user && user.uid) {
    return children;
  }

  return <Navigate to="/login" replace state={{ from: location }} />;
};

export default PrivateRoute;
