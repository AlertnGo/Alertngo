import React, { useEffect, useState } from "react";
import userServices from "../../services/userService";
import "./style.scss";

const Places = () => {
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const response = userServices.getAll();
      if (response.status === 200) {
        setPlaces(response.data);
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  }, []);

  return (
    <main>
      {error === "" ? null : <p>{error}</p>}
      <h1>kiujhsuid</h1>
      <div className="place">
        x : 6875
        y : 6875

      </div>
      <p>
        {places.map((place) => {
          return <p>{place.name}</p>;
        })}
      </p>
    </main>
  );
};
export default Places;
