import React from "react";
import { motion } from 'framer-motion';
import curriculo from './curriculo_thyez.pdf'
import './Footer.css';

export default function SiteContent(props) {

    return (
        <motion.footer className="footer">
            {/* <h2>Curriculo</h2> */}
            <p>
                Dev: 
            <a href={curriculo} className="curriculo">Thyéz de Oliveira Monteiro</a>
            <br></br>
            - 2023 -
            </p>
        </motion.footer>
    )
}