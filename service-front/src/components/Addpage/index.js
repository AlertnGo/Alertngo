import React from "react";
import "./style.scss";

function Addpage(props) {
  return (
    <section className="addSection">
      <form onSubmit={props.addeSubmit}>
        <label>
          <p>{props.lable}</p>
          <input
            type="text"
            name={props.lable}
            placeholder={props.placeholder}
            onChange={props.change}
            maxLength={props.max}
          />
        </label>
        <div className="buttonsdouble">
        <button type="submit" className="button">
        Terminé
        </button>
        <button onClick={props.cancel} className="button">
        Annuler
        </button>
        </div>
      </form>
    </section>
  );
}
export default Addpage;
