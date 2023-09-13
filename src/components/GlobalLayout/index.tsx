import Header from "../Header";
import SideBar from "../SideBar";

export default function GlobalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className='d-flex flex-row flex-fill'>
        <SideBar />
        <div className='p-2 flex-fill'>
          {children}
        </div>
      </div>
    </div>
  )
}