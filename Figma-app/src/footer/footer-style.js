import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #1f1f1f;
  color: #fff;
  padding: 3rem 4rem;
  font-family: "Inter", sans-serif;
  margin-top: 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;
  }
`;

export const LogoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
`;

export const FooterLogoIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: conic-gradient(
    from 135deg,
    #f2994a 0%,
    #f2994a 25%,
    transparent 25%,
    transparent 50%,
    #555 50%,
    #555 75%,
    transparent 75%
  );
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 30%;
    background-color: #1f1f1f; /* Match footer bg */
    border-radius: 50%;
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 24px;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const StoreText = styled.span`
  color: #888;
  font-size: 0.9rem;
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1.5rem;
  }
`;

export const LinkItem = styled.a`
  color: #d1d1d1;
  text-decoration: none;
  font-size: 0.95rem;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #fff;
  }
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: #888;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 1.5rem;
    align-items: flex-start;
  }
`;

export const CopyrightGroup = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 1.25rem;
  color: #d1d1d1;

  svg {
    cursor: pointer;
    transition: color 0.2s;
    &:hover {
      color: #fff;
    }
  }
`;

export const LegalLink = styled.a`
  color: #d1d1d1;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;
