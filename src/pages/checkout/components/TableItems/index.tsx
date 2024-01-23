import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { ToastContainer, toast } from 'react-toastify';
import { Trash } from 'phosphor-react';

import * as Styled from './styled';
import { useEffect, useState } from 'react';

export default function TableItems(props) {
  const [data, setData] = useState(props?.data);
  const [reHandle, setReHandle] = useState(0);
  const [reHandle2, setReHandle2] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const notifyErr = (err) => toast.error(err);

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenToSend = () => {
    setOpen2(true);
  };

  const handleCloseToSend = () => {
    setOpen2(false);
  };

  function formatarData(data) {
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear() % 100;

    const diaFormatado = dia < 10 ? `0${dia}` : dia;
    const mesFormatado = mes < 10 ? `0${mes}` : mes;
    const anoFormatado = ano < 10 ? `0${ano}` : ano;

    return `${diaFormatado}/${mesFormatado}/${anoFormatado}`;
  }

  async function handleClearStorage() {
    localStorage.clear();
    setData([]);
    setTotalPrice(0);
    handleClose();
  };

  async function handleCalcTotalPrice() {
    let total = 0;
    data.map(item => {
      total = (item?.price * item?.quantity) + total;
    })
    setTotalPrice(total);
  };

  const filtrarObjetosUnicos = (array) => {
    const objetosUnicos = {};
    array.forEach((objeto) => {
      if (objetosUnicos[objeto.id]) {
        objetosUnicos[objeto.id].quantity += objeto.quantity;
      } else {
        objetosUnicos[objeto.id] = { ...objeto };
      }
    });
    const arrayUnico = Object.values(objetosUnicos);
    return arrayUnico;
  };

  async function handleRemoveItem(item) {
    console.log('uteeem', item)
    let newData = data.filter(objeto => objeto?.id !== item?.id);
    await localStorage.setItem('@cart', JSON.stringify(newData));
    await setData(newData);
  }

  async function handleSendBudget() {
    console.log(props)
    const startData = props?.startDate;
    console.log(startData)
    const endData = props?.endDate;
    console.log(endData)
    const today = formatarData(new Date());
    console.log(today)

    if (startData < today) {
      return notifyErr('A data de busca deve ser maior que a de hoje');
    } else if (startData > endData) {
      return notifyErr('A data de devolução deve ser maior que a de retirada');
    }

    const dataToSend =
      `Olá, vim pelo _Site_, e gostaria de solicitar o orçamento para reservar os seguintes itens:
      ${data.map(item => `*Item:* - ${item?.name} - *Quantidade:* ${item?.quantity}\n`).join('\n')}
      Com previsão de retirada para: ${startData} e devolção para: ${endData}
      `

    const mensagemCodificada = encodeURIComponent(dataToSend);
    const url = `https://web.whatsapp.com/send?phone=558592521919&text=${mensagemCodificada}`;
    window.open(url, '_blank');
    setOpen2(false)
  }

  useEffect(() => {
    setData(props?.data);
  }, [reHandle]);

  useEffect(() => {
    const newArr = filtrarObjetosUnicos(data);
    setData(newArr);
    setTimeout(() => {
      handleCalcTotalPrice();
    }, 850)
  }, [reHandle2]);

  useEffect(() => {
    setTimeout(() => {
      setReHandle(1)
    }, 500)
    setTimeout(() => {
      setReHandle2(1)
    }, 700)
  }, []);

  useEffect(() => {
    handleCalcTotalPrice();
  }, [data]);

  return (
    <TableContainer component={Paper} style={{ backgroundColor: 'white', maxWidth: 850, marginBottom: 25 }}>
      <Table sx={{ minWidth: 450 }} aria-label="caption table">
        <caption style={{ backgroundColor: '#dfe6e9' }}>
          <Styled.TotalContainer>
            <Styled.TotalText>Total:</Styled.TotalText>
            <Styled.TotalText>R${totalPrice.toFixed(2)}</Styled.TotalText>
          </Styled.TotalContainer>
        </caption>

        <caption style={{ backgroundColor: '#dfe6e9' }}>
          <Styled.ButtonsContainer>
            <Styled.CancelButton outline={false} onClick={handleClickOpen} >Cancelar</Styled.CancelButton>
            <Styled.SendButton outline={false} onClick={handleClickOpenToSend}>Pedir Orcamento</Styled.SendButton>
          </Styled.ButtonsContainer>
        </caption>

        <TableHead>
          <TableRow >
            <TableCell style={{ fontWeight: 'bold' }}>Item</TableCell>
            <TableCell align="right" style={{ fontWeight: 'bold' }}>Quantidade</TableCell>
            <TableCell align="right" style={{ fontWeight: 'bold' }}>Preco</TableCell>
            <TableCell align="right" style={{ fontWeight: 'bold' }}>Total</TableCell>
            <TableCell align="right" style={{ fontWeight: 'bold', textAlign: 'center' }}>Excluir</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((item, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {item?.name}
              </TableCell>
              <TableCell align="right">{item?.quantity}</TableCell>
              <TableCell align="right">{item?.price}</TableCell>
              <TableCell align="right">{item?.price}</TableCell>
              <TableCell align="right"
                onClick={() => handleRemoveItem(item)}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <Trash color="#ff7675" size={18} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Cancelar o pedido"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Deseja realmente cancelar o pedido?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Styled.SendButton outline onClick={handleClose}>
            Continuar pedido
          </Styled.SendButton>
          <Styled.CancelButton onClick={() => handleClearStorage()}>
            Cancelar pedido
          </Styled.CancelButton>
        </DialogActions>
      </Dialog>

      <Dialog
        fullScreen={fullScreen}
        open={open2}
        onClose={handleCloseToSend}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Cancelar o pedido"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Solicitar orçamento por Whatsapp
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Styled.CancelButton outline onClick={handleCloseToSend}>
            Cancelar
          </Styled.CancelButton>
          <Styled.SendButton outline={false} onClick={() => handleSendBudget()}>
            Continuar
          </Styled.SendButton>
        </DialogActions>
      </Dialog>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </TableContainer>
  );
}