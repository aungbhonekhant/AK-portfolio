import React from "react";
import { MotionWrapContainer } from "../components/globelStyle";

const MotionWrap = (Component, ChildeComp) =>
  function HOC() {
    return (
      <MotionWrapContainer
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        as={ChildeComp}
      >
        <Component />
      </MotionWrapContainer>
    );
  };

export default MotionWrap;
