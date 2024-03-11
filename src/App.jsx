import "./App.css";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import { Link, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <div className="background">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
