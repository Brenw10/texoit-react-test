import TexoItApi from "@/core/TexoItApi";
import { useQuery } from "@tanstack/react-query"
import { IStudios } from "../types";

interface IData {
  studios: IStudios[];
}

export default function useStudios() {
  return useQuery<IData>({
    queryKey: ['studios'],
    queryFn: async () => {
      const response = await TexoItApi.get('/movies', { params: { projection: 'studios-with-win-count' } });
      return response.data;
    },
  });
}
