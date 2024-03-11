import { useEffect, useState } from "react";
import classes from "./index.module.css";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Product from "../../components/Product";
import { useSearchParams } from "react-router-dom";

const ProductsPage = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search");

  useEffect(() => {
    fetchCategories();
    fetchProducts();
    setSelectedCategory("");
  }, []);

  const fetchCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  };

  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  };

  return (
    <div className={classes.container}>
      {isLoading ? (
        <div className={classes.loader}></div>
      ) : (
        <>
          <div className={classes.select}>
            <FormControl className={classes.form} color="warning">
              <InputLabel id="demo-simple-select-label">Kategorije</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Kategorije"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}>
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className={classes.products}>
            {products
              .filter((product) => {
                const titleMatches = product.title
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase());
                const categoryMatches = selectedCategory
                  ? product.category === selectedCategory
                  : true;
                return titleMatches && categoryMatches;
              })
              .map((product) => (
                <Product
                  title={product.title}
                  image={product.image}
                  key={product.id}
                  id={product.id}
                />
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductsPage;
