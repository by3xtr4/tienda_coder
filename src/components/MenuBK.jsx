import React from "react";
import Boton from "./Boton";

const Menu = ()=>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        
                        <Boton
                        nombre = "Nosotros"
                        handleOnClick = {() => { console.log("boton presionado nosotros")}}
                        />

                        <li className="nav-item">
                        <a className="nav-link" href="#">Productos</a>
                        </li>

                        <li className="nav-item">
                        <a className="nav-link" href="#">Contacto</a>
                        </li>

                        <li className="nav-item">
                        <a className="nav-link" href="#">Noticias</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link disabled">Otro</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Menu ; 