import { useState } from 'react';
import Footer from '../../components/Footer';
import { Header } from '../../components/Header/Header';
import { ListOfProducts } from '../../data/products';
import ListProducts from './components/ListProduts/ListProducts';
import MenuProdutos from './components/Menu';
import * as Styled from './styled';

export default function Produtos() {
  const [filter, setFilter] = useState('todos')

  async function handleFilter(data: string) {
    setFilter(data)
  }

  return (
    <>
      <Header />
      <Styled.Container>
        <Styled.ContainerProduct>
          <Styled.MenuContainer>
            <MenuProdutos handleFilter={handleFilter} />
          </Styled.MenuContainer>
          <Styled.ProdutosContainer>
            <ListProducts data={ListOfProducts} filter={filter} />
          </Styled.ProdutosContainer>
        </Styled.ContainerProduct>
      </Styled.Container>
      <Footer />
    </>
  )
}