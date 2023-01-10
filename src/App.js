import React, {useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion'
import { OrthographicCamera } from '@react-three/drei'
import './App.css';
import BoxIntro from './components/tresde/BoxIntro/BoxIntro';
import Hero from './components/tresde/Hero/Hero';

export default function App() {
  const [background] = useState("#000000")
  const [isHovered, toggleHovered] = useState(false)
  const [cube1color] = useState("#000000")
  const [windowProps] = useState({
    windowWidth:window.innerWidth,
    windowHeight:window.innerHeight,
    windowTop: - window.innerHeight / 2,
    windowBottom: window.innerHeight / 2,
    windowLeft: - window.innerWidth / 2,
    windowRight: window.innerWidth / 2,
  })
  const [introEnd, setIntroEnd] = useState(false)

  return (
    <>
      <Canvas background={background}>
          <ambientLight position={[0,50,200]} intensity={1}/>
          <BoxIntro 
            toggleHovered={toggleHovered} 
            isHovered={isHovered} 
            color={cube1color}
            position={[0,0,-300]}
            windowProps={windowProps}
            setIntroEnd={setIntroEnd}
          />
          <Hero position={[0,0,-10]} introEnd={introEnd} windowProps={windowProps}/>
          <OrthographicCamera makeDefault position={[0,0,-5]} />
      </Canvas>
      <motion.div className='circle' initial={{ opacity: 0 }} animate={introEnd ? {opacity: 1} : undefined}/>
    </>
  );
}