import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

import logosvg from "../../assets/imgs/logosvg.svg";

const Sent = () => {
  return (
    <main>
      <section className="messagesent">
        <img src={logosvg} alt="logo" className="mainlogo" />
        <p>
          L'alerte a été envoyée avec succès. Vous pouvez attendre le
          propriétaire pendant quelques minutes, sinon faites toute démarche
          légalement.
        </p>
        <Link to="/">
          <button className="mainbutton"> Retour à l'accueil</button>
        </Link>
      </section>
    </main>
  );
};
export default Sent;
