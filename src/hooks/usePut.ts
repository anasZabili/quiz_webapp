import { useState } from "react";
import axios from "axios";

const usePut = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [response, setResponse] = useState<any>(null);

  const axiosPut = (url: string, body: any, option?: any): Promise<any> => {
    return axios
      .put(url, body, option)
      .then((res) => {
        console.log("ajout réussi", res);
        setIsLoading(false);
        setResponse(res.data);
        setError(null);
        return res;
      })
      .catch((err) => {
        setError(err);
        // toast
        console.log("error usePut ", error);
        return err;
      });
  };
  return { axiosPut, response, isLoading, error };
};

export default usePut;
