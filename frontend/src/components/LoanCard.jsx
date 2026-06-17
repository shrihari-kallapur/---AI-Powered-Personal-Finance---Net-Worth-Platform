function LoanCard({ loan }) {

  return (

    <div
      className="
        bg-zinc-900
        rounded-2xl
        p-5
        shadow-lg
        shadow-black/30
      "
    >

      <div className="flex justify-between">

        <div>

          <h2 className="text-xl font-bold">
            {loan.loanType}
          </h2>

          <p className="text-zinc-400">
            {loan.bank}
          </p>

        </div>

        <div className="text-right">

          <p className="text-red-400 font-bold">
            ₹{loan.outstanding.toLocaleString()}
          </p>

          <p className="text-sm text-zinc-400">
            EMI ₹{loan.emi.toLocaleString()}
          </p>

        </div>

      </div>

    </div>

  );
}