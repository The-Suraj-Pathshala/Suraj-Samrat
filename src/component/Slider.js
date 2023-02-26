import React from 'react'

export default function Slider() {
  return (<>
    <div className="container-fluid">
    <div className="row justify-content-evenly">
    <div className="col-10 ">
    <div id="carouselExampleInterval" className="col-12 carousel slide container sliderStyle" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="https://i.ibb.co/nc3nJRK/20230225-200436.jpg" className="d-block w-100 m-0 p-0"  alt="..."/>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="https://i.ibb.co/mbpy8Ps/20230225-200334.jpg" className="d-block w-100 m-0 p-0" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://i.ibb.co/3BX10x9/20230225-200405.jpg" className="d-block w-100 m-0 p-0" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
    </div>
        </>
  )
}
