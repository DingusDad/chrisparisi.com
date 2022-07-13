import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import DOTS from 'vanta/dist/vanta.dots.min';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const Header = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        DOTS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xf7f7f7,
          color2: 0x738783,
          backgroundColor: 0x738783,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-400, 0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <div className="app__header-main">
              <h1>CHRIS PARISI</h1>
              <div className="app__header-container">
                <div className="app__header-container-left">
                  <h2>FULL STACK DEVELOPER</h2>
                  <h3>MONGODB//EXPRESS//REACTJS//NODEJS</h3>
                </div>
                <div className="app__header-container-right">
                  {[images.node, images.react1, images.redux].map(
                    (circle, index) => (
                      <div className="circle-header" key={`circle-${index}`}>
                        <img src={circle} alt="circle" />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ x: [400, 0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="app__header-right-slide"
        ref={myRef}
      ></motion.div>
    </div>
  );
};

export default AppWrap(Header, 'home');
