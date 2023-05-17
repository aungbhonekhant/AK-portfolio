import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

export const MyCanvas = styled(Canvas)`
  height: auto;
  /* display: block;
  position: relative; */
  @media screen and (max-width: 500px) {
    //margin-top: 3rem;
  }
`;
