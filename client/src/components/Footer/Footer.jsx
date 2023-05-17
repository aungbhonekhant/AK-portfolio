import {
  Container,
  FooterCard,
  FooterCards,
  FooterForm,
  FooterInputContainer,
  FooterFormInput,
  FooterHeadText,
  SpecialAnchor,
  FooterFormTextarea,
  FooterSubmitBtn,
} from "./style/Footer";

const Footer = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Footer.HeadText = ({ children, ...restProps }) => {
  return <FooterHeadText {...restProps}>{children}</FooterHeadText>;
};

Footer.Cards = ({ children, ...restProps }) => {
  return <FooterCards {...restProps}>{children}</FooterCards>;
};

Footer.Card = ({ children, ...restProps }) => {
  return <FooterCard {...restProps}>{children}</FooterCard>;
};

Footer.SpecialAnchor = ({ children, ...restProps }) => {
  return <SpecialAnchor {...restProps}>{children}</SpecialAnchor>;
};

Footer.Form = ({ children, ...restProps }) => {
  return <FooterForm {...restProps}>{children}</FooterForm>;
};

Footer.FooterInputContainer = ({ children, ...restProps }) => {
  return <FooterInputContainer {...restProps}>{children}</FooterInputContainer>;
};

Footer.FormInput = ({ children, ...restProps }) => {
  return <FooterFormInput {...restProps}>{children}</FooterFormInput>;
};

Footer.FormTextarea = ({ children, ...restProps }) => {
  return <FooterFormTextarea {...restProps}>{children}</FooterFormTextarea>;
};

Footer.SubmitBtn = ({ children, ...restProps }) => {
  return <FooterSubmitBtn {...restProps}>{children}</FooterSubmitBtn>;
};

export default Footer;
