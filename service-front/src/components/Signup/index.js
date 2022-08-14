import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import userServices from "../../services/userService";
import Notification from "../Notification";
import { useHistory } from "react-router-dom";
//imgs
import logosvg from "../../assets/imgs/logosvg.svg";

function Signup() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const signup = async (e) => {
    const user = {
      nom: nom,
      email: email,
      password: password,
    };
    try {
      e.preventDefault();
      const response = await userServices.signup(user);
      if (response.status === 201) {
        history.push("/me/login");
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <section className="connexionform">
      <div className="container">
        <img src={logosvg} alt="logo" className="mainlogo" />
        <h2>Bienvenue sur AlertnGo</h2>
        {error === "" ? null : (
          <Notification notif={error} unsetfunction={() => setError("")} />
        )}
      </div>

      <form className="fillform" onSubmit={signup}>
        <label>
          <p>
            Email<span>*</span>
          </p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            placeholder="Email"
            required
          />
        </label>
        <label>
          <p>
            Nom<span>*</span>
          </p>
          <input
            onChange={(e) => setNom(e.target.value)}
            type="text"
            name="firstname"
            placeholder="Nom"
            required
          />
        </label>
        <label>
          <p>
            Mot de passe<span>*</span>
          </p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            name="password"
            placeholder="Mot de passe"
            required
          />
        </label>
        <button className="submitbutton" type="submit">
        Créer un compte
        </button>
        <p>
          Veuillez remplir correctement les champs ci-dessus pour vous inscrire.
          Si vous êtes déjà inscrit, veuillez vous connecter en cliquant sur le
          lien ci-dessous.
        </p>
        <Link to="/me/login" className="linkbuttons">
          Se connecter
        </Link>
      </form>
    </section>
  );
}
export default Signup;
