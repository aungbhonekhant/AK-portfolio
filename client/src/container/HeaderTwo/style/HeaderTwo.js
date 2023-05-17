import styled from "styled-components";

import { herobg } from "../../../assets";

export const Container = styled.div`
  background-image: url(${herobg});
  background-blend-mode: overlay;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
