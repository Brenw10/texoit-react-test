import TexoItApi from "@/core/TexoItApi";
import { useQuery } from "@tanstack/react-query"

export default function useMultipleYearsWinner() {
  return useQuery({
    queryKey: ['years-winners'],
    queryFn: async () => {
      const response = await TexoItApi.get('/movies', { params: { projection: 'years-with-multiple-winners' } });
      return response.data;
    },
  });
}
