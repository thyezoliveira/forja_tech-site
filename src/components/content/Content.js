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
                    <h2>Estudos 3d</h2>
                    <p>O intuito destes estudos é, dominar Modelos 3D em paginas HTML, integração do framework Reactjs com a biblioteca Threejs e interação e eventos em ambientes 3d. </p>
                </div>

                <div className="quadro">
                    <p>Topicos de estudo</p>
                    <ul>
                        <li>Modelagem 3D</li>
                        <li>Importação de modelos</li>
                        <li>Composição de cenas</li>
                        <li>Animações simples</li>
                        <li>Eventos</li>
                    </ul>
                </div>
            </div>
            </>
        )
    }
}