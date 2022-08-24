import React from "react";
import "./style.scss";

const Spot = () => {
  const spotThisPlace = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }

    function showPosition(position) {
      console.log(position.coords.latitude, position.coords.longitude);
    }
  };
  return (
    <main>
      <p className="info">
        Assurez-vous bien que vous êtes sur le lieu ou vous êtes proche de 2m du
        lieu. sinon les utilisateurs ne trouveront pas votre spot.
      </p>
      <button className="biggieButton" onClick={spotThisPlace}>
        Place cet spot comme parking
      </button>
    </main>
  );
};
export default Spot;
