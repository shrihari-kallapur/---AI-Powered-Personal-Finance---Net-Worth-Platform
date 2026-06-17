function BankCard({ bank }) {

  return (

    <div
      className={`
        bg-gradient-to-r
        ${bank.color}
        rounded-2xl
        p-5
        shadow-lg
      `}
    >

      <div className="flex justify-between">

        <div>

          <h2 className="text-xl font-bold">
            {bank.bankName}
          </h2>

          <p className="text-sm opacity-80">
            {bank.accountType}
          </p>

        </div>

        <div className="text-right">

          <p className="text-sm">
            Available Balance
          </p>

          <h2 className="text-2xl font-bold">
            ₹{bank.balance.toLocaleString()}
          </h2>

        </div>

      </div>

      <div className="mt-10">

        <p className="tracking-widest text-lg">
          {bank.accountNumber}
        </p>

      </div>

    </div>

  );
}