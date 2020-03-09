import React from "react";
import Inputs from "./Inputs";
const Header = props => {
  return (
    <div>
      <div className="title">Mon petit panier</div>
      <Inputs
        ProduitsPanier={props.ProduitsPanier}
        setProduitsPanier={props.setProduitsPanier}
      ></Inputs>
    </div>
  );
};
export default Header;
