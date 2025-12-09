import styled from "styled-components";

export const SectionContainer = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: "Inter", sans-serif;
  background-color: #fff;
`;

export const Header = styled.div`
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #1f1f1f;
  margin: 0 0 0.5rem 0;
`;

export const SubTitle = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
  font-weight: 400;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  position: relative; /* For arrows if we add them later */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  border: 1px solid #eaeaea;
  border-radius: 12px;
  overflow: hidden;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  background-color: #f0f0f0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  padding: 1.5rem;
`;

export const ProductName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f1f1f;
  margin: 0 0 0.5rem 0;
`;

export const ProductDesc = styled.p`
  font-size: 0.95rem;
  color: #888;
  margin: 0 0 1.5rem 0;
  line-height: 1.4;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

export const CurrentPrice = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f1f1f;
`;

export const OriginalPrice = styled.span`
  font-size: 1rem;
  color: #999;
  text-decoration: line-through;
`;

export const DiscountTag = styled.span`
  background-color: #e6f7ef;
  color: #00b167;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
`;

export const BottomRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ShopButton = styled.button`
  background-color: #343434;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.75rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1f1f1f;
  }
`;

/* Simple Navigation Arrows (Static for now as per image look) */
export const NavArrow = styled.button`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 2;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &.left {
    left: -20px;
  }
  &.right {
    right: -20px;
  }

  @media (max-width: 820px) {
    display: none;
  }
`;
