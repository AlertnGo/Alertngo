import "./style.scss";

function NotFound(props) {
  return (
    <section className="NotFound">
      <p className="redflag">
        Malheureusement le numéro de plaque d'immatriculation que vous avez
        recherché n'est pas enregistré sur AlernGo. Nous sommes vraiment désolés pour le désagrément.
      </p>
      <p className="redflag">
        Vous pouvez chercher un d'autre numéro de plaque d'immatriculation quand vous souhaitez 🤗.
      </p>

     
    </section>
  );
}
export default NotFound;
