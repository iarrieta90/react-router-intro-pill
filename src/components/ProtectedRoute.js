import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

function ProtectedRoute({ ...props }) {
  const {
    authState: { isAuthenticated },
  } = useContext(AuthContext);

  return isAuthenticated ? <Route {...props} /> : <Redirect to="/" />;
}

export default ProtectedRoute;
