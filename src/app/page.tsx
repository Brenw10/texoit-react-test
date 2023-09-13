import GlobalLayout from "@/components/GlobalLayout";
import MinMaxWinIntervalTable from "@/movie/MinMaxWinIntervalTable";
import TopStudiosTable from "@/movie/TopStudiosTable";
import MultipleYearsWinnersTable from "@/movie/MultipleYearsWinnersTable";

export default function Home() {
  return (
    <GlobalLayout>
      <MultipleYearsWinnersTable />
      <TopStudiosTable />
      <MinMaxWinIntervalTable />
    </GlobalLayout>
  )
}
