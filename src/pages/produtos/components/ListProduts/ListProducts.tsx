import * as Styled from './styles';

import 'keen-slider/keen-slider.min.css';
import { useEffect, useState } from 'react';
import { Header } from '../../../../components/Header/Header';
type Teste = {
  hasTitle: boolean,
  title?: string,
  quantity: number
}

export default function ListProducts(props) {

  const [data, setData] = useState(props?.data)

  useEffect(() => {
    setData(props?.data)
  }, [])

  return (
    <Styled.ContainerProduct >
      {
        data.map(item => (
          <Styled.ImageContainer>
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
    </Styled.ContainerProduct>

  )
}