import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import BeerInfo from "./pages/BeerInfo";
import Find from "./pages/Find";

import ProtectedRoute from "./components/ProtectedRoute";

import BeersContextProvider from "./components/BeersContextProvider";
import AuthContextProvider from "./components/AuthContextProvider";

function App() {

  return (
    <BeersContextProvider>
      <AuthContextProvider>
        <Switch>
          <Route
            path="/beers/find"
            render={({ match, location, history }) => (
              <Find
                match={match}
                location={location}
                history={history}
              />
            )}
          />
          <ProtectedRoute
            path="/beers/:beerId"
            render={({ match, location, history }) => (
              <BeerInfo
                match={match}
                location={location}
                history={history}
              />
            )}
          />
          <Route
            path="/"
            render={({ match, location, history }) => (
              <Home
                match={match}
                location={location}
                history={history}
              />
            )}
          />
        </Switch>
      </AuthContextProvider>
    </BeersContextProvider>
  );
}

export default App;
