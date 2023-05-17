import React, { useEffect, useState } from "react";
import {
  Nav as NavContainer,
  LogoContainer,
  LogoLink,
  LogoTitle,
  Menu,
  MenuItem,
  MobileNev,
  MobileNevContainer,
  MobileMenu,
  MobileMenuItem,
} from "./style/Nav";
import { logo, menu, close } from "../../assets";

const navLinks = ["home", "about", "work", "skills", "testimonials", "contact"];

const Nav = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <NavContainer>
      <LogoContainer>
        <LogoLink
          to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="Logo" />
          <LogoTitle>
            AK&nbsp;<span>| Developer</span>
          </LogoTitle>
        </LogoLink>
        <Menu>
          {navLinks.map((link) => (
            <MenuItem
              key={`nav-${link}`}
              active={active === link}
              onClick={() => setActive(link)}
            >
              <a href={`#${link}`}>{link}</a>
            </MenuItem>
          ))}
        </Menu>

        <MobileNev>
          <img
            src={!toggle ? menu : close}
            alt="menu"
            onClick={() => setToggle(!toggle)}
          />
          <MobileNevContainer
            toggle={toggle}
            initial={{ x: "100%" }}
            animate={{ x: toggle ? "0%" : "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <MobileMenu>
              {navLinks.map((link) => (
                <MobileMenuItem
                  active={active === link}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link);
                  }}
                  key={`nav-mb-${link}`}
                >
                  <a href={`#${link}`}>{link}</a>
                </MobileMenuItem>
              ))}
            </MobileMenu>
          </MobileNevContainer>
        </MobileNev>
      </LogoContainer>
    </NavContainer>
  );
};

export default Nav;
