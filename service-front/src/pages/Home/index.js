import React, { useState } from "react";
import { VoitureService } from "../../services";

//components
import MessagesOptions from "../../components/MessagesOptions";
import DefaultAnimation from "../../components/DefaultAnimation";

//icons
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import "./style.scss";

const Home = () => {
  const [ndp, setNdp] = useState("");
  const [userInfo, SetUserInfo] = useState("");
  const [notif, setNotif] = useState(false);

  const getCar = async (e) => {
    e.preventDefault();
    const title = ndp;
    if (title === "") {
      setNotif(true);
    } else {
      try {
        const userData = await VoitureService.getByTitle(title);
        console.log(userData.data);
      } catch (error) {
        if (error) {
          console.log(error);
          if (error) {
            SetUserInfo(undefined);
          }
        }
      }
    }
  };

  return (
    <main>
      <section>
        <form className="mainform">
          <label>
            Saisissez le numéro de la plaque d'immatriculation pour trouver et
            signaler une alerte ou pour envoyer un message.
            {notif ? (
              <p className="error">
                Veuillez saisir un numéro de plaque d'immatriculation valide
              </p>
            ) : null}
            <input
              className="searchBar"
              type="text"
              name="ndp"
              placeholder="AA000AA"
              maxLength="07"
              autoComplete="off"
              onChange={(e) => {
                setNdp(e.target.value);
              }}
            />
          </label>
          <button className="mainbutton" onClick={getCar}>
            <SearchOutlinedIcon />
            <p>Rechercher</p>
          </button>
        </form>
      </section>
      {userInfo ? (
        <MessagesOptions />
      ) : userInfo === undefined ? (
        <div className="NotFound">
          <p className="redflag">
            Malheureusement le numéro de plaque d'immatriculation que vous avez
            recherché n'est pas enregistré sur AlernGo. Nous sommes vraiment
            désolés pour le désagrément.
          </p>
        </div>
      ) : (
        <DefaultAnimation />
      )}
    </main>
  );
};
export default Home;
