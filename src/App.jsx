import "./App.css";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import Navigation from "./components/Navigation";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <ProductsPage />
      <ProductPage />
      <Navigation />
      <NotFoundPage />
    </>
  );
}

export default App;
