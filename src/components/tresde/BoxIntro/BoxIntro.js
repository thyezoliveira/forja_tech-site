import React, {useState, useEffect} from "react"
import { motion } from "framer-motion-3d"
import { Text } from "@react-three/drei"
import fonte from '../coders_crux.ttf'

export default function BoxIntro(props) {
  const [boxDimentions] = useState([100,100,100,3,3,3])
  const [boxColor] = useState(props.color)
  const [position] = useState(props.position)
  const [windowProps] = useState(props.windowProps)
  const [logoPositionVariants] = useState({
    logo:{
      x: 0,//windowProps.windowLeft + 50,
      y: 0,//-windowProps.windowTop - 50,
      z: -300,
      scale: 1,
      name:"logo",
      transition:{
        scale: {
          type:"spring",
          duration:3,
          delay: 0
        },
        x:{
          type:"spring",
          delay:0.2
        },
        y:{
          type:"spring",
          delay:0.2
        },
        z:{
          type:"spring",
          delay:0.2
        }
      }
    },
    shrink:{
      x: windowProps.windowLeft + 50,
      y: 0,//-windowProps.windowTop - 50,
      z:-300,
      scale: 1,
      name:"shrink",
      transition:{
        x:{
          duration:1,
          delay:0
        },
        y:{
          duration:1,
          delay:0
        },
        z:{
          duration:2,
          delay:1,
        }
      }
      },
  })
  const [cubeAnimationVariants] = useState({
    initial:{
      x:0, 
      y:0, 
      z:-300,
      rotateX:[0, 1.57], 
      rotateZ: [10,1.57], 
      rotateY:[6, 1.57],
      scale:[1, 0.4],
      name:"intro",
      transition:{
        type: "spring",
        bounce:0.8,
        rotateX:{duration:3, easing: "linear"},
        rotateY:{duration:3, easing: "linear"},
        rotateZ:{duration:3, easing: "linear"},
        scale:{duration:3},
      }
    },
    presentation:{
      x:0, 
      y:0, 
      z:-300,
      rotateX:[1.57,1.57,0], 
      rotateZ: [1.57,1.57,0], 
      rotateY:[1.57,1.57,0],
      scale:[0.8,1,.8],
      name:"presentation",
      transition:{
        type: "tween",
        x:{duration:1, easing: "linear",bounce: 1},
        y:{duration:1, easing: "linear",bounce: 1},
        z:{duration:1, easing: "linear",bounce: 1},
        rotateX:{duration:2, easing: "linear"},
        rotateY:{duration:2, easing: "linear"},
        rotateZ:{duration:2, easing: "linear"},
        scale:{duration:1},
      }
    }
  })
  const [textVariants] = useState({
    hide:{
      x:0,
      z:1000,
      name:"hide",
      transition:{
        type: "keyframes", delay:0, duration:0.1
      }
    },
    show:{
      x: 50,
      z: -200,
      name:"show",
      transition:{
        type: "keyframes", delay:2, duration:1
      }
    }
  })
  const [cubeLogoVariants] = useState({
    default:{
      scale:.4,
      z:100,
      rotateX:0,
      rotateY:0,
      rotateZ:0,
      transition:{
        rotateX:{
          duration:3
        },
        rotateY:{
          duration:3,
        },
        rotateZ:{
          duration:3,
        },
      }
    },
    hover:{
      scale:.5,
      z:100,
      rotateX:-(1.57 * 2),
      rotateY:-(1.57 * 2),
      rotateZ:-(1.57 * 2),
      transition:{
        scale:{
          type:"keyframes",
          duration:.8
        },
        rotateX:{
          type:"spring",
          easing:"linear",
          duration:3
        },
        rotateY:{
          type:"spring",
          easing:"linear",
          duration:3,
        },
        rotateZ:{
          type:"spring",
          easing:"linear",
          duration:3,
        },
      }
    }
  })
  const [PointerHover, setPointerHover] = useState(false)

  useEffect(()=> {
    document.body.style.cursor = PointerHover ? 'pointer' : 'auto'
    }, [PointerHover])
  
  useEffect(()=> {

  })

  return (
    <motion.group name="LogoContainer"
      animate={props.isActivated ? props.animEnd ? logoPositionVariants.shrink : logoPositionVariants.logo : undefined}
      variants={logoPositionVariants}
      onAnimationComplete={ definition =>{
        if(definition.name === 'logo'){
          props.setAnimationEnd(true)
        } if(definition.name === 'shrink'){
          console.log("Container do logo posicionado no meio a esquerda.")
          // props.setIntroEnd(true)
        }
      }}
      >
      <motion.mesh name="BaseBox"
        onClick={() => props.setActivated(true)}
        onPointerOver={()=> setPointerHover(true)}
        onPointerOut={()=> setPointerHover(false)}
        animate={props.isActivated ? cubeAnimationVariants.presentation : cubeAnimationVariants.initial}
        rotation={[0, 0, 0]}
        position={position}
        variants={cubeAnimationVariants}
        >
          <boxGeometry attach="geometry" args={boxDimentions}></boxGeometry>
          <meshLambertMaterial wireframe={props.isActivated ? false : true} attach="material" color={props.isActivated ? boxColor : props.boxColor}></meshLambertMaterial>
      </motion.mesh>
      
      <motion.group name="LogoTitle"
        animate={props.isActivated ? textVariants.show : textVariants.hide}
        initial={textVariants.hide}
        variants={textVariants}
        onAnimationComplete={ definition => {
          if(definition.name === 'show'){
            props.setIntroEnd(true)
            console.log("Final da introdução. Iniciar site...")
          }
        }}
      >
        <Text
            color={'#000000'}
            font={fonte}
            fontSize={22}
            maxWidth={200}
            lineHeight={1}
            letterSpacing={0.02}
            textAlign={'left'}
            anchorX="left"
            anchorY="middle"
            position={[0,0,1]}
          >
            forjaTech
          </Text>
      </motion.group>
      
      <motion.mesh name="LogoBox"
          whileHover={cubeLogoVariants.hover}
          onPointerOver={()=> setPointerHover(true)}
          onPointerOut={()=> setPointerHover(false)}
          animate={props.isActivated ? cubeLogoVariants.default : undefined}
          rotation={[0, 0, 0]}
          position={[0,0, 1000]}
          >
            <boxGeometry attach="geometry" args={boxDimentions}></boxGeometry>
            <meshLambertMaterial wireframe={true} attach="material" color={'#ffff00'}></meshLambertMaterial>
      </motion.mesh>
    </motion.group>
  )
}