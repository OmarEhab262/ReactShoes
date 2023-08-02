import React, { useContext } from "react";
import { CartContext } from "../App";
import "../styles/Cart.css";

function CartTable() {
  const { cartItems, setCartItems } = useContext(CartContext);

  // Function to remove a product from the cart based on its index
  const handleRemoveFromCart = (itemToRemove) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item !== itemToRemove)
    );
  };

  // Calculate the subtotal for each item (Price x Quantity)
  const calculateSubtotal = (price, quantity) => {
    return price * quantity;
  };

  // Calculate the total price of all products in the cart
  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += calculateSubtotal(item.price, item.quantity);
    });
    return total;
  };

  return (
    <>
      <div className="head">
        <h1>#CART</h1>
      </div>
      <div id="cart">
        <table
          width="100%"
          className="main-table"
        >
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Name</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody className="yyy">
            {/* Iterate through cart items and render each item in a row */}
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>
                  <button
                    onClick={() => handleRemoveFromCart(item)}
                    className="btn btn-danger w-75"
                  >
                    Remove
                  </button>
                </td>
                <td>
                  <img
                    src={item.img}
                    alt={item.name}
                  />
                </td>
                <td>{item.name}</td>
                <td>
                  {typeof item.price === "number"
                    ? item.price.toFixed(2)
                    : item.price}
                </td>
                <td>{item.quantity}</td>
                <td>
                  {calculateSubtotal(item.price, item.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {calculateTotal() !== 0 && ( // Add the condition here
        <div
          className="alert alert-primary total "
          role="alert"
        >
          <h5>
            Your total price:{" "}
            <span className="text-success">${calculateTotal().toFixed(2)}</span>
          </h5>
        </div>
      )}
    </>
  );
}

export default CartTable;
