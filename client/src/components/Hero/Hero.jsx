import React, { useRef } from "react";
import { AppWrap } from "../../wrapper";
import { WireframeCanvas } from "../canvas";
import {
  ElementVtLine,
  ElementCircle,
  SideEleContainer,
  HeroContainer,
  HeroSection,
  HeroHeadText,
  HeroSubText,
  LoadMore,
  LoadMoreMouse,
  LoadMoreMouseWheel,
} from "./style/Hero";

const Hero = () => {
  const textRef = useRef(null);
  return (
    <HeroSection>
      <HeroContainer>
        <SideEleContainer>
          <ElementCircle />
          <ElementVtLine />
        </SideEleContainer>
        <div ref={textRef}>
          <HeroHeadText>
            Hi, I'm <span>Aung Khant</span>
          </HeroHeadText>
          <HeroSubText>
            Full-stack developer building the web products businesses run on.
          </HeroSubText>
        </div>
      </HeroContainer>

      <WireframeCanvas avoid={textRef} />

      <LoadMore>
        <a href="#about">
          <LoadMoreMouse>
            <LoadMoreMouseWheel
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </LoadMoreMouse>
        </a>
      </LoadMore>
    </HeroSection>
  );
};

export default AppWrap(Hero, "home", HeroSection);
//export default Hero;
