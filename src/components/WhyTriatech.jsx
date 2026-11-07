import { useEffect, useRef } from 'react'

const metrics = [
  { number: 600, suffix: 'K+', label: 'Pre-vetted IT professionals in our network' },
  { number: 50,  suffix: '+',  label: 'Countries with active operations' },
  { number: 25,  suffix: 'yrs',label: 'Of specialist IT recruitment excellence' },
  { number: 98,  suffix: '%',  label: 'Client retention & satisfaction rate' },
  { number: 48,  suffix: 'hrs',label: 'Average time-to-submit for contract roles' },
  { number: 15,  suffix: 'K+', label: 'Active live opportunities at any time' },
]

const whyPoints = [
  { icon: 'fa-bolt',       title: 'Speed to Hire',         desc: 'Average time-to-submit of just 48 hours for contract roles, 7 days for permanent.' },
  { icon: 'fa-globe',      title: 'Global Reach',          desc: 'Operations in 50+ countries with deep local market knowledge and compliance expertise.' },
  { icon: 'fa-microscope', title: 'Technical Precision',   desc: 'Multi-stage technical vetting including coding assessments and architecture reviews.' },
  { icon: 'fa-chart-line', title: 'Workforce Intelligence',desc: 'Real-time talent market data and benchmarking to help you stay ahead of the curve.' },
]

function Counter({ target, suffix }) {
  const ref = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true
        const dur = 2000
        const start = performance.now()
        const tick = (now) => {
          const p = Math.min((now - start) / dur, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          el.textContent = Math.round(eased * target) + suffix
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        obs.disconnect()
      }
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, suffix])

  return (
    <span ref={ref} className="counter-num">0{suffix}</span>
  )
}

export default function WhyTriatech() {
  return (
    <section id="why" className="relative py-20 bg-why-gradient overflow-hidden">
      {/* Dot-grid overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <div>
            <span className="inline-block bg-white/15 text-red-200 text-xs font-bold tracking-widest
                             uppercase px-4 py-1.5 rounded-full mb-4 border border-white/20">
              Why Triatech
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
              The Partner That <span className="text-red-300">Goes Further</span>
            </h2>
            <p className="text-white/80 text-base leading-relaxed mb-8">
              Unlike generalist recruiters, Triatech speaks the language of technology. Our consultants
              are former engineers and IT leaders who understand your challenges — and know exactly
              what it takes to solve them.
            </p>

            <div className="space-y-5 mb-8">
              {whyPoints.map((p, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center
                                  text-white text-base flex-shrink-0">
                    <i className={`fa ${p.icon}`}></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-0.5">{p.title}</h4>
                    <p className="text-white/75 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-brand font-semibold
                         px-7 py-3.5 rounded-full hover:bg-brand-pale transition-all
                         hover:-translate-y-0.5 shadow-lg"
            >
              Talk to an Expert <i className="fa fa-arrow-right text-sm"></i>
            </a>
          </div>

          {/* Right — Metrics grid */}
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((m, i) => (
              <div
                key={i}
                className="bg-white/12 border border-white/20 rounded-2xl p-5 backdrop-blur-sm
                           hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl font-black text-white leading-none mb-2">
                  <Counter target={m.number} suffix={m.suffix} />
                </div>
                <div className="text-white/70 text-sm leading-snug">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

