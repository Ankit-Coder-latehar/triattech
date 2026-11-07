const articles = [
  {
    category: '🤖 Whitepaper', date: 'Oct 2026',
    icon: 'fa-robot', iconBg: 'from-red-100 to-red-200',
    title: 'Bridging the AI Skills Gap',
    desc: 'How enterprises are addressing the critical shortage of AI and ML talent in a world transformed by generative AI.',
  },
  {
    category: '🔐 Guide', date: 'Sep 2026',
    icon: 'fa-shield-alt', iconBg: 'from-rose-100 to-rose-200',
    title: 'The Cybersecurity Talent Crisis',
    desc: '3.5 million unfilled cybersecurity jobs globally — how to attract and retain the security professionals you need.',
  },
  {
    category: '☁️ Case Study', date: 'Aug 2026',
    icon: 'fa-cloud', iconBg: 'from-red-100 to-pink-200',
    title: 'Cloud Migration at Scale: A FinTech Story',
    desc: 'How we helped a global bank migrate 2,000+ workloads to AWS in under 18 months using 60 cloud engineers.',
  },
]

export default function Insights() {
  return (
    <section id="insights" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-brand-pale text-brand text-xs font-bold tracking-widest
                           uppercase px-4 py-1.5 rounded-full mb-3">
            Research & Insights
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-3">
            Stay Ahead of the <span className="text-brand">Talent Curve</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Award-winning research, reports, and expert commentary on the global technology labour market.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mb-8">

          {/* Featured card */}
          <div className="lg:col-span-1 bg-gradient-to-br from-brand to-brand-dark rounded-2xl p-7
                          flex flex-col justify-between border-transparent shadow-brand-lg
                          hover:-translate-y-1.5 transition-all duration-300">
            <div>
              <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1
                               rounded-full mb-4">
                📊 Annual Report
              </span>
              <h3 className="text-xl font-extrabold text-white mb-3 leading-snug">
                Global Tech Talent Outlook 2026
              </h3>
              <p className="text-white/85 text-sm leading-relaxed mb-4">
                Our landmark annual study of tech talent supply, demand, salary benchmarks, and
                hiring trends across 40+ markets.
              </p>
              <div className="flex gap-4 text-white/70 text-xs mb-6">
                <span><i className="fa fa-calendar mr-1"></i>Nov 2026</span>
                <span><i className="fa fa-clock mr-1"></i>15 min read</span>
              </div>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white text-brand font-semibold
                         px-5 py-2.5 rounded-full text-sm hover:bg-brand-pale transition-all w-fit"
            >
              Download Report <i className="fa fa-download text-xs"></i>
            </a>
          </div>

          {/* Article cards */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-5">
            {articles.map((a, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden
                           hover:-translate-y-1.5 hover:shadow-card-lg hover:border-transparent
                           transition-all duration-300 flex flex-col"
              >
                {/* Image area */}
                <div className={`h-28 flex items-center justify-center bg-gradient-to-br ${a.iconBg}`}>
                  <i className={`fa ${a.icon} text-4xl text-brand`}></i>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-brand text-xs font-bold mb-2">{a.category}</span>
                  <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2">{a.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1">{a.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs"><i className="fa fa-calendar mr-1"></i>{a.date}</span>
                    <a href="#" className="text-brand text-xs font-bold inline-flex items-center gap-1
                                          hover:gap-2 transition-all">
                      Read More <i className="fa fa-arrow-right text-xs"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 border-2 border-brand text-brand font-semibold
                       px-8 py-3.5 rounded-full hover:bg-brand hover:text-white transition-all"
          >
            View All Insights <i className="fa fa-arrow-right text-sm"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

