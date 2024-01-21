
import * as Styled from './App.module.ts';

import Home from '../src/pages/home/index.tsx';
import Destaques from '../src/pages/destaques/index.tsx'
import Produtos from '../src/pages/produtos/index.tsx'
import './global.css'
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <Styled.Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destaques" element={<Destaques />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
    </Styled.Container>
  )
}

export default App