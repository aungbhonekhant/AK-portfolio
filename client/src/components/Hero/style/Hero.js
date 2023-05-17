import styled from "styled-components";
import { motion } from "framer-motion";

import { AppFlex, greenGradient } from "../../globelStyle";

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1.25rem;

  padding-top: 8.3rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  position: relative;
  right: 0;
  bottom: 0;
  left: 0;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 640px) {
    padding-left: 4rem;
    //padding-right: 4rem;
  }

  @media screen and (max-width: 1279px) {
    padding-top: 0;
    top: 80px;
    position: absolute;
  }

  @media screen and (max-width: 639px) {
    top: 90px;
  }
`;

export const SideEleContainer = styled(AppFlex)`
  flex-direction: column;
  margin-top: 1.25rem;
`;

export const ElementCircle = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 100%;
  background-color: #5edce0;
`;

export const ElementVtLine = styled(greenGradient)`
  width: 0.25rem;
  height: 10rem;

  @media screen and (min-width: 640px) {
    height: 20rem;
  }
`;

export const HeroHeadText = styled.h1`
  margin-top: 0.5rem;
  font-weight: 900;
  color: #ffffff;
  font-size: 35px;
  font-family: "Poppins", sans-serif;

  span {
    color: #33fbff;
  }

  @media screen and (max-width: 300px) {
    font-size: 25px;
  }

  @media screen and (min-width: 420px) {
    font-size: 35px;
  }

  @media screen and (min-width: 640px) {
    font-size: 60px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 80px;
    line-height: 98px;
  }
`;

export const HeroSubText = styled.p`
  color: #dfd9ff;
  font-weight: 500;
  font-size: 16px;

  margin-top: 0.5rem;
  //color: rgba(255, 255, 255, 1);

  @media screen and (min-width: 420px) {
    font-size: 22px;
    margin-top: 1.5rem;
  }

  @media screen and (min-width: 640px) {
    font-size: 26px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 30px;
    line-height: 40px;
  }
`;

export const HeroSubBreak = styled.br`
  display: none;

  @media screen and (min-width: 640px) {
    display: block;
  }
`;

export const LoadMore = styled.div`
  display: flex;
  position: absolute;
  bottom: 6rem;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 450px) {
    bottom: 0.05rem;
  }

  @media screen and (max-width: 449px) {
    bottom: 0.05rem;
  }
`;

export const LoadMoreMouse = styled.div`
  width: 35px;
  height: 64px;
  border-radius: 1.5rem;
  border: 4px solid #aaa6c3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  @media screen and (max-width: 449px) {
    width: 25px;
    height: 44px;
    border-width: 2px;
  }
`;

export const LoadMoreMouseWheel = styled(motion.div)`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 100%;
  background-color: #aaa6c3;
  margin-bottom: 0.25rem;

  @media screen and (max-width: 449px) {
    width: 0.35rem;
    height: 0.35rem;
    margin-bottom: 0.75rem;
  }
`;
