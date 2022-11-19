import React from "react";

const Carrito = ()=>{
    return(
        <div style={{ float: 'right' }}>
            <button type="button" class="btn btn-primary position-relative" >
                Carrito
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    2
                    <span class="visually-hidden">productos </span>
                </span>
            </button>
        </div>
    )
}

export default Carrito ; 