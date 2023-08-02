import React, { useState } from "react";
import { ProductsData } from "./ProductsData";

function AddProducts() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(0);
  const [img, setImg] = useState("");
  const [color, setColor] = useState("");
  const [background, setBackground] = useState("");
  const [productsData, setProductsData] = useState(ProductsData); // Initialize state with ProductsData

  const formSubmit = (e) => {
    e.preventDefault();

    // Create a new product object
    const newProduct = {
      id: parseInt(id),
      name: name,
      brand: brand,
      price: parseFloat(price),
      img: img,
      color: color,
      background: background,
    };

    // Update the ProductsData array with the new product
    const updatedProductsData = [...productsData, newProduct];

    // Set the state to the updated array
    setProductsData(updatedProductsData);

    // Log the updated product list (for demonstration purposes)
    console.log("Updated ProductsData:", updatedProductsData);

    // Reset the form fields after submission
    setId(0);
    setName("");
    setBrand("");
    setPrice(0);
    setImg("");
    setColor("");
    setBackground("");
  };
  return (
    <>
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label
            htmlFor="ProductId"
            className="form-label"
          >
            Id Product
          </label>
          <input
            type="number"
            className="form-control"
            id="ProductId"
            placeholder="Product Id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="ProductName"
            className="form-label"
          >
            Name Product
          </label>
          <input
            type="text"
            className="form-control"
            id="ProductName"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="ProductBrand"
            className="form-label"
          >
            Brand Product
          </label>
          <input
            type="text"
            className="form-control"
            id="ProductBrand"
            placeholder="Product Brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="ProductPrice"
            className="form-label"
          >
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="ProductPrice"
            placeholder="Product Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="ProductImg"
            className="form-label"
          >
            Img
          </label>
          <input
            type="text"
            className="form-control"
            id="ProductImg"
            placeholder="Product Img URL"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="ProductColor"
            className="form-label"
          >
            Color
          </label>
          <input
            type="text"
            className="form-control"
            id="ProductColor"
            placeholder="Product Color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="ProductBackground"
            className="form-label"
          >
            Background
          </label>
          <input
            type="text"
            className="form-control"
            id="ProductBackground"
            placeholder="Product Background"
            value={background}
            onChange={(e) => setBackground(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Add Product
        </button>
      </form>
    </>
  );
}

export default AddProducts;
