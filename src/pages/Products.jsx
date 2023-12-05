import { useEffect, useState } from "react";
import productsData from "../data/productsData.json";
import Header from "../components/Header";
import Product from "../components/Product";
import PaginationControls from "../components/PaginationControls";
import Footer from "../components/Footer";
import "./Products.css";

const Products = () => {
  const [filterBy, setFilterBy] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const handleFilterChange = (event) => {
    setFilterBy(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  useEffect(() => {
    let filtered = productsData.slice();

    if (filterBy && filterBy !== "filterBy") {
      filtered = filtered.filter(
        (product) =>
          product.category &&
          product.category.toLowerCase() === filterBy.toLowerCase()
      );
    }

    if (sortBy === "priceLowToHigh") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "priceHighToLow") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [filterBy, sortBy]);

  return (
    <>
      <Header />
      <div className="products-container">
        <h1>Products</h1>

        <div className="filter-sort-container">
          <select
            className="filter-dropdown"
            aria-label="filterBy"
            value={filterBy}
            onChange={handleFilterChange}
          >
            <option value="filterBy">Filter by</option>
            <option value="accessories">Accessories</option>
            <option value="clothing">Clothing</option>
            <option value="collectibles">Collectibles</option>
            <option value="decorations">Decorations</option>
            <option value="tradingCards">Trading Cards</option>
          </select>

          <select
            className="sort-dropdown"
            aria-label="sortBy"
            value={sortBy}
            onChange={handleSortChange}
          >
            <option value="sortBy">Sort by</option>
            <option value="priceLowToHigh">Price: Low-High</option>
            <option value="priceHighToLow">Price: High-Low</option>
          </select>
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
      <PaginationControls />
      <Footer />
    </>
  );
};

export default Products;
