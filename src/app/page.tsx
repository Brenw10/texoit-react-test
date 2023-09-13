import GlobalLayout from "@/components/GlobalLayout";
import TopStudiosTable from "@/movie/TopStudiosTable";
import YearsWinnersTable from "@/movie/YearsWinnersTable";

export default function Home() {
  return (
    <GlobalLayout>
      <YearsWinnersTable />
      <TopStudiosTable />
    </GlobalLayout>
  )
}
