import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import Scene from './components/tresde/Scene/Scene';
import './App.css';

export default function App() {
  const [isFullScreen, toggleFullScreen] = useState(true)
  const [isActivated, setActivated] = useState(false)
  const [animEnd, setAnimationEnd] = useState(false)
  const [introEnd, setIntroEnd] = useState(false)
  const [windowProps] = useState({
      windowWidth:window.innerWidth,
      windowHeight:window.innerHeight,
      windowTop: - window.innerHeight / 2,
      windowBottom: window.innerHeight / 2,
      windowLeft: - window.innerWidth / 2,
      windowRight: window.innerWidth / 2,
  })
  const [variants] = useState({
    fullScreen:{
      name:"fullscreen",
      position: "fixed", 
      inset:0, 
      height: windowProps.windowHeight,
      transition:{
        height:{
          duration:1,
          delay:1
        }
      }
    },
    shrink:{
      name:"shrink",
      position: "fixed", 
      inset:0, 
      height: 100,
      transition:{
        height:{
          duration:1,
          delay:1
        }
      }
    },
  })

  return (
    <>
      <motion.div className='top'
        layout="preserve-aspect"
        style={isFullScreen ? variants.fullScreen : variants.shrink}
        variants={variants}
      >
        <Scene className="canvas" windowProps={windowProps} toggleFullScreen={toggleFullScreen} isFullScreen={isFullScreen} introEnd={introEnd} setIntroEnd={setIntroEnd} animEnd={animEnd} isActivated={isActivated} setAnimationEnd={setAnimationEnd} setActivated={setActivated}/>
      <motion.div className="bott">
        <p>Site em breve!</p>
      </motion.div>
      </motion.div>
    </>
  )
}