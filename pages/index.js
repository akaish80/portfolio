import { useState, useEffect } from 'react'
import Image from 'next/image'
import Layout from '../components/Layout'
import { FaLinkedin, FaGithub, FaEnvelope, FaChevronDown, FaExternalLinkAlt } from 'react-icons/fa'

const skills = [
  { name: 'React', level: 95 },
  { name: 'Next.js', level: 90 },
  { name: 'TypeScript', level: 88 },
  { name: 'JavaScript', level: 95 },
  { name: 'Node.js', level: 85 },
  { name: 'AWS', level: 82 },
  { name: 'GraphQL', level: 80 },
  { name: 'Redux', level: 90 }
]

const projects = [
  {
    title: 'Advanced Analytics Dashboard',
    description: 'A comprehensive real-time analytics platform built with React, Redux, and D3.js. Features interactive data visualizations, customizable widgets, and performance optimizations handling 10M+ data points.',
    tags: ['React', 'Redux', 'D3.js', 'WebSocket'],
    link: 'https://github.com/akaish80',
    image: '/profile-placeholder.svg'
  },
  {
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with Next.js, Stripe integration, and microservices architecture. Implemented advanced search, recommendation engine, and admin dashboard.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
    link: 'https://github.com/akaish80',
    image: '/profile-placeholder.svg'
  },
  {
    title: 'Healthcare Management System',
    description: 'HIPAA-compliant patient management platform with role-based access, real-time notifications, and accessibility features meeting WCAG 2.1 AA standards.',
    tags: ['React', 'FHIR', 'Security', 'Accessibility'],
    link: 'https://github.com/akaish80',
    image: '/profile-placeholder.svg'
  }
]

const experience = [
  {
    role: 'Senior Lead Frontend Developer',
    company: 'Cognizant Technology Solutions',
    period: '2018 - Present',
    description: 'Led cross-functional teams in delivering enterprise-scale React applications. Improved application performance by 40% through code splitting and optimization strategies.',
    highlights: ['Team Leadership', 'Performance Optimization', 'Mentorship']
  },
  {
    role: 'Frontend Architect',
    company: 'Previous Company',
    period: '2015 - 2018',
    description: 'Designed and implemented component-driven architectures for scalable web applications. Established best practices and coding standards for development teams.',
    highlights: ['Architecture Design', 'Code Standards', 'Best Practices']
  }
]

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-white font-bold text-xl">ARUNKUMAR</div>
            <div className="hidden md:flex space-x-8">
              {['about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm uppercase tracking-wider transition-colors ${
                    activeSection === section ? 'text-cyan-400' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 animate-pulse"></div>
        <div className="text-center z-10 px-6">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-2xl">
              <Image src="/profile-placeholder.svg" alt="Arunkumar Dharmarajan" width={128} height={128} />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            ARUNKUMAR
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              DHARMARAJAN
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
            Senior Frontend Engineer crafting exceptional digital experiences with React & Next.js
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://www.linkedin.com/in/akaish" target="_blank" rel="noreferrer" 
               className="text-white/80 hover:text-cyan-400 transition-colors">
              <FaLinkedin size={28} />
            </a>
            <a href="https://github.com/akaish80" target="_blank" rel="noreferrer"
               className="text-white/80 hover:text-cyan-400 transition-colors">
              <FaGithub size={28} />
            </a>
            <a href="mailto:akaish@gmail.com"
               className="text-white/80 hover:text-cyan-400 transition-colors">
              <FaEnvelope size={28} />
            </a>
          </div>
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-white/60 hover:text-white transition-colors"
          >
            <FaChevronDown size={24} />
          </button>
        </div>
      </section>

      <div className="bg-black text-white">
        {/* About Section */}
        <section id="about" className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                About Me
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Results-driven Lead Front-End Developer with over 20 years of experience building 
                  scalable, high-performance web applications across fintech, SaaS, e-commerce, and 
                  healthcare domains.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Proven success in team leadership, performance optimization, and mentorship, 
                  delivering modern React-based architectures that enhance user experience and 
                  business outcomes.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-cyan-400 font-semibold mb-2">Location</h3>
                  <p className="text-gray-300">Ontario, Canada</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-cyan-400 font-semibold mb-2">Experience</h3>
                  <p className="text-gray-300">20+ Years in Frontend Development</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-cyan-400 font-semibold mb-2">Specialization</h3>
                  <p className="text-gray-300">React, Next.js, Performance Optimization</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6 bg-gray-900">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Technical Skills
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-cyan-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Experience
              </span>
            </h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-cyan-400/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{exp.role}</h3>
                      <p className="text-cyan-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight) => (
                      <span key={highlight} className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 bg-gray-900">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Featured Projects
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-black border border-gray-800 rounded-lg overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                      <FaExternalLinkAlt className="text-white/60" size={24} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-white transition-colors"
                    >
                      View Project <FaExternalLinkAlt size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Let's Connect
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Ready to discuss your next project or explore opportunities? I'd love to hear from you.
            </p>
            <a 
              href="mailto:akaish@gmail.com"
              className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-gray-800">
          <div className="container mx-auto text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Arunkumar Dharmarajan. Crafted with Next.js & Tailwind CSS
            </p>
          </div>
        </footer>
      </div>
    </div>
    </Layout>
  )
}
