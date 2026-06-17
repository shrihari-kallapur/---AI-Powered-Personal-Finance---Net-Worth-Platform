import React, { useState } from "react";

import MainLayout from "../layouts/MainLayout";
import BankAccounts from "../components/BankAccounts";

function BankAccountsPage() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) {
      alert("Select a file first");
      return;
    }

    const formData = new FormData();

    formData.append("file", file);

    try {
      const response = await fetch(
        "http://192.168.31.67:8000/api/upload-statement",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      alert(data.message);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainLayout>

      <div className="flex items-center justify-between mb-6">
        <div className="grid w-full gap-3">

          <input
            type="file"
            accept=".pdf,.csv"
            onChange={(e) =>
              setFile(e.target.files[0])
            }
            className="
              bg-zinc-800
              text-white
              p-2
              rounded-lg
            "
          />

          <button
            onClick={handleUpload}
            className="
              bg-blue-500
              hover:bg-blue-600
              px-5
              py-2
              rounded-xl
              font-semibold
            "
          >
            Upload Statement
          </button>

        </div>

      </div>

      <BankAccounts />

    </MainLayout>
  );
}

export default BankAccountsPage;