import React from "react";
import * as S from "./footer-style";
import { FiInstagram, FiFacebook, FiYoutube } from "react-icons/fi";

const FooterComponent = () => {
  return (
    <S.FooterContainer>
      <S.TopSection>
        <S.LogoGroup>
          <S.Brand>
            <S.FooterLogoIcon />
            <span>Velora</span>
          </S.Brand>
          <S.Divider />
          <S.StoreText>Furniture Store</S.StoreText>
        </S.LogoGroup>

        <S.NavLinks>
          <S.LinkItem>Home</S.LinkItem>
          <S.LinkItem>Shop</S.LinkItem>
          <S.LinkItem>Product</S.LinkItem>
          <S.LinkItem>Blog</S.LinkItem>
          <S.LinkItem>Contact Us</S.LinkItem>
        </S.NavLinks>
      </S.TopSection>

      <S.BottomSection>
        <S.CopyrightGroup>
          <span>Copyright © 2025 Velora. All rights reserved</span>
          <S.LegalLink>Privacy Policy</S.LegalLink>
          <S.LegalLink>Terms of Use</S.LegalLink>
        </S.CopyrightGroup>

        <S.SocialIcons>
          <FiInstagram />
          <FiFacebook />
          <FiYoutube />
        </S.SocialIcons>
      </S.BottomSection>
    </S.FooterContainer>
  );
};

export default FooterComponent;
