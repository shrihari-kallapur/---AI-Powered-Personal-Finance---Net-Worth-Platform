import {
  FiHome,
  FiCreditCard,
  FiPieChart,
  FiBarChart2,
  FiX
} from "react-icons/fi";

import { Link, useLocation } from "react-router-dom";

function Sidebar({ isOpen, setSidebarOpen }) {

  const location = useLocation();

  const menuItems = [

    {
      name: "Dashboard",
      path: "/",
      icon: <FiHome />
    },

    {
      name: "Bank Accounts",
      path: "/bank-accounts",
      icon: <FiCreditCard />
    },

    {
      name: "Investments",
      path: "/investments",
      icon: <FiPieChart />
    },

    {
      name: "EPFO",
      path: "/epfo",
      icon: <FiCreditCard />
    },

    {
      name: "Analytics",
      path: "/analytics",
      icon: <FiBarChart2 />
    }

  ];

  return (
    <>

      {/* Overlay */}
      {
        isOpen && (
          <div
            className="
              fixed
              inset-0
              bg-black/50
              backdrop-blur-sm
              z-40
            "
            onClick={() => setSidebarOpen(false)}
          />
        )
      }

      {/* Sidebar */}
      <div
        className={`
          fixed
          top-0
          left-0
          h-full
          w-64
          bg-zinc-900
          border-r
          border-zinc-800
          z-50
          transform
          transition-transform
          duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >

        {/* Header */}
        <div
          className="
            flex
            items-center
            justify-between
            p-5
            border-b
            border-zinc-800
          "
        >

          <h1 className="text-2xl font-bold">
            💰 HuFin
          </h1>

          <button
            onClick={() => setSidebarOpen(false)}
            className="
              p-2
              rounded-lg
              hover:bg-zinc-800
            "
          >
            <FiX size={22} />
          </button>

        </div>

        {/* Menu */}
        <nav className="p-4 space-y-2">

          {
            menuItems.map((item) => (

              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`
                  flex
                  items-center
                  gap-3
                  p-3
                  rounded-xl
                  transition
                  hover:bg-zinc-800

                  ${
                    location.pathname === item.path
                      ? "bg-green-500 text-black font-semibold"
                      : "text-white"
                  }
                `}
              >

                <span className="text-xl">
                  {item.icon}
                </span>

                <span>
                  {item.name}
                </span>

              </Link>

            ))
          }

        </nav>

      </div>

    </>
  );
}

export default Sidebar;