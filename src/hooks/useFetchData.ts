import { useCallback, useEffect, useState } from "react";
import axios from "axios";

// export interface useFetchMovieInterfaceFromTvMaze {
//   result: {
//     data: {
//       show: {
//         id: number;
//         name?: string;
//         image?: { original: string };
//         summary?: string;
//         rating: { average: number };
//       };
//     }[];
//     isLoading: boolean;
//     error: null | string;
//   };
// }

// export const serverFormatedMovie = (
//   tvMazeFormtedMovies: any
//   // tvMazeFormtedMovies: useFetchMovieInterfaceFromTvMaze["result"]["data"]
// ): any => {
//   return tvMazeFormtedMovies.map(
//     (movie: {
//       show: {
//         id: any;
//         name: any;
//         image: { original: any };
//         summary: any;
//         rating: { average: any };
//       };
//     }) => {
//       return {
//         tvMazeId: movie.show.id,
//         title: movie.show.name,
//         imageUrl: movie.show.image?.original,
//         summary: movie.show.summary,
//         rating: movie.show.rating.average,
//       };
//     }
//   );
// };

const useFetchData = (url: string, params?: any) => {
  const [data, setData] = useState<any>([]);
  // const params2 = { ...params, headers };
  // const config = {
  //   headers: {
  //     Accept: "Application/json",
  //     "Access-Control-Allow-Origin": "*",
  //   },
  // };
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const refetch = useCallback(
    () => {
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
    },
    [url, params],
  )
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
    refetch
  };
};

export default useFetchData;
