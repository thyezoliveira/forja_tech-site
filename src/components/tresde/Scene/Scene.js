import React, {useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion'
import BoxIntro from '../BoxIntro/BoxIntro';
import '../../../App.css';

export default function Scene(props){
    const [background] = useState("#000000")
    const [cube1color] = useState("#000000")

    return (
        <>
        <Canvas className='canvasScene' orthographic={true} onClick={()=> props.toggleFullScreen(false)} background={background}>
            <ambientLight position={[0,50,200]} intensity={1}/>
            <BoxIntro name="Intro"
                color={cube1color}
                position={[0,0,-300]}
                windowProps={props.windowProps}
                introEnd={props.introEnd}
                setIntroEnd={props.setIntroEnd}
                isFullScreen={props.isFullScreen}
                toggleFullScreen={props.toggleFullScreen}
                animEnd={props.animEnd}
                setAnimationEnd={props.setAnimationEnd}
                isActivated={props.isActivated}
                setActivated={props.setActivated}
                />
        </Canvas>
        <motion.div className='top_bg' initial={{ opacity: 0 }} animate={props.introEnd ? {opacity: 1} : undefined} />
        </>
    );
}