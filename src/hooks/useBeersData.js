import { useState, useEffect } from "react";
import axios from "axios";

function useBeersData() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [beersData, setBeersData] = useState([]);
  const [page, setPage] = useState(1);
  const [isFetchingNextPage, setIsFetchingNextPage] = useState(false);

  function nextPage() {
    setIsError(false);
    setIsLoading(true);
    setIsFetchingNextPage(true);
    setPage(page + 1);
  }

  useEffect(() => {
    let isMounted = true;

    const getBeers = async () => {
      setIsLoading(true);
      setIsError(null);

      try {
        const result = await axios.get(
          `https://api.punkapi.com/v2/beers?page=${page}&per_page=9`
        );

        if (isMounted) {
          if (isFetchingNextPage) {
            setIsLoading(false);
            setIsError(null);
            setIsFetchingNextPage(false);
            setBeersData([...result.data, ...beersData]);
          } else {
            setBeersData(result.data);
          }
        }
      } catch (error) {
        if (isMounted) {
          setIsError(true);
        }
      }
      setIsLoading(false);
    };

    if (!beersData.length || isFetchingNextPage) {
      getBeers();
    }

    return () => {
      isMounted = false;
    };
  }, [beersData, page, isFetchingNextPage]);

  return { beersData, isLoading, isError, page, nextPage };
}

export default useBeersData;
