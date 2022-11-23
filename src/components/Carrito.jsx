import React from "react";

const Carrito = ()=>{
    return(
        <div style={{ float: 'right', width:'auto' }}>
            <button type="button" className="btn btn-primary position-relative" >
                Carrito
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    2
                    <span className="visually-hidden">productos </span>
                </span>
            </button>
        </div>
    )
}

export default Carrito ; 