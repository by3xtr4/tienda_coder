import React from "react";
import Boton from "./Boton";
import Boton1 from "./Boton_inicio";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

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
                    <li className="nav-item dropdown nav-link">
                    <div className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Nosotros
                    </div>
                    <ul class="dropdown-menu dropdown-menu-dark">
                        <Link to="/Nosotros" className="dropdown-item">
                            <li><div className="dropdown-item" >Quiénes somos</div></li>
                        </Link>
                        <Link to="/Contacto" className="dropdown-item">
                        <li><div className="dropdown-item" >Contacto</div></li>
                        </Link>
                    </ul>
                    </li>
                    <Link to="/Mensajes" className="nav-item nav-link">
                        <li className="nav-item ">
                        <div className="nav-link "  role="button"  aria-expanded="false">
                            
                            Mensajes
                            
                        </div>
                        
                        </li>
                    </Link>

                    <Link to="/Productos" className="nav-item nav-link" >
                    <li className="nav-item ">
                    <div className="nav-link "  role="button"  aria-expanded="false">
                        
                        Productos
                        
                    </div>
                    
                    </li>
                    </Link>

                    {/* <li className="nav-item ">
                    <div className="nav-link "  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Mensajes
                    </div>
                    
                    </li> */}
                    <Link to="/Noticias" className="nav-item nav-link" >
                    <li className="nav-item ">
                    <div className="nav-link "  role="button"  aria-expanded="false">
                        Noticias
                    </div>
                    
                    </li>
                    </Link>
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
                        <Link to="/category/Marcadoras">
                            <Boton1
                            nombre = "Marcadoras"
                            handleOnClick = {() => { console.log("boton presionado Marcadoras")}}
                            />
                        </Link>
                        <Link to="/category/Protección">
                        <Boton
                        nombre = "Protección"
                        handleOnClick = {() => { console.log("boton presionado Protección")}}
                        />
                        </Link>
                        <Link to="/category/Accesorios">
                        <Boton
                        nombre = "Accesorios"
                        handleOnClick = {() => { console.log("boton presionado Accesorios")}}
                        />
                        </Link>
                        <Link to="/category/Vestimenta">
                        <Boton
                        nombre = "Vestimenta"
                        handleOnClick = {() => { console.log("boton presionado Vestimenta")}}
                        />
                        </Link>
                        <Link to="/category/Calzado">
                        <Boton
                        nombre = "Calzado"
                        handleOnClick = {() => { console.log("boton presionado Calzado")}}
                        />
                        </Link>


                        

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