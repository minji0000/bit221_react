import React from 'react'

function Slider() {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src='https://cdn.pixabay.com/photo/2012/02/24/16/59/swan-16736_960_720.jpg' className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src='https://cdn.pixabay.com/photo/2019/02/22/10/26/swan-4013225_960_720.jpg' className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src='https://cdn.pixabay.com/photo/2017/04/29/15/45/swan-2270980_960_720.jpg' className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Slider