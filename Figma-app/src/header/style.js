import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  font-family: "Inter", sans-serif;
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
  font-size: 1.25rem;
  color: #343434;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 2.5rem;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #555;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #000;
  }
`;

export const ActionSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const SignInButton = styled.button`
  background: none;
  border: none;
  color: #343434;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const RegisterButton = styled.button`
  background-color: #2d2d2d;
  color: #fff;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  border: none;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1a1a1a;
  }
`;

// Simple icon replication for the "swirl" logo using CSS
export const LogoIcon = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: conic-gradient(
    from 135deg,
    #f2994a 0%,
    #f2994a 25%,
    transparent 25%,
    transparent 50%,
    #37474f 50%,
    #37474f 75%,
    transparent 75%
  );
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 30%;
    background-color: #fff;
    border-radius: 50%;
  }
`;
