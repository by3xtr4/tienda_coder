import React from "react";
import Boton from "./Boton";
import Boton1 from "./Boton_inicio";
import Carrito from "./Carrito";

const Menu = ()=>{
    return(
        <div>
            
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            
            
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
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

                        

                        

                    </ul>

                    

                    

                    </div>

                    <ul class="nav justify-content-end">
                        
                        <li class="nav-item">
                            
                        <Carrito
                        />

                        </li>
                    </ul>
                </div>
            </nav>

            


        </div>
    )
}

export default Menu ; 