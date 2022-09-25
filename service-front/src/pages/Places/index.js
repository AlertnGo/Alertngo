import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import addServices from "../../services/addServices";
import { GoLocation } from "react-icons/go";
import "./style.scss";

const Places = () => {
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState("");
  console.log(places);

  useEffect(() => {
    const getPlaces = async () => {
      try {
        const response = await addServices.getAll();
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
      }) : <p>il y'a aucun place libre</p>}
    </main>
  );
};
export default Places;
