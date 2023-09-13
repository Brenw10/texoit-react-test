import GlobalLayout from "@/components/GlobalLayout";
import MinMaxWinIntervalTable from "@/movie/MinMaxWinIntervalTable";
import TopStudiosTable from "@/movie/TopStudiosTable";
import MultipleYearsWinnersTable from "@/movie/MultipleYearsWinnersTable";
import YearWinnerTable from "@/movie/YearWinnerTable";

export default function Home() {
  return (
    <GlobalLayout>
      <MultipleYearsWinnersTable />
      <TopStudiosTable />
      <MinMaxWinIntervalTable />
      <YearWinnerTable />
    </GlobalLayout>
  )
}
