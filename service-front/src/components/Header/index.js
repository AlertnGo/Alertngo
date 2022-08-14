import { Link } from "react-router-dom";
import "./style.scss";

function Header(props) {
  return (
    <header>
      <div className="headerpc">
        <Link to="/">
          <div className="navbutton borderleft">
            <p>Alert</p>
          </div>
        </Link>

        <Link to="/spot">
          <div className="navbutton borderleft">
            <p>Spot</p>
          </div>
        </Link>

        <Link to="/place">
          <div className="navbutton borderright">
            <p>Place</p>
          </div>
        </Link>

        <Link to="/me/profile">
          <div className="navbutton borderright">
            <p>Moi</p>
          </div>
        </Link>
      </div>
    </header>
  );
}
export default Header;
