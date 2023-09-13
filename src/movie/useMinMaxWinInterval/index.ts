import TexoItApi from "@/core/TexoItApi";
import { useQuery } from "@tanstack/react-query"

export default function useMinMaxWinInterval() {
  return useQuery({
    queryKey: ['min-max-win-interval'],
    queryFn: async () => {
      const response = await TexoItApi.get('/movies', { params: { projection: 'max-min-win-interval-for-producers' } });
      return response.data;
    },
  });
}
