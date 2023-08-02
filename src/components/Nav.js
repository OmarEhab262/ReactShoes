import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App"; // Import the CartContext from the App component

function Nav() {
  const { cartItems } = useContext(CartContext); // Access cartItems from the CartContext

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link
            className="navbar-brand"
            to="/ReactShoes"
          >
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/ReactShoes"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  type="button"
                  className="btn btn-light position-relative w-100 p-2"
                  to="/Cart"
                >
                  <i
                    className="far fa-shopping-bag"
                    style={{ fontSize: "20px" }}
                  ></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartItems.length} {/* Display the cartItems count */}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
