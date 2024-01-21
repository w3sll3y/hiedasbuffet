import * as Styled from './styles';
import { useKeenSlider } from 'keen-slider/react';

import ProducImg from '../../assets/products/Camisa-Maratona 1.png'

import 'keen-slider/keen-slider.min.css';

export default function Products() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 5
    }
  })
  return (
    <Styled.Container>

      <Styled.Title>
        Destaques
      </Styled.Title>
      <Styled.ContainerProduct ref={sliderRef} className="keen-slider">
        <Styled.ImageContainer className="keen-slider__slide">
          <Styled.ImageProduct src={ProducImg} width={285} height={410} />
          <Styled.FooterProduct>
            <Styled.FooterProductDescription>
              Lorem ipsum dolor sit
            </Styled.FooterProductDescription>
            <Styled.FooterProductPrice>
              R$ 99,00
            </Styled.FooterProductPrice>
          </Styled.FooterProduct>
        </Styled.ImageContainer>

        <Styled.ImageContainer className="keen-slider__slide">
          <Styled.ImageProduct src={ProducImg} width={285} height={410} />
          <Styled.FooterProduct>
            <Styled.FooterProductDescription>
              Lorem ipsum dolor sit
            </Styled.FooterProductDescription>
            <Styled.FooterProductPrice>
              R$ 99,00
            </Styled.FooterProductPrice>
          </Styled.FooterProduct>
        </Styled.ImageContainer>

        <Styled.ImageContainer className="keen-slider__slide">
          <Styled.ImageProduct src={ProducImg} width={285} height={410} />
          <Styled.FooterProduct>
            <Styled.FooterProductDescription>
              Lorem ipsum dolor sit
            </Styled.FooterProductDescription>
            <Styled.FooterProductPrice>
              R$ 99,00
            </Styled.FooterProductPrice>
          </Styled.FooterProduct>
        </Styled.ImageContainer>

        <Styled.ImageContainer className="keen-slider__slide">
          <Styled.ImageProduct src={ProducImg} width={285} height={410} />
          <Styled.FooterProduct>
            <Styled.FooterProductDescription>
              Lorem ipsum dolor sit
            </Styled.FooterProductDescription>
            <Styled.FooterProductPrice>
              R$ 99,00
            </Styled.FooterProductPrice>
          </Styled.FooterProduct>
        </Styled.ImageContainer>

        <Styled.ImageContainer className="keen-slider__slide">
          <Styled.ImageProduct src={ProducImg} width={285} height={410} />
          <Styled.FooterProduct>
            <Styled.FooterProductDescription>
              Lorem ipsum dolor sit
            </Styled.FooterProductDescription>
            <Styled.FooterProductPrice>
              R$ 99,00
            </Styled.FooterProductPrice>
          </Styled.FooterProduct>
        </Styled.ImageContainer>

        <Styled.ImageContainer className="keen-slider__slide">
          <Styled.ImageProduct src={ProducImg} width={285} height={410} />
          <Styled.FooterProduct>
            <Styled.FooterProductDescription>
              Lorem ipsum dolor sit
            </Styled.FooterProductDescription>
            <Styled.FooterProductPrice>
              R$ 99,00
            </Styled.FooterProductPrice>
          </Styled.FooterProduct>
        </Styled.ImageContainer>

        <Styled.ImageContainer className="keen-slider__slide">
          <Styled.ImageProduct src={ProducImg} width={285} height={410} />
          <Styled.FooterProduct>
            <Styled.FooterProductDescription>
              Lorem ipsum dolor sit
            </Styled.FooterProductDescription>
            <Styled.FooterProductPrice>
              R$ 99,00
            </Styled.FooterProductPrice>
          </Styled.FooterProduct>
        </Styled.ImageContainer>

        <Styled.ImageContainer className="keen-slider__slide">
          <Styled.ImageProduct src={ProducImg} width={285} height={410} />
          <Styled.FooterProduct>
            <Styled.FooterProductDescription>
              Lorem ipsum dolor sit
            </Styled.FooterProductDescription>
            <Styled.FooterProductPrice>
              R$ 99,00
            </Styled.FooterProductPrice>
          </Styled.FooterProduct>
        </Styled.ImageContainer>
      </Styled.ContainerProduct>
    </Styled.Container>

  )
}