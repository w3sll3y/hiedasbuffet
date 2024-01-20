import styled from 'styled-components'

export const Container = styled.header`
  background: #202024;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 1.25rem 0;
  width: 100%;
`;
export const ImageLogo = styled.img`
  width: 4rem;
`;

export const CartStore = styled.div`
  position: absolute;
  right: 100px;
  top: 30px;
  background-color: transparent;

  @media (max-width: 768px) {
    right: 20px;
  }
`;