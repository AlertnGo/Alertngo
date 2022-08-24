import React, { useContext, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import userServices from "../../services/userService";
import { useHistory } from "react-router-dom";
import userContext from "../../context/user";
//imgs
import logosvg from "../../assets/imgs/logosvg.svg";

function Login() {
  const UserContext = useContext(userContext);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const login = async (e) => {
    const user = {
      email: email,
      password: password,
    };
    try {
      e.preventDefault();
      const response = await userServices.login(user);
      if (response.status === 200) {
        console.log(response.data);
        UserContext.setUser("vishnu");
        history.push("/me/profile");
      }
    } catch (error) {
      console.log(error);
      setError(error ? error.message : "Il y a eu un problème");
    }
  };

  return (
    <main>
      <section className="connexionform">
        <div className="container">
          <p>hi {UserContext?.user.name}</p>
          <img src={logosvg} alt="logo" className="mainlogo" />
          <h2>Bienvenue sur AlertnGo</h2>
          {error === "" ? null : <p className="error">{error}</p>}
        </div>

        <form className="fillform" onSubmit={login}>
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
    </main>
  );
}
export default Login;
