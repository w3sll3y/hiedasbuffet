import React, { useState } from "react";
import { ShoppingCart } from 'phosphor-react';
import { Header } from '../../Header.tsx';
import "./styles.css";
import { NavLink } from "react-router-dom";
import Logo from '../../../../assets/hiedaslogo.png';

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Header />
      <div className={menuOpen ? "logo-hiedas-of" : "logo-hiedas"}>
        <img src={Logo} width={45} height={45} />
      </div>
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
          <NavLink to="/destaques">Destaques</NavLink>
        </li>
        <li>
          <NavLink to="/produtos">Nossos produtos</NavLink>
        </li>
        {/* <li>
          <NavLink to="/sobre">Sobre nos</NavLink>
        </li> */}
        <li>
          <NavLink to="/checkout">Checkout <ShoppingCart color="#636e72" size={18} /></NavLink>
        </li>
      </ul>
    </nav >
  );
};