import React from "react";
import AddToCart from "./AddToCart/AddToCart";

const Main = props => {
  return (
    <div>
      <AddToCart ProduitsPanier={props.ProduitsPanier}></AddToCart>
    </div>
  );
};

export default Main;
