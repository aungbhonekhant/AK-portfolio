import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Social } from "./globelStyle";

const SocialMedia = () => {
  return (
    <Social>
      <div style={{ color: "#aaa6c3" }}>
        <BsLinkedin />
      </div>
      <div style={{ color: "#aaa6c3" }}>
        <FaFacebookF />
      </div>
      <div style={{ color: "#aaa6c3" }}>
        <BsGithub />
      </div>
    </Social>
  );
};

export default SocialMedia;
