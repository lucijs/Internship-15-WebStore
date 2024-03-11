import { Button, TextField, makeStyles } from "@mui/material";
import { useEffect, useState } from "react";
import classes from "./index.module.css";
import logo from "../../assets/logo.png";

const ProductsLayout = () => {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => console.log(json));
  });

  return (
    <>
      <div className={classes.logo}>
        <img src={logo} />
      </div>
      <div className={classes.searchBar}>
        <form>
          <TextField
            label="Vrijednost po kojoj pretražujemo"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className={classes.input}
            color="warning"
            required
          />
          <Button variant="contained">Submit</Button>
        </form>
      </div>
      <p>{searchInput}</p>
    </>
  );
};

export default ProductsLayout;
