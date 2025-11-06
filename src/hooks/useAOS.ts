import { useEffect } from 'react'

/**
 * Hook to initialize AOS (Animate On Scroll) library
 */
export const useAOS = () => {
  useEffect(() => {
    // Check if AOS is available globally
    if (typeof window !== 'undefined' && (window as any).AOS) {
      const AOS = (window as any).AOS
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      })
    }
  }, [])
}
