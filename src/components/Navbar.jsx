import React from "react";
import Boton from "./Boton";
import Boton1 from "./Boton_inicio";
import CartWidget from "./CartWidget";

const Navbar = ()=>{
    return(
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Nosotros
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark">
                        <li><a className="dropdown-item" >Quiénes somos</a></li>
                        <li><a className="dropdown-item" >Contacto</a></li>
                    </ul>
                    </li>

                    <li className="nav-item ">
                    <a className="nav-link "  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Contacto
                    </a>
                    
                    </li>

                    <li className="nav-item ">
                    <a className="nav-link "  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Mensajes
                    </a>
                    
                    </li>

                    <li className="nav-item ">
                    <a className="nav-link "  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Noticias
                    </a>
                    
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            
            
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">Categorías</span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    

                    <ul className="navbar-nav">

                        <Boton1
                        nombre = "Marcadoras"
                        handleOnClick = {() => { console.log("boton presionado Marcadoras")}}
                        />
                        
                        <Boton
                        nombre = "Protección"
                        handleOnClick = {() => { console.log("boton presionado Protección")}}
                        />

                        <Boton
                        nombre = "Táctico"
                        handleOnClick = {() => { console.log("boton presionado Táctico")}}
                        />

                        <Boton
                        nombre = "Accesorios"
                        handleOnClick = {() => { console.log("boton presionado Accesorios")}}
                        />

                        <Boton
                        nombre = "Vestimenta"
                        handleOnClick = {() => { console.log("boton presionado Vestimenta")}}
                        />

                        <Boton
                        nombre = "Calzado"
                        handleOnClick = {() => { console.log("boton presionado Calzado")}}
                        />

<Boton
                        nombre = "Camuflaje"
                        handleOnClick = {() => { console.log("boton presionado Camuflaje")}}
                        />

                        <Boton
                        nombre = "Otros"
                        handleOnClick = {() => { console.log("boton presionado Otros")}}
                        />

                  

                        

                    </ul>

                    

                    

                    </div>

                    <ul className="nav justify-content-end">
                        
                        <li className="nav-item">
                            
                        <CartWidget
                        />

                        </li>
                    </ul>
                </div>
            </nav>

            


        </div>
    )
}

export default Navbar ; 