// Importaçoes
import {useState,useEffect} from "react";
import background from "./background";
import "../style/about.css";


// Dados
const data = require("../data.json");

// Funções da página
export default function Destination(){

    // State
    const [destinationId, setDestinationId] = useState(0);

    // mudando o background
    window.onload = background("destination");

    // Dados buscados no arquivo data.json
    const {name, description, impacts} = data.destinations[destinationId];
    
    // Função para mudar com um clique
    const change = (id) => {
        setDestinationId(id);
    }

    useEffect(() => {
        const list = document.querySelectorAll('.destination-names span');
		for (let i = 0; i < list.length; i++) {
			list[i].classList.remove('active');
		}
        list[destinationId].classList.add("active");
    }, [destinationId]);

    
    return(

        // Container
        <div className="container destination-container">

            <div className="destination">

                <div className="destination-text">

                    <div className="destination-names">
                        <span onClick={() => change(0)}>Impacto</span>
                        <span onClick={() => change(1)}>Quem somos</span>
                        <span onClick={() => change(2)} >Parceiros</span>
                      
                    </div>

                    <h3>
                        {name}
                    </h3>
                    <p>
                        {description}
                    </p>

                    <div className="destination-info">
                        <div className="avg-distance">
                            <h4>
                                Impactos
                            </h4>
                            <span>
                                {impacts}
                            </span>
                        </div>
                      
                    </div>

                </div>

            </div>

        </div>

    );
}
