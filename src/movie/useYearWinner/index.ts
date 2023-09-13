import TexoItApi from "@/core/TexoItApi";
import { useQuery } from "@tanstack/react-query"

export default function useYearWinner(year: number | string) {
  return useQuery({
    enabled: Boolean(year),
    queryKey: ['year-winner', year],
    queryFn: async () => {
      const response = await TexoItApi.get('/movies', { params: { winner: true, year } });
      return response.data;
    },
  });
}
