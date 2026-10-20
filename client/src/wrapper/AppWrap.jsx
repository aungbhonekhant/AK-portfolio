import React from "react";
import { NavigationDots, SocialMedia } from "../components";
import {
  AppWrapper,
  AppContainer,
  CopyRight,
  Ptext,
} from "../components/globelStyle";

const AppWrap = (Component, idName, ChildeComp) =>
  function HOC() {
    return (
      <AppContainer id={idName} as={ChildeComp}>
        <SocialMedia />
        <AppWrapper>
          <Component />
          {idName !== "home" && (
            <CopyRight>
              <Ptext>&copy; AUNG KHANT</Ptext>
              <Ptext>All rights reserved</Ptext>
            </CopyRight>
          )}
        </AppWrapper>
        <NavigationDots active={idName} />
      </AppContainer>
    );
  };

export default AppWrap;
