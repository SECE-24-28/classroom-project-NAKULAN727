import React from "react";
import * as S from "./section1-style";
import Section1Image from "./section1.jpg";

const SectionOneComponent = () => {
  return (
    <S.SectionContainer>
      <S.TextSide>
        <S.Headline>
          <span className="highlight">Furniture </span>That <br />
          Elevates Your<span className="highlight"> Space</span>
        </S.Headline>

        <S.SubText>Crafted for comfort. Designed for modern living.</S.SubText>

        <S.ButtonGroup>
          <S.PrimaryButton>Shop Now</S.PrimaryButton>
          <S.SecondaryButton>Check New Arrivals</S.SecondaryButton>
        </S.ButtonGroup>
      </S.TextSide>

      <S.ImageSide>
        <S.ImageWrapper>
          <img src={Section1Image} alt="Modern Living Room Furniture" />
        </S.ImageWrapper>
      </S.ImageSide>
    </S.SectionContainer>
  );
};

export default SectionOneComponent;
