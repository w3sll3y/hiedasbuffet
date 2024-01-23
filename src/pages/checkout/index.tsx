import { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import * as Styled from './styled';

import TableItems from './components/TableItems';

export default function Checkout() {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  async function handleGetData() {
    const storedObj = JSON.parse(localStorage.getItem('@cart'));
    await setData(storedObj);
    return
  }

  function formatarData(data) {
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear() % 100;

    const diaFormatado = dia < 10 ? `0${dia}` : dia;
    const mesFormatado = mes < 10 ? `0${mes}` : mes;
    const anoFormatado = ano < 10 ? `0${ano}` : ano;

    return `${diaFormatado}/${mesFormatado}/${anoFormatado}`;
  }

  useEffect(() => {
    handleGetData();
  }, [])

  return (
    <Styled.Container>
      <Styled.ContainerTable>
        <Styled.Title>
          {console.log('Start', startDate)}
          {console.log('end', endDate)}
          Meu carrinho
        </Styled.Title>
        <Styled.ContainerDate>
          <div>
            De: <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div>
            Para: <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
            />
          </div>
        </Styled.ContainerDate>
        <TableItems data={data} startDate={formatarData(startDate)} endDate={formatarData(endDate)} />
      </Styled.ContainerTable>
    </Styled.Container>
  )
}