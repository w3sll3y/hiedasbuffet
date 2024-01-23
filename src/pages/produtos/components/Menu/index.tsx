import * as Styled from './styled';

import { ListOfProducts } from '../../../../data/products';
import { useEffect, useState } from 'react';

export default function MenuProdutos(props) {
  const [repeatCategories, setRepeatCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [reHandle, setReHandle] = useState(0);

  async function addCategories() {
    ListOfProducts.map(data => {
      data?.category.map(item => {
        setRepeatCategories(prevState => [...prevState, item]);
      })
    });
    handlePutCategories();
  }

  async function handleFilterChild(value: string) {
    props.handleFilter(value)
  }

  function removerItensRepetidos(arrayOriginal) {
    const setUnico = new Set(arrayOriginal);

    const arrayUnico = [...setUnico];

    return arrayUnico;
  }

  async function handlePutCategories() {
    const data = removerItensRepetidos(repeatCategories);
    setCategories(data);
  }

  useEffect(() => {
    addCategories();
  }, []);

  useEffect(() => {
    handlePutCategories();
  }, [reHandle])

  useEffect(() => {
    setTimeout(() => {
      setReHandle(1)
    }, 500)
  }, [])

  return (
    <Styled.Container>
      <Styled.UlProduct>
        <Styled.ButtonListAll onClick={() => handleFilterChild('todos')}>Todos</Styled.ButtonListAll>
        {categories.map(e => (
          <Styled.LiProduct>
            <Styled.ButtonList onClick={e => handleFilterChild(e.target.innerText)}>{e}</Styled.ButtonList>
          </Styled.LiProduct>
        ))
        }
      </Styled.UlProduct>
    </Styled.Container>
  )
}