import styled from "styled-components";

export const SectionContainer = styled.section`
  padding: 4rem 3rem;
  max-width: 1440px;
  margin: 0 auto;
  font-family: "Inter", sans-serif;
  background-color: #fff;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

export const Header = styled.div`
  margin-bottom: 3rem;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f1f1f;
  margin: 0 0 0.5rem 0;
`;

export const SubTitle = styled.p`
  font-size: 1.125rem;
  color: #666;
  margin: 0;
  font-weight: 400;
`;

export const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  aspect-ratio: 4/3;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const CardOverlay = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  right: 1.5rem;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  padding: 1rem 1.5rem;
  border-radius: 100px; /* Pill shape */
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(255, 255, 255, 0.4);
`;

export const CategoryName = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f1f1f;
`;

export const ArrowButton = styled.div`
  width: 32px;
  height: 32px;
  background-color: #343434;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: background-color 0.2s;

  &::after {
    content: "→";
    font-size: 1.25rem;
    line-height: 1;
    margin-bottom: 2px; /* optical adjustment */
  }

  ${CardOverlay}:hover & {
    background-color: #000;
  }
`;
