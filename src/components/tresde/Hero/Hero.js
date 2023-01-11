import React from "react";
import { motion } from 'framer-motion';
import {ReactComponent as Arrow} from './arrow.svg';
import './Hero.css';

export default function Hero(props) {

    return (
        <motion.div className="hero">
            <div>
                <p>Role para baixo</p>
                <div className="seta"> 
                    <Arrow className="svg" />
                </div>
            </div>
        </motion.div>
    )
}