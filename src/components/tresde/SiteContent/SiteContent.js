import React from "react";
import { motion } from 'framer-motion';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Footer from '../Footer/Footer';
import './SiteContent.css';

export default function SiteContent(props) {

    return (
        <motion.div className="siteContent">
            <Hero/>
            <About/>
            <Footer/>
        </motion.div>
    )
}