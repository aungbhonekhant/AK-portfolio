import React, { useState, useEffect } from "react";
import "react-tooltip/dist/react-tooltip.css";

import { SkillComponent } from "../../components";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import { PrimaryBg } from "../../components/globelStyle";
import { fadeIn, zoomIn } from "../../Utils/motion";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);
  return (
    <>
      <SkillComponent.HeadText>
        Skills & <span>Experiance</span>
      </SkillComponent.HeadText>
      <SkillComponent.SkillsContainer>
        <SkillComponent.Lists>
          {skills.map((skill, index) => (
            <SkillComponent.ListItems
              variants={zoomIn(index * 0.5, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              key={skill.name}
            >
              <SkillComponent.SkillIconContainer
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </SkillComponent.SkillIconContainer>
              <SkillComponent.NameText>{skill.name}</SkillComponent.NameText>
            </SkillComponent.ListItems>
          ))}
        </SkillComponent.Lists>
        <SkillComponent.ExpLists>
          {experiences.map((experience, index) => (
            <SkillComponent.ExpItems
              variants={fadeIn("left", "spring", index * 0.5, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              key={experience.year}
            >
              <SkillComponent.ExpYearContainer>
                <SkillComponent.ExpYear>
                  {experience.year}
                </SkillComponent.ExpYear>
              </SkillComponent.ExpYearContainer>
              <SkillComponent.ExpWorkLists>
                {experience.works.map((work) => (
                  <div key={work.name}>
                    <SkillComponent.ExpWorkItem
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      <SkillComponent.ExpName>
                        {work.name}
                      </SkillComponent.ExpName>
                      <SkillComponent.ExpCompany>
                        {work.company}
                      </SkillComponent.ExpCompany>
                      <ul>
                        {work.desc?.map((d, index) => (
                          <li key={index}>{d.text}</li>
                        ))}
                      </ul>
                    </SkillComponent.ExpWorkItem>
                    {/* <SkillComponent.ExpToolTip id={work.name} /> */}
                  </div>
                ))}
              </SkillComponent.ExpWorkLists>
            </SkillComponent.ExpItems>
          ))}
        </SkillComponent.ExpLists>
      </SkillComponent.SkillsContainer>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, SkillComponent), "skills", PrimaryBg);
