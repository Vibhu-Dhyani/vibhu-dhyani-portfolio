import React , {useState,useEffect} from 'react'
import './About.scss'
import {motion} from 'framer-motion'
import {images} from '../../constants'
import Container from '@material-ui/core/Container';
import { urlFor,client } from '../../client';
import { AppWrap } from '../../wrapper';


//1234568
const About = () => {

  const [abouts,setAbouts] = useState([]);

  useEffect(()=>{
      const query = '*[ _type == "abouts" ]';
      client.fetch(query)
      .then((data)=>{
          setAbouts(data);
      })
  },[]);

  return (
    <>
   <div  className='app__about'>
          {/**/ }
     <h2 className='head-text'>
      
        "
        <span>Life is </span>
        too short
        <br/>
        <span>to stop !!</span>
        "
      </h2>
      


<motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] } }
        transition={{ duration: 1 }} className="t">
      <Container className='about-text'>
          <div className='text'>
            <b>
            <h2>About Me</h2></b>
            <p style={{margin:'1rem'}}>&#8226; Vibhu Dhyani is currently working as a Power Platform Developer/DevOps Engineer at Infosys, with experience in the integration of Azure DevOps with Power Platform Services. Along with this, he is extremely interested in Full Stack Development & Artificial Intelligence, his projects tell about his mindful, versatile but competitive approach.</p>
            <p style={{margin:'1rem'}}>&#8226; Vibhu is fueled by his passion to learn different emerging technologies. He considers himself a 'forever student'.</p>
             <p style={{margin:'1rem'}}>&#8226; Vibhu's hunger for knowledge and determination to turn information into action has contributed every time to an over-satisfactory project delivery, which is regularly appreciated by the client.</p>
            
            </div>
          
          <img src={images.aboutphoto} alt="aboutPhoto" />
         

      </Container>
       





      <div  className='app__profiles'>
          {abouts.map((about,index) => (
            <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration:0.5,type:'tween'}}
            className="app__profile-item"
            key={about.title+index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title}/>
              <h2 className='bold-text' style={{marginTop:20}} >{about.title}</h2>
              <p className='p-text' style={{marginTop:10}}>{about.description}</p>
            </motion.div>
          ))}
      </div>
      </motion.div>
   </div>
   </>
  )
}

export default  AppWrap(About,'about') 