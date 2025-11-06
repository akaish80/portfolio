import React from 'react'
import { Link } from 'react-router-dom'

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero d-flex ">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-6 order-1 order-lg-2 hero-img">
            <img src="img/hero-developer.svg" className="img-fluid" alt="" />
          </div> 
          <div className="order-2 order-lg-1 d-flex flex-column text-center" data-aos="zoom-in" data-aos-delay="100">
            <h2>Arun Kumar</h2>
            <h3>I'm a Lead front end developer, specialized in development of web applications using React, Redux</h3>
            <div>
              <Link to="/about" className="btn-get-started">About Me</Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Hero
