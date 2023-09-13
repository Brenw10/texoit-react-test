import TexoItApi from "@/core/TexoItApi";
import { useQuery } from "@tanstack/react-query"
import { IWinInterval } from "../types";

interface IData {
  max: IWinInterval[],
  min: IWinInterval[],
}

export default function useMinMaxWinInterval() {
  return useQuery<IData>({
    queryKey: ['min-max-win-interval'],
    queryFn: async () => {
      const response = await TexoItApi.get('/movies', { params: { projection: 'max-min-win-interval-for-producers' } });
      return response.data;
    },
  });
}
