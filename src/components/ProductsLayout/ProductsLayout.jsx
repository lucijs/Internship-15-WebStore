import { useState } from "react";

const ProductsLayout = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Vrijednost po kojoj pretražujemo"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          required
        />
        <button>Submit</button>
      </form>
      <p>{searchInput}</p>
    </>
  );
};

export default ProductsLayout;
