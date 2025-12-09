import styled from "styled-components";

export const SectionContainer = styled.div`
  display: flex;
  background-color: #fffbf6; /* Light cream background */
  min-height: 80vh; /* Adjust height as needed */
  overflow: hidden;
  align-items: center;

  @media (max-width: 968px) {
    flex-direction: column;
    padding-bottom: 2rem;
  }
`;

export const TextSide = styled.div`
  flex: 1;
  padding: 4rem 2rem 4rem 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  z-index: 2;

  @media (max-width: 968px) {
    padding: 2rem;
    align-items: center;
    text-align: center;
  }
`;

export const Headline = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.1;
  color: #343434;
  margin-bottom: 1.5rem;

  .highlight {
    color: #f79522;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const SubText = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1.125rem;
  color: #555;
  margin-bottom: 2.5rem;
  max-width: 400px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const PrimaryButton = styled.button`
  background-color: #343434;
  color: #ffffff;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #1a1a1a;
    transform: translateY(-2px);
  }
`;

export const SecondaryButton = styled.button`
  background-color: transparent;
  color: #343434;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid #343434;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #e6e6e6;
    transform: translateY(-2px);
  }
`;

export const ImageSide = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end;

  /* The layout implies the image takes up the full right side */
  min-height: 600px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* This creates the large arch/rounded shape on the left side of the image */
  border-top-left-radius: 300px;
  border-bottom-left-radius: 300px;
  overflow: hidden;
  /* Ensure it doesn't spill over to the right if we want it flush */
  margin-left: 2rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 968px) {
    margin-left: 0;
    border-radius: 0;
    min-height: 300px;
    border-top-left-radius: 150px;
    border-bottom-left-radius: 150px;
    margin: 1rem;
  }
`;
