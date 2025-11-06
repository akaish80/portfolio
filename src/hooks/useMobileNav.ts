import { useState, useEffect } from 'react'

/**
 * Hook to manage mobile navigation toggle
 */
export const useMobileNav = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false)

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive)
  }

  const closeMobileNav = () => {
    setIsMobileNavActive(false)
  }

  useEffect(() => {
    const body = document.querySelector('body')
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle')

    if (isMobileNavActive) {
      body?.classList.add('mobile-nav-active')
      mobileNavToggleBtn?.classList.remove('bi-list')
      mobileNavToggleBtn?.classList.add('bi-x')
    } else {
      body?.classList.remove('mobile-nav-active')
      mobileNavToggleBtn?.classList.add('bi-list')
      mobileNavToggleBtn?.classList.remove('bi-x')
    }
  }, [isMobileNavActive])

  return { isMobileNavActive, toggleMobileNav, closeMobileNav }
}
