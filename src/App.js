import React, { createContext, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import ShowProduct from "./components/ShowProduct";
import Filter from "./components/Filter";
import Nav from "./components/Nav";
import CartTable from "./components/CartTable";
import AddProducts from "./components/AddProducts";

export const CartContext = createContext({});

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [productsData, setProductsData] = useState([
    {
      id: 1,
      img: require("./img/nwhite.png"),
      name: "Air Max 90",
      brand: "Nike",
      price: 49.99,
      color: "white",
      background: "#dee2e6",
    },
    // Add more initial products here...
  ]);

  const location = useLocation();

  const handleAddToCart = (productData) => {
    setCartItems((prevCartItems) => [...prevCartItems, productData]);
    setCartCount((prevCount) => prevCount + 1);
  };

  const handleRemoveFromCart = (itemToRemove) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item !== itemToRemove)
    );
    setCartCount((prevCount) => prevCount - itemToRemove.quantity);
  };

  // Listen to route changes and reset cart count to zero when navigating to home ("/")
  useEffect(() => {
    if (location.pathname === "/") {
      setCartCount(0);
    }
  }, [location]);

  return (
    <div className="App">
      {/* Provide the cartItems, setCartItems, handleAddToCart, and handleRemoveFromCart through the CartContext.Provider */}
      <CartContext.Provider
        value={{
          cartItems,
          setCartItems,
          handleAddToCart,
          handleRemoveFromCart,
        }}
      >
        <Routes>
          <Route
            path="/ReactShoes"
            element={
              <>
                <Nav />
                <Filter />
              </>
            }
          />
          <Route
            path="/Cart"
            element={
              <>
                <Nav />
                <CartTable />
              </>
            }
          />

          <Route
            path="/Show"
            element={
              <>
                <Nav />
                <ShowProduct handleAddToCart={handleAddToCart} />
              </>
            }
          />
          <Route
            path="/Add"
            element={
              <>
                {/* Pass the productsData and setProductsData as props */}
                <AddProducts
                  productsData={productsData}
                  setProductsData={setProductsData}
                />
              </>
            }
          />
        </Routes>
      </CartContext.Provider>
    </div>
  );
}

export default App;
