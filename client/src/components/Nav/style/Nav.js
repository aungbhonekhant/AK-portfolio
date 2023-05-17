import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  HeadText,
  AppFlex,
  Ptext,
  BoldText,
  blackGradient,
} from "../../globelStyle";

export const Nav = styled(AppFlex).attrs({ as: "nav" })`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  position: fixed;
  top: 0;
  z-index: 20;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  width: 100%;
  background-color: #191c2cd4;

  font-family: "Poppins", sans-serif;

  @media screen and (min-width: 940px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  //max-width: 80rem;
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;

  img {
    width: 2.25rem;
    height: 2.25rem;
    object-fit: contain;
  }
`;

export const LogoTitle = styled.p`
  display: flex;
  font-weight: bold;
  color: #ffffff;
  font-size: 18px;
  cursor: pointer;

  span {
    display: none;
    @media (min-width: 640px) {
      display: block;
    }
  }
`;

export const Menu = styled.ul`
  list-style: none;
  display: none;

  @media (min-width: 940px) {
    display: flex;
    flex-direction: row;
    gap: 2.5rem;
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  display: none;
  cursor: pointer;

  a {
    font-size: 18px;
    color: ${({ active, theme }) => (active ? theme.main : theme.secondary)};
    text-decoration: none;
    font-weight: 500;

    &::first-letter {
      text-transform: capitalize;
    }
  }
  &:hover {
    a {
      color: ${({ theme }) => theme.main};
    }
  }
  @media (min-width: 940px) {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
`;

export const MobileNev = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  img {
    width: 28px;
    height: 28px;
    object-fit: contain;
    cursor: pointer;
  }

  @media (min-width: 940px) {
    display: none;
  }
`;

export const MobileNevContainer = styled(motion.div).attrs({
  as: blackGradient,
})`
  display: ${({ toggle }) => (toggle ? "flex" : "none")};
  padding: 1.5rem;
  position: absolute;
  top: 5rem;
  right: 0;
  margin: 0.5rem 1rem;
  min-width: 140px;
  z-index: 10;
  border-radius: 0.75rem;
`;

export const MobileMenu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: end;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
`;

export const MobileMenuItem = styled.li`
  list-style: none;
  font-family: "Poppins", sans-serif;
  cursor: pointer;

  a {
    font-size: 16px;
    color: ${({ active, theme }) => (active ? theme.main : theme.secondary)};
    text-decoration: none;
    font-weight: 500;
    text-transform: capitalize;

    &::first-letter {
      text-transform: capitalize;
    }
  }
`;
