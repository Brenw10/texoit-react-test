import GlobalLayout from "@/components/GlobalLayout";
import MovieTable from "@/movie/MovieTable";

export default function Movies() {
  return (
    <GlobalLayout>
      <h1 className="h4 mt-2">List movies</h1>
      <MovieTable />
    </GlobalLayout>
  )
}