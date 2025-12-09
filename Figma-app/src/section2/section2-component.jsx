import React from "react";
import * as S from "./section2-style";
import DiningImg from "./images (1).jpeg";
import SofaImg from "./images.jpeg";
import BedImg from "./download.jpeg";

const categories = [
  {
    title: "Dining Sets",
    image: DiningImg,
    opacity: "0.2", // Just for mapping unique keys if needed
  },
  {
    title: "Sofas & Seating",
    image: SofaImg,
    opacity: "0.4",
  },
  {
    title: "Beds & Mattresses",
    image: BedImg,
    opacity: "0.6",
  },
];

const SectionTwoComponent = () => {
  return (
    <S.SectionContainer>
      <S.Header>
        <S.Title>Explore Our Categories</S.Title>
        <S.SubTitle>Start building the home you've always imagined</S.SubTitle>
      </S.Header>

      <S.CategoriesGrid>
        {categories.map((cat, index) => (
          <S.Card key={index}>
            <S.CardImage src={cat.image} alt={cat.title} />
            <S.CardOverlay>
              <S.CategoryName>{cat.title}</S.CategoryName>
              <S.ArrowButton />
            </S.CardOverlay>
          </S.Card>
        ))}
      </S.CategoriesGrid>
    </S.SectionContainer>
  );
};

export default SectionTwoComponent;
