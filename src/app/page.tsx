import GlobalLayout from "@/components/GlobalLayout";
import MinMaxWinIntervalTable from "@/movie/MinMaxWinIntervalTable";
import TopStudiosTable from "@/movie/TopStudiosTable";
import YearsWinnersTable from "@/movie/YearsWinnersTable";

export default function Home() {
  return (
    <GlobalLayout>
      <YearsWinnersTable />
      <TopStudiosTable />
      <MinMaxWinIntervalTable />
    </GlobalLayout>
  )
}
