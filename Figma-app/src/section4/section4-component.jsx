import React from "react";
import * as S from "./section4-style";
import SofaImg from "./sofa.jpeg";
import SwingBedImg from "./swingbed.jpeg";
import { FiChevronLeft, FiChevronRight, FiTag } from "react-icons/fi";

const products = [
  {
    image: SofaImg,
    name: "Oxford Leatherette Sofa",
    description: "Minimalist Scandinavian frame paired with breathable..",
    price: "₹18,999",
    originalPrice: "₹25,000",
    discount: "24% Off",
  },
  {
    image: SwingBedImg,
    name: "Breeze Wooden Swing Bed",
    description: "Handcrafted teak swing bed with premium rope detailing..",
    price: "₹25,000",
    originalPrice: "₹50,000",
    discount: "50% Off",
  },
];

const SectionFourComponent = () => {
  return (
    <S.SectionContainer>
      <S.Header>
        <S.Title>Trending Products</S.Title>
        <S.SubTitle>Tried, trusted, and loved</S.SubTitle>
      </S.Header>

      <S.ProductGrid>
        <S.NavArrow className="left">
          <FiChevronLeft size={24} />
        </S.NavArrow>

        {products.map((product, index) => (
          <S.Card key={index}>
            <S.ImageWrapper>
              <img src={product.image} alt={product.name} />
            </S.ImageWrapper>
            <S.Content>
              <S.ProductName>{product.name}</S.ProductName>
              <S.ProductDesc>{product.description}</S.ProductDesc>

              <S.PriceRow>
                <S.CurrentPrice>{product.price}</S.CurrentPrice>
                <S.OriginalPrice>{product.originalPrice}</S.OriginalPrice>
                <S.DiscountTag>
                  {product.discount}{" "}
                  <FiTag
                    style={{
                      marginLeft: "4px",
                      verticalAlign: "middle",
                      display: "inline",
                    }}
                  />
                </S.DiscountTag>
              </S.PriceRow>

              <S.BottomRow>
                <S.ShopButton>Shop Now</S.ShopButton>
              </S.BottomRow>
            </S.Content>
          </S.Card>
        ))}

        <S.NavArrow className="right">
          <FiChevronRight size={24} />
        </S.NavArrow>
      </S.ProductGrid>
    </S.SectionContainer>
  );
};

export default SectionFourComponent;
