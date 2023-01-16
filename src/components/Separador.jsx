import React from "react";

const Separador1=()=>{
    return(
        <div>

            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner"  style={{ height:'400px', backgroundSize:'cover', backgroundPosition: 'top', backgroundAttachment:'fixed'}}>
                    <div className="carousel-item active" style={{ height:'300px', backgroundImage:'https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg', backgroundSize:'cover', backgroundPosition: 'top', backgroundAttachment:'fixed'}}>
                        <img src="https://www.teamforceuk.com/wp-content/uploads/2015/08/index-banner.jpg" class="d-block w-100" alt="..." style={{ backgroundSize:'cover', backgroundPosition: 'top', backgroundAttachment:'fixed'}}></img>
                        <div className="carousel-caption d-none d-md-block">
                        <h1 style={{color:'white'}}>UN LUGAR PARA GANADORES</h1>
                        <p style={{color:'white'}}>Con tu compra tienes un 50% en tu siguiente compra!</p>
                    </div>
                    </div>
                   
                </div>
            </div>

        </div>
    )
}

export default Separador1 ; 