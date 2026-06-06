const connectZerodha = async () => {

  const response = await fetch(
    "https://ai-powered-personal-finance-net-worth.onrender.com/zerodha/login"
  )

  const data = await response.json()

  window.location.href = data.login_url
}

function Navbar() {
  return (
    <div className="
      h-16
      border-b
      border-zinc-800
      flex
      items-center
      justify-between
      px-6
      bg-zinc-950
    ">

      <h2 className="text-xl font-semibold">
        Dashboard
      </h2>

      <button
        onClick={connectZerodha}
        className="
          bg-green-500
          hover:bg-green-600
          px-4
          py-2
          rounded-lg
          text-sm
          font-medium
        "
      >
        Connect Zerodha
      </button>

    </div>
  )
}

export default Navbar