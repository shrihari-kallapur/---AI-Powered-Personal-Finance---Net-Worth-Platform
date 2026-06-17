import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import BankAccountsPage from "./pages/BankAccountsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route
          path="/bank-accounts"
          element={<BankAccountsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;