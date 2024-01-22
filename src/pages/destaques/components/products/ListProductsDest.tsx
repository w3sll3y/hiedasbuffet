import { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';

import * as Styled from './styles';
import ModalItem from '../../../../components/Modal';


export default function ListProductsDest(props) {

  const [data, setData] = useState(props?.data)
  const [dataOnModal, setDataOnModal] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  async function handleSetDataOnModal(data) {
    setDataOnModal(data);
    handleOpen();
    return
  }

  const chooseMessage = (message) => {
    setOpen(message);
  };

  useEffect(() => {
    setData(props?.data)
  }, []);

  return (
    <Styled.Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalItem data={dataOnModal} chooseMessage={chooseMessage} />
      </Modal>
      <Styled.ContainerProduct>
        {
          data?.map(data => (
            data?.emphasis && props?.title === "Destaques" && (
              <Styled.ImageContainer onClick={() => handleSetDataOnModal(data)} key={data?.id} className="keen-slider__slide">
                <Styled.ImageProduct src={data?.url} />
                <Styled.FooterProduct>
                  <Styled.FooterProductDescription>
                    {data?.name}
                  </Styled.FooterProductDescription>
                  <Styled.FooterProductPrice>
                    R$ {data?.price}
                  </Styled.FooterProductPrice>
                </Styled.FooterProduct>
              </Styled.ImageContainer>
            )
          ))
        }
      </Styled.ContainerProduct>
    </Styled.Container>

  )
}