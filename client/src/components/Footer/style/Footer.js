import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { AppFlex, Ptext, HeadText } from "../../globelStyle";

export const Container = styled(motion.div)`
  flex: 1;
  width: 100%;
  flex-direction: column;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterHeadText = styled(HeadText).attrs({ as: motion.div })``;
export const FooterCards = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap-reverse;
  margin: 2em 2rem 0rem;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const FooterCard = styled(motion.div)`
  min-width: 290px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin: 1rem 0;
  padding: 1rem;
  border-radius: 10px;
  cursor: pointer;
  background-color: #ffc0cb;
  box-shadow: -10px -10px 20px rgba(255, 255, 255, 0.05),
    10px 10px 20px rgba(0, 0, 0, 0.5),
    inset -5px -5px 10px rgba(255, 255, 255, 0.05),
    inset 5px 5px 10px rgba(0, 0, 0, 0.5);

  /* transition: all 0.3s ease-in-out; */

  img {
    width: 40px;
    height: 40px;
    margin: 0 0.7rem;
  }

  &:hover {
    box-shadow: 0 0 15px rgba(254, 244, 245, 0.2);
  }

  @media screen and (max-width: 450px) {
    width: 100%;
  }

  &:last-child {
    background-color: #bee3f8;
    box-shadow: -10px -10px 20px rgba(255, 255, 255, 0.05),
      10px 10px 20px rgba(0, 0, 0, 0.5),
      inset -5px -5px 10px rgba(255, 255, 255, 0.05),
      inset 5px 5px 10px rgba(0, 0, 0, 0.5);

    &:hover {
      box-shadow: 0 0 15px rgba(242, 247, 251, 0.2);
    }
  }
`;

export const SpecialAnchor = styled(Ptext).attrs({ as: "a" })`
  text-decoration: none;
  font-weight: 500;
  word-break: break-word;
  color: ${({ theme }) => theme.white};
`;

export const FooterForm = styled(AppFlex)`
  width: 80%;
  flex-direction: column;
  margin: 0rem 2rem 1rem;
`;
export const FooterInputContainer = styled(AppFlex)`
  width: 100%;

  margin: 0.75rem 0;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.tertiary};

  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 7px ${({ theme }) => theme.main};
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 1rem 0;
  }
`;
const input = css`
  width: 100%;
  padding: 0.95rem;
  border: none;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.tertiary};

  font-family: "DM Sans", sans-serif;
  color: ${({ theme }) => theme.white};
  outline: none;
`;
export const FooterFormInput = styled(Ptext).attrs({ as: "input" })`
  ${input}
`;
export const FooterFormTextarea = styled(Ptext).attrs({ as: "textarea" })`
  ${input}
  height: 170px;
`;
export const FooterSubmitBtn = styled(Ptext).attrs({ as: "button" })`
  padding: 1rem 2rem;
  border-radius: 10px;
  border: none;
  background-color: ${({ theme }) => theme.tertiary};

  font-weight: 500;
  color: ${({ theme }) => theme.white};
  outline: none;
  margin: 2rem 0 0 0;
  font-family: "DM Sans", sans-serif;

  transition: cubic-bezier(0.55, 0.085, 0.68, 0.53);
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 7px ${({ theme }) => theme.main};
    color: ${({ theme }) => theme.main};
  }
`;
