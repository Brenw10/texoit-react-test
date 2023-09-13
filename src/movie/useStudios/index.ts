import TexoItApi from "@/core/TexoItApi";
import { useQuery } from "@tanstack/react-query"

export default function useStudios() {
  return useQuery({
    queryKey: ['studios'],
    queryFn: async () => {
      const response = await TexoItApi.get('/movies', { params: { projection: 'studios-with-win-count' } });
      return response.data;
    },
  });
}
