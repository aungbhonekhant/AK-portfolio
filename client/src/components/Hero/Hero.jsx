import React from "react";
import { AppWrap } from "../../wrapper";
import { ComputersCanvas } from "../canvas";
import {
  ElementVtLine,
  ElementCircle,
  SideEleContainer,
  HeroContainer,
  HeroSection,
  HeroHeadText,
  HeroSubText,
  HeroSubBreak,
  LoadMore,
  LoadMoreMouse,
  LoadMoreMouseWheel,
} from "./style/Hero";

const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <SideEleContainer>
          <ElementCircle />
          <ElementVtLine />
        </SideEleContainer>
        <div>
          <HeroHeadText>
            Hi, I'm <span>AungKhant</span>
          </HeroHeadText>
          <HeroSubText>
            A versatile developer skilled in <HeroSubBreak />
            backend, frontend, full-stack, and web development.
          </HeroSubText>
        </div>
      </HeroContainer>

      <ComputersCanvas />

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
