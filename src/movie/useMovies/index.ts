import { useQuery } from "@tanstack/react-query"
import axios from "axios";

export interface IPayload {
  page: number;
  size: number;
};

export default function useMovies(payload: IPayload) {
  return useQuery({
    queryKey: ['movies'],
    queryFn: async () => {
      const response = await axios.get('https://tools.texoit.com/backend-java/api/movies', { params: payload });
      return response.data;
    },
  });
}
