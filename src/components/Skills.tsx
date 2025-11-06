import React, { useEffect, useRef } from 'react'

interface Skill { name: string; percentage: number }

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement | null>(null)

  const leftColumnSkills: Skill[] = [
    { name: 'HTML', percentage: 90 },
    { name: 'SCSS/CSS', percentage: 90 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'Accessibility(A11Y)', percentage: 55 },
    { name: 'webpack', percentage: 60},
    { name: 'vite', percentage: 35}
  ]

  const rightColumnSkills: Skill[] = [
    { name: 'React', percentage: 90 },
    { name: 'Redux', percentage: 90 },
    { name: 'Typescript', percentage: 55 },
    { name: 'AEM', percentage: 55},
    { name: 'Splunk/ Kibana', percentage: 30},
    { name: 'Jenkins', percentage: 15}
  ]

  useEffect(() => {
    const animateProgressBars = () => {
      const progressBars = skillsRef.current?.querySelectorAll('.progress-bar')
      progressBars?.forEach((bar) => {
        const percentage = bar.getAttribute('aria-valuenow')
        if (percentage) (bar as HTMLElement).style.width = `${percentage}%`
      })
    }
    const timer = setTimeout(animateProgressBars, 500)
    return () => clearTimeout(timer)
  }, [])

  const renderSkillGroup = (skills: Skill[]) => (
    <div className="col-lg-6">
      {skills.map((skill, index) => (
        <div key={index} className="progress">
          <span className="skill">
            {skill.name} <i className="val">{skill.percentage}%</i>
          </span>
          <div className="progress-bar-wrap">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow={skill.percentage}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{ width: '0%' }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <section id="skills" className="skills section">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Skills</h2>
        </div>
        <div className="row skills-content" ref={skillsRef}>
          {renderSkillGroup(leftColumnSkills)}
          {renderSkillGroup(rightColumnSkills)}
        </div>
      </div>
    </section>
  )
}

export default Skills
