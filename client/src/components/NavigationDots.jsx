import React from "react";
import { Navigation, NavigationDotsStyle } from "./globelStyle";

const NavigationDots = ({ active }) => {
  return (
    <Navigation>
      {["home", "about", "work", "skills", "testimonials", "contact"].map(
        (item, index) => (
          <NavigationDotsStyle
            key={item + index}
            href={`#${item}`}
            active={active === item}
          />
        )
      )}
    </Navigation>
  );
};

export default NavigationDots;
