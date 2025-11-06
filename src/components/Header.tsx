import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useMobileNav } from '../hooks/useMobileNav'

const Header: React.FC = () => {
  const location = useLocation()
  const { toggleMobileNav, closeMobileNav } = useMobileNav()

  // Home page uses transparent header, other pages use light background with sticky-top
  const isHomePage = location.pathname === '/'
  const headerClasses = isHomePage 
    ? "header d-flex align-items-center fixed-top"
    : "header d-flex align-items-center light-background sticky-top"

  return (
    <header id="header" className={headerClasses}>
      <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1 className="sitename">Arun</h1>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'active' : ''}
                onClick={closeMobileNav}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={location.pathname === '/about' ? 'active' : ''}
                onClick={closeMobileNav}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/resume" 
                className={location.pathname === '/resume' ? 'active' : ''}
                onClick={closeMobileNav}
              >
                Resume
              </Link>
            </li>
          </ul>
          <i 
            className="mobile-nav-toggle bi bi-list"
            onClick={toggleMobileNav}
          ></i>
        </nav>
      </div>
    </header>
  )
}

export default Header
