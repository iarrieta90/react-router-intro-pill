import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({isAuthenticated, ...props}) {
  return isAuthenticated ? <Route {...props} /> : <Redirect to="/" />;
}

export default ProtectedRoute;
