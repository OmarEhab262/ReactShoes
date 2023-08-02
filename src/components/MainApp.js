import React, { useState } from "react";
import AddProducts from "./AddProducts";
import { ProductsData } from "./ProductsData";

function MainApp() {
  // State to manage the products data
  const [productsData, setProductsData] = useState(ProductsData);

  return (
    <div>
      {/* Render the AddProducts component and pass productsData and setProductsData as props */}
      <AddProducts
        productsData={productsData}
        setProductsData={setProductsData}
      />

      {/* Display the existing products */}
      <h2>Existing Products:</h2>
      <ul>
        {productsData.map((product) => (
          <li key={product.id}>
            {product.name} - {product.brand} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainApp;
