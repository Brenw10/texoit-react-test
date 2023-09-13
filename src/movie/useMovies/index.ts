import { useQuery } from "@tanstack/react-query"
import axios from "axios";

export interface IMoviesPayload {
  page: number;
  size: number;
  year?: string;
};

export default function useMovies(payload: IMoviesPayload) {
  return useQuery({
    queryKey: ['movies', payload],
    queryFn: async () => {
      const response = await axios.get('https://tools.texoit.com/backend-java/api/movies', { params: payload });
      return response.data;
    },
  });
}
