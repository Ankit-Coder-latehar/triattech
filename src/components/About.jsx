export default function About() {
  const badges = [
    { icon: 'fa-trophy', label: 'Best Staffing Firm 2026' },
    { icon: 'fa-medal',  label: 'Top IT Recruiter — Forbes' },
    { icon: 'fa-leaf',   label: 'Carbon Neutral 2025' },
  ]

  const circles = [
    { icon: 'fa-globe',  label: '50+ Countries', pos: 'top-4 left-4' },
    { icon: 'fa-users',  label: '600K+ Talent',  pos: 'top-4 right-4' },
    { icon: 'fa-star',   label: '25 Yrs',         pos: 'bottom-4 left-1/2 -translate-x-1/2' },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <span className="inline-block bg-brand-pale text-brand text-xs font-bold tracking-widest
                             uppercase px-4 py-1.5 rounded-full mb-4">
              About Triatech
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
              A ManpowerGroup Brand with{' '}
              <span className="text-brand">25 Years of IT Excellence</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-4">
              Triatech is a world-leading IT resourcing and project solutions business, part of
              ManpowerGroup — the global workforce solutions leader. Founded in 1999, we've grown
              to operate across 50+ countries, connecting the world's leading enterprises with the
              technical talent they need to transform and grow.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-6">
              We believe human ingenuity — when equipped with the right skills and technology —
              is the most powerful force for progress. That belief drives everything we do.
            </p>

            <div className="flex flex-wrap gap-3 mb-7">
              {badges.map((b, i) => (
                <div key={i} className="inline-flex items-center gap-2 bg-brand-pale text-brand
                                        px-4 py-2 rounded-full text-sm font-bold">
                  <i className={`fa ${b.icon}`}></i> {b.label}
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand text-white font-semibold
                         px-7 py-3.5 rounded-full hover:bg-brand-dark transition-all shadow-brand
                         hover:-translate-y-0.5 hover:shadow-brand-lg"
            >
              Learn Our Story <i className="fa fa-arrow-right text-sm"></i>
            </a>
          </div>

          {/* Visual */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-80 h-80">
              {/* Dashed border ring */}
              <div className="absolute inset-0 border-2 border-dashed border-brand/20 rounded-full"></div>

              {/* Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                              w-28 h-28 bg-brand rounded-full flex flex-col items-center
                              justify-center text-white shadow-brand-lg z-10">
                <strong className="text-lg font-black leading-none">Triatech</strong>
                <span className="text-xs opacity-80 mt-0.5">Global Impact</span>
              </div>

              {/* Orbiting circles */}
              {circles.map((c, i) => (
                <div
                  key={i}
                  className={`absolute ${c.pos} w-24 h-24 bg-white border-2 border-brand-pale
                               rounded-full flex flex-col items-center justify-center shadow-card
                               text-brand text-xs font-semibold text-center hover:bg-brand
                               hover:text-white transition-all duration-300 cursor-default group z-10`}
                >
                  <i className={`fa ${c.icon} text-lg mb-1 group-hover:text-white`}></i>
                  {c.label}
                </div>
              ))}

              {/* Connecting lines (decorative) */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
                <line x1="160" y1="160" x2="52"  y2="52"  stroke="#0F1C3F" strokeWidth="1" strokeDasharray="4 4" opacity="0.3"/>
                <line x1="160" y1="160" x2="268" y2="52"  stroke="#0F1C3F" strokeWidth="1" strokeDasharray="4 4" opacity="0.3"/>
                <line x1="160" y1="160" x2="160" y2="268" stroke="#0F1C3F" strokeWidth="1" strokeDasharray="4 4" opacity="0.3"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

