import styled from "styled-components";

export const Container = styled.section` 
  display: flex;
  margin-top: 12rem;
  width: 100%;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  @media (max-width: 768px) {
    margin-top: 6rem;
  }
`;

export const ContainerTable = styled.section` 
  display: flex;
  align-items: center;
  width: 90%;
  flex-direction: column;
`;

export const Title = styled.text`
  text-align: center;
  font-size: 1.6rem;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const ContainerDate = styled.section`
  display: flex;
  max-width: 850px;
  min-width: 850px;
  flex-direction: row;
  margin-bottom: 2rem;
  justify-content: space-between;
  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    max-width: 180px;
    min-width: 180px;
  }
`;

export const ContainerDateRow = styled.section``;

