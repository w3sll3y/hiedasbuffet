import React, { useState } from "react";
import { ShoppingCart } from 'phosphor-react';
import { Header } from '../../Header.tsx';
import "./styles.css";
import * as Styled from '../../HeaderMod.module.ts';
import { Link, NavLink } from "react-router-dom";

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Header />
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