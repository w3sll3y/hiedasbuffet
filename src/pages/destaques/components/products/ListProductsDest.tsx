import * as Styled from './styles';

import { useEffect, useState } from 'react';

export default function ListProductsDest(props) {

  const [data, setData] = useState(props?.data)

  useEffect(() => {
    setData(props?.data)
  }, [])
  return (
    <Styled.Container>
      <Styled.ContainerProduct>
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
      </Styled.ContainerProduct>
    </Styled.Container>

  )
}