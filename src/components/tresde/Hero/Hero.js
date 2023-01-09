import React, {useState, useEffect} from "react";
import { motion } from 'framer-motion-3d'
import {Text} from "@react-three/drei"
import fonte from '../coders_crux.ttf'

export default function Hero(props) {
    const [position] = useState(props.position)
    const [visible, setVisible] = useState(props.introEnd)
    const [variants] = useState({
        hide:{
            z:-1000,
            transition:{
                z:{duration:2, easing:"linear"}
            }
        },
        show:{
            z:-1,
            transition:{
                z:{duration:2, easing:"linear"}
            }
        }
    })

    useEffect(()=> {setVisible(props.introEnd)}, [props.introEnd])

    return (
        <motion.group name="testeGrupo"
            position={position}
            animate={visible ? variants.show : variants.hide}
            onA
        >
            <Text name="testeTexto"
                color={'#000000'}
                font={fonte}
                fontSize={16}
                maxWidth={500}
                lineHeight={1}
                letterSpacing={0.02}
                textAlign={'left'}
                anchorX="center"
                anchorY="middle"
            >
                Portifolio a caminho...
            </Text>
        </motion.group>
    )
}