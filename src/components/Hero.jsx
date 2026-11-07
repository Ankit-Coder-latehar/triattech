export default function Hero() {
  const stats = [
    { value: '600K+', label: 'IT Professionals' },
    { value: '50+',   label: 'Countries' },
    { value: '25 Yrs',label: 'of Excellence' },
    { value: '98%',   label: 'Client Satisfaction' },
  ]

  const floatingCards = [
    { icon: 'fa-check-circle', text: 'Cloud Architect placed in', bold: '48hrs',          cls: 'float-1 top-[14%] -left-6' },
    { icon: 'fa-shield-alt',   text: 'SOC Team of',              bold: '12 Engineers',    cls: 'float-2 bottom-[26%] -right-6' },
    { icon: 'fa-robot',        text: 'AI/ML Pod scaled to',      bold: '30 experts',      cls: 'float-3 bottom-[8%]  left-[8%]' },
  ]

  return (
    <section className="relative bg-hero-gradient min-h-[88vh] flex items-center overflow-hidden">

      {/* Background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-white/[0.06] -top-48 -right-24"/>
        <div className="absolute w-[400px] h-[400px] rounded-full bg-white/[0.04] -bottom-36 left-[10%]"/>
        <div className="absolute w-[200px] h-[200px] rounded-full bg-white/[0.05] top-[30%] right-[25%]"/>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: Text ── */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25
                            text-white px-4 py-2 rounded-full text-xs font-semibold mb-6 backdrop-blur-sm">
              <i className="fa fa-award"></i>
              #1 Global IT Staffing &amp; Solutions Partner
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-white leading-[1.1]
                           tracking-tight mb-5">
              Powering the World's<br/>
              <span className="relative inline-block">
                Tech Workforce
                <span className="absolute bottom-1 left-0 right-0 h-1 bg-white/40 rounded-full"/>
              </span>
            </h1>

            <p className="text-white/85 text-lg leading-relaxed mb-8 max-w-lg">
              Triatech connects leading enterprises with elite IT professionals and delivers
              end-to-end technology solutions — from staff augmentation to fully managed
              project delivery — across 50+ countries.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#solutions"
                className="inline-flex items-center gap-2 bg-white text-brand font-semibold
                           px-7 py-4 rounded-full hover:bg-brand-pale hover:-translate-y-0.5
                           transition-all shadow-lg text-base"
              >
                <i className="fa fa-building"></i> Find IT Talent
              </a>
              <a
                href="#jobs"
                className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold
                           px-7 py-4 rounded-full hover:bg-white/15 hover:-translate-y-0.5
                           transition-all text-base"
              >
                <i className="fa fa-search"></i> Find Jobs
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-6">
              {stats.map((s, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div>
                    <strong className="block text-2xl font-black text-white leading-none mb-0.5">
                      {s.value}
                    </strong>
                    <span className="text-white/65 text-xs font-medium">{s.label}</span>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="w-px h-9 bg-white/25"/>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Image collage ── */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-[460px] h-[460px]">

              {/* ── Main large image — top-left ── */}
              <div className="absolute top-0 left-0 w-[270px] h-[290px] rounded-3xl overflow-hidden
                              shadow-card-lg border-4 border-white/20 float-1 z-10">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop"
                  alt="Tech team collaboration"
                  className="w-full h-full object-cover"
                />
                {/* Red tint overlay */}
                <div className="absolute inset-0 bg-brand/10"/>
              </div>

              {/* ── Top-right image ── */}
              <div className="absolute top-0 right-0 w-[170px] h-[185px] rounded-3xl overflow-hidden
                              shadow-card-lg border-4 border-white/20 float-2 z-10">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop"
                  alt="IT professional"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand/10"/>
              </div>

              {/* ── Bottom-right image ── */}
              <div className="absolute bottom-0 right-0 w-[200px] h-[195px] rounded-3xl overflow-hidden
                              shadow-card-lg border-4 border-white/20 float-3 z-10">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&auto=format&fit=crop"
                  alt="Software engineers working"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand/10"/>
              </div>

              {/* ── Bottom-left accent ── */}
              <div className="absolute bottom-0 left-0 w-[150px] h-[130px] rounded-3xl overflow-hidden
                              shadow-card border-4 border-white/20 float-1 z-10"
                   style={{ animationDelay: '2s' }}>
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop"
                  alt="Business leader"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand/10"/>
              </div>

              {/* ── Decorative ring ── */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                              w-[340px] h-[340px] rounded-full border-2 border-dashed
                              border-white/20 pointer-events-none orbit-cw"/>

              {/* ── Floating stat cards ── */}
              {floatingCards.map((c, i) => (
                <div
                  key={i}
                  className={`absolute ${c.cls} bg-white rounded-xl px-4 py-3 flex items-center
                              gap-3 shadow-card-lg max-w-[220px] z-20`}
                >
                  <i className={`fa ${c.icon} text-brand text-xl flex-shrink-0`}></i>
                  <span className="text-gray-700 text-xs">
                    {c.text} <strong className="text-gray-900">{c.bold}</strong>
                  </span>
                </div>
              ))}

              {/* ── Experience badge ── */}
              <div className="absolute top-[46%] left-[50%] -translate-x-1/2 -translate-y-1/2
                              z-30 bg-brand text-white rounded-2xl px-4 py-3 shadow-brand-lg
                              text-center border-2 border-white/30 backdrop-blur-sm">
                <strong className="block text-2xl font-black leading-none">25+</strong>
                <span className="text-xs font-medium opacity-90">Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="block w-full">
          <path fill="#ffffff" d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"/>
        </svg>
      </div>
    </section>
  )
}

