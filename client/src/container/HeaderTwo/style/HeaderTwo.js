import styled from "styled-components";

import { herobg } from "../../../assets";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.primaryBg};
  background-image: linear-gradient(rgba(15, 17, 19, 0.6), rgba(15, 17, 19, 0.6)),
    url(${herobg});
  background-blend-mode: normal, luminosity;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
