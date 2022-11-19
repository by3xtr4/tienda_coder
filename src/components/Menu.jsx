import React from "react";
import Boton from "./Boton";
import Boton1 from "./Boton_inicio";
import Carrito from "./Carrito";

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
                        <Boton1
                        nombre = "Inicio"
                        handleOnClick = {() => { console.log("boton presionado inicio")}}
                        />
                        
                        <Boton
                        nombre = "Nosotros"
                        handleOnClick = {() => { console.log("boton presionado nosotros")}}
                        />

                        <Boton
                        nombre = "Nuetros productos"
                        handleOnClick = {() => { console.log("boton presionado productos")}}
                        />

                        <Boton
                        nombre = "Contacto"
                        handleOnClick = {() => { console.log("boton presionado Contacto")}}
                        />

                        <Boton
                        nombre = "Noticias"
                        handleOnClick = {() => { console.log("boton presionado Noticias")}}
                        />

                        <Carrito
                        />

                        

                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Menu ; 