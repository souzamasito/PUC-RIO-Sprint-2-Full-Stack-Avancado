import homeD from "../assets/home/background-home-desktop.jpg";
import destinD from "../assets/about/background-baleia-desktop.jpg";
import techD from "../assets/atuation/background-atuation.jpg";

export default function background(name){

    let backgroundDesktop;
    

    switch(name){
        case "homepage":
            backgroundDesktop = `url(${homeD})`;
           
            break;

        case "destination": 
            backgroundDesktop = `url(${destinD})`;
           
            break;

        case "technology": 
            backgroundDesktop = `url(${techD})`;
          
            break;
        default:
            console.log("Error....");
            break;
    }

    document.documentElement.style.setProperty(
        "--background-desktop",
        backgroundDesktop
    );
   
}