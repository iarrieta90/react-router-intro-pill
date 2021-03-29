import { useMemo } from "react";

import AuthContext from "../contexts/AuthContext";
import useAuth from "../hooks/useAuth";

function AuthContextProvider({ children }) {
  const { authState, login, logout } = useAuth();

  const data = useMemo(
    () => ({
      authState,
      login,
      logout,
    }),
    [authState, login, logout]
  );

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
