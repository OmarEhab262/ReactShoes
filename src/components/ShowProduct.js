import React, { useState, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { CartContext } from "../App";

export default function ShowProduct() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productName = queryParams.get("name");
  const productBrand = queryParams.get("brand");
  const productPrice = queryParams.get("price");
  const productImg = queryParams.get("img");
  const productColor = queryParams.get("color");

  const [quantity, setQuantity] = useState(1);
  const { handleAddToCart } = useContext(CartContext);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };

  const handleAddToCartClick = () => {
    const productData = {
      name: productName,
      brand: productBrand,
      price: productPrice,
      img: productImg,
      color: productColor,
      quantity: quantity,
    };

    handleAddToCart(productData);
    setQuantity(1); // Reset the quantity after adding to cart
  };
  return (
    <>
      <div
        className="main d-flex justify-content-center align-items-center"
        style={{ height: "80vh", marginTop: "50px" }}
      >
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center position-relative">
            <div className="col-md-5 col-sm-12 m-2">
              <div
                className="img d-flex justify-content-center align-items-center"
                style={{
                  backgroundColor: productColor,
                  height: "100%",
                  padding: "40px",
                  paddingTop: "100px",
                  paddingBottom: "100px",
                  borderRadius: "20px",
                  width: "90%",
                }}
              >
                <img
                  className="w-100"
                  src={productImg}
                  alt="img"
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12 m-4 d-flex justify-content-center align-items-start flex-column">
              <h5 className="m-2">{productBrand}</h5>
              <h2 className="m-2">{productName}</h2>
              <h2 className="m-2">{productPrice}</h2>
              <Link to="/ReactShoes">
                <i
                  className="fas fa-times position-absolute fa-3x"
                  style={{ top: "-30px", right: "15px", cursor: "pointer" }}
                ></i>
              </Link>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                className="m-2 number"
              />
              <p className="m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                deleniti. Autem, necessitatibus! Deserunt maiores velit
                perferendis, eum iure voluptatum, iusto laborum minus odit at
                consectetur temporibus tempore vel provident quasi?
              </p>
              <button
                className="btn btn-info"
                onClick={handleAddToCartClick}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
