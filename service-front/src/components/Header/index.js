import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/user";

import "./style.scss";

function Header() {
  const { token } = useContext(UserContext);

  return (
    <header>
      <div className="headerpc">
        <Link to="/">
          <div className="navbutton borderleft">
            <p>Alert</p>
          </div>
        </Link>

        {token && (
          <Link to="/spot">
            <div className="navbutton borderleft">
              <p>Spot</p>
            </div>
          </Link>
        )}

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
