import { useState, useEffect} from "react";
import axios from "axios";

function getSearchParams(search) {
    const searchParams = new URLSearchParams(search);
    return searchParams.toString();
}

function useBeersFinder(search) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [beersData, setBeersData] = useState([]);

  const searchParams = getSearchParams(search);

  useEffect(() => {
    let isMounted = true;

    const findBeers = async () => {
      setIsLoading(true);
      setIsError(null);

      try {
        const result = await axios.get(
          `https://api.punkapi.com/v2/beers?${searchParams}`
        );

        if (isMounted) {
          setBeersData(result.data);
        }

      } catch (error) {
        if (isMounted) {
          setIsError(true);
        }
      }
      setIsLoading(false);
    };

    if (!beersData.length) {
      findBeers();
    }

    return () => {
      isMounted = false;
    };
  }, [beersData, searchParams]);

  return { isError, isLoading, beersData };
}

export default useBeersFinder;
