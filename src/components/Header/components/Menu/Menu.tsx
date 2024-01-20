import React, { useState } from "react";

import "./styles.css";
import { Link, NavLink } from "react-router-dom";

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/services">Destaques</NavLink>
        </li>
        <li>
          <NavLink to="/nossos">Nossos produtos</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Sobre nos</NavLink>
        </li>
      </ul>
    </nav>
  );
};