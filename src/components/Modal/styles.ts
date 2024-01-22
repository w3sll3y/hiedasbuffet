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
`;

export const ContainerImg = styled.div`
  background-color: #2d3436;  
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgItem = styled.img`
  width: 35rem;
`;

export const ContainerDescriptionTitle = styled.text`
  font-weight: 600;
  font-size: 1.6rem;
`;

export const ContainerDescriptionCategory = styled.text`
  font-style: italic;
  font-size: 12px;
  text-transform: lowercase;
`;

export const ContainerDescriptionText = styled.text`
  margin-top: 5rem;
  max-width: 70%;
`;

export const ContainerDescription = styled.div`
  height: 100%;
  padding: 25px 15px;
  color: #2d3436;
  display: flex;
  flex-direction: column;
`;

export const ContainerPrice = styled.div`
  margin-top: 5rem;
  font-size: 1.2rem;
  color: #74b9ff ;
  font-style: italic;
`;

export const ButtonModalContainer = styled.div`
  margin-top: 5rem;
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
`;