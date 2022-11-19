import React from "react";

const Boton1 = ({nombre, handleOnClick}) => {
    return(
        <div>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" onClick={handleOnClick}>{nombre}</a>
            </li>
        </div>
        
    )
}

export default Boton1 ; 
//<button style = {{ backgroundColor: '#ccc', margin: '10px', padding: '10px'}} onClick={handleOnClick}>{nombre}</button>