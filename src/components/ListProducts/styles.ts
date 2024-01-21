import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  flex-direction: column;
  align-items: center;
`;
export const ContainerProduct = styled.section`
  display: flex;
  max-width: 100rem;
  @media (max-width: 768px) {
    max-width: 80rem;
    max-height: 50rem;
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
  border-radius: 5px;
  justify-content: center;
  position: relative;
  padding-bottom: 1rem;
  max-width: 285px; 
  min-width: 285px; 
  max-height: 410px;
  min-height: 410px;
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
    padding: .3rem;
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
    object-fit: contain;
    width: 8rem;
    height: 8rem;
  }
`;