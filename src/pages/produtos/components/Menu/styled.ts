import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: row;
  @media (max-width: 768px) {
    /* justify-content: safe; */
    display: grid;
  }
`;

export const UlProduct = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`;
export const LiProduct = styled.li`
  margin-right: 2rem;
`;

export const ButtonList = styled.button`
  margin: .5rem 0;
  cursor: pointer;
  font-size: 12px;
  background-color: transparent ;
  color: white;
  border: 0;
  &:hover {
    color: #cdc49c;
  }
`;

export const ButtonListAll = styled.button`
  margin: .5rem 0;
  cursor: pointer;
  margin-right: 2rem;
  font-size: 12px;
  background-color: transparent ;
  color: white;
  border: 0;
  &:hover {
    color: #cdc49c;
  }
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`;