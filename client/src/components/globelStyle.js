import styled from "styled-components";
import { motion } from "framer-motion";

export const AppFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: row;
`;

export const AppWrapper = styled(AppFlex)`
  flex: 1;
  width: 100%;
  flex-direction: column;
  padding: 6rem 2rem;

  @media screen and (max-width: 450px) {
    padding: 4rem 1rem 2rem;
  }
`;

export const MotionWrapContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Ptext = styled.p`
  font-size: 0.8rem;
  font-weight: 800;
  color: ${({ theme }) => theme.secondary};
  text-align: left;

  @media screen and (min-width: 2000px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 0.9rem;
  }
`;

export const HeadText = styled.h1`
  font-size: 2.75rem;
  font-weight: 800;
  text-align: center;
  color: ${({ theme }) => theme.secondary};
  text-transform: capitalize;

  span {
    color: ${({ theme }) => theme.main};
  }

  @media screen and (min-width: 2000px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 2rem;
  }
`;

export const BoldText = styled.h2`
  font-size: 1rem;
  font-weight: 800;
  color: ${({ theme }) => theme.white};
  text-align: left;

  @media screen and (min-width: 2000px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 0.9rem;
  }
`;

export const WhiteBg = styled.div`
  background-color: ${({ theme }) => theme.white};
`;
export const secondaryBg = styled.div`
  background-color: ${({ theme }) => theme.secondaryBg};
`;
export const PrimaryBg = styled.div`
  background-color: ${({ theme }) => theme.primaryBg};
`;

export const Social = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;

  padding: 1rem;

  div {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.softBlack};
    margin: 0.25rem 0;
    border: 1px solid #0bf3f326;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.3s ease-in-out;

    svg {
      width: 15px;
      height: 15px;
      color: ${({ theme }) => theme.grayColor};
    }

    &:hover {
      background-color: ${({ theme }) => theme.tertiary};
      border-color: ${({ theme }) => theme.main};

      svg {
        color: ${({ theme }) => theme.main};
      }
    }

    @media screen and (min-width: 2000px) {
      width: 70px;
      height: 70px;

      margin: 0.5rem 0;

      svg {
        width: 30px;
        height: 30px;
      }
    }
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 1rem;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const NavigationDotsStyle = styled.a`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #cbcbcb;
  margin: 0.5rem;

  transition: background-color 0.2s ease-in-out;
  background-color: ${({ active, theme }) => active && theme.main};

  &:hover {
    background-color: ${({ theme }) => theme.main};
  }

  @media screen and (min-width: 2000px) {
    width: 20px;
    height: 20px;
  }
`;

export const CopyRight = styled.div`
  width: 100%;
  padding: 2rem 0 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  p {
    text-transform: uppercase;
    color: ${({ theme }) => theme.secondary};
  }

  @media screen and (max-width: 500px) {
    padding: 2rem;
  }
`;

// new Style
export const hashSpan = styled.div`
  margin-top: -100px;
  padding-bottom: 100px;
  display: block;
`;
export const blackGradient = styled.div`
  background: #000000;
  background: -webkit-linear-gradient(to right, #213335, #000000);
  background: linear-gradient(to right, #213335, #000000);
`;
export const violetGradient = styled.div`
  background: #804dee;
  background: linear-gradient(-90deg, #804dee 0%, rgba(60, 51, 80, 0) 100%);
  background: -webkit-linear-gradient(
    -90deg,
    #804dee 0%,
    rgba(60, 51, 80, 0) 100%
  );
`;
export const greenGradient = styled.div`
  background: #4dedee;
  background: linear-gradient(-90deg, #4dedee 0%, rgba(60, 51, 80, 0) 100%);
  background: -webkit-linear-gradient(
    -90deg,
    #4dedee 0%,
    rgba(60, 51, 80, 0) 100%
  );
`;
export const greenPinkGradient = styled.div`
  background: "#00cea8";
  background: linear-gradient(90.13deg, #00cea8 1.9%, #bf61ff 97.5%);
  background: -webkit-linear-gradient(-90.13deg, #00cea8 1.9%, #bf61ff 97.5%);
`;
export const orangePinkGradient = styled.div`
  background: #f12711;
  background: -webkit-linear-gradient(to top, #f12711, #f5af19);
  background: linear-gradient(to top, #f12711, #f5af19);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const greenTextGradient = styled.div`
  background: #11998e;
  background: -webkit-linear-gradient(to top, #11998e, #38ef7d);
  background: linear-gradient(to top, #11998e, #38ef7d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const blueTextGradient = styled.div`
  background: #56ccf2;
  background: -webkit-linear-gradient(to top, #2f80ed, #56ccf2);
  background: linear-gradient(to top, #2f80ed, #56ccf2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const pinkTextGradient = styled.div`
  background: #ec008c;
  background: -webkit-linear-gradient(to top, #ec008c, #fc6767);
  background: linear-gradient(to top, #ec008c, #fc6767);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
