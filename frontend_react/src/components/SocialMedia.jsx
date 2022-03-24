import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://github.com/chrisparisi"
          target="_blank"
          rel="noreferrer"
          alt="link to github"
        >
          <AiFillGithub />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/chrisparisi7/"
          target="_blank"
          rel="noreferrer"
          alt="link to linkedin"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
