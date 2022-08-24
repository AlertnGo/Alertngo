import { Link } from "react-router-dom";

import { AiOutlineAim , AiOutlineHome } from "react-icons/ai";
import { FaParking } from "react-icons/fa";
import { BiFace } from "react-icons/bi";

import "./style.scss";

function MobileNav() {
  return (
    <section className="mobileNav">
      <div className="navs">
        <Link to="/">
          <AiOutlineHome />
        </Link>

        <Link to="/spot">
          <AiOutlineAim />
        </Link>

        <Link to="/place">
          <FaParking />
        </Link>

        <Link to="/me/profile">
          <BiFace />
        </Link>
      </div>
    </section>
  );
}
export default MobileNav;
