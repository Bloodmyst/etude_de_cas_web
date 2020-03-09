import React from "react";

const TotalCart = props => {
  //boucler mon state panier(tableau) map , en recuperant qte et prix unit
  // et en faire le total dans une variable(let)initialisé a 0. => total = total +(qte *prixun).
  let totalPanier = 0;
  return (
    <h1 className="panier-title">
      {props.ProduitsPanier.map(item => {
        totalPanier = totalPanier + item.quantite * item.PrixUnitaire;
      })}
      {/* ecriture avec les back  ticks */}
      {`Total panier : ${totalPanier}`}
    </h1>
  );
};

export default TotalCart;
