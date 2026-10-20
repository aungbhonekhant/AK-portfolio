import React, { useState, useEffect } from "react";
import { AboutComponent } from "../../components";
import { images } from "../../constants";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import { PrimaryBg } from "../../components/globelStyle";
import { fadeIn } from "../../Utils/motion";

const abouts = [
  {
    title: "Web Development",
    description: "I am a good Web Developer",
    imgUrl: images.about01,
  },
  {
    title: "Web Design",
    description: "I am a good Web Designer",
    imgUrl: images.about02,
  },
  {
    title: "UI/UX",
    description: "I am a good UI/UX Developer",
    imgUrl: images.about03,
  },
  {
    title: "Web Animations",
    description: "I am a good Animations Designer",
    imgUrl: images.about04,
  },
];

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <AboutComponent.HeadText>
        <span> Code, Coffee, and Creativity </span>
        <br />A Web Developer's Tale
        {/* <span> Good Business</span> */}
      </AboutComponent.HeadText>
      <AboutComponent.SubHeadText>
        I'm a full-stack developer based in Yangon, Myanmar, with over seven
        years of professional experience designing and building web
        applications, RESTful APIs and content management systems. My core
        stack is Laravel, Node.js, React and Vue, backed by MySQL and MongoDB.
        I have delivered multi-vendor e-commerce platforms, an SMS and OTP
        gateway, and a blockchain-backed precious-metals trading API, working
        closely with designers, product owners and engineers from requirements
        through release. I focus on maintainable code, reliable systems and a
        consistent user experience.
      </AboutComponent.SubHeadText>
      <AboutComponent.Profiles>
        {abouts.map((about, index) => (
          <AboutComponent.ProfilesItem
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            // whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            // transition={{ duration: 0.5, type: "tween" }}
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <AboutComponent.BoldText>{about.title}</AboutComponent.BoldText>
            <AboutComponent.Ptext>{about.description}</AboutComponent.Ptext>
          </AboutComponent.ProfilesItem>
        ))}
      </AboutComponent.Profiles>
    </>
  );
};

export default AppWrap(MotionWrap(About, AboutComponent), "about", PrimaryBg);
