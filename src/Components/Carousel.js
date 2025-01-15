import React from "react";
import image1 from "../assets/ImagenC1.jpg";
import image2 from "../assets/ImagenC2.jpg";
import image3 from "../assets/ImagenC3.jpg";
import image4 from "../assets/ImagenC4.jpg";
import "../styles/Carusel.css";

const BootstrapCarousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" >
      {/* Indicadores */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>

      {/* Contenido del carrusel */}
      <div className="carousel-inner">
      <div className="carousel-item active">
  <img src={image1} className="d-block mx-auto carousel-image" alt="Slide 1" />
</div>
<div className="carousel-item">
  <img src={image2} className="d-block mx-auto carousel-image" alt="Slide 2" />
</div>
<div className="carousel-item">
  <img src={image3} className="d-block mx-auto carousel-image" alt="Slide 3" />
</div>
<div className="carousel-item">
  <img src={image4} className="d-block mx-auto carousel-image" alt="Slide 4" />
</div>
      </div>

      {/* Controles de navegación */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default BootstrapCarousel;

