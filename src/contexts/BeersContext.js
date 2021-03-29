import { createContext } from "react";

const BeersContext = createContext({
  beers: [],
  error: null,
  loading: false,
  nextpage: () => {}
});

export default BeersContext;
