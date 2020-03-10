import React, { useState } from "react";
//todo Corriger le min max des champs inputs (soit avec form-control de bootstrap ou meme semantic ui)

const Inputs = props => {
	//State de recuperation des champs inputs
	const [inputCode, setInputCode] = useState([]);
	const [inputQte, setInputQte] = useState(1);

	//Creation d'une variable aleatoire qu'on affectera au prix unitaire
	const random = Math.round(Math.random() * 100);
	const PrixUnitaire = random;

	//regles de mise a jour du panier en fonction de la presence ou non d'un article dedans.
	// seulement la quantite sera mise a jour ds le panier si on ajoute plusieurs fois un article qui y est deja present
	const addToCart = produit => {
		const nouveauProduit = props.ProduitsPanier.find(
			item => item.code === produit.code
		);
		if (!nouveauProduit) {
			props.setProduitsPanier([...props.ProduitsPanier, { ...produit }]);
		} else {
			const nouveauProduits = props.ProduitsPanier.filter(
				item => item.code !== produit.code
			);
			const quantite = Number(nouveauProduit.quantite) + Number(inputQte);

			props.setProduitsPanier([
				...nouveauProduits,
				{
					...nouveauProduit,
					quantite: quantite
				}
			]);
		}
	};

	return (
		//champs code et quantité a remplir
		<form className="inputs">
			<label>
				Code:{" "}
				<input
					type="number"
					id="code"
					min={1}
					max={10000}
					required
					onChange={evt => {
						setInputCode(evt.target.value);
					}}
				/>
			</label>
			<label>
				Quantité:{" "}
				<input
					type="number"
					id="quantite"
					min={1}
					max={100}
					//defaultValue={inputQte}
					required
					placeholder="1-100"
					onChange={evt => {
						setInputQte(evt.target.value);
					}}
				/>
			</label>
			<label>
				Prix unitaire:{" "}
				<input type="number" id="prixUni" defaultValue={PrixUnitaire} />
			</label>
			{/* bouton ajouter au panier qui cree le produit*/}
			<button
				className="btn-3d-add btn-3d"
				onClick={event => {
					event.preventDefault();
					// ajouter un nouveau produit dans le panier
					const produit = {
						code: inputCode,
						quantite: inputQte,
						PrixUnitaire: PrixUnitaire
					};
					addToCart(produit);
				}}
				id="AddToCart"
			>
				Ajouter au panier
			</button>
		</form>
	);
};
export default Inputs;
