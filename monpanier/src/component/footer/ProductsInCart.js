import React from "react";
import { Button, Icon } from "semantic-ui-react";
{
  /* TODO corriger la fonction  de retirer pour qu'il n'y ait q'un seul retrait  */
}

const ProductsInCart = props => {
  //fonction pour supprimer un article du panier

  const retirerDuPanier = code => {
    const nouveauProduitPanier = props.ProduitsPanier.filter(item => {
      return item.code == !item;
    });
    props.setProduitsPanier(nouveauProduitPanier);
  };

  return (
    <div>
      <h1 className="panier-title">Panier</h1>

      <table className="cart" border="4">
        <thead>
          <th className="header-panier">Code</th>
          <th className="header-panier">Quantité</th>
          <th className="header-panier">Prix unitaire</th>
          <th className="header-panier">Sous-total</th>
          <th className="header-panier">Supprimer</th>
        </thead>
        {/* creation des lignes grace au mappage des ProduitsPanier */}
        {console.log(props.ProduitsPanier)}

        {props.ProduitsPanier.map(item => {
          //calcul du sous total
          const PrixLigne = item.PrixUnitaire * item.quantite;
          return (
            <tr>
              <th key={item.id}>{item.code}</th>
              <th>{item.quantite}</th>
              <th>{item.PrixUnitaire}</th>
              <th>{PrixLigne}</th>
              {/* //inclure la fonction remove */}
              <th>
                {/* TODO corriger la fonction pour qu'il n'y ait q'un seul retrait  */}
                <button
                  className="btn-3d-del btn-3d"
                  onClick={event => {
                    event.preventDefault();
                    retirerDuPanier(item.code);
                  }}
                  retirer
                ></button>
              </th>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default ProductsInCart;
