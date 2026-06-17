import React, { useEffect, useState } from "react";

const BankSummary = () => {
  const [totalBalance, setTotalBalance] = useState(0);

  useEffect(() => {
    fetch("http://192.168.31.67:8000/api/bank-accounts")
      .then((res) => res.json())
      .then((data) => {
        setTotalBalance(data.total_balance);
      });
  }, []);

  return (
    <div
      style={{
        background: "#111827",
        color: "white",
        padding: "20px",
        borderRadius: "15px",
        marginTop: "20px",
      }}
    >
      <h3>🏦 Total Bank Balance</h3>

      <h1>₹{totalBalance.toLocaleString()}</h1>
    </div>
  );
};

export default BankSummary;