const cols = [
  {
    title: 'Solutions',
    links: ['IT Staff Augmentation','Permanent Recruitment','Managed Project Solutions','Managed Services (MSP)','Employer of Record'],
  },
  {
    title: 'Tech Expertise',
    links: ['Cloud & Infrastructure','AI & Machine Learning','Cybersecurity','Data & Analytics','Application Development','DevOps & Automation'],
  },
  {
    title: 'For Candidates',
    links: ['Search Jobs','Register Your CV','Job Alerts','Career Advice','Talent Community'],
  },
  {
    title: 'Company',
    links: ['About Triatech','Leadership Team','Global Offices','Awards & Recognition','Sustainability','Careers at Triatech'],
  },
  {
    title: 'Resources',
    links: ['Research Reports','Blog & Insights','Webinars','Case Studies','Media Centre'],
  },
]

const regions = ['🇺🇸 United States','🇬🇧 United Kingdom','🇩🇪 Germany','🇫🇷 France','🇮🇳 India','🇸🇬 Singapore','🇦🇺 Australia']

const socials = [
  { icon: 'fab fa-linkedin',  href: '#' },
  { icon: 'fab fa-twitter',   href: '#' },
  { icon: 'fab fa-facebook',  href: '#' },
  { icon: 'fab fa-youtube',   href: '#' },
  { icon: 'fab fa-instagram', href: '#' },
]

const legal = ['Privacy Policy','Terms of Use','Cookie Settings','Accessibility','Modern Slavery Statement']

export default function Footer() {
  return (
    <footer className="bg-gray-900">

      {/* Top grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          {/* Brand — spans 1 col on lg */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <a href="#" className="inline-flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-white text-brand rounded-lg flex items-center justify-center
                              font-black text-lg">T</div>
              <span className="text-white font-extrabold text-lg">Triatech</span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Powering the world's tech workforce — connecting elite IT professionals with the
              enterprises that need them most.
            </p>
            <div className="flex gap-2">
              {socials.map((s, i) => (
                <a key={i} href={s.href}
                   className="w-8 h-8 rounded-lg bg-white/8 text-gray-500 flex items-center
                              justify-center text-sm hover:bg-brand hover:text-white transition-all">
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Nav cols */}
          {cols.map((col, i) => (
            <div key={i}>
              <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-gray-500 text-sm hover:text-brand transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Region selector */}
      <div className="border-t border-white/8">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-gray-500 text-xs flex items-center gap-1.5">
              <i className="fa fa-globe"></i> Global Site
            </span>
            <div className="flex flex-wrap gap-1.5">
              {regions.map((r, i) => (
                <a key={i} href="#"
                   className="text-gray-500 text-xs px-2.5 py-1 rounded hover:bg-brand
                              hover:text-white transition-all">
                  {r}
                </a>
              ))}
              <a href="#" className="text-brand text-xs px-2.5 py-1 font-semibold hover:underline">
                View All Countries →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="container mx-auto px-6 py-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-gray-500 text-xs">
              © 2026 Triatech — a ManpowerGroup brand. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4">
              {legal.map((l, i) => (
                <a key={i} href="#"
                   className="text-gray-500 text-xs hover:text-brand transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

