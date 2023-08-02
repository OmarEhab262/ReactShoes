import React from "react";
import { ProductsData } from "./ProductsData";
import "../styles/Cart.css";

function Admin() {
  return (
    <>
      <button className="btn btn-primary nnnn">Add Products</button>
      <div id="cart">
        <table
          width="100%"
          className="main-table"
        >
          <thead>
            <tr>
              <td>Id </td>
              <td>Image </td>
              <td>Name </td>
              <td>Brand </td>
              <td>Price </td>
              <td>Color </td>
              <td>Background</td>
              <td>Operation </td>
            </tr>
          </thead>
          <tbody className="yyy">
            {ProductsData.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>
                  <img
                    src={product.img}
                    alt={product.name}
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>{product.color}</td>
                <td style={{ background: product.background }}></td>
                <td>
                  <button className="btn btn-info gg ">Edit</button>
                  <button className="btn btn-danger gg">Delate</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Admin;
