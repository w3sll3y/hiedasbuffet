import Footer from '../../components/Footer';
import { Header } from '../../components/Header/Header';
import { ListOfProducts } from '../../data/products';
import ListProducts from './components/ListProduts/ListProducts';
import MenuProdutos from './components/Menu';
import * as Styled from './styled';

export default function Produtos() {

  return (
    <>
      <Header />
      <Styled.Container>
        <Styled.ContainerProduct>
          <Styled.MenuContainer>
            <MenuProdutos />
          </Styled.MenuContainer>
          <Styled.ProdutosContainer>
            <ListProducts data={ListOfProducts} />
          </Styled.ProdutosContainer>
        </Styled.ContainerProduct>
      </Styled.Container>
      <Footer />
    </>
  )
}