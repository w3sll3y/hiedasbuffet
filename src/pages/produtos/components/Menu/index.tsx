import * as Styled from './styled';

export default function MenuProdutos() {
  let menuArray = [
    "Todos os itens",
    "A MINHA FESTA",
    "ALMOFADA",
    "BOLEIRA",
    "CADEIRAS / POLTRONAS / SOFÁS / PUFF'S / BANCOS",
    "CARRINHO",
    "CASTIÇAIS",
    "ESPELHOS",
    "KIT MONTE FÁCIL",
    "LUMINÁRIAS/LUMINOSOS",
    "MÓBILIAS / MÓVEIS",
    "PAINEIS",
    "PEÇAS",
    "PELÚCIAS",
    "PERSONAGENS",
    "SOUSPLAT",
    "TAPETE",
    "TECIDO",
    "FLORES / ARRANJOS / FOLHAGENS"
  ]
  return (
    <Styled.Container>
      {menuArray.map(e => (
        <Styled.UlProduct>
          <Styled.LiProduct>
            <Styled.ButtonList onClick={e => console.log(e.target.innerText)}>{e}</Styled.ButtonList>
          </Styled.LiProduct>
        </Styled.UlProduct>
      ))
      }
    </Styled.Container>
  )
}