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
  {
    initials: 'DW', name: 'Daniel Whitmore', role: 'CEO, NexGen Robotics',
    text: '"From initial brief to final placement, Triatech\'s process was seamless. They didn\'t just fill a vacancy — they found us a lead AI architect who\'s already transformed our R&D output in just two months."',
  },
  {
    initials: 'PV', name: 'Priya Verma', role: 'Head of Digital, GreenPulse Energy',
    text: '"We were sceptical about outsourcing our digital transformation hiring, but Triatech changed our minds completely. Their consultants are sharp, honest, and deeply committed to long-term cultural fit — not just quick placements."',
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
          <p className="text-gray-500 text-sm mt-3">
            Trusted by industry leaders worldwide — here is what they have to say about partnering with Triatech.
          </p>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="testimonials-track flex gap-6"
            style={{ transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)' }}
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
                           border border-gray-200 rounded-2xl p-7 hover:border-brand hover:shadow-card
                           transition-all duration-300 bg-white group"
              >
                {/* Stars */}
                <div className="text-amber-400 text-sm mb-4">★★★★★</div>

                {/* Quote icon */}
                <i className="fa fa-quote-left text-2xl text-brand/20 mb-3 block"></i>

                {/* Review text */}
                <p className="text-gray-700 text-sm leading-relaxed italic mb-6 flex-1">{s.text}</p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-11 h-11 bg-gradient-to-br from-brand to-brand-dark text-white
                                  rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0
                                  group-hover:scale-110 transition-transform duration-300">
                    {s.initials}
                  </div>
                  <div className="flex-1">
                    <strong className="block text-gray-900 text-sm font-bold">{s.name}</strong>
                    <span className="text-gray-500 text-xs">{s.role}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-brand-pale flex items-center justify-center
                                  group-hover:bg-brand transition-colors duration-300">
                    <i className="fas fa-check text-brand text-xs group-hover:text-white transition-colors duration-300"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center
                       text-gray-700 hover:bg-brand hover:border-brand hover:text-white transition-all duration-300"
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
                       text-gray-700 hover:bg-brand hover:border-brand hover:text-white transition-all duration-300"
          >
            <i className="fa fa-chevron-right text-sm"></i>
          </button>
        </div>

        {/* Review count badge */}
        <p className="text-center text-gray-400 text-xs mt-6">
          <i className="fas fa-shield-alt text-brand mr-1"></i>
          Showing {slides.length} verified client reviews
        </p>
      </div>
    </section>
  )
}
