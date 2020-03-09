import React, { useState } from "react";
import "./App.css";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";

function App() {
  //state de mise a jour du panier
  const [ProduitsPanier, setProduitsPanier] = useState([]);

  return (
    <React.Fragment>
      <Header
        ProduitsPanier={ProduitsPanier}
        setProduitsPanier={setProduitsPanier}
      ></Header>
      <Footer
        ProduitsPanier={ProduitsPanier}
        setProduitsPanier={setProduitsPanier}
      ></Footer>
    </React.Fragment>
  );
}

export default App;
