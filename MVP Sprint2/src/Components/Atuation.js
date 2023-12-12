// Import Statements
import Subheading from "./Subheading";
import {useState, useEffect} from "react";
import "../style/atuation.css";
import background from "./background";
import launchPortrait from "../assets/atuation/image-pollution-portrait.jpg";
import spaceportPortrait from "../assets/atuation/image-volunteer-portrait.jpg";
import spacePortrait from "../assets/atuation/image-recicle-portrait.jpg";
import launchLand from "../assets/atuation/image-pollution-landscape.jpg";
import spaceportLand from "../assets/atuation/image-volunteer-landscape.jpg";
import spaceLand from "../assets/atuation/image-recicle-landscape.jpg";

// Requisição dos dados do arquivo data.json
const data = require("../data.json");

export default function Technology(){

    // State
    const [technologyId, setTechnologyId] = useState(0);

    // mudando o background
    window.onload = background("technology");

   
    const {name, description} = data.technology[technologyId];
    
    // Função para mudar com um clique
    const change = (id) => {
        setTechnologyId(id);
    }

    useEffect(() => {
        const list = document.querySelectorAll('.pagination-tech span');
		for (let i = 0; i < list.length; i++) {
			list[i].classList.remove('active-dot');
		}
        list[technologyId].classList.add("active-dot");
    }, [technologyId]);
    
    const image = () => {
        let a =[];
        if(name === "Identifique o problema") {
            a.push(launchLand);
            a.push(launchPortrait)
            return a;
        }else if(name === "Nos ajude a resolver"){
            a.push(spaceportLand);
            a.push(spaceportPortrait)
            return a;
        }else if(name === "Lixo vira luxo"){
            a.push(spaceLand);
            a.push(spacePortrait)
            return a;
        }
    }

    return(
        <div className="container">

            <Subheading number="" heading = "Nossa Atuação" />

            <div className="technology">

                {/* Paginação */}
                <div className="pagination-tech">
                    <span onClick={() => change(0)}>1</span>
                    <span onClick={() => change(1)}>2</span>
                    <span onClick={() => change(2)}>3</span>
                </div>

                {/* Texto das páginas */}
                <div className="technology-text">
                    <span>
                        Cada Etapa
                    </span>
                    <h2>
                        {name}
                    </h2>
                    <p>
                        {description}
                    </p>
                </div>

                {/* Imagem */}
                <Picture mobile ={image()[0]} desktop ={image()[1]} name={name} />

            </div>

        </div>
    );
}

function Picture({mobile, desktop, name}){
    return (
        <picture>
            <source media="(max-width: 1200px)" srcSet={mobile} className="tech-img" />
            <source media="(min-width: 1201px)" srcSet={desktop} className="tech-img" />
            <img src={desktop} alt={name} className="tech-img" />
        </picture>
    )
}