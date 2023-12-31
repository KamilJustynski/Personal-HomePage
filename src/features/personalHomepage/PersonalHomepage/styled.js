import styled from "styled-components";

export const Container = styled.div`
  max-width: 1248px;
  padding: 16px;
  margin: auto;
  margin-top: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 8px;
  }
`;
