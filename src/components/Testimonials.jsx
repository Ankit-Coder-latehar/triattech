import { useState, useEffect, useRef } from 'react'

const slides = [
  {
    initials: 'JM', name: 'James Morrison', role: 'CTO, FinServe Global',
    text: '"Triatech placed a fully onboarded cloud team of 15 engineers within 3 weeks. The quality and speed were unmatched — they genuinely understood our AWS migration challenges."',
  },
  {
    initials: 'SR', name: 'Sophia Richards', role: 'CISO, MedTech Corp',
    text: '"We struggled to find senior cybersecurity talent for 6 months. Triatech\'s specialist team sourced our entire SOC in 4 weeks. Absolutely game-changing for our security posture."',
  },
  {
    initials: 'AK', name: 'Amir Khan', role: 'VP Engineering, RetailTech Inc',
    text: '"Their Managed Project Solutions team delivered our data platform on time and under budget. The delivery manager was exceptional — proactive, transparent, and technically brilliant."',
  },
  {
    initials: 'LP', name: 'Laura Petit', role: 'HR Director, LogiSoft',
    text: '"Triatech\'s permanent recruitment process is thorough and genuinely adds value. Every hire they\'ve made for us has integrated brilliantly — we consider them a true talent partner."',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const trackRef = useRef(null)
  const autoRef  = useRef(null)
  const startX   = useRef(0)

  const perView = () => {
    if (typeof window === 'undefined') return 3
    if (window.innerWidth < 640) return 1
    if (window.innerWidth < 1024) return 2
    return 3
  }

  const total = () => Math.ceil(slides.length / perView())

  const goTo = (idx) => {
    const t = total()
    setCurrent(((idx % t) + t) % t)
  }

  const resetAuto = () => {
    clearInterval(autoRef.current)
    autoRef.current = setInterval(() => setCurrent(c => (c + 1) % total()), 5000)
  }

  useEffect(() => {
    resetAuto()
    return () => clearInterval(autoRef.current)
  }, [])

  useEffect(() => {
    if (!trackRef.current) return
    const card = trackRef.current.querySelector('.testimonial-card')
    if (!card) return
    const w = card.offsetWidth + 24
    trackRef.current.style.transform = `translateX(-${current * perView() * w}px)`
  }, [current])

  const handlePrev = () => { goTo(current - 1); resetAuto() }
  const handleNext = () => { goTo(current + 1); resetAuto() }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="inline-block bg-brand-pale text-brand text-xs font-bold tracking-widest
                           uppercase px-4 py-1.5 rounded-full mb-3">
            Client Success
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            What Our Clients <span className="text-brand">Say</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="testimonials-track flex gap-6"
            onTouchStart={e => { startX.current = e.touches[0].clientX }}
            onTouchEnd={e => {
              const diff = startX.current - e.changedTouches[0].clientX
              if (Math.abs(diff) > 50) { goTo(current + (diff > 0 ? 1 : -1)); resetAuto() }
            }}
          >
            {slides.map((s, i) => (
              <div
                key={i}
                className="testimonial-card flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]
                           border border-gray-200 rounded-2xl p-6 hover:border-brand hover:shadow-card
                           transition-all duration-300"
              >
                <i className="fa fa-quote-left text-2xl text-brand/30 mb-4 block"></i>
                <p className="text-gray-700 text-sm leading-relaxed italic mb-6">{s.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-gradient-to-br from-brand to-brand-dark text-white
                                  rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {s.initials}
                  </div>
                  <div className="flex-1">
                    <strong className="block text-gray-900 text-sm">{s.name}</strong>
                    <span className="text-gray-500 text-xs">{s.role}</span>
                  </div>
                  <div className="text-amber-400 text-sm">★★★★★</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center
                       text-gray-700 hover:bg-brand hover:border-brand hover:text-white transition-all"
          >
            <i className="fa fa-chevron-left text-sm"></i>
          </button>

          <div className="flex gap-1.5">
            {Array.from({ length: total() }).map((_, i) => (
              <button
                key={i}
                onClick={() => { goTo(i); resetAuto() }}
                className={`h-2 rounded-full transition-all duration-300
                  ${i === current ? 'w-6 bg-brand' : 'w-2 bg-gray-300'}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center
                       text-gray-700 hover:bg-brand hover:border-brand hover:text-white transition-all"
          >
            <i className="fa fa-chevron-right text-sm"></i>
          </button>
        </div>
      </div>
    </section>
  )
}

