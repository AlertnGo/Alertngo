import React, { useEffect, useState } from "react";
import "./style.scss";
import userServices from "../../services/userService";
import voitureService from "../../services/voitureService";
import { useHistory } from "react-router-dom";
import useLoggedIn from '../../hooks/useLoggedIn'

//componants
import AddPage from "../../components/Addpage";
//icons
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import Brightness6RoundedIcon from "@material-ui/icons/Brightness6Rounded";

function MyProfile() {
  const [myinfo, setMyInfo] = useState([]);
  const [myCars] = useState([]);
  const [newNdp, setNewNdp] = useState("");
  const [newName, setNewName] = useState("");
  const [toggle, setToggle] = useState(false);
  const [nameToggle, setNameToggle] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();
  const userid = 10;

  
  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const response = await userServices.profil(userid);
      setMyInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const getVehicles = async () => {
  //   try {
  //     const response = await userServices.getAllMyCars(userid);
  //     console.log(response.data.data);
  //   } catch (error) {
  //     setError(error);
  //   }
  // };

  const addNew = async (e) => {
    const ndp = newNdp;
    e.preventDefault();
    try {
      await voitureService.addCar(ndp, userid);
      setNewNdp("");
      setToggle(!toggle);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const ThemeChange = () => {
    document.documentElement.classList.toggle("darkmode");
  };

  const changeName = async (e) => {
    e.preventDefault();
    try {
      await userServices.changeMyName(newName, userid);
      setNewName("");
      setNameToggle(!nameToggle);
    } catch (error) {
      setError(error.message);
    }
  };

  const signout = async () => {
    localStorage.clear();
    history.push("/me/login");
  };

  const deleteOneCar = async (e) => {
    const id = e.currentTarget.id;
    try {
      await voitureService.deleteCar(id);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <main>
      <section className="myprofile">
        <section className="devider">
          <h3>Mes Informations</h3>
          {error === "" ? null : <p className="error">{error} </p>}

          <div className="infos">
            <div className="infodiv">
              <h2>{myinfo.name}</h2>
              <button
                className="button"
                onClick={() => setNameToggle(!nameToggle)}
              >
                <EditRoundedIcon />
                <p>Modifier</p>
              </button>
            </div>
            {nameToggle === true ? (
              <AddPage
                addeSubmit={changeName}
                lable="Name"
                change={(e) => setNewName(e.target.value)}
                placeholder={myinfo.name}
                max="20"
                cancel={() => setNameToggle(!nameToggle)}
              />
            ) : null}

            <div className="infodiv">
              <h2>Thème</h2>
              <button className="button" onClick={ThemeChange}>
                <Brightness6RoundedIcon />
                <p>Basculer</p>
              </button>
            </div>

            <button className="button super" onClick={signout}>
              <ExitToAppRoundedIcon />
              <p>Déconnecter</p>
            </button>
          </div>
        </section>

        <section className="devider">
          <h3>Mes Vehicles</h3>

          <div className="ndpdivider">
            {myCars.length === 0 ? (
              <p className="specialtext">
                Vous n'avez pas encore ajouté votre véhicule, cliquez sur le
                bouton ci-dessous pour ajouter vos véhicules
              </p>
            ) : null}
            {myCars.map((car, index) => (
              <div className="ndpdiv" key={index}>
                <p className="ndplate">{car.ndp}</p>
                <div className="buttonset">
                  <button className="button" id={car.id} onClick={deleteOneCar}>
                    <DeleteRoundedIcon />
                    <p>Suprimer</p>
                  </button>
                </div>
              </div>
            ))}
          </div>
          {toggle === true ? (
            <AddPage
              addeSubmit={addNew}
              lable="Numéro de d'immatriculation"
              change={(e) => setNewNdp(e.target.value)}
              placeholder="AA000AA"
              max="7"
              cancel={() => setToggle(!toggle)}
            />
          ) : null}
          <button className="button super" onClick={(e) => setToggle(!toggle)}>
            <AddBoxRoundedIcon />
            <p>Ajouter</p>
          </button>
        </section>
      </section>
    </main>
  );
}
export default MyProfile;
