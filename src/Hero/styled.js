import styled from "styled-components";

export const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 64px;
  max-width: 1089px;
  margin: 119px auto;
  align-items: center;
`;

export const HeroImage = styled.img`
  max-width: 398px;
  max-height: 398px;
  flex-shrink: 0;
  border-radius: 50%;
  margin-top: -30px;
`;

export const HeroContent = styled.div`
  margin-top: -30px;
`;

export const Admission = styled.p`
  font-size: 12px;
  font-weight: 700px;
`;

export const Person = styled.header`
  font-size: 38px;
  font-weight: 900;
  letter-spacing: 1.9px;
  margin-top: 12px;
`;

export const Description = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 1px;
  margin-top: 35px;
  margin-bottom: 32px;
`;

export const ContactButton = styled.button`
  display: inline-flex;
  cursor: pointer;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.scienceBlue};
  background-color: ${({ theme }) => theme.color.scienceBlue};
`;


