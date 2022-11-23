import React from "react";

const Slide = () =>{
    return(
        <div>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                    <img src="https://es.web.img2.acsta.net/pictures/14/02/21/17/47/329381.jpg" class="d-block w-100" alt="..."></img>
                    <div className="carousel-caption d-none d-md-block">
                        <h1 style={{color:'white'}}>First slide label</h1>
                        <p style={{color:'white'}}>Some representative placeholder content for the first slide.</p>
                    </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                    <img src="https://es.web.img2.acsta.net/pictures/14/02/21/17/47/329381.jpg" class="d-block w-100" alt="..."></img>
                    <div className="carousel-caption d-none d-md-block">
                        <h1 style={{color:'white'}}>Second slide label</h1>
                        <p style={{color:'white'}}>Some representative placeholder content for the second slide.</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src="https://es.web.img2.acsta.net/pictures/14/02/21/17/47/329381.jpg" class="d-block w-100" alt="..."></img>
                    <div className="carousel-caption d-none d-md-block">
                        <h1 style={{color:'white'}}>Third slide label</h1>
                        <p style={{color:'white'}}>Some representative placeholder content for the third slide.</p>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Slide ; 