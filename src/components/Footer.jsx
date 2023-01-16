import React from "react";
import Separador1 from "./Separador";

const Footer=()=>{
    return(
        <div>
            <Separador1/>
        <div id="carouselExampleSlidesOnly" className="carousel slide center" data-bs-ride="carousel" style={{ widht:'500px',  marginLeft:'auto', marginRight:'auto'}}>
                <div className="carousel-inner center"  style={{ widht:'500px',  marginLeft:'auto', marginRight:'auto'}}>
                    
               
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Noticias</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link disabled">Contacto</a>
                            </li>
                        </ul>
                  
                   
                </div>
            </div>
        
        </div>
    )
}
 export default Footer;