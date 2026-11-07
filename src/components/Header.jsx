import { useState, useEffect } from 'react'

const navItems = [
  {
    label: 'Solutions',
    cols: [
      {
        heading: 'Workforce Solutions',
        links: [
          { icon: 'fa-users',          text: 'IT Staff Augmentation' },
          { icon: 'fa-briefcase',      text: 'Permanent Recruitment' },
          { icon: 'fa-tasks',          text: 'Managed Services' },
          { icon: 'fa-project-diagram',text: 'Project Solutions' },
        ],
      },
      {
        heading: 'By Industry',
        links: [
          { icon: 'fa-landmark',  text: 'Financial Services' },
          { icon: 'fa-heartbeat', text: 'Healthcare & Life Sciences' },
          { icon: 'fa-industry',  text: 'Manufacturing' },
          { icon: 'fa-shield-alt',text: 'Government & Defense' },
        ],
      },
    ],
    promo: { title: 'Scale Your Tech Team', desc: 'Access 600,000+ pre-vetted IT professionals globally.', cta: 'Get Started' },
  },
  {
    label: 'Expertise',
    cols: [
      {
        heading: 'Tech Domains',
        links: [
          { icon: 'fa-cloud',      text: 'Cloud & Infrastructure' },
          { icon: 'fa-robot',      text: 'AI & Machine Learning' },
          { icon: 'fa-lock',       text: 'Cybersecurity' },
          { icon: 'fa-chart-bar',  text: 'Data & Analytics' },
          { icon: 'fa-code',       text: 'Application Development' },
          { icon: 'fa-infinity',   text: 'DevOps & Automation' },
        ],
      },
      {
        heading: 'Emerging Tech',
        links: [
          { icon: 'fa-link',       text: 'Blockchain' },
          { icon: 'fa-vr-cardboard',text: 'AR / VR / XR' },
          { icon: 'fa-microchip',  text: 'Embedded Systems' },
          { icon: 'fa-satellite',  text: 'IoT Solutions' },
        ],
      },
    ],
  },
  {
    label: 'About Us',
    href: '#about',
  },
]

function MegaMenu({ item }) {
  if (!item.cols) return null
  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white border border-gray-200
                 rounded-2xl shadow-card-lg p-6 flex gap-6 z-50 opacity-0 invisible
                 group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0
                 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto"
      style={{ minWidth: item.cols.length > 1 ? 480 : 260 }}
    >
      {item.cols.map((col, i) => (
        <div key={i} className="flex-1 min-w-[180px]">
          <h4 className="text-brand text-xs font-black tracking-widest uppercase mb-3 pb-2
                         border-b-2 border-brand-pale">
            {col.heading}
          </h4>
          <ul className="space-y-0.5">
            {col.links.map((link, j) => (
              <li key={j}>
                <a
                  href="#"
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-gray-700 text-sm
                             hover:bg-brand-pale hover:text-brand hover:pl-4 transition-all duration-150"
                >
                  <i className={`fa ${link.icon} text-brand text-xs w-4`}></i>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {item.promo && (
        <div className="bg-gradient-to-br from-brand to-brand-dark rounded-xl p-4 min-w-[180px]
                        flex flex-col justify-between">
          <div>
            <h4 className="text-white font-bold text-sm mb-1">{item.promo.title}</h4>
            <p className="text-white/80 text-xs leading-relaxed mb-4">{item.promo.desc}</p>
          </div>
          <a
            href="#contact"
            className="inline-block bg-white text-brand text-xs font-bold px-4 py-2 rounded-full
                       hover:bg-brand-pale transition-colors w-fit"
          >
            {item.promo.cta}
          </a>
        </div>
      )}
    </div>
  )
}

export default function Header() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  /* Scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 transition-shadow duration-300
                  ${scrolled ? 'shadow-card' : ''}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-6 h-[72px]">

          {/* ── Logo ── */}
          <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-10 h-10 bg-brand text-white rounded-xl flex items-center justify-center
                            font-black text-xl shadow-brand">
              T
            </div>
            <div>
              <span className="font-extrabold text-gray-900 text-lg leading-none block">Triatech</span>
              <span className="text-gray-400 text-[10px] leading-none">a ManpowerGroup brand</span>
            </div>
          </a>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-1 ml-auto">
            {navItems.map((item, i) => (
              <div key={i} className="relative group">
                <a
                  href={item.href || '#'}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-gray-700 text-sm
                             font-medium hover:text-brand hover:bg-brand-pale transition-all
                             group-hover:text-brand group-hover:bg-brand-pale"
                >
                  {item.label}
                  {item.cols && (
                    <i className="fa fa-chevron-down text-[10px] transition-transform duration-200
                                  group-hover:rotate-180"></i>
                  )}
                </a>
                <MegaMenu item={item} />
              </div>
            ))}
          </nav>

          {/* ── Actions ── */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Contact */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 bg-brand text-white font-semibold
                         text-sm px-5 py-2 rounded-full hover:bg-brand-dark transition-all shadow-brand
                         hover:shadow-brand-lg hover:-translate-y-px"
            >
              Contact Us
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(o => !o)}
              className="lg:hidden w-9 h-9 flex flex-col justify-center items-center gap-[5px] ml-1"
              aria-label="Menu"
            >
              <span className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-300
                ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`}/>
              <span className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-300
                ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`}/>
              <span className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-300
                ${mobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`}/>
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Nav ── */}
      <div className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300
                       ${mobileOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
        <ul className="container mx-auto px-6 py-3 space-y-0.5">
          {navItems.map((item, i) => (
            <li key={i}>
              <a
                href={item.href || '#'}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-brand-pale
                           hover:text-brand transition-all"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-2 pb-1">
            <a href="#contact"
               onClick={() => setMobileOpen(false)}
               className="block text-center bg-brand text-white font-semibold py-2.5 rounded-full
                          text-sm hover:bg-brand-dark transition-all shadow-brand">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

