import { useCallback, useState } from "react";
import axios from "axios";

const usePost = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [response, setResponse] = useState<any>(null);

  const clearField = useCallback(() => {
    setIsLoading(false);
    setResponse(null);
    setError(null);
  }, []);

  const axiosPost = (url: string, body: any, option?: any): Promise<any> => {
    return axios
      .post(url, body, option)
      .then((res) => {
        setIsLoading(false);
        setResponse(res.data);
        setError(null);
        return res;
      })
      .catch((err) => {
        setError(err);
        // toast
        console.log("error usePost ", error);
        return err;
      });
  };
  return { axiosPost, response, isLoading, error, clearField };
};

export default usePost;
