import styled from "styled-components";

export const SectionContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #fffbf6; /* Matching the cream background from section 1/image */
  font-family: "Inter", sans-serif;
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
`;

export const IconWrapper = styled.div`
  margin-bottom: 1rem;
  font-size: 2.5rem; /* Size for react-icons */
  color: #1f1f1f;
`;

export const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f1f1f;
  margin: 0 0 0.5rem 0;
`;

export const SubTitle = styled.p`
  font-size: 0.875rem;
  color: #666;
  margin: 0;
  font-weight: 400;
`;
