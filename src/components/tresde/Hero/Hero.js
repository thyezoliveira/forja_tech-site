import React, {useState, useEffect, useRef} from "react";
import { motion } from 'framer-motion-3d'
import {Text} from "@react-three/drei"
import fonte from '../coders_crux.ttf'

export default function Hero(props) {
    const [position] = useState(props.position)
    const [visible, setVisible] = useState(props.introEnd)
    const [variants] = useState({
        hide:{
            fillOpacity: 0,
            z:1200,
            transition:{
                z:{duration:2, easing:"linear"}
            },
            name:"hide"
        },
        show:{
            fillOpacity:1,
            z:-200,
            transition:{
                z:{duration:2, easing:"linear"}
            },
            name: "show"
        }
    })
    const theText = useRef(null)
    const [animEnd, setAnimationEnd] = useState(false)

    useEffect(()=> {
        setVisible(props.introEnd)
    }, [props.introEnd])
    
    useEffect(()=>{
        if(animEnd){
            console.log(theText.current)
        }
    })

    return (
        <motion.group name="testeGrupo"
            position={position}
            animate={visible ? variants.show : variants.hide}
            onAnimationComplete={ definition => {
                if(definition.name === 'show'){
                    // setAnimationEnd(true)
                    console.log(definition.name)
                }
            }}
        >
            <Text name="testeTexto"
                ref={theText}
                color={'#000000'}
                font={fonte}
                fontSize={16}
                maxWidth={200}
                lineHeight={1}
                letterSpacing={0.02}
                textAlign={'center'}
                anchorX="center"
                anchorY="middle"
            >
                Portifolio a caminho..
                by: 
                Thyez de Oliveira
            </Text>
        </motion.group>
    )
}