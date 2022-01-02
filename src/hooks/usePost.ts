import { useState } from "react";
import axios from "axios";

const usePost = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [response, setResponse] = useState(null);

  const axiosPost = (url: string, body: any, option?: any) => {
    axios
      .post(url, body, option)
      .then((res) => {
        console.log("ajout réussi", res);
        setIsLoading(false);
        setResponse(res.data);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        // toast
        console.log("error usePost ", error);
      });
  };
  return { axiosPost, response, isLoading, error };
};

export default usePost;
