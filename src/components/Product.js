import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Product.css";
import { ProductsData } from "./ProductsData"; // Replace with the correct path

export default function Product(props) {
  const { background, img, name, brand, price } = props;
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const productData = {
      name: name,
      brand: brand,
      price: price,
      img: img, // You can include the image URL if needed
      color: background, // You can include the image URL if needed
    };

    const queryString = new URLSearchParams(productData).toString();
    navigate(`/Show?${queryString}`);
  };

  return (
    <>
      <div className="card">
        <div
          className="top"
          style={{ background: background }}
        >
          <img
            src={img}
            alt="img"
          />
          <div className="icon">
            <button
              onClick={handleAddToCart}
              className="btn btn-light"
            >
              <i className="far fa-shopping-cart"></i>
            </button>
          </div>
        </div>
        <div className="bot">
          <h4>{name}</h4>
          <div className="info">
            <div className="brand">{brand}</div>
            <div className="price">{price}</div>
          </div>
        </div>
      </div>
    </>
  );
}
