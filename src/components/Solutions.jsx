export default function Solutions() {
  const cards = [
    {
      icon: 'fa-users-cog',
      title: 'IT Staff Augmentation',
      desc:  'Rapidly extend your engineering teams with pre-vetted IT contractors and consultants — deployed in days, not months.',
      features: ['48-hour placement guarantee', '600,000+ talent pool', 'Contract & contract-to-hire'],
      featured: true,
    },
    {
      icon: 'fa-user-tie',
      title: 'Permanent Recruitment',
      desc:  'Build lasting engineering capability with precision-matched permanent hires who align with your culture and long-term roadmap.',
      features: ['Deep technical vetting', '90-day replacement guarantee', 'DEI-focused talent pipelines'],
      featured: false,
    },
    {
      icon: 'fa-project-diagram',
      title: 'Managed Project Solutions',
      desc:  'Outcome-based delivery models where Triatech owns accountability — from digital transformation to cloud migration.',
      features: ['Fixed-price or T&M engagement', 'Dedicated delivery managers', 'Agile & Waterfall delivery'],
      featured: false,
    },
    {
      icon: 'fa-cogs',
      title: 'Managed Services (MSP)',
      desc:  'Let Triatech manage your entire contingent workforce program, maximising quality, compliance, and cost efficiency.',
      features: ['Vendor-neutral or preferred', 'Real-time workforce analytics', 'Full compliance management'],
      featured: false,
    },
  ]

  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-brand-pale text-brand text-xs font-bold tracking-widest
                           uppercase px-4 py-1.5 rounded-full mb-3">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-3">
            End-to-End <span className="text-brand">IT Workforce Solutions</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            From sourcing a single specialist to delivering a fully managed technology programme,
            we have the expertise and global reach to power your ambitions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 border transition-all duration-300 overflow-hidden group
                ${card.featured
                  ? 'bg-gradient-to-br from-brand to-brand-dark border-transparent text-white shadow-brand-lg'
                  : 'bg-white border-gray-200 hover:border-transparent hover:shadow-card-lg hover:-translate-y-1.5'
                }`}
            >
              {/* Top accent bar */}
              {!card.featured && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gray-200 group-hover:bg-brand transition-colors duration-300" />
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5
                ${card.featured ? 'bg-white/20 text-white' : 'bg-brand-pale text-brand'}`}>
                <i className={`fa ${card.icon}`}></i>
              </div>

              <h3 className={`text-xl font-bold mb-3 ${card.featured ? 'text-white' : 'text-gray-900'}`}>
                {card.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-4 ${card.featured ? 'text-white/85' : 'text-gray-500'}`}>
                {card.desc}
              </p>

              <ul className="space-y-1.5 mb-5">
                {card.features.map((f, j) => (
                  <li key={j} className={`flex items-center gap-2 text-sm
                    ${card.featured ? 'text-white/85' : 'text-gray-700'}`}>
                    <i className={`fa fa-check text-xs ${card.featured ? 'text-white/80' : 'text-brand'}`}></i>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`inline-flex items-center gap-1.5 text-sm font-bold transition-all
                  ${card.featured ? 'text-white/90 hover:gap-3' : 'text-brand hover:gap-3'}`}
              >
                Explore <i className="fa fa-arrow-right text-xs"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

