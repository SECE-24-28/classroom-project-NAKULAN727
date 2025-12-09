import React from "react";
import * as S from "./section3-style";
import { FiTruck, FiLock, FiPhone } from "react-icons/fi";
import { BsCashCoin } from "react-icons/bs";

const features = [
  {
    icon: <FiTruck />,
    title: "Free Shipping",
    subtitle: "Order above $200",
  },
  {
    icon: <BsCashCoin />,
    title: "Money-back",
    subtitle: "30 days guarantee",
  },
  {
    icon: <FiLock />,
    title: "Secure Payments",
    subtitle: "Secured by Stripe",
  },
  {
    icon: <FiPhone />,
    title: "24/7 Support",
    subtitle: "Phone and Email support",
  },
];

const SectionThreeComponent = () => {
  return (
    <S.SectionContainer>
      <S.FeaturesGrid>
        {features.map((feature, index) => (
          <S.FeatureCard key={index}>
            <S.IconWrapper>{feature.icon}</S.IconWrapper>
            <S.Title>{feature.title}</S.Title>
            <S.SubTitle>{feature.subtitle}</S.SubTitle>
          </S.FeatureCard>
        ))}
      </S.FeaturesGrid>
    </S.SectionContainer>
  );
};

export default SectionThreeComponent;
