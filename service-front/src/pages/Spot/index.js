import React, { useEffect, useState, useContext } from "react";
import { showNotification } from "@mantine/notifications";
import addServices from "../../services/addServices";
import { UserContext } from "../../context/user";
import "./style.scss";

import map from "../../assets/imgs/map.gif";

const Spot = () => {
  const { userId } = useContext(UserContext);

  const spotThisPlace = () => {
    const showPosition = async (position) => {
      try {
        const data = {
          userId: userId,
          title: "new",
          latitude: JSON.stringify(position.coords.latitude),
          longitude: JSON.stringify(position.coords.longitude),
        };
        await addServices.add(data);
        showNotification({
          title: "Emplacement ajouté ",
          message: "Merci d'avoir aidé les gens",
        });
      } catch (error) {
        console.log(error);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };
  return (
    <main>
      <img src={map} alt="Logo" className="mapIcon" />
      <button className="biggieButton" onClick={spotThisPlace}>
        Place cet spot comme parking
      </button>
      <p className="info">
        Assurez-vous bien que vous êtes sur le lieu ou vous êtes proche de 2m du
        lieu. sinon les utilisateurs ne trouveront pas votre spot.
      </p>
    </main>
  );
};
export default Spot;
