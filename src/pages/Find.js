import React from "react";
import { useLocation } from "react-router-dom";

import Header from "../components/Header";
import BeerCard from "../components/BeerCard";
import useBeersFinder from "../hooks/useBeersFinder";

function Find() {
  const { search } = useLocation();
  const { beers, error, loading } = useBeersFinder(search);

  return (
    <div>
      <Header />
      <main className="container mt-4">
        <section className="row mb-2">
          <div className="col">
            <div className="d-flex align-items-center">
              <h1 className="h3 m-0">Punk API Finder</h1>
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
        {beers.length > 0 ? (
          <section className="row">
            {beers.map((beer) => (
              <BeerCard key={beer.id} beer={beer} />
            ))}
          </section>
        ) : (
          !loading && (
            <section className="row">
              <div className="col">
                <code>
                  <p>No beers found</p>
                </code>
              </div>
            </section>
          )
        )}
      </main>
    </div>
  );
}

export default Find;
