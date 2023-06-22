//React
import React, { useState, useEffect } from "react";

//Components
import Products from "../../components/Products/Products";
import Filters from "../../components/Filters/Filters";

const PrendasPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  const filteredProducts = filterProducts(products);

  return(
  <div>
    <Filters changeFilters={setFilters} />
    <Products products={filteredProducts} />
  </div>
  )
};

export default PrendasPage;
