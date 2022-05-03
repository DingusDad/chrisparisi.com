import React from "react";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://github.com/chrisparisi"
          target="_blank"
          rel="noreferrer"
          alt="link to Github"
        >
          <AiFillGithub />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/chrisparisi7/"
          target="_blank"
          rel="noreferrer"
          alt="link to Linkedin"
        >
          <FaLinkedinIn />
        </a>
      </div>
      <div>
        <a
          href="https://twitter.com/ChrisParisiDev"
          target="_blank"
          rel="noreferrer"
          alt="link to Twitter"
        >
          <AiFillTwitterCircle />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
