// Importações
import "../style/nav.css";
import { Link } from "react-router-dom";
import logo from "../assets/shared/Source.png";

// Funçoes da página
export default function Nav(){

   
    const open = () => {
      const navMenu = document.querySelector(".nav-menu");
      const navItem = document.querySelectorAll(".nav-item");

     
      navMenu.classList.toggle("active");

      navItem.forEach((item) => {
          item.addEventListener("click", function(){
            navMenu.classList.remove("active");
          })
      });

    }
    
    const setActiveLink = e => {
      const links = document.getElementsByTagName("a"); 
      Array.from(links).forEach(el => el.classList.remove("active"));
      e.target.classList.add("active");
    };
    
    return (

        // Barra de navegação
        <nav>
      
          {/* Logo */}
          <a href="#">
            <img src={logo} alt="Space Logo" />
          </a>
          <hr />

          {/* Menu de navegação */}
          <ul className="nav-menu">
            
            <li className="nav-item" onClick={setActiveLink}>
              <Link to="/home/">
                  Home
              </Link>
            </li>
            <li className="nav-item" onClick={setActiveLink}>
               <Link to="/about">
                  Quem somos
              </Link>
            </li>           
            <li className="nav-item" onClick={setActiveLink}>
              <Link to="/atuation">
                  Nossa Atuação
              </Link>
            </li>      
          </ul>
        </nav>

    );

}