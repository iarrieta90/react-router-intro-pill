import React from "react";

import Header from "../components/Header";
import BeerCard from "../components/BeerCard/BeerCard";

function Home({ beers, isError, isLoading, nextPage, authState, login, logout }) {
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
              <h1 className="h3 m-0">Punk API</h1>
              <button className="btn btn-dark ml-auto" onClick={nextPage}>Next page</button>
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

        {beers.length > 0 && (
          <section className="row">
            {beers.map((beer) => (
              <BeerCard key={beer.id} beer={beer} />
            ))}
          </section>
        )}
      </main>
    </div>
  );
}

export default Home;
