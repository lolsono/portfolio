import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import React from "react";

function NavBar() {
  return (
    <nav className="flex light-bg justify-space">
      <div className="logo white">
        <Link className="link-acceuil" to="/">
          david
        </Link>
      </div>

      <ul className="flex white">
        <li className="green">
          <Link className="link-acceuil" to="/">
            Home
          </Link>
        </li>
        <li>
          <p>futur lien</p>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
