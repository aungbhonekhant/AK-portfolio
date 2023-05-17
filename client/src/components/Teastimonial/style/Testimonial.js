import styled from "styled-components";
import { motion } from "framer-motion";
import { AppFlex, Ptext, BoldText } from "../../globelStyle";

export const Container = styled(motion.div)`
  flex: 1;
  width: 100%;
  flex-direction: column;
`;
export const TstmnlItem = styled(AppFlex)`
  width: 60%;
  min-height: 320px;
  background-color: ${({ theme }) => theme.tertiary};
  display: flex;
  flex-direction: row;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }

  @media screen and (min-width: 2000px) {
    min-height: 450px;

    img {
      width: 150px;
      height: 150px;
    }
  }

  @media screen and (max-width: 850px) {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;

    img {
      align-self: center;
    }
  }
`;

export const TstmlItemContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const TstmlContent = styled.div`
  flex: 1;
  height: 100%;
  padding: 0 2rem;
  text-align: left;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  @media screen and (max-width: 600px) {
    margin-top: 2rem;
    padding: 0;
  }
`;
export const TstmlFeedBack = styled(Ptext)`
  font-size: 1.25rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.secondary};
  font-family: "DM Sans", sans-serif;

  @media screen and (min-width: 2000px) {
    font-size: 2rem;
    line-height: 3.5rem;
  }
`;
export const TstmlInfo = styled.div``;
export const TstmlName = styled(BoldText).attrs({ as: "h4" })`
  font-weight: 600;
  color: ${({ theme }) => theme.lightGrayColor};
  margin-top: 2rem;
`;
export const TstmlCompany = styled(Ptext).attrs({ as: "h5" })`
  font-weight: 400;
  color: ${({ theme }) => theme.main};
  margin-top: 5px;
`;
export const TstmlBtns = styled(AppFlex)`
  flex-direction: row;
  margin-top: 1rem;
`;
export const TstmlBtnsItems = styled(AppFlex)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.tertiary};

  margin: 1rem;
  transition: all 0.3s ease-in-out;

  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.secondary};
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.main};

    svg {
      color: ${({ theme }) => theme.main};
    }
  }

  @media screen and (min-width: 2000px) {
    width: 100px;
    height: 100px;

    svg {
      width: 45px;
      height: 45px;
    }
  }
`;

export const Brands = styled(AppFlex)`
  width: 80%;
  flex-wrap: wrap;
  margin-top: 2rem;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const BrandItem = styled(motion.div)`
  width: 100px;
  height: auto;
  margin: 1.5rem;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    filter: grayscale(1);
  }

  &:hover {
    img {
      filter: grayscale(0);
    }
  }

  @media screen and (min-width: 2000px) {
    width: 210px;
    margin: 2rem;
  }

  @media screen and (max-width: 450px) {
    width: 120px;
    margin: 1rem;
  }
`;
