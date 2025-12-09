import React from "react";
import * as S from "./style";

const HeaderComponent = () => {
  return (
    <S.HeaderStyle>
      <S.LogoSection>
        <S.LogoIcon />
        <span>Velora Living</span>
      </S.LogoSection>

      <S.Navigation>
        <S.NavLink>Home</S.NavLink>
        <S.NavLink>Explore</S.NavLink>
        <S.NavLink>About Us</S.NavLink>
        <S.NavLink>Trending</S.NavLink>
        <S.NavLink>Contact</S.NavLink>
      </S.Navigation>

      <S.ActionSection>
        <S.SignInButton>Sign In</S.SignInButton>
        <S.RegisterButton>Register</S.RegisterButton>
      </S.ActionSection>
    </S.HeaderStyle>
  );
};

export default HeaderComponent;
