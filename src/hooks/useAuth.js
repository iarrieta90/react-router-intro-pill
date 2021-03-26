import { useState, useEffect } from "react";

function loadAuthState() {
  const authState = localStorage.getItem("authState");

  if (authState === null) {
    return {
      isAuthenticated: false,
    };
  }

  return JSON.parse(authState);
}

function useAuth() {
  const [authState, setAuthState] = useState(() => loadAuthState());

  useEffect(() => {
    localStorage.setItem("authState", JSON.stringify(authState));
  }, [authState]);

  function login() {
    setAuthState({
      isAuthenticated: true,
    });
  }

  function logout() {
    setAuthState({
      isAuthenticated: false,
    });
  }

  return {
    authState: authState,
    login: login,
    logout: logout,
  };
}

export default useAuth;
