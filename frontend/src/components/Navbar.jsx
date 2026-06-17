import { useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

function Navbar({ setSidebarOpen }) {

  const location = useLocation();

  const getTitle = () => {

    switch (location.pathname) {

      case "/":
        return "Dashboard";

      case "/bank-accounts":
        return "Bank Accounts";

      case "/investments":
        return "Investments";

      case "/epfo":
        return "EPFO";

      case "/analytics":
        return "Analytics";

      default:
        return "💰 HuFin";
    }
  };


  const connectZerodha = async () => {

    try {

      const response = await fetch(
        "http://192.168.31.67:8000/zerodha/login"
      );

      const data = await response.json();

      window.location.href = data.login_url;

    } catch (error) {

      console.error(error);

    }
  };


  return (

    <div
      className="
        h-16
        border-b
        border-zinc-800
        flex
        items-center
        justify-between
        px-3 sm:px-4
        bg-zinc-950
        sticky
        top-0
        z-40
      "
    >

      {/* LEFT */}
      <div className="flex items-center gap-3">

        <button
          onClick={() => setSidebarOpen(true)}
          className="
            p-2
            rounded-lg
            hover:bg-zinc-800
            transition
          "
        >
          <FiMenu size={24} />
        </button>

        <h2 className="text-lg sm:text-xl font-semibold">
          {getTitle()}
        </h2>

      </div>


      {/* RIGHT */}
      {
        getTitle() === "Dashboard" && (

          <button
            onClick={connectZerodha}
            className="
              bg-green-500
              hover:bg-green-600
              px-3 sm:px-4
              py-2
              rounded-lg
              text-xs sm:text-sm
              font-medium
              transition
            "
          >
            Connect Zerodha
          </button>

        )
      }

    </div>
  );
}

export default Navbar;