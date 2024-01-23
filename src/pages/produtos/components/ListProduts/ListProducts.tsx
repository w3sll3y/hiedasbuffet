import * as Styled from './styles';
import Modal from '@mui/material/Modal';
import ModalItem from '../../../../components/Modal';

import 'keen-slider/keen-slider.min.css';
import { useEffect, useState } from 'react';

export default function ListProducts(props) {

  const [data, setData] = useState(props?.data)
  const [dataOnModal, setDataOnModal] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  async function handleSetDataOnModal(data) {
    setDataOnModal(data);
    handleOpen();
    return;
  };

  useEffect(() => {
    setData(props?.data);
  }, []);

  return (
    <Styled.ContainerProduct >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalItem data={dataOnModal} />
      </Modal>
      {
        data.map(item => props?.filter === 'todos' && (
          <Styled.ImageContainer onClick={() => handleSetDataOnModal(item)}>
            <Styled.ImageProduct src={item?.url} />
            <Styled.FooterProduct>
              <Styled.FooterProductDescription>
                {item?.name}
              </Styled.FooterProductDescription>
              <Styled.FooterProductPrice>
                R$ {item?.price}
              </Styled.FooterProductPrice>
            </Styled.FooterProduct>
          </Styled.ImageContainer>
        ))
      }

      {
        props?.filter != 'todos' &&
        data.map(item => (
          <>
            {
              item?.category.map(category => (
                <>
                  {category === props?.filter && (
                    <Styled.ImageContainer onClick={() => handleSetDataOnModal(item)}>
                      <Styled.ImageProduct src={item?.url} />
                      <Styled.FooterProduct>
                        <Styled.FooterProductDescription>
                          {item?.name}
                        </Styled.FooterProductDescription>
                        <Styled.FooterProductPrice>
                          R$ {item?.price}
                        </Styled.FooterProductPrice>
                      </Styled.FooterProduct>
                    </Styled.ImageContainer>
                  )}
                </>
              ))
            }
          </>
        ))
      }
    </Styled.ContainerProduct>

  )
}