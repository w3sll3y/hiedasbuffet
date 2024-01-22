import { useEffect, useState } from 'react';
import * as Styled from './styled';

import TableItems from './components/TableItems';

export default function Checkout() {
  const [data, setData] = useState([]);

  async function handleGetData() {
    const storedObj = JSON.parse(localStorage.getItem('@cart'));
    await setData(storedObj);
    return
  }
  useEffect(() => {
    handleGetData();
  }, [])

  return (
    <Styled.Container>
      <Styled.ContainerTable>
        <Styled.Title>
          Meu carrinho
        </Styled.Title>
        <TableItems data={data} />
      </Styled.ContainerTable>
    </Styled.Container>
  )
}