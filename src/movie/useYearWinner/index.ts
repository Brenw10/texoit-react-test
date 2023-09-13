import TexoItApi from "@/core/TexoItApi";
import { useQuery } from "@tanstack/react-query"
import { IMovie } from "../types";

export default function useYearWinner(year: number | string) {
  return useQuery<IMovie[]>({
    enabled: Boolean(year),
    queryKey: ['year-winner', year],
    queryFn: async () => {
      const response = await TexoItApi.get('/movies', { params: { winner: true, year } });
      return response.data;
    },
  });
}
