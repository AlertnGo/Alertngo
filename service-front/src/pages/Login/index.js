import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import userServices from "../../services/userService";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/user";

import logosvg from "../../assets/imgs/logosvg.svg";
import "../Signup/style.scss";

function Login() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { login } = useContext(UserContext);

  const GetLogin = async (e) => {
    const user = {
      email: email,
      password: password,
    };
    try {
      e.preventDefault();
      const response = await userServices.login(user);
      if (response.status === 200) {
        login(response.data);
        history.push("/me/profile");
      }
    } catch (error) {
      console.log(error);
       //setError(error ? error.response.data.message : "Il y a eu un problème");
      setError(error ? error.message : "Il y a eu un problème");
    }
  };

  return (
    <section className="connexionform">
      <div className="container">
        <img src={logosvg} alt="logo" className="mainlogo" />
        <h2>Bienvenue sur AlertnGo</h2>
        {error === "" ? null : <p className="error">{error}</p>}
      </div>

      <form className="fillform" onSubmit={GetLogin}>
        <label>
          <p>
            Email<span>*</span>
          </p>
          <input
            type="text"
            name="email"
            placeholder="Email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          <p>
            Mot de Pass<span>*</span>
          </p>
          <input
            type="password"
            name="passsword"
            placeholder="Motdepass"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button className="submitbutton">Login</button>
        <p>
          Veuillez saisir votre login et mot de passe ou si vous n'avez pas de
          compte, vous pouvez en créer un en cliquant sur le lien ci-dessous
        </p>
        <Link to="/me/signup" className="linkbuttons">
          Créer un compte
        </Link>
      </form>
    </section>
  );
}
export default Login;
