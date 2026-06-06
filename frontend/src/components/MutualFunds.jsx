function MutualFunds({ funds }) {

  if (!funds || funds.length === 0) {

    return (
      <div className="
        bg-zinc-900
        p-5
        rounded-2xl
        mt-10
      ">

        <h2 className="text-2xl font-bold mb-5">
          Mutual Funds / SIPs
        </h2>

        <p className="text-zinc-400">
          No mutual funds found
        </p>

      </div>
    )
  }

  return (
    <div className="
      bg-zinc-900
      p-5
      rounded-2xl
      mt-10
    ">

      <h2 className="text-2xl font-bold mb-5">
        Mutual Funds / SIPs
      </h2>

      <div className="space-y-4">

        {funds.map((fund, index) => (

          <div
            key={index}
            className="
              bg-zinc-800
              p-4
              rounded-xl
              flex
              justify-between
              items-center
            "
          >

            <div>

              <h3 className="font-semibold">
                {fund.fund}
              </h3>

              <p className="text-zinc-400 text-sm">
                Folio: {fund.folio}
              </p>

              <p className="text-zinc-400 text-sm">
                Qty: {fund.quantity}
              </p>

            </div>

            <div className="text-right">

              <p className="font-bold">
                ₹{fund.value?.toFixed(2)}
              </p>

              <p className="text-zinc-400 text-sm">
                NAV ₹{fund.nav}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default MutualFunds