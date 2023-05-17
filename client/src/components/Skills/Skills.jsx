import {
  Container,
  SkillHeadText,
  SkillContainer,
  SkillList,
  SkillListItems,
  SkillIconContainer,
  NameText,
  ExpLists,
  ExpItems,
  ExpName,
  ExpCompany,
  ExpTooltip,
  ExpYearContainer,
  ExpYear,
  ExpWorkLists,
  ExpWorkItem,
  ExpToolTip,
} from "./style/Skills";

const Skill = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Skill.HeadText = ({ children, ...restProps }) => {
  return <SkillHeadText {...restProps}>{children}</SkillHeadText>;
};

Skill.SkillsContainer = ({ children, ...restProps }) => {
  return <SkillContainer {...restProps}>{children}</SkillContainer>;
};

Skill.Lists = ({ children, ...restProps }) => {
  return <SkillList {...restProps}>{children}</SkillList>;
};

Skill.ListItems = ({ children, ...restProps }) => {
  return <SkillListItems {...restProps}>{children}</SkillListItems>;
};

Skill.SkillIconContainer = ({ children, ...restProps }) => {
  return <SkillIconContainer {...restProps}>{children}</SkillIconContainer>;
};

Skill.NameText = ({ children, ...restProps }) => {
  return <NameText {...restProps}>{children}</NameText>;
};

Skill.ExpLists = ({ children, ...restProps }) => {
  return <ExpLists {...restProps}>{children}</ExpLists>;
};

Skill.ExpItems = ({ children, ...restProps }) => {
  return <ExpItems {...restProps}>{children}</ExpItems>;
};

Skill.ExpName = ({ children, ...restProps }) => {
  return <ExpName {...restProps}>{children}</ExpName>;
};

Skill.ExpCompany = ({ children, ...restProps }) => {
  return <ExpCompany {...restProps}>{children}</ExpCompany>;
};

Skill.ExpYearContainer = ({ children, ...restProps }) => {
  return <ExpYearContainer {...restProps}>{children}</ExpYearContainer>;
};

Skill.ExpYear = ({ children, ...restProps }) => {
  return <ExpYear {...restProps}>{children}</ExpYear>;
};

Skill.ExpWorkLists = ({ children, ...restProps }) => {
  return <ExpWorkLists {...restProps}>{children}</ExpWorkLists>;
};

Skill.ExpWorkItem = ({ children, ...restProps }) => {
  return <ExpWorkItem {...restProps}>{children}</ExpWorkItem>;
};

Skill.ExpToolTip = ({ children, ...restProps }) => {
  return <ExpToolTip {...restProps}>{children}</ExpToolTip>;
};

export default Skill;
