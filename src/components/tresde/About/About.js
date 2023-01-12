import React from "react";
import { motion } from 'framer-motion';
import './About.css';

export default function About(props) {

    return (
        <motion.div className="about">
            <h1 className="sectionTitle">Sobre</h1>
            <p>Olá! Me chamo Thyéz. Sou desenvolvedor web!</p>
            <p>Adoro construir paginas web interativas e responsivas. Sempre tive curiosidade para buscar aprender os fundamentos da web</p>
            <p>A questão que sempre me guiou foi: Como as paginas de internet eram criadas?</p>
            <p>Habilidades principais</p>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Python</li>
                <li>Mysql</li>
                <li>AWS</li>
            </ul>
        </motion.div>
    )
}