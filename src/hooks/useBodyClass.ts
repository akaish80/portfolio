import { useEffect } from 'react'

/**
 * Hook to add a class to the body element
 */
export const useBodyClass = (className: string) => {
  useEffect(() => {
    const body = document.querySelector('body')
    if (body && className) {
      body.classList.add(className)
      return () => {
        body.classList.remove(className)
      }
    }
  }, [className])
}
