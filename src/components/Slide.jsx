import React from "react";

const Slide = () =>{
    return(
        <div>
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                    <img src="https://es.web.img2.acsta.net/pictures/14/02/21/17/47/329381.jpg" class="d-block w-100" alt="..."></img>
                    <div class="carousel-caption d-none d-md-block">
                        <h1 style={{color:'white'}}>First slide label</h1>
                        <p style={{color:'white'}}>Some representative placeholder content for the first slide.</p>
                    </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                    <img src="https://es.web.img2.acsta.net/pictures/14/02/21/17/47/329381.jpg" class="d-block w-100" alt="..."></img>
                    <div class="carousel-caption d-none d-md-block">
                        <h1 style={{color:'white'}}>Second slide label</h1>
                        <p style={{color:'white'}}>Some representative placeholder content for the second slide.</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src="https://es.web.img2.acsta.net/pictures/14/02/21/17/47/329381.jpg" class="d-block w-100" alt="..."></img>
                    <div class="carousel-caption d-none d-md-block">
                        <h1 style={{color:'white'}}>Third slide label</h1>
                        <p style={{color:'white'}}>Some representative placeholder content for the third slide.</p>
                    </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Slide ; 