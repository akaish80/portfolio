import React from 'react'
import { useBodyClass } from '../hooks/useBodyClass'

const Resume: React.FC = () => {
  useBodyClass('resume-page')

  return (
    <main id="main">
      <div className="resume-page">
        <section className="page-title">
          <div className="container">
            <h1>Resume</h1>
            <nav className="breadcrumbs">
              <ol>
                <li><a href="#/">Home</a></li>
                <li className="current">Resume</li>
              </ol>
            </nav>
          </div>
        </section>

      <section id="resume" className="resume section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Resume</h2>
          <p>Lead Frontend Developer | React | Redux | JavaScript Expert</p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <h4>Arunkumar Dharmarajan</h4>
                <p>
                  Lead Front-End Developer (React) with 20+ years of experience delivering innovative, scalable solutions for enterprise clients.
                </p>
                <ul>
                  <li>Ontario, CA</li>
                  <li>arun_kaish@yahoo.com</li>
                </ul>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Master of Computer Science</h4>
              </div>
              <div className="resume-item">
                <h4>Bachelor of Computer Science</h4>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Lead Frontend Developer</h4>
                <h5>2010 - Present</h5>
                <p><em>Mississauga, ON</em></p>
                <ul>
                  <li>Built and maintained complex, data-driven applications using React and Redux, ensuring consistent state management and robust UI performance.</li>
<li>Partnered with design teams to transform UX concepts into responsive, pixel-perfect implementations.</li>

<li>Optimized frontend performance through lazy loading, memoization, and code-splitting, achieving faster load and render times.</li>

<li>Authored reusable React components and hooks, improving code efficiency and reducing redundancy across projects.</li>

<li>Collaborated in Agile teams to deliver iterative, high-quality releases while maintaining a focus on scalability and maintainability.</li>
                  
                </ul>
              </div>
              <div className="resume-item">
                <h4>Associate Project [Flex]</h4>
                <h5>2017 - 2018</h5>
                <p><em>Chennai, TN - India</em></p>
                <ul>
                  <li>Delivered complex web applications on time, improving client satisfaction and internal workflow efficiency.</li>

                  <li>Collaborated with designers and backend engineers to translate UI/UX concepts into responsive, interactive interfaces.</li>
                  <li>Maintained clean, modular code and detailed documentation, improving collaboration and reducing bugs.</li>
                  <li>Worked closely with stakeholders to align project goals with user needs, ensuring a seamless experience across releases.</li>
                  <li>Monitored performance and identified bottlenecks, implementing optimizations that enhanced speed and reliability.</li>
                  <li>Mentored junior developers, promoting knowledge sharing and strong coding standards across the team.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </main>
  )
}

export default Resume
