import Layout from '../components/Layout'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'

const resumeSummary = `Results-driven Lead Front-End Developer (React) with over 20 years of experience building scalable, high-performance web applications across fintech, SaaS, e-commerce, and healthcare domains. Proven success in team leadership, performance optimization, and mentorship, delivering modern React-based architectures that enhance user experience and business outcomes.`

const skills = [
  'React', 'Redux', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SCSS', 'Node.js', 'GraphQL', 'AWS', 'Jenkins'
]

const projects = [
  { title: 'React Dashboard - Sample', description: 'A modular analytics dashboard built with React, Redux, and Charting libraries. Focused on performance optimizations, lazy loading, and reusable components.', tags: ['React','Redux','Performance'], link: 'https://github.com/akaish80' },
  { title: 'E-commerce UI Kit', description: 'Component library and design system for e-commerce flows, including cart, checkout, and product galleries.', tags: ['UI','Design System','Next.js'], link: 'https://github.com/akaish80' },
  { title: 'Healthcare Forms - Accessibility Focus', description: 'Accessible form components and validation flows designed to meet WCAG standards for health applications.', tags: ['Accessibility','Forms','WCAG'], link: 'https://github.com/akaish80' }
]

export default function Home() {
  return (
    <Layout>
      <Header />

      <section className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-2">About</h2>
          <p className="text-gray-700">{resumeSummary}</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">Experience Highlights</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Lead Front-End Developer at Cognizant - led React teams and improved UI performance up to 40%</li>
            <li>Designed component-driven architectures to cut feature delivery time and improve reuse</li>
            <li>Mentored teams, introduced code review practices, and reduced production defects</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
          <p className="text-gray-700">Ontario, Canada • <a href="mailto:akaish@gmail.com" className="text-accent">akaish@gmail.com</a></p>
        </div>

        <aside className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Core Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="text-xs px-2 py-1 border rounded text-gray-700">{s}</span>
            ))}
          </div>

          <h3 className="font-semibold mt-6 mb-2">Top Strengths</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Team leadership & mentoring</li>
            <li>Performance optimizations</li>
            <li>Active listening & stakeholder collaboration</li>
          </ul>
        </aside>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      <footer className="mt-12 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Arunkumar Dharmarajan - Built with Next.js + Tailwind
      </footer>
    </Layout>
  )
}
