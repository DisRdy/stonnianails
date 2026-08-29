import { useState } from "react";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import PriceListPage from "./pages/PriceListPage";

type Page = "home" | "gallery" | "pricelist";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  return (
    <div className="size-full">
      {page === "home" && (
        <HomePage onNavigate={(p) => setPage(p)} />
      )}
      {page === "gallery" && (
        <GalleryPage onBack={() => setPage("home")} />
      )}
      {page === "pricelist" && (
        <PriceListPage onBack={() => setPage("home")} />
      )}
    </div>
  );
}
