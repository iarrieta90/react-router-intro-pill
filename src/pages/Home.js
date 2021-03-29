import React, { useContext } from "react";

import Header from "../components/Header";
import BeerCard from "../components/BeerCard";
import BeersContext from "../contexts/BeersContext";

function Home() {
  
  const { beers, error, loading, nextPage } = useContext(BeersContext);

  return (
    <div>
      <Header />
      <main className="container mt-4">
        <section className="row mb-2">
          <div className="col">
            <div className="d-flex align-items-center">
              <h1 className="h3 m-0">Punk API</h1>
              <button
                className="btn btn-dark btn-sm ml-auto"
                onClick={nextPage}
              >
                Next page
              </button>
            </div>
            <hr />
          </div>
        </section>
        {loading && (
          <section className="row">
            <div className="col col-12 mt-3">
              <hr />
              <p className="mb-1">
                <code>Loading...</code>
              </p>
              <hr />
            </div>
          </section>
        )}
        {error && (
          <section className="row">
            <div className="col col-12 mt-3">
              <hr />
              <p className="mb-1">Something went wrong</p>
              <code>{error}</code>
              <hr />
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
