import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import classes from "./index.module.css";
import logo from "../../assets/logo.png";

const ProductsLayout = () => {
  const [searchInput, setSearchInput] = useState("");

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
          <Button variant="contained">Pretraži</Button>
        </form>
      </div>
      <p>{searchInput}</p>
    </>
  );
};

export default ProductsLayout;
