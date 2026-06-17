import { useState } from "react";

import Sidebar from "./Sidebar";
import Navbar from "../components/Navbar";

function MainLayout({ children }) {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (

    <div className="flex min-h-screen bg-black">

      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <Navbar
          setSidebarOpen={setSidebarOpen}
        />

        {/* Page Content */}
        <main className="flex-1 w-full overflow-x-hidden p-4 md:p-6">
          {children}
        </main>

      </div>

    </div>
  );
}

export default MainLayout;