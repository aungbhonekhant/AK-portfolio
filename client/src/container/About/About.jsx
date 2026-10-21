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
        <span> Building Reliable Web Products </span>
        <br />From Database to Interface
        {/* <span> Good Business</span> */}
      </AboutComponent.HeadText>
      <AboutComponent.SubHeadText>
        Most of my work lives where a product meets the people who run it: the
        APIs, admin panels and workflows that let a business list, sell,
        finance and report without friction. Over seven years that has meant
        multi-vendor e-commerce platforms, an SMS and OTP gateway, a
        blockchain-backed precious-metals trading API and, at FazWaz,
        self-listing, alternative-financing and AI property-search features for
        a real-estate marketplace across Southeast Asia and the Middle East. I
        work mostly in Laravel, Vue.js, React and Node.js, reach for Python when
        a manual task should be automated, and work in Agile teams alongside
        designers and product owners. What I care about stays the same from
        project to project: code the next developer can read, systems that hold
        up under real use, and features people find easy to use.
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
