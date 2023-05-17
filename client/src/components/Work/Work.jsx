import {
  Container,
  WorkHeadText,
  WorkFilter,
  WorkFilterItem,
  WorkPortfolio,
  WorkPortfolioItem,
  WorkPortfolioItemContainer,
  WorkPortfolioItemAction,
  WorkPortfolioItemImg,
  WorkPortfolioItemWarp,
  WorkPortfolioItemActionItem,
  WorkPortfolioItemInfo,
  WorkPortfolioItemInfoTechs,
} from "./style/Work";

const Work = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Work.HeadText = ({ children, ...restProps }) => {
  return <WorkHeadText {...restProps}>{children}</WorkHeadText>;
};

Work.Filter = ({ children, ...restProps }) => {
  return <WorkFilter {...restProps}>{children}</WorkFilter>;
};

Work.FilterItem = ({ children, ...restProps }) => {
  return <WorkFilterItem {...restProps}>{children}</WorkFilterItem>;
};

Work.Portfolio = ({ children, ...restProps }) => {
  return <WorkPortfolio {...restProps}>{children}</WorkPortfolio>;
};

Work.PortfolioItem = ({ children, ...restProps }) => {
  return <WorkPortfolioItem {...restProps}>{children}</WorkPortfolioItem>;
};

Work.PortolioItemContainer = ({ children, ...restProps }) => {
  return (
    <WorkPortfolioItemContainer {...restProps}>
      {children}
    </WorkPortfolioItemContainer>
  );
};

Work.PortfolioItemWarp = ({ children, ...restProps }) => {
  return (
    <WorkPortfolioItemWarp {...restProps}>{children}</WorkPortfolioItemWarp>
  );
};

Work.PortfolioItemImg = ({ children, ...restProps }) => {
  return <WorkPortfolioItemImg {...restProps}>{children}</WorkPortfolioItemImg>;
};

Work.PortfolioItemAction = ({ children, ...restProps }) => {
  return (
    <WorkPortfolioItemAction {...restProps}>{children}</WorkPortfolioItemAction>
  );
};

Work.PortfolioItemActionItem = ({ children, ...restProps }) => {
  return (
    <WorkPortfolioItemActionItem {...restProps}>
      {children}
    </WorkPortfolioItemActionItem>
  );
};

Work.PortfolioItemInfo = ({ children, ...restProps }) => {
  return (
    <WorkPortfolioItemInfo {...restProps}>{children}</WorkPortfolioItemInfo>
  );
};

Work.PortfolioItemInfoTechs = ({ children, ...restProps }) => {
  return (
    <WorkPortfolioItemInfoTechs {...restProps}>
      {children}
    </WorkPortfolioItemInfoTechs>
  );
};

export default Work;
