import styled, { css } from "styled-components";

export const Container = styled.section``;

export const TotalContainer = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const TotalText = styled.text`
  font-weight: 600;
`;

export const ButtonsContainer = styled.section`
  display: flex;
  justify-content: space-around;
`;

export const CancelButton = styled.button`
  flex: 1;
  background-color: #ff7675;
  border: none;
  color: white;
  font-weight: 600;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px;
  ${({ outline }) =>
    outline &&
    css`
      border-width: .5px;
      background-color: transparent;
      border-style: solid;
      color: #ff7675;
      border-color: #ff7675;
    `}
`;

export const SendButton = styled.button<{ outline: boolean }>`
  flex: 1;
  background-color: #00b894;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  margin-left: 1rem;
  cursor: pointer;
  padding: 10px;  
  ${({ outline }) =>
    outline &&
    css`
      border-width: .5px;
      background-color: transparent;
      border-style: solid;
      color: #00b894;
      margin-left: 0;
      border-color: #00b894;
    `}
`;