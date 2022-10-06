import "./Historia.css"
import {Integrantes} from "../Integrantes/Integrantes.js"
import {Carousel }from "../Carousel/Carousel.js"
export function Historia(){

    return(
        <>
        <div className="hola">
        <div>
            <Carousel></Carousel>
            <div className="container">
                 <Integrantes></Integrantes>
            </div>
            
        </div>
        </div>  
        </>
    )
}