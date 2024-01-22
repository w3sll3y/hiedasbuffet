import styled from 'styled-components'

export const Jumbotron = styled.section`
  margin: 2rem 20rem 0;
  border-bottom-width: 1;
  display: flex;
  flex-direction: row;
  background-color: green;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 2rem ;
  }
`;

export const ImageToHire = styled.img`
  flex: 1;
  width: 28rem;
  @media (max-width: 768px) {
    width: 16rem;
  }
`;

export const ContainerTextJumbotron = styled.text`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
`;

export const TextJumbotron = styled.text`
  max-width: 50%; 
`;


