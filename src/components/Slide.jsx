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
                    <img src="https://www.megapaintballintl.com/imgs/banner5.jpg" class="d-block w-100" alt="..."></img>
                    <div className="carousel-caption d-none d-md-block">
                        <h1 style={{color:'white'}}>BIENVENIDOS A TU PROXIMA COMPRA</h1>
                        <p style={{color:'white'}}>Todo lo necesario para verdaderos profesionales!</p>
                    </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                    <img src="https://i.pinimg.com/originals/ed/02/5e/ed025e1c5c61c25738278b26224544d0.jpg" class="d-block w-100" alt="..."></img>
                    <div className="carousel-caption d-none d-md-block">
                        <h1 style={{color:'white'}}>Armas, protección, vestimenta</h1>
                        <p style={{color:'white'}}>Todo lo necesario</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src="https://www.megapaintballintl.com/imgs/banner2.jpg" class="d-block w-100" alt="..."></img>
                    <div className="carousel-caption d-none d-md-block">
                        <h1 style={{color:'white'}}>Sponsors Oficial 2023</h1>
                        <p style={{color:'white'}}>Suma te a la revolu</p>
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