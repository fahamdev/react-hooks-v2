import { useState, useEffect } from 'react'

export const useDebounce = (term = '', delay = 800) => {
  const [debouncedTerm, setDebouncedTerm] = useState(term)

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setDebouncedTerm(term)
    }, delay)
    return () => clearTimeout(timeOut)
  }, [term, delay])

  return debouncedTerm
};
