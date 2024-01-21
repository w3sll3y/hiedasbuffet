import * as Styled from './styles';
import { useKeenSlider } from 'keen-slider/react';

import 'keen-slider/keen-slider.min.css';
import { useEffect, useState } from 'react';
type Teste = {
  hasTitle: boolean,
  title?: string,
  quantity: number
}

type Product = {
  id: number,
  name: string,
  category: string[],
  price: number,
  description: string,
  url: string,
  availability: boolean,
  emphasis: boolean,
}

export default function ListProducts(props) {

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

      <Styled.ContainerProduct ref={sliderRef} className="keen-slider">
        {
          data?.map(data => (
            data?.emphasis && props?.title === "Destaques" && (
              <Styled.ImageContainer key={data?.id} className="keen-slider__slide">
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
            <Styled.ImageContainer key={data?.id} className="keen-slider__slide">
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