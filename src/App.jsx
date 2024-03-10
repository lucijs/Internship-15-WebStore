import "./App.css";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductsLayout from "./components/ProductsLayout/ProductsLayout";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/products">Proizvodi</Link>
          </li>
          <li>
            <Link to="/">Nav</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<ProductsLayout />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
