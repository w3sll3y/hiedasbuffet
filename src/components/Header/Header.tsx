import * as Styled from './HeaderMod.module.ts';

import hiedasLogo from '../../assets/hiedaslogo2.png';

export function Header() {
  return (
    <Styled.Container>
      <Styled.ImageLogo src={hiedasLogo} alt="Logo do Ignite" />
    </Styled.Container>
  );
}