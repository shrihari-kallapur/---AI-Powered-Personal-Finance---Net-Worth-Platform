import React, { useEffect, useState } from "react";

function BankAccounts() {

  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  // FETCH ACCOUNTS
  const fetchAccounts = async () => {

    try {

      const response = await fetch(
        "http://192.168.31.67:8000/api/bank-accounts"
      );

      const data = await response.json();

      setAccounts(data.accounts);

    } catch (err) {

      console.log(err);

    } finally {

      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  // FILE UPLOAD
  const handleFileUpload = async (e) => {

    const file = e.target.files[0];

    if (!file) return;

    try {

      setUploading(true);

      const formData = new FormData();

      formData.append("file", file);

      const response = await fetch(
        "http://192.168.31.67:8000/api/upload-bank-statement",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      console.log(data);

      alert("Statement uploaded successfully 🚀");

      // REFRESH ACCOUNTS
      fetchAccounts();

    } catch (err) {

      console.log(err);

      alert("Upload failed ❌");

    } finally {

      setUploading(false);
    }
  };

  // TOTAL BALANCE
  const totalBalance = accounts.reduce(
    (sum, item) => sum + item.balance,
    0
  );

  if (loading) {

    return (
      <div className="text-white p-6">
        Loading...
      </div>
    );
  }

  return (

    <div className="min-h-screen w-full overflow-x-hidden bg-black text-white">

      <div className="p-4 md:p-6">

        {/* HEADER */}
        <div className="flex flex-col gap-4 mb-6">

          <div className="flex items-center gap-3 flex-wrap">

            <span className="text-4xl">
              🏦
            </span>

            <h1
              className="
                text-3xl
                md:text-5xl
                font-bold
              "
            >
              Bank Accounts
            </h1>

          </div>

          {/* FILE UPLOAD */}
          <input
            type="file"
            accept=".pdf,.png,.jpg,.jpeg"
            onChange={handleFileUpload}
            className="
              w-full
              bg-gray-800
              border
              border-gray-700
              rounded-xl
              p-3
              text-sm
            "
          />

          {uploading && (
            <p className="text-blue-400">
              Uploading statement...
            </p>
          )}

        </div>

        {/* TOTAL BALANCE */}
        <div
          className="
            bg-gradient-to-r
            from-blue-900
            to-blue-700
            rounded-3xl
            p-6
            shadow-lg
            mb-6
          "
        >

          <p className="text-gray-300 text-sm">
            Total Balance
          </p>

          <h2
            className="
              text-3xl
              md:text-5xl
              font-bold
              mt-2
            "
          >
            ₹{totalBalance.toLocaleString()}
          </h2>

        </div>

        {/* ACCOUNTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {accounts.map((item, index) => (

            <div
              key={index}
              className="
                bg-gray-900
                border
                border-gray-800
                rounded-3xl
                p-5
                shadow-md
                hover:scale-[1.01]
                active:scale-[0.98]
                transition
              "
            >

              <h2
                className="
                  text-2xl
                  md:text-3xl
                  font-bold
                "
              >
                {item.bank_name}
              </h2>

              <p className="text-gray-400 mt-3">
                {item.account_type}
              </p>

              <p className="text-gray-500">
                {item.account_number}
              </p>

              <h3
                className="
                  text-3xl
                  font-bold
                  text-green-400
                  mt-5
                "
              >
                ₹{item.balance.toLocaleString()}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
}

export default BankAccounts;