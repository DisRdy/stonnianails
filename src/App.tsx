import { useState } from "react";
import HomePage from "./pages/HomePage";
import PriceListPage from "./pages/PriceListPage";

type Page = "home" | "pricelist";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  return (
    <div className="size-full">
      {page === "home" && (
        <HomePage onNavigate={(p) => setPage(p)} />
      )}
      {page === "pricelist" && (
        <PriceListPage onBack={() => setPage("home")} />
      )}
    </div>
  );
}

