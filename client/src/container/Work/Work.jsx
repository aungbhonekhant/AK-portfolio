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
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <WorkComponent.PortolioItemContainer
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
      >
        <WorkComponent.PortfolioItemWarp>
          <WorkComponent.PortfolioItemImg src={urlFor(imgUrl)} alt={title} />
          <WorkComponent.PortfolioItemAction>
            {/* github link icon */}
            <WorkComponent.PortfolioItemActionItem
              onClick={() => window.open(codeLink, "_blank")}
            >
              <AiFillGithub />
            </WorkComponent.PortfolioItemActionItem>

            {/* live website icon */}
            <WorkComponent.PortfolioItemActionItem
              onClick={() => window.open(projectLink, "_blank")}
            >
              <AiFillEye />
            </WorkComponent.PortfolioItemActionItem>
          </WorkComponent.PortfolioItemAction>
        </WorkComponent.PortfolioItemWarp>
        <WorkComponent.PortfolioItemInfo>
          <h3>{title}</h3>
          <p>{description}</p>
        </WorkComponent.PortfolioItemInfo>
        <WorkComponent.PortfolioItemInfoTechs>
          {tags.map((tag, index) => (
            <p style={{ color: `#${tag.color}` }} key={index}>
              #{tag.name}
            </p>
          ))}
        </WorkComponent.PortfolioItemInfoTechs>
      </WorkComponent.PortolioItemContainer>
    </WorkComponent.PortfolioItem>
  );
};

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  return (
    <>
      <WorkComponent.HeadText>
        My Creative
        <span> Portfolios </span>
      </WorkComponent.HeadText>
      <WorkComponent.Filter>
        {["UI/UX", "Web App", "Mobile App", "React Js", "All"].map(
          (cat, index) => (
            <WorkComponent.FilterItem
              active={activeFilter === cat}
              key={index}
              onClick={() => handleWorkFilter(cat)}
            >
              {cat}
            </WorkComponent.FilterItem>
          )
        )}
      </WorkComponent.Filter>
      <WorkComponent.Portfolio>
        {filterWork.map((work, index) => (
          <PortfolioCard
            index={index}
            title={work.title}
            description={work.description}
            projectLink={work.projectLink}
            codeLink={work.codeLink}
            imgUrl={work.imgUrl}
            tags={work.tags}
            key={`portfolio-${index}`}
          />
        ))}
      </WorkComponent.Portfolio>
    </>
  );
};

export default AppWrap(MotionWrap(Work, WorkComponent), "work", secondaryBg);
