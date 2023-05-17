import React from "react";
import { Hero, Nav } from "../../components";
import { Container } from "./style/HeaderTwo";

const HeaderTwo = () => {
  return (
    <Container id="home">
      <Nav />
      <Hero />
    </Container>
  );
};

export default HeaderTwo;
