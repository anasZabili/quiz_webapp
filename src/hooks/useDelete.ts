import { useState } from "react";
import axios from "axios";

const useDelete = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [response, setResponse] = useState(null);

  const axiosDelete = (url: string, option?: any): Promise<any> => {
    return axios
      .delete(url, option)
      .then((res) => {
        console.log("Suppression réussi", res);
        setIsLoading(false);
        setResponse(res.data);
        setError(null);
        return res;
      })
      .catch((err) => {
        setError(err);
        // toast
        console.log("error useDelete ", error);
        return err;
      });
  };
  return { axiosDelete, response, isLoading, error };
};

export default useDelete;
