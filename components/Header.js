import Image from 'next/image'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8 border-b pb-4">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100">
          <Image src="./profile-placeholder.svg" alt="profile" width={160} height={160} />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-accent">Arunkumar Dharmarajan</h1>
          <p className="text-gray-600">Senior Front-End Engineer | React & Next.js Specialist</p>
        </div>
      </div>

      <div className="flex items-center gap-4 text-accent">
        <a href="https://www.linkedin.com/in/akaish" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={22} />
        </a>
        <a href="https://github.com/akaish80" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub size={22} />
        </a>
        <a href="mailto:akaish@gmail.com" aria-label="email">
          <FaEnvelope size={22} />
        </a>
      </div>
    </header>
  )
}
