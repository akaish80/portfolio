import { useEffect } from 'react'

/**
 * Hook to add 'scrolled' class to body when page scrolls down
 */
export const useScrolled = () => {
  useEffect(() => {
    const toggleScrolled = () => {
      const selectBody = document.querySelector('body')
      const selectHeader = document.querySelector('#header')
      
      if (!selectHeader) return
      
      if (
        !selectHeader.classList.contains('scroll-up-sticky') &&
        !selectHeader.classList.contains('sticky-top') &&
        !selectHeader.classList.contains('fixed-top')
      ) {
        return
      }
      
      if (window.scrollY > 100) {
        selectBody?.classList.add('scrolled')
      } else {
        selectBody?.classList.remove('scrolled')
      }
    }

    document.addEventListener('scroll', toggleScrolled)
    window.addEventListener('load', toggleScrolled)
    toggleScrolled() // Initial call

    return () => {
      document.removeEventListener('scroll', toggleScrolled)
      window.removeEventListener('load', toggleScrolled)
    }
  }, [])
}
