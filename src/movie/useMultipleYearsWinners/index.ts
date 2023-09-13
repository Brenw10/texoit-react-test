import TexoItApi from "@/core/TexoItApi";
import { useQuery } from "@tanstack/react-query"
import { IYearWinner } from "../types";

interface IData {
  years: IYearWinner[];
}

export default function useMultipleYearsWinners() {
  return useQuery<IData>({
    queryKey: ['multiple-years-winner'],
    queryFn: async () => {
      const response = await TexoItApi.get('/movies', { params: { projection: 'years-with-multiple-winners' } });
      return response.data;
    },
  });
}
