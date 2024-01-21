import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  background-color: green;
  max-width: 90%;
  margin-top: 5rem;
  align-items: center;
`;
export const ContainerProduct = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 768px) {
    max-width: 80rem;
    max-height: 50rem;
  }
`;

export const Product = styled.section`
  @media (max-width: 768px) {
    /* display: none; */
  }
`;
export const ImageContainer = styled.section`
  justify-content: center;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  padding-bottom: 1rem;
  max-width: 285px; 
  min-width: 285px; 
  max-height: 410px;
  min-height: 410px;
  margin: 2rem 3rem 1rem 0;
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
  border-radius: 0 0 5px 5px;
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
  object-fit: cover;
@media (max-width: 768px) {
    object-fit: contain;
    width: 8rem;
    height: 8rem;
  }
`;