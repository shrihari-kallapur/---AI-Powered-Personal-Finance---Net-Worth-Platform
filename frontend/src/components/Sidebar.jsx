function Sidebar() {
  return (
    <div className="
      hidden md:flex
      w-64
      bg-zinc-900
      border-r
      border-zinc-800
      flex-col
      p-5
    ">
      
      <h1 className="text-2xl font-bold mb-10">
        💰 Mama Samapatthu
      </h1>

      <nav className="space-y-4">

        <div className="hover:text-green-400 cursor-pointer">
          Dashboard
        </div>

        <div className="hover:text-green-400 cursor-pointer">
          Investments
        </div>

        <div className="hover:text-green-400 cursor-pointer">
          EPFO
        </div>

        <div className="hover:text-green-400 cursor-pointer">
          Analytics
        </div>

      </nav>

    </div>
  )
}

export default Sidebar