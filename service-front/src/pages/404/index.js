import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Page404 = (props) => {
  return (
    <main>
      <section className="page404">
        <h1>404</h1>
        <p>La page que vous cherchez n'existe pas</p>
        <Link to="/">
          <button className="mainbutton"> Retour à l'accueil</button>
         </Link>
      </section>
    </main>
  );
};
export default Page404;
