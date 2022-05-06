import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-400, 0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <div>
              <h1>CHRIS PARISI</h1>
              <h2>FULLSTACK DEVELOPER</h2>
              <h3>MONGODB//EXPRESS//REACTJS//NODEJS</h3>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ x: [400, 0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
        className="app__header-circles"
      >
        {[images.node, images.react1, images.redux].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, 'home');
