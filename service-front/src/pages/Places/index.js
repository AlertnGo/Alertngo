import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userServices from "../../services/userService";
import { GoLocation } from "react-icons/go";
import "./style.scss";

const Places = () => {
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState("");
  console.log(places);

  useEffect(() => {
    const getPlaces = async () => {
      try {
        const response = await userServices.getAll();
        setPlaces(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    getPlaces();
  }, []);

  return (
    <main>
      {error === "" ? null : <p>{error}</p>}

      {places.length > 0 ?  places.map((place) => {
        return (
          <Link key={place.id} className="place" target="_blanc" to="www.google.com">
            <GoLocation />
            <p>{place.name}</p>
          </Link>
        );
      }) : <p>You have no place</p>}
    </main>
  );
};
export default Places;
