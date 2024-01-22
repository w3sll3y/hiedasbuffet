import { useEffect, useState } from 'react';
import * as Styled from './styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ModalItem(props) {
  const [data, setData] = useState(props?.data);
  const [modalOpen, setModalOpen] = useState(true);

  const notify = () => toast.success("Produto adicionado!");
  const notifyErr = (err) => toast.error(err);

  async function handleDataOnAsync(data: any) {
    try {
      // localStorage.clear()
      console.log('herre')
      var get = localStorage.getItem('@cart');
      console.log('get', get)
      if (get === null) {
        await localStorage.setItem('@cart', JSON.stringify([data]));
      }
      else if (get != null) {
        var get2 = JSON.parse(localStorage.getItem('@cart'));
        await localStorage.clear();
        await localStorage.setItem('@cart', JSON.stringify([...get2, data]));
      }
      await notify();
      // props.chooseMessage(!modalOpen);
    } catch (error) {
      notifyErr(error)
    }
  }

  useEffect(() => {
    setData(props?.data);
  }, []);

  return (
    <Styled.Container>
      <Styled.ContainerImg>
        <Styled.ImgItem src={data?.url} />
      </Styled.ContainerImg>
      <Styled.ContainerDescription>
        <Styled.ContainerDescriptionTitle>
          {console.log(data)}
          {data?.name}
        </Styled.ContainerDescriptionTitle>
        {data?.category.map(item => (
          <Styled.ContainerDescriptionCategory>
            {item}
          </Styled.ContainerDescriptionCategory>
        ))}
        <Styled.ContainerDescriptionText>
          {data?.description}
        </Styled.ContainerDescriptionText>
        <Styled.ContainerPrice>
          R$ {data?.price}
        </Styled.ContainerPrice>
        <Styled.ButtonModalContainer>
          <Styled.ButtonModal onClick={() => handleDataOnAsync(data)}>Adicionar ao carrinho</Styled.ButtonModal>
        </Styled.ButtonModalContainer>
      </Styled.ContainerDescription>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Styled.Container>
  )
}