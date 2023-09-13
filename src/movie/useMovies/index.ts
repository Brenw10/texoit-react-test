import TexoItApi from "@/core/TexoItApi";
import { useQuery } from "@tanstack/react-query"

export interface IMoviesPayload {
  page: number;
  size: number;
  year?: string;
  winner?: string;
};

export default function useMovies(payload: IMoviesPayload) {
  return useQuery({
    queryKey: ['movies', payload],
    queryFn: async () => {
      const response = await TexoItApi.get('/movies', { params: payload });
      return response.data;
    },
  });
}
