import React, { useEffect, useState } from "react";
import api from "../services/api";

import PortfolioChart from "../components/PortfolioChart";
import MainLayout from "../layouts/MainLayout";
import MutualFunds from "../components/MutualFunds";

function Dashboard() {

  const [holdings, setHoldings] = useState([]);
  const [portfolio, setPortfolio] = useState(null);

  const [mfPortfolio, setMfPortfolio] = useState(null);

  const [bankBalance, setBankBalance] = useState(0);

  const [error, setError] = useState(null);

  useEffect(() => {

    async function fetchPortfolio() {

      try {

        const response = await api.get(
          "/zerodha/holdings"
        );

        const mfResponse = await api.get(
          "/zerodha/mf-holdings"
        );

        setPortfolio(response.data);

        setMfPortfolio(mfResponse.data);

      } catch (err) {

        console.error(err);

        setError("Failed to load portfolio");
      }
    }

    fetchPortfolio();

  }, []);

  useEffect(() => {

    fetch("http://192.168.31.67:8000/api/holdings")
      .then((res) => res.json())
      .then((data) => {
        setHoldings(data);
      })
      .catch((err) => {
        console.log(err);
      });

    fetch(
      "http://192.168.31.67:8000/api/bank-accounts"
    )
      .then((res) => res.json())
      .then((data) => {
        setBankBalance(data.total_balance);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  if (error) {

    return (
      <div className="text-red-500 text-xl p-4">
        {error}
      </div>
    );
  }

  if (!portfolio) {

    return (
      <div className="text-white text-xl p-4">
        Loading...
      </div>
    );
  }

  if (!portfolio.assets) {

    return (
      <div className="text-red-500 text-xl p-4">
        No assets found
      </div>
    );
  }

  const totalInvestment =
    holdings.reduce(
      (acc, item) => acc + item.value,
      0
    );

  const totalNetWorth =
    totalInvestment + bankBalance;

  return (

    <MainLayout>

      <div className="space-y-8 p-2 sm:p-4">

        {/* TOP CARDS */}

        <div
          className="
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-4
          "
        >

          <div className="bg-zinc-900 p-4 sm:p-6 rounded-2xl">

            <h3 className="text-zinc-400 text-sm sm:text-base">
              Net Worth
            </h3>

            <h1
              className="
                text-2xl
                sm:text-3xl
                lg:text-4xl
                font-bold
                mt-3
                break-words
              "
            >
              ₹{totalNetWorth.toLocaleString()}
            </h1>

          </div>

          <div className="bg-zinc-900 p-4 sm:p-6 rounded-2xl">

            <h3 className="text-zinc-400 text-sm sm:text-base">
              Bank Balance
            </h3>

            <h1
              className="
                text-2xl
                sm:text-3xl
                lg:text-4xl
                font-bold
                mt-3
                break-words
              "
            >
              ₹{bankBalance.toLocaleString()}
            </h1>

          </div>

          <div className="bg-zinc-900 p-4 sm:p-6 rounded-2xl">

            <h3 className="text-zinc-400 text-sm sm:text-base">
              Investments
            </h3>

            <h1
              className="
                text-2xl
                sm:text-3xl
                lg:text-4xl
                font-bold
                mt-3
                break-words
              "
            >
              ₹{totalInvestment.toLocaleString()}
            </h1>

          </div>

          <div className="bg-zinc-900 p-4 sm:p-6 rounded-2xl">

            <h3 className="text-zinc-400 text-sm sm:text-base">
              Holdings
            </h3>

            <h1
              className="
                text-2xl
                sm:text-3xl
                lg:text-4xl
                font-bold
                mt-3
              "
            >
              {holdings.length}
            </h1>

          </div>

        </div>

        {/* HOLDINGS + CHART */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-6
          "
        >

          {/* INVESTMENTS */}

          <div>

            <h1
              className="
                text-2xl
                sm:text-3xl
                font-bold
                mb-6
              "
            >
              Investments
            </h1>

            <div className="space-y-4">

              {holdings.map((item, index) => (

                <div
                  key={index}
                  className="
                    bg-zinc-900
                    rounded-2xl
                    p-4
                    sm:p-6
                    flex
                    justify-between
                    items-center
                  "
                >

                  <div className="min-w-0">

                    <h2
                      className="
                        text-lg
                        sm:text-2xl
                        font-semibold
                        truncate
                      "
                    >
                      {item.symbol}
                    </h2>

                    <p className="text-zinc-400 text-sm sm:text-base">
                      Qty: {item.quantity}
                    </p>

                  </div>

                  <div className="ml-4">

                    <h1
                      className="
                        text-xl
                        sm:text-3xl
                        font-bold
                        whitespace-nowrap
                      "
                    >
                      ₹{item.value}
                    </h1>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* CHART */}

          <div>

            <h1
              className="
                text-2xl
                sm:text-3xl
                font-bold
                mb-6
              "
            >
              Asset Allocation
            </h1>

            <div
              className="
                bg-zinc-900
                rounded-2xl
                p-4
                h-[350px]
                sm:h-[450px]
                w-full
                overflow-hidden
              "
            >

              <PortfolioChart
                assets={portfolio.assets}
              />

            </div>

          </div>

        </div>

        {/* MUTUAL FUNDS */}

        <div>

          <MutualFunds
            funds={mfPortfolio?.funds}
          />

        </div>

      </div>

    </MainLayout>

  );
}

export default Dashboard;