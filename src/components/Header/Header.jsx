import * as Styled from './HeaderMod.module.ts';

import hiedasLogo from '../../assets/hiedaslogo2.png';

import { Menu } from './components/Menu/Menu.tsx'
import { ShoppingCart } from 'phosphor-react';

export function Header() {
  return (
    <Styled.Container>
      <Styled.ImageLogo src={hiedasLogo} alt="Logo do Ignite" />
      <Styled.CartStore onClick={() => console.log("Herree")}>
        <ShoppingCart size={24} />
      </Styled.CartStore>
    </Styled.Container>
  );
}