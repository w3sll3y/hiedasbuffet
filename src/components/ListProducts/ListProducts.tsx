import * as Styled from './styles';
import { useKeenSlider } from 'keen-slider/react';
import Modal from '@mui/material/Modal';
import 'keen-slider/keen-slider.min.css';
import { useEffect, useState } from 'react';
import ModalItem from '../Modal';

export default function ListProducts(props) {
  const [dataOnModal, setDataOnModal] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  async function handleSetDataOnModal(data) {
    setDataOnModal(data);
    handleOpen();
    return
  }

  const [data, setData] = useState(props?.data)
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 4
    },
  })

  useEffect(() => {
    setData(props?.data)
  }, [])
  return (
    <Styled.Container>
      {props?.hasTitle && (
        <Styled.Title>
          {props?.title}
        </Styled.Title>
      )
      }

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalItem data={dataOnModal} />
      </Modal>

      <Styled.ContainerProduct ref={sliderRef} className="keen-slider">
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

        {
          data?.map(data => (
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
          )
        }
      </Styled.ContainerProduct>
    </Styled.Container>

  )
}