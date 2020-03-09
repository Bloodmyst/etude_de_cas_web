import React from "react";
//faire descendre la fontion qui est dans app et qui mettrea a jour le addtocart (meme fonction que celle qui met a jour le state)
const AddToCart = props => {
  return (
    <button
      className="btn-3d"
      onClick={() => {
        // ajouter un nouveau produit dans le panier

        console.log("Click");
      }}
      id="AddToCart"
    >
      AddToCart
    </button>
  );
};

export default AddToCart;
