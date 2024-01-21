import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const ContainerProduct = styled.section`
  display: flex;
  max-width: 100rem;
  @media (max-width: 768px) {
    display: none;
  }
`;


export const Title = styled.text`
  font-size: 1.6rem;
  margin-bottom: 2rem;
`;

export const Product = styled.section`
  @media (max-width: 768px) {
    display: none;
  }
`;
export const ImageContainer = styled.section`
  background-color: white;
  border-radius: 5px;
  justify-content: center;
  padding-bottom: 1rem;
  margin-right: 3rem;
  flex-direction: column;
  align-items: center;
  display: flex;
`;
export const FooterProduct = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0 1rem;
`;
export const FooterProductDescription = styled.div`
  color: #2d3436;
`;

export const FooterProductPrice = styled.div`
  color: #2d3436;
`;

export const ImageProduct = styled.img`
object-fit: cover;
@media (max-width: 768px) {
    display: none;
  }
`;