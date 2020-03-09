import React from "react";
import ProductsInCart from "./ProductsInCart";
import TotalCart from "./TotalCart";

const Footer = props => {
  return (
    <React.Fragment>
      <ProductsInCart
        ProduitsPanier={props.ProduitsPanier}
        setProduitsPanier={props.setProduitsPanier}
      ></ProductsInCart>
      <TotalCart ProduitsPanier={props.ProduitsPanier}></TotalCart>
    </React.Fragment>
  );
};

export default Footer;
