import React from 'react'
import Skills from '../components/Skills'

const About: React.FC = () => {
  
  return (
    <main id="main">
      <div className="about-page">
        <section className="page-title">
          <div className="container">
            <nav className="breadcrumbs">
              <ol>
                <li><a href="#/">Home</a></li>
                <li className="current">About</li>
              </ol>
            </nav>
          </div>
        </section>

      <section id="about" className="about section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img src="img/profile-img.svg" className="img-fluid" alt="Profile" />
            </div>
            <div className="col-lg-8 content">
              <h2>Lead Front-End Developer</h2>
              <p className="fst-italic py-3">
                Lead Front-End Developer (React) with 20+ years of experience delivering innovative,
                scalable solutions for enterprise clients.
              </p>
              <p>Specializing in React, JavaScript, HTML/CSS, and state management with Redux, with a proven track record of enhancing user experiences through modern, component-based architecture. Focused on building scalable, responsive and accessible web apps. Leading cross-functional teams, mentoring developers, and driving performance improvements across complex web applications. Adept at translating business goals into technical solutions that deliver measurable impact.</p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.mythirukurral.com</span></li>
                    <li><i className="bi bi-chevron-right"></i><strong>Portfolio:</strong> <span>https://akaish80.github.io/portfolio/</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Ontario, CA</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master of Computer Application</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>arun_kaish@yahoo.com.com</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Skills />
    </div>
    </main>
  )
}

export default About
