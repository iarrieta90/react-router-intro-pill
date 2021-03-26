import { useParams, Link } from "react-router-dom";

import Header from "../components/Header";

function BeerInfo({ beers, authState, login, logout }) {
  const { beerId } = useParams();
  const selectedBeer = beers.find((beer) => beer.id === Number(beerId));

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
              <div className="ml-auto">
                {selectedBeer && (
                  <p className="mb-0">
                    First brewed:{" "}
                    <Link
                      to={`/beers/find?brewed_after=${selectedBeer.first_brewed}`}
                    >
                      {selectedBeer.first_brewed}
                    </Link>
                  </p>
                )}
              </div>
            </div>
            <hr />
          </div>
        </section>
        {selectedBeer ? (
          <div className="ml-auto">
            <pre>
              <code>{JSON.stringify(selectedBeer, null, 2)}</code>
            </pre>
          </div>
        ) : (
          <p>Beer not found in memory, fetch it from the api</p>
        )}
      </main>
    </div>
  );
}

export default BeerInfo;
