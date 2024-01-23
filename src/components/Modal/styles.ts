import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  border-radius: 15px;
  width: 70rem;
  height: 50rem;
  flex: 1;
  position: relative;
  left: 0;
  overflow: hidden;
  right: 0;
  top: 3rem;
  margin: 0 auto;
  background-color: white;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    max-width: 95%;
    height: 30rem;
    justify-content: space-between;
    flex-direction: column;
  }
`;

export const ContainerImg = styled.div`
  background-color: #2d3436;  
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    max-height: 50%;
    flex-direction: column;
  }
`;

export const ImgItem = styled.img`
  width: 35rem;
  @media (max-width: 768px) {
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const ContainerDescriptionTitle = styled.text`
  font-weight: 600;
  font-size: 1.6rem;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ContainerDescriptionCategory = styled.text`
  font-style: italic;
  font-size: 12px;
  text-transform: lowercase;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const ContainerDescriptionText = styled.text`
  margin-top: 5rem;
  max-width: 70%;
  @media (max-width: 768px) {
    margin-top: 15px;
    max-width: 100%;
    font-size: 12px;
  }
`;

export const ContainerDescription = styled.div`
  height: 100%;
  padding: 25px 15px;
  color: #2d3436;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    margin-top: 25px;
  }
`;

export const ContainerPrice = styled.div`
  margin-top: 5rem;
  font-size: 1.2rem;
  color: #74b9ff ;
  font-style: italic;
  @media (max-width: 768px) {
    margin-top: 15px;
    max-width: 100%;
    font-size: 12px;
  }
`;

export const ButtonModalContainer = styled.div`
  margin-top: 5rem;
  @media (max-width: 768px) {
    margin-top: 5px;
    font-size: 12px;
  }
`;

export const ButtonModal = styled.button`
  padding: 15px;
  font-size: 1rem;
  background-color: #00B37E;
  text-transform: lowercase;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #00875f;
  }
  @media (max-width: 768px) {
    padding: 5px;
    margin-top: 15px;
    font-size: 14px;
  }
`;