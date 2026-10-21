import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Social } from "./globelStyle";

const links = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/aung-bhone-khant",
    Icon: BsLinkedin,
  },
  { label: "GitHub", url: "https://github.com/aungbhonekhant", Icon: BsGithub },
];

const SocialMedia = () => {
  return (
    <Social>
      {links.map(({ label, url, Icon }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
        >
          <Icon />
        </a>
      ))}
    </Social>
  );
};

export default SocialMedia;
