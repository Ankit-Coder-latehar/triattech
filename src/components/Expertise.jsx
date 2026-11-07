import { useState } from 'react'

const domains = [
  { icon: 'fa-cloud',     title: 'Cloud & Infrastructure',  desc: 'AWS, Azure, GCP architects, cloud engineers, and migration specialists.', jobs: '2,340' },
  { icon: 'fa-robot',     title: 'AI & Machine Learning',   desc: 'Data scientists, ML engineers, NLP specialists, and AI architects.',        jobs: '1,890' },
  { icon: 'fa-shield-alt',title: 'Cybersecurity',           desc: 'SOC analysts, penetration testers, CISO advisors, and GRC specialists.',   jobs: '3,100' },
  { icon: 'fa-chart-bar', title: 'Data & Analytics',        desc: 'Data engineers, BI developers, analytics leads, and data architects.',     jobs: '2,750' },
  { icon: 'fa-code',      title: 'Application Development', desc: 'Full-stack, frontend, backend, mobile, and API developers.',               jobs: '4,200' },
  { icon: 'fa-infinity',  title: 'DevOps & Automation',     desc: 'DevOps engineers, SREs, CI/CD pipeline and automation specialists.',       jobs: '1,650' },
]

export default function Expertise() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="expertise" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-brand-pale text-brand text-xs font-bold tracking-widest
                           uppercase px-4 py-1.5 rounded-full mb-3">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Specialist Expertise Across{' '}
            <span className="text-brand">Every Tech Domain</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {domains.map((d, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`relative border rounded-2xl p-6 cursor-pointer transition-all duration-300 overflow-hidden
                ${hovered === i
                  ? 'border-brand shadow-card-lg -translate-y-1.5'
                  : 'border-gray-200 hover:border-brand'
                }`}
            >
              {/* Background fill on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-brand-pale to-transparent
                             transition-opacity duration-300 pointer-events-none
                             ${hovered === i ? 'opacity-100' : 'opacity-0'}`}
              />

              {/* Icon */}
              <div
                className={`relative w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4
                             transition-all duration-300
                  ${hovered === i ? 'bg-brand text-white' : 'bg-brand-pale text-brand'}`}
              >
                <i className={`fa ${d.icon}`}></i>
              </div>

              <h3 className="relative font-bold text-gray-900 mb-2">{d.title}</h3>
              <p className="relative text-sm text-gray-500 mb-4 leading-relaxed">{d.desc}</p>
              <span className="relative inline-block text-xs font-bold text-brand bg-brand-pale px-3 py-1 rounded-full">
                {d.jobs} open roles
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#jobs"
            className="inline-flex items-center gap-2 bg-brand text-white font-semibold
                       px-8 py-4 rounded-full hover:bg-brand-dark transition-all shadow-brand
                       hover:-translate-y-0.5 hover:shadow-brand-lg"
          >
            Browse All 15,000+ Jobs <i className="fa fa-arrow-right text-sm"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

