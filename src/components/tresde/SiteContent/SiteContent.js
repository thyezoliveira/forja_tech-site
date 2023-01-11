import React from "react";
import { motion } from 'framer-motion';
// import fonte from '../coders_crux.ttf';
import Hero from '../Hero/Hero';
import About from '../About/About';
import './SiteContent.css';

export default function SiteContent(props) {

    return (
        <motion.div className="siteContent">
            <Hero/>
            <About/>
        </motion.div>
    )
}