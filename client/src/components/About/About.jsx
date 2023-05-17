import {
  Container,
  AboutHeadText,
  AboutSubHeadText,
  AboutProfiles,
  AboutProfilesItem,
  AboutBoldText,
  AboutPtext,
} from "./style/About";

const About = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

About.HeadText = ({ children, ...restProps }) => {
  return <AboutHeadText {...restProps}>{children}</AboutHeadText>;
};

About.SubHeadText = ({ children, ...restProps }) => {
  return <AboutSubHeadText {...restProps}>{children}</AboutSubHeadText>;
};

About.Profiles = ({ children, ...restProps }) => {
  return <AboutProfiles {...restProps}>{children}</AboutProfiles>;
};

About.ProfilesItem = ({ children, ...restProps }) => {
  return <AboutProfilesItem {...restProps}>{children}</AboutProfilesItem>;
};

About.BoldText = ({ children, ...restProps }) => {
  return <AboutBoldText {...restProps}>{children}</AboutBoldText>;
};

About.Ptext = ({ children, ...restProps }) => {
  return <AboutPtext {...restProps}>{children}</AboutPtext>;
};
export default About;
