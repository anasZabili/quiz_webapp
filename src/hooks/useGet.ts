import { useState } from "react";
import axios from "axios";

const useGet = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [response, setResponse] = useState<any | null>(null);

  const axiosGet = (url: string, option?: any) => {
    axios
      .get(url, option)
      .then((res: any) => {
        setIsLoading(false);
        setResponse(res.data);
        setError(null);
      })
      .catch((err: any) => {
        setError(err);
        // toast
        console.log("error useGet ", error);
      });
  };
  return { axiosGet, response, isLoading, error };
};

export default useGet;
