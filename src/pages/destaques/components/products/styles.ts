import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  flex-direction: column;
  align-items: center;
`;
export const ContainerProduct = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 100rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;


export const Title = styled.text`
  font-size: 1.6rem;
  margin-bottom: 3rem;
`;

export const Product = styled.section`
  @media (max-width: 768px) {
    /* display: none; */
  }
`;
export const ImageContainer = styled.section`
  background-color: white;
  margin: 2rem 3rem 1rem 0;
  border-radius: 5px;
  overflow: hidden;
  justify-content: center;
  position: relative;
  padding-bottom: 1rem;
  max-width: 350px; 
  min-width: 350px; 
  max-height: 390px;
  min-height: 390px;
  margin-right: 3rem;
  flex-direction: column;
  align-items: center;
  display: flex;
  @media (max-width: 768px) {
    margin-right: 1rem;
  }
`;
export const FooterProduct = styled.div`
  z-index: 1000;
  background-color: #ffeaa7;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  @media (max-width: 768px) {
    padding: .8rem;
  }
`;
export const FooterProductDescription = styled.div`
  color: #2d3436;
  @media (max-width: 768px) {
    font-size: .6em;
  }
`;

export const FooterProductPrice = styled.div`
  color: #2d3436;
  @media (max-width: 768px) {
    font-size: .5rem;
  }
`;

export const ImageProduct = styled.img`
object-fit: contain;
@media (max-width: 768px) {
    object-fit: cover;
    width:  100%; 
    height: 100%;
  }
`;

export const ModalContainer = styled.section`
  width: 70rem;
  height: 50rem;
  flex: 1;
  position: absolute;
  left: 0;
  right: 0;
  top: 3rem;
  margin: 0 auto;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;