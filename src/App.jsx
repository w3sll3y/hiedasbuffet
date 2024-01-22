
import * as Styled from './App.module.ts';
import { Route, Routes } from "react-router-dom";
import './global.css'

import Home from '../src/pages/home/index.tsx';
import Destaques from '../src/pages/destaques/index.tsx';
import Produtos from '../src/pages/produtos/index.tsx';
import Checkout from '../src/pages/checkout/index.tsx';

function App() {

  return (
    <Styled.Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destaques" element={<Destaques />} />
        <Route path="/produtos" element={<Produtos />} />
        {/* <Route path="/sobre" element={<SobreNos />} /> */}
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Styled.Container>
  )
}

export default App