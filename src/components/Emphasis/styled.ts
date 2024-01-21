import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 10rem 0 0 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SlideShow = styled.div`
  max-width: 100rem;
  position: relative;
`;

export const Indicators = styled.div`
  width: 1rem;
  border-radius: 50%;
  position: relative;
  margin-top: -50px;
  z-index: 1000;
`;
