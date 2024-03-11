import { useEffect, useState } from "react";
import classes from "./index.module.css";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const ProductsPage = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log("Categories fetched:", data);
        setCategories(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  };

  return (
    <div className={classes.productsContainer}>
      {isLoading ? (
        <div className={classes.loader}></div>
      ) : (
        <FormControl style={{ width: "200px" }} color="warning">
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
      )}
    </div>
  );
};

export default ProductsPage;
