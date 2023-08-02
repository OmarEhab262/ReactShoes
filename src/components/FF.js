import React from "react";
import { ProductsData } from "./ProductsData";
import Product from "./Product";

export default function FF(props) {
  let filteredProducts = ProductsData;

  if (props.color) {
    filteredProducts = filteredProducts.filter(
      (item) => item.color === props.color
    );
  }

  if (props.brandFilter !== "all") {
    filteredProducts = filteredProducts.filter(
      (item) => item.brand === props.brandFilter
    );
  }

  if (props.sortOption === "priceAsc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (props.sortOption === "priceDesc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  console.log("filteredProducts:", filteredProducts); // Add this line to check filteredProducts

  const dataShow = filteredProducts.map((item) => (
    <Product
      key={item.id}
      brand={item.brand}
      img={item.img}
      background={item.background}
      name={item.name}
      price={item.price}
    />
  ));

  console.log("dataShow:", dataShow); // Add this line to check dataShow

  return <>{dataShow}</>;
}
