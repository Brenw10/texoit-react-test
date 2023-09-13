import TexoItApi from "@/core/TexoItApi";
import { useQuery } from "@tanstack/react-query"
import { IMovie } from "../types";

export interface IMoviesPayload {
  page: number;
  size: number;
  year?: string;
  winner?: string;
};

interface IData {
  content: IMovie[],
  totalElements: number;
}

export default function useMovies(payload: IMoviesPayload) {
  return useQuery<IData>({
    queryKey: ['movies', payload],
    queryFn: async () => {
      const response = await TexoItApi.get('/movies', { params: payload });
      return response.data;
    },
  });
}
