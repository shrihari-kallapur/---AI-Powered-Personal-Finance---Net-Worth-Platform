import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">
      
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="p-6">
          {children}
        </main>
      </div>

    </div>
  )
}

export default MainLayout