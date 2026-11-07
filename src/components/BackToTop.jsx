import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-brand text-white rounded-full
                  flex items-center justify-center shadow-brand hover:bg-brand-dark
                  hover:-translate-y-1 transition-all duration-300
                  ${visible ? 'opacity-100 translate-y-0 pointer-events-auto'
                            : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <i className="fa fa-chevron-up text-sm"></i>
    </button>
  )
}

