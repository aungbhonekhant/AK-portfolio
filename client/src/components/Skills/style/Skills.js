import styled from "styled-components";
import { motion } from "framer-motion";
import { HeadText, AppFlex, Ptext, BoldText } from "../../globelStyle";
import { Tooltip as ReactToolTip } from "react-tooltip";

export const Container = styled(motion.div)`
  flex: 1;
  width: 100%;
  flex-direction: column;
`;

export const SkillHeadText = styled(HeadText)``;
export const SkillContainer = styled.div`
  width: 80%;
  margin-top: 3rem;

  display: flex;
  flex-direction: row;
  overflow: hidden;

  @media screen and (max-width: 900px) {
    width: 100%;
    flex-direction: column;
  }
`;
export const SkillList = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;

  //margin-right: 5rem;

  @media screen and (max-width: 900px) {
    margin-right: 0rem;
    justify-content: center;
    align-items: center;
  }
`;
export const SkillListItems = styled(AppFlex).attrs({ as: motion.div })`
  flex-direction: column;
  text-align: center;
  margin: 1rem;

  // transition: all 0.3s ease-in-out;

  @media screen and (min-width: 2000px) {
    margin: 1rem 2rem;
  }
`;

export const SkillIconContainer = styled(AppFlex)`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.white};

  img {
    width: 50%;
    height: 50%;
  }

  &:hover {
    box-shadow: 0 0 25px #fef4f5;
  }

  @media screen and (min-width: 2000px) {
    width: 150px;
    height: 150px;
  }

  @media screen and (max-width: 450px) {
    width: 70px;
    height: 70px;
  }
`;

export const NameText = styled(Ptext)`
  font-weight: 500;
  margin-top: 0.5rem;
  text-align: center;

  @media screen and (min-width: 2000px) {
    margin-top: 1rem;
  }
`;

export const ExpLists = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    margin-top: 2rem;
  }
`;
export const ExpItems = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 1rem 0;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    column-gap: 10px;
  }
`;
export const ExpYearContainer = styled.div`
  margin-right: 1rem;

  @media screen and (max-width: 450px) {
    margin-right: 1rem;
  }
`;
export const ExpYear = styled(BoldText)`
  font-weight: 800;
  color: ${({ theme }) => theme.main};
`;
export const ExpWorkLists = styled(motion.div)`
  flex: 1;
`;
export const ExpWorkItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 1rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.tertiary};
  border-radius: 0.25em;
  padding: 1em;

  ul {
    margin-top: 0.5rem;
    margin-left: 1.25rem;
    list-style-type: disc;

    &:not(:last-child) {
      margin-bottom: 0.5rem; /* Adjust this value to control the vertical spacing */
    }
    li {
      color: ${({ theme }) => theme.lightGrayColor};
      font-size: 0.8rem;
      font-weight: 400;
      padding-left: 0.25rem;
      letter-spacing: 0.05em;
      line-height: 1.3em;

      @media screen and (min-width: 2000px) {
        font-size: 2rem;
      }

      @media screen and (max-width: 450px) {
        font-size: 0.9rem;
      }
    }
  }
`;

export const ExpName = styled(BoldText)`
  font-weight: 500;
`;
export const ExpCompany = styled(Ptext)`
  font-weight: 400;
  color: ${({ theme }) => theme.lightGrayColor};
  margin-top: 5px;
`;
export const ExpToolTip = styled(ReactToolTip)`
  max-width: 500px !important;
  background-color: ${({ theme }) => theme.tertiary} !important;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1) !important;
  border-radius: 5px !important;
  padding: 1rem !important;
  color: ${({ theme }) => theme.lightGrayColor} !important;
  text-align: center !important;
  line-height: 1.5 !important;
  opacity: 1 !important;

  @media screen and (min-width: 2000px) {
    font-size: 1.75rem !important;
    max-width: 500px !important;
    line-height: 2 !important;
  }
`;
