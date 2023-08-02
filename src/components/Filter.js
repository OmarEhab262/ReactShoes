import React, { useState } from "react";
import FF from "./FF";
import "../styles/filter.css";

export default function Filter() {
  const [selectedColor, setSelectedColor] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [brandFilter, setBrandFilter] = useState("all"); // Add the brand filter state

  function oo(color) {
    setSelectedColor(color);
  }

  function showAll() {
    setSelectedColor("");
  }

  function handleSortOption(option) {
    setSortOption(option);
  }

  function handleBrandFilter(brand) {
    setBrandFilter(brand);
  }

  return (
    <>
      <div className="container">
        <div className="Color">
          <h2 className="fw-bold">Filter</h2>
          <div className="bb nn">
            <div className="bb">
              <div
                className="white cc"
                onClick={() => oo("white")}
              ></div>
              <div
                className="black cc"
                onClick={() => oo("black")}
              ></div>
              <div
                className="blue cc"
                onClick={() => oo("blue")}
              ></div>
              <div
                className="green cc"
                onClick={() => oo("green")}
              ></div>
              <div
                className="red cc"
                onClick={() => oo("red")}
              ></div>
              <div
                className="yellow cc"
                onClick={() => oo("yellow")}
              ></div>
            </div>
          </div>
          <div className="bb">
            <button
              className="show-all btn btn-light"
              onClick={showAll}
            >
              Show All
            </button>
            <div className="sort-options">
              <button
                className="btn btn-light"
                onClick={() => handleSortOption("default")}
              >
                Default
              </button>
              <button
                className="btn btn-light"
                onClick={() => handleSortOption("priceAsc")}
              >
                Low to High
              </button>
              <button
                className="btn btn-light"
                onClick={() => handleSortOption("priceDesc")}
              >
                High to Low
              </button>
            </div>
            <div className="brand-options">
              <button
                className="btn btn-light"
                onClick={() => handleBrandFilter("all")}
              >
                All Brands
              </button>
              <button
                className="btn btn-light"
                onClick={() => handleBrandFilter("Nike")}
              >
                Nike
              </button>
              <button
                className="btn btn-light"
                onClick={() => handleBrandFilter("Adidas")}
              >
                Adidas
              </button>
            </div>
          </div>
        </div>

        <div className="container d-flex flex-wrap justify-content-center">
          <FF
            color={selectedColor}
            sortOption={sortOption}
            brandFilter={brandFilter}
          />
        </div>
      </div>
    </>
  );
}
