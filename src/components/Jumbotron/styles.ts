import styled from 'styled-components'

export const Jumbotron = styled.section`
  margin: 2rem 20rem 0;
  border-bottom-width: 1;
  display: flex;
  flex-direction: row;
  border-color: red;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0 2rem;
  }
`;

export const ImageToHire = styled.img`
  width: 28rem;
  @media (max-width: 768px) {
    width: 16rem;
  }
`;

export const ContainerTextJumbotron = styled.text`
  display: flex;
  margin-top: 4rem;
  @media (max-width: 768px) {
  }
`;

export const TextJumbotron = styled.text`
  max-width: 70%;
  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 10px;
  }
`;


