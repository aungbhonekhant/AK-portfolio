import {
  Container,
  TstmnlItem,
  TstmlItemContainer,
  TstmlContent,
  TstmlFeedBack,
  TstmlInfo,
  TstmlName,
  TstmlCompany,
  TstmlBtns,
  TstmlBtnsItems,
  Brands,
  BrandItem,
} from "./style/Testimonial";

const Testimonial = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Testimonial.TstmnlItem = ({ children, ...restProps }) => {
  return <TstmnlItem {...restProps}>{children}</TstmnlItem>;
};

Testimonial.TstmlItemContainer = ({ children, ...restProps }) => {
  return <TstmlItemContainer {...restProps}>{children}</TstmlItemContainer>;
};

Testimonial.TstmlContent = ({ children, ...restProps }) => {
  return <TstmlContent {...restProps}>{children}</TstmlContent>;
};

Testimonial.TstmlFeedBack = ({ children, ...restProps }) => {
  return <TstmlFeedBack {...restProps}>{children}</TstmlFeedBack>;
};

Testimonial.TstmlInfo = ({ children, ...restProps }) => {
  return <TstmlInfo {...restProps}>{children}</TstmlInfo>;
};

Testimonial.TstmlName = ({ children, ...restProps }) => {
  return <TstmlName {...restProps}>{children}</TstmlName>;
};

Testimonial.TstmlCompany = ({ children, ...restProps }) => {
  return <TstmlCompany {...restProps}>{children}</TstmlCompany>;
};

Testimonial.TstmlBtns = ({ children, ...restProps }) => {
  return <TstmlBtns {...restProps}>{children}</TstmlBtns>;
};

Testimonial.TstmlBtnsItems = ({ children, ...restProps }) => {
  return <TstmlBtnsItems {...restProps}>{children}</TstmlBtnsItems>;
};

Testimonial.Brands = ({ children, ...restProps }) => {
  return <Brands {...restProps}>{children}</Brands>;
};
Testimonial.BrandItem = ({ children, ...restProps }) => {
  return <BrandItem {...restProps}>{children}</BrandItem>;
};

export default Testimonial;
