import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { modernLightTheme, modernTheme } from "./Utils/Theme";
import {
  HeaderTwo,
  About,
  Footer,
  Skills,
  Testimonial,
  Work,
} from "./container";

const Main = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.primary};
  min-height: 100vh;
  font-family: "DM Sans", sans-serif;
  z-index: 0;
`;

const App = () => {
  const [darkMode, setDarkMode] = useState(true); //sark mode state

  return (
    <ThemeProvider theme={darkMode ? modernTheme : modernLightTheme}>
      <BrowserRouter>
        <Main>
          <HeaderTwo />
          <About />
          <Work />
          <Skills />
          <Testimonial />
          <Footer />
        </Main>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
