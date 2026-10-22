import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

import { WorkComponent } from "../../components";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import { secondaryBg } from "../../components/globelStyle";
import { fadeIn } from "../../Utils/motion";

const PortfolioCard = ({
  index,
  title,
  description,
  projectLink,
  codeLink,
  imgUrl,
  tags,
}) => {
  return (
    <WorkComponent.PortfolioItem
      variants={fadeIn("up", "tween", (index % 3) * 0.1, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <WorkComponent.PortolioItemContainer
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
      >
        <WorkComponent.PortfolioItemWarp>
          <WorkComponent.PortfolioItemImg
            src={urlFor(imgUrl).width(720).auto("format").url()}
            alt={title}
            loading="lazy"
            decoding="async"
          />
          <WorkComponent.PortfolioItemAction>
            {/* github link icon */}
            {codeLink && (
              <WorkComponent.PortfolioItemActionItem
                onClick={() => window.open(codeLink, "_blank")}
              >
                <AiFillGithub />
              </WorkComponent.PortfolioItemActionItem>
            )}

            {/* live website icon */}
            {projectLink && (
              <WorkComponent.PortfolioItemActionItem
                onClick={() => window.open(projectLink, "_blank")}
              >
                <AiFillEye />
              </WorkComponent.PortfolioItemActionItem>
            )}
          </WorkComponent.PortfolioItemAction>
        </WorkComponent.PortfolioItemWarp>
        <WorkComponent.PortfolioItemInfo>
          <h3>{title}</h3>
          <p>{description}</p>
        </WorkComponent.PortfolioItemInfo>
        <WorkComponent.PortfolioItemInfoTechs>
          {tags.map((tag, index) => (
            <p style={{ "--tag-color": `#${tag.color}` }} key={index}>
              #{tag.name}
            </p>
          ))}
        </WorkComponent.PortfolioItemInfoTechs>
      </WorkComponent.PortolioItemContainer>
    </WorkComponent.PortfolioItem>
  );
};

// Each filter matches projects that have any of its tag names.
const FILTERS = [
  { label: "All" },
  { label: "Laravel", tags: ["laravel"] },
  { label: "Vue.js", tags: ["vuejs"] },
  { label: "Node.js", tags: ["nodejs"] },
  { label: "APIs", tags: ["api"] },
  { label: "Automation & AI", tags: ["automation", "llm"] },
];

const Work = () => {
  const [works, setWorks] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const query = '*[_type == "works"] | order(_createdAt desc)';
    client.fetch(query).then((data) => {
      setWorks(data);
    });
  }, []);

  const filterTags = FILTERS.find((f) => f.label === activeFilter)?.tags;
  const filterWork = filterTags
    ? works.filter((work) =>
        work.tags?.some((tag) => filterTags.includes(tag.name))
      )
    : works;

  return (
    <>
      <WorkComponent.HeadText>
        My Creative
        <span> Portfolios </span>
      </WorkComponent.HeadText>
      <WorkComponent.Filter>
        {FILTERS.map(({ label }) => (
          <WorkComponent.FilterItem
            type="button"
            $active={activeFilter === label}
            aria-pressed={activeFilter === label}
            key={label}
            onClick={() => setActiveFilter(label)}
          >
            {label}
          </WorkComponent.FilterItem>
        ))}
      </WorkComponent.Filter>
      {/* keyed by filter so the cards replay their entrance on change */}
      <WorkComponent.Portfolio key={activeFilter}>
        {filterWork.map((work, index) => (
          <PortfolioCard
            index={index}
            title={work.title}
            description={work.description}
            projectLink={work.projectLink}
            codeLink={work.codeLink}
            imgUrl={work.imgUrl}
            tags={work.tags ?? []}
            key={work._id}
          />
        ))}
      </WorkComponent.Portfolio>
    </>
  );
};

export default AppWrap(MotionWrap(Work, WorkComponent), "work", secondaryBg);
