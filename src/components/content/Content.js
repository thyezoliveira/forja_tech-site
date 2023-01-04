import React from "react";
import './Content.css';

export default class Content extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
            <div className="content">
                <div className="quadro">
                    <p>Olá, seja bem-vindo ao site <span className="site">forjatech.netlify.app</span> .</p>
                    <p>Aqui voce encontrará um pouco das minhas experiencias e projetos de uma forma nunca vista em outro site!</p>
                </div>

                <div className="espaco"></div>

                <div className="quadro">
                    <h2>Estudos 3d</h2>
                    <p>Esta pagina foi construida com o intuito de servir como um laboratorio / Vitrine / Showreel. Com isso posso estudar o uso de  Modelos 3D em paginas HTML, integração do framework Reactjs com a biblioteca Threejs e interação e eventos em ambientes 3d. </p>
                </div>

                <div className="espaco"></div>

                <div className="quadro">
                    <h2>Topicos de estudo</h2>
                    <ul>
                        <li>Modelagem 3D</li>
                        <li>Importação de modelos</li>
                        <li>Composição de cenas</li>
                        <li>Animações simples</li>
                        <li>Eventos</li>
                    </ul>
                </div>

                <div className="espaco"></div>

                <div className="curriculo">
                    <p>curriculo <span className="download"><a href="#">Download</a></span></p>
                </div>
            </div>
            </>
        )
    }
}