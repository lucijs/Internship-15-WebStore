import { Button } from "@mui/material";
import { useMemo, useState } from "react";
import classes from "./index.module.css";

const MainPage = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useMemo(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        setCategories(json);
        setIsLoading(false);
      })
      .catch((error) => setIsLoading(false));
    return categories;
  }, []);

  return (
    <>
      {isLoading ? (
        <div className={classes.categories}>Loading...</div>
      ) : (
        <div className={classes.categories}>
          {categories.map((c) => (
            <Button variant="contained" key={c}>
              {c}
            </Button>
          ))}
        </div>
      )}
    </>
  );
};

export default MainPage;
