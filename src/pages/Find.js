import React from "react";
import { useLocation } from "react-router-dom";

import useBeersFinder from "../hooks/useBeersFinder";

import Header from "../components/Header";
import BeerCard from "../components/BeerCard/BeerCard";

function Find({ authState, login, logout }) {
  const { search } = useLocation();
  const { beersData, isLoading, isError } = useBeersFinder(search);

  return (
    <div>
      <Header
        isAuthenticated={authState.isAuthenticated}
        login={login}
        logout={logout}
      />
      <main className="container mt-4">
        <section className="row mb-2">
          <div className="col">
            <div className="d-flex align-items-center">
              <h1 className="h3 m-0">Punk API Finder</h1>
            </div>
            <hr />
          </div>
        </section>

        {isLoading && (
          <section className="row-cols-1 mt-3">
            <div className="col">
              <p>Loading beers data...</p>
            </div>
          </section>
        )}

        {isError && (
          <section className="row-cols-1 mt-3">
            <div className="col">
              <p className="mb-3">Something went wrong...</p>
              <code>{isError}</code>
            </div>
          </section>
        )}

        {beersData.length > 0 ? (
          <section className="row">
            {beersData.map((beer) => (
              <BeerCard key={beer.id} beer={beer} />
            ))}
          </section>
        ) : (
          !isLoading && (
            <section className="row-cols-1 mt-3">
            <div className="col">
              <p className="mb-3">No beers found</p>
            </div>
          </section>
          )
        )}
      </main>
    </div>
  );
}

export default Find;
