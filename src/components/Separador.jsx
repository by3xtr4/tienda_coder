import React from "react";

const Separador1=()=>{
    return(
        <div>

            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner"  style={{ height:'400px', backgroundSize:'cover', backgroundPosition: 'top', backgroundAttachment:'fixed'}}>
                    <div className="carousel-item active" style={{ height:'300px', backgroundImage:'https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg', backgroundSize:'cover', backgroundPosition: 'top', backgroundAttachment:'fixed'}}>
                        <img src="https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?w=2000" class="d-block w-100" alt="..." style={{ backgroundSize:'cover', backgroundPosition: 'top', backgroundAttachment:'fixed'}}></img>
                        <div class="carousel-caption d-none d-md-block">
                        <h1 style={{color:'white'}}>Third slide label</h1>
                        <p style={{color:'white'}}>Some representative placeholder content for the third slide.</p>
                    </div>
                    </div>
                   
                </div>
            </div>

        </div>
    )
}

export default Separador1 ; 