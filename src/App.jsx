import { Header } from "./components/Header/Header.jsx"

import * as Styled from './App.module.ts';
import { Jumbotron } from './components/Jumbotron/Jumbotron.tsx'

import './global.css'
import { Route, Routes } from "react-router-dom";
import { Menu } from "./components/Header/components/Menu/Menu.tsx";

function App() {

  return (
    <Styled.Container>
      <Header />
      <Menu />
      <Routes>
        <Route path="/about" element={<App />} />
      </Routes>
      <Jumbotron />
    </Styled.Container>
  )
}

export default App