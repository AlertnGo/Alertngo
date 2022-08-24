import React, { useEffect, useState } from "react";
import userServices from "../../services/userService";
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

      {places?.map((place) => {
        return (
          <div key={place.id} className="place">
            <p>{place.name}</p>
            <p>{place.description}</p>
          </div>
        );
      })}
    </main>
  );
};
export default Places;
