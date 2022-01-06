import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const useFetchData = (url: string, params?: any) => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const refetch = useCallback(() => {
    axios.get(url, params).then(
      (res) => {
        setError(null);
        setData(res.data);
        setIsLoading(false);
      },
      (err) => {
        setError(err);
        setIsLoading(false);
      }
    );
  }, [url, params]);
  useEffect(() => {
    axios.get(url, params).then(
      (res) => {
        setError(null);
        setData(res.data);
        setIsLoading(false);
      },
      (err) => {
        setError(err);
        setIsLoading(false);
      }
    );
  }, [url, params]);

  return {
    data,
    isLoading,
    error,
    refetch,
  };
};

export default useFetchData;
