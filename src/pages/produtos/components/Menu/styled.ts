import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: row;
`;

export const UlProduct = styled.ul`
list-style-type: none;
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