import styled from 'styled-components'

export const Container = styled.header`
  background: #2d3436;
  display: flex;
  flex: 1;
  justify-content: center;
  z-index: 1000;
  padding: 0.25rem 0;
  width: 100%;
  width: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const ImageLogo = styled.img`
  width: 4rem;
`;

export const CartStore = styled.div`
  position: absolute;
  right: 100px;
  top: 90px;
  z-index: 1000;
  background-color: transparent;

  @media (max-width: 768px) {
    right: 1rem;
  }
`;
export const LogoContainer = styled.div`
  position: absolute;
  left: 100px;
  top: 15px;
  background-color: transparent;

  @media (max-width: 768px) {
    left: 1rem;
  }
`;

