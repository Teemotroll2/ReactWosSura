import "./Home.css"
import {SubMenu} from "../SubMenu/SubMenu.js"
import { Footer } from "../Footer/Footer.js"
export function Home(){
let nombre = "WOSITO FAN"

    return(
        <>
     
            <h1 className="text-center">Hola react, SOY: {nombre} </h1>
            <h1 className="text-center"> nada como WOSITO </h1>
            <hr/>
        
            <div className="banner" >

            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">El Legendario WOSITO, TE AMO WOSITO </h1>
                    </div>
                </div>
            </div>

            <h1 className="text-center">Historia:</h1>
            <p className="text-center">Músico, actor, rapero. Voz, caja, guitarra, piano y batería. Surgió en la escena de las batallas de rap entre freestylers, y fue campeón en varias ocasiones de la competencia argentina El Quinto Escalón,​ que lo impulsó a ser uno de los artistas urbanos más reconocidos del país, Que grande Wos papaaaaa, viva australia.</p>
            

            <div>
                <SubMenu></SubMenu>
            </div>

            <div>
                <Footer></Footer>
            </div>


        </>
    )

}