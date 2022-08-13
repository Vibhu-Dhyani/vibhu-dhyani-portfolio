import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo1} alt="logo1" />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills','testimonial', 'contact','download resume'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            { item === 'download resume' ? ( <a href={images.resume} download>{item}</a>) : 
            <a href={`#${item}`}>{item}</a>
            }
            </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        {!toggle && <MenuIcon onClick={() => setToggle(true)} />}

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <CloseIcon onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills','testimonial', 'contact','download resume'].map((item) => (
                <li key={item}>
                  {
                    item === 'download resume' ? ( <a href={images.resume} download>{item}</a>) : 
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;