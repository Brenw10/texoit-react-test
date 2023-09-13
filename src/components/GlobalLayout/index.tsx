import Header from "../Header";
import SideBar from "../SideBar";

export default function GlobalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-vh-100">
      <Header />
      <div className='d-flex h-100 gap-3'>
        <SideBar />
        {children}
      </div>
    </div>
  )
}