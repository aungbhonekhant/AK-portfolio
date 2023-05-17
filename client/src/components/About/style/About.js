import styled from "styled-components";
import { motion } from "framer-motion";
import { BoldText, HeadText, Ptext } from "../../globelStyle";

export const Container = styled(motion.div)`
  flex: 1;
  width: 100%;
  flex-direction: column;
`;
export const AboutHeadText = styled(HeadText)`
  margin-top: 2rem;
`;
export const AboutSubHeadText = styled(Ptext)`
  font-size: 1rem;
  margin-top: 1rem;
  text-align: center;
  line-height: 1.5rem;

  padding: 0 2rem;

  @media screen and (min-width: 768px) {
    padding: 0 3.8rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 11.7rem;
    /* font-size: 1.2rem;
    line-height: 2rem; */
  }
  @media screen and (min-width: 2000px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;
export const AboutProfiles = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 1rem;
`;
export const AboutProfilesItem = styled(motion.div)`
  width: 190px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 2rem;

  img {
    width: 100%;
    height: 170px;
    border-radius: 15px;
    object-fit: cover;
    background-color: ${({ theme }) => theme.tertiary};
  }

  @media screen and (min-width: 2000px) {
    width: 370px;
    margin: 2rem 4rem;

    img {
      height: 320px;
    }
  }
`;
export const AboutBoldText = styled(BoldText)`
  margin-top: 20px;
`;
export const AboutPtext = styled(Ptext)`
  margin-top: 10px;
`;
