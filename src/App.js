import React from "react";
import { Route, Switch } from "react-router-dom";

import useBeersData from "./hooks/useBeersData";
import useAuth from "./hooks/useAuth";

import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import BeerInfo from "./pages/BeerInfo";
import Find from "./pages/Find";

function App() {
  const { beersData, isLoading, isError, nextPage } = useBeersData();
  const { authState, login, logout } = useAuth();

  return (
    <Switch>
      <Route path="/beers/find">
        <Find authState={authState} login={login} logout={logout} />
      </Route>
      <ProtectedRoute isAuthenticated={authState.isAuthenticated} path="/beers/:beerId">
        <BeerInfo
          beers={beersData}
          authState={authState}
          login={login}
          logout={logout}
        />
      </ProtectedRoute>
      <Route exact path="/">
        <Home
          beers={beersData}
          isError={isError}
          isLoading={isLoading}
          nextPage={nextPage}
          authState={authState}
          login={login}
          logout={logout}
        />
      </Route>
    </Switch>
  );
}

export default App;
