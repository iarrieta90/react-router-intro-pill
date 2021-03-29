import { useMemo } from "react";

import BeersContext from "../contexts/BeersContext";
import useBeersData from "../hooks/useBeersData";

function BeersContextProvider({ children }) {
  const { beers, loading, error, nextPage } = useBeersData();

  const data = useMemo(
    () => ({
      beers,
      loading,
      error,
      nextPage,
    }),
    [beers, loading, error, nextPage]
  );

    return <BeersContext.Provider value={data}>{children}</BeersContext.Provider>

}

export default BeersContextProvider;
