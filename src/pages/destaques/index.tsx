
import * as Styled from './styled.ts';
import ListProductsDest from './components/products/ListProductsDest.tsx';
import Footer from '../../components/Footer/index.tsx';
import { Header } from '../../components/Header/Header.tsx';
import { useEffect } from 'react';
import { ListOfProducts } from '../../data/products.ts';

export default function Destaques() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Styled.Container>
      <Header />
      <ListProductsDest hasTitle={true} title="Destaques" data={ListOfProducts} />
      <Footer />
    </Styled.Container>
  )
}
