// Import Statement
import "../style/homepage.css";
import background from "../Components/background";

// Funções da Homepage 
export default function Homepage(){

   
    window.addEventListener("load", background("homepage"))

    return (
        // Homepage
        <div className="homepage">
    
                {/* texto da Homepage  */}
            <div className="home-text">
                <span id="heading">
                    Nos ajude a preservar o
                </span>
                <h1>OCEANO</h1>
                <p>
                O que não vai para o lixo, vai para o mar!<br/>
                É tempo de mudança!<br/>
                Você, com ações simples, pode ajudar a reduzir 
                a poluição nos oceanos e zonas costeiras. 
                Faça a sua parte!
                </p>
            </div>

            {/* Imagem da Homepage */}
            <div className="header-img"></div>

            {/* Homepage Button */}
            <button className="explore-btn">
                Denuncie
            </button>
            
        </div>
    );
}