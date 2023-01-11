import React from "react";
import { motion } from 'framer-motion';
import './About.css';

export default function About(props) {

    return (
        <motion.div className="about">
            <h1 className="sectionTitle">Sobre</h1>
            <p>Olá, me chamo Thyéz. Sou desenvolvedor web!</p>
            <p>Tenho conhecimento abrangente em tecnologias de desenvolvimento web. Tanto para 2d básico quanto para 3d em paginas web.</p>
            <p>Minhas habilidades fundamentais são HTML, CSS e Javascript. Mas desenvolvi tambem habilidades com Python e seus frameworks e banco de dados.</p>
            <h2>Vamos trabalhar juntos?</h2>

            <p className="small">Thyéz de Oliveira Monteiro</p>
        </motion.div>
    )
}