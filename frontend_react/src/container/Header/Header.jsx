import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";

import { images } from "../../constants";
import TypeAnimation from "react-type-animation";

import {AppWrap} from '../../wrapper'

const scaleVariants = {
  whileInView :{
    scale:[0,1],
    opacity:[0,1],
    transition:{
      duration:1,
      ease : 'easeInOut'
    }
  }
};



const Header = () => {
  return (
    <div  className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello I am</p>
              <h1 className="head-text">Vibhu Dhyani</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">
              <TypeAnimation
                cursor={false}
                sequence={["Web Developer 👨🏻‍🎓", 2000, "Full-Stack 👨🏻‍💻",2000,"MERN 🌎",2000,"Power Platform Developer 🏋",2000,"Data Analyst 📊",2000,"Devops 🔧",2000,"Freelancer 🚀",2000]}
                wrapper="h2"
                repeat={Infinity}
                cursor={true}
              />
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
       whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5,delayChildren:0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg"/>
        <motion.img
          whileInView={{ scale: [0, 1] }}
        transition={{ duration: 0.5,ease:"easeInOut" }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
        ></motion.img>
        
      </motion.div>

      <motion.div
          variant={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles"
      >
       {[images.pbi,images.nodejs,images.react,images.sass,images.papp].map( (circle,index) => (
        <div className="circle-cmp app__flex" key = {`circle-${index}`}>

          <img src={circle} alt="circle"/>

        </div>
       ) )}
      </motion.div>
     
    </div>
  );
};

export default AppWrap(Header,'home');
