import { useEffect, useState } from "react"
import api from "../services/api"

import PortfolioChart from "../components/PortfolioChart"

import MutualFunds from "../components/MutualFunds"

function Dashboard() {

  const [portfolio, setPortfolio] = useState(null)

  const [mfPortfolio, setMfPortfolio] = useState(null)

  const [error, setError] = useState(null)

  useEffect(() => {

    async function fetchPortfolio() {

      try {

        const response = await api.get(
          "/zerodha/holdings"
        )

        const mfResponse = await api.get(
          "/zerodha/mf-holdings"
        )

        setPortfolio(response.data)

        setMfPortfolio(mfResponse.data)

      } catch (err) {

        console.error(err)

        setError("Failed to load portfolio")
      }
    }

    fetchPortfolio()

  }, [])

  if (error) {

    return (
      <div className="text-red-500 text-xl">
        {error}
      </div>
    )
  }

  if (!portfolio) {

    return (
      <div className="text-white text-xl">
        Loading...
      </div>
    )
  }

  if (!portfolio.assets) {

    return (
      <div className="text-red-500 text-xl">
        No assets found
      </div>
    )
  }

  return (
    <div>

      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4
        gap-5
      ">

        <div className="
          bg-zinc-900
          p-5
          rounded-2xl
        ">

          <h3 className="text-zinc-400">
            Total Value
          </h3>

          <p className="text-3xl font-bold mt-2">
            ₹{portfolio.total_value}
          </p>

        </div>

        <div className="
          bg-zinc-900
          p-5
          rounded-2xl
        ">

          <h3 className="text-zinc-400">
            Holdings
          </h3>

          <p className="text-3xl font-bold mt-2">
            {portfolio.assets.length}
          </p>

        </div>

      </div>

      <div className="mt-10">

        <h2 className="text-2xl font-bold mb-5">
          Holdings
        </h2>

        <div className="space-y-4">

          {portfolio.assets.map((asset, index) => (

            <div
              key={index}
              className="
                bg-zinc-900
                p-4
                rounded-xl
                flex
                justify-between
                items-center
              "
            >

              <div>

                <h3 className="font-semibold">
                  {asset.name}
                </h3>

                <p className="text-zinc-400 text-sm">
                  Qty: {asset.quantity}
                </p>

              </div>

              <div className="text-right">

                <p className="font-bold">
                  ₹{asset.value?.toFixed(2)}
                </p>

                <p className="text-zinc-400 text-sm">
                  ₹{asset.price}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

      <div className="mt-10">

        <PortfolioChart
          assets={portfolio.assets}
        />

      </div>

      <MutualFunds
        funds={mfPortfolio?.funds}
      />

    </div>
  )
}

export default Dashboard