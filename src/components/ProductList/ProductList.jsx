import { useState } from "react";
import "./productList.css";
import codeSnippets from "./codeSnippets";

const ProductList = ({ products }) => {
  const [displayProducts, setDisplayProducts] = useState(products);
  const [snippet, setSnippet] = useState(codeSnippets["ALL"]);

  const handleDisplayAll = () => {
    setDisplayProducts(products);
    setSnippet(codeSnippets["ALL"]);
  };

  const handleFilter = () => {
    const filteredProducts = products.filter(
      (product) => product.market === "Great Mall"
    );
    setDisplayProducts(filteredProducts);
    setSnippet(codeSnippets["FILTER"]);
  };

  const handleMap = () => {
    const discountedProducts = products.map((product) => {
      const discountedPrice = product.price - (product.price * 10) / 100;
      return {
        ...product,
        price: discountedPrice.toFixed(2),
      };
    });
    setDisplayProducts(discountedProducts);
    setSnippet(codeSnippets["MAP"]);
  };

  const handleForEach = () => {
    products.forEach((product) =>
      localStorage.setItem(product.name, product.price)
    );
    setSnippet(codeSnippets["FOREACH"]);
  };

  return (
    <div className="product-list">
      <div className="buttons-container">
        <button onClick={() => handleDisplayAll()}>Show All</button>
        <button onClick={() => handleFilter()}>array.filter()</button>
        <button onClick={() => handleMap()}>array.map()</button>
        <button onClick={() => handleForEach()}>array.forEach()</button>
      </div>
      <div className="info-container">
        {snippet.description && <p>{snippet.description}</p>}
        {snippet.code && <code>{snippet.code}</code>}
      </div>
      <div className={"cards-container"}>
        {displayProducts.map((product) => (
          <div key={product.name} className={"card"}>
            <h3>{product.name}</h3>
            <p>{product.price}€</p>
            <p>{product.market}</p>
          </div>
        ))}
      </div>
      {snippet.href && (
        <div className="links-container">
          <h3>**{snippet.type}**</h3>
          <div className="links">
            <a href={snippet.href.github} target="_blank" rel="noreferrer">
              View this line on GitHub
            </a>
            <a href={snippet.href.article} target="_blank" rel="noreferrer">
              Read the article
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
