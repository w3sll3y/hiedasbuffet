
import * as Styled from './styled.ts';
import Emphasis from '../../components/Emphasis/Emphasis.tsx';
import { Jumbotron } from '../../components/Jumbotron/Jumbotron.tsx'
import Products from '../../components/Products/Products.tsx';
import ListProducts from '../../components/ListProducts/ListProducts.tsx';
import Footer from '../../components/Footer/index.tsx';
import { useEffect } from 'react';
import { ListOfProducts } from '../../data/products.ts';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Styled.Container>
      <Emphasis />
      <ListProducts hasTitle={true} title="Destaques" data={ListOfProducts} />
      <Jumbotron />
      <ListProducts hasTitle={true} title="Produtos" data={ListOfProducts} />
      <Footer />
    </Styled.Container>
  )
}
