import styled from "styled-components";
import { motion } from "framer-motion";
import Tilt from "react-tilt";

import { HeadText, blackGradient } from "../../globelStyle";

export const Container = styled(motion.div)`
  flex: 1;
  width: 100%;
  flex-direction: column;
`;
export const WorkHeadText = styled(HeadText)``;
export const WorkFilter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  margin: 3rem 0 2rem;
`;
export const WorkFilterItem = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.primry};
  border: 1px solid ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.secondary};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin: 0.5rem;

  &:hover {
    border-color: ${({ theme }) => theme.main};
    color: ${({ theme }) => theme.main};
  }

  @media screen and (min-width: 2000px) {
    padding: 1rem 2rem;
    border-radius: 0.85rem;
  }

  border-color: ${({ active, theme }) => active && theme.main};
  color: ${({ active, theme }) => active && theme.main};
`;

export const WorkPortfolio = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  gap: 1.75rem;
`;

export const WorkPortfolioItem = styled(motion.div)``;
export const WorkPortfolioItemContainer = styled(Tilt)`
  background-color: ${({ theme }) => theme.tertiary};
  padding: 1.25rem;
  border-radius: 1rem;
  width: 100%;

  @media screen and (min-width: 640px) {
    width: 360px;
  }
`;

export const WorkPortfolioItemWarp = styled.div`
  position: relative;
  width: 100%;
  height: 230px;
`;

export const WorkPortfolioItemImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
`;

export const WorkPortfolioItemAction = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: end;
  margin: 0.75rem;
`;

export const WorkPortfolioItemActionItem = styled(blackGradient)`
  opacity: 0.8;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0.135rem;

  svg {
    width: 50%;
    height: 50%;
    color: ${({ theme }) => theme.white};
  }
`;

export const WorkPortfolioItemInfo = styled.div`
  margin-top: 1.25rem;

  h3 {
    color: ${({ theme }) => theme.white};
    font-weight: bold;
    font-size: 24px;
  }

  p {
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.secondary};
    font-size: 14px;
  }
`;

export const WorkPortfolioItemInfoTechs = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  p {
    font-size: 14px;
  }
`;
