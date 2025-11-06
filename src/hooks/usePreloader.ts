import { useEffect } from 'react'

/**
 * Hook to remove preloader on page load
 */
export const usePreloader = () => {
  useEffect(() => {
    const preloader = document.querySelector('#preloader')
    if (preloader) {
      const handleLoad = () => {
        preloader.remove()
      }
      
      if (document.readyState === 'complete') {
        handleLoad()
      } else {
        window.addEventListener('load', handleLoad)
        return () => window.removeEventListener('load', handleLoad)
      }
    }
  }, [])
}
