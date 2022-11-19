import React from "react";

const Boton = ({nombre, handleOnClick}) => {
    return(
        <div>
            <li className="nav-item">
                <a className="nav-link" onClick={handleOnClick}>{nombre}</a>
            </li>
        </div>
        
    )
}

export default Boton ; 
//<button style = {{ backgroundColor: '#ccc', margin: '10px', padding: '10px'}} onClick={handleOnClick}>{nombre}</button>