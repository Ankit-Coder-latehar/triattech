/* Social icons */
const socials = [
  { icon: 'fa-linkedin-in', prefix: 'fab', label: 'LinkedIn' },
  { icon: 'fa-twitter',     prefix: 'fab', label: 'Twitter'  },
  { icon: 'fa-envelope',    prefix: 'fas', label: 'Email'    },
]

const members = [
  {
    name:     'Sarah Mitchell',
    role:     'Chief Executive Officer',
    quote:    'Building elite tech teams is an art — we\'ve mastered it over 15 years.',
    image:    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    featured: false,
    tag:      '15 yrs experience',
  },
  {
    name:     'James Okonkwo',
    role:     'Head of Talent Solutions',
    quote:    'Every placement is a partnership — we invest deeply in both sides of the relationship.',
    image:    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    featured: true,
    tag:      'Top Performer 2024',
  },
  {
    name:     'Richard Holt',
    role:     'VP Global Partnerships',
    quote:    'Our reach is global, but our relationships are always deeply personal.',
    image:    'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
    featured: false,
    tag:      '50+ countries',
  },
]

const stats = [
  { icon: 'fa-users',       num: '1,200+', label: 'Team Members' },
  { icon: 'fa-globe',       num: '50+',    label: 'Countries' },
  { icon: 'fa-award',       num: '15+',    label: 'Awards Won' },
  { icon: 'fa-heart',       num: '98%',    label: 'Satisfaction' },
]

export default function OurTeam() {
  return (
    <section id="team" className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #f8faff 0%, #ffffff 40%, #EFF6FF 100%)' }}>

      {/* ── Decorative background shapes ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {/* Large soft circle top-left */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(15,28,63,0.06) 0%, transparent 70%)' }} />
        {/* Large soft circle bottom-right */}
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(30,58,138,0.07) 0%, transparent 70%)' }} />
        {/* Dot grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #0F1C3F 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* ── Section header ── */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-brand text-white text-xs font-bold
                          tracking-widest uppercase px-5 py-2 rounded-full mb-6 shadow-brand">
            <i className="fas fa-users text-xs"></i>
            Our People
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
            Meet the Minds Behind{' '}
            <span className="relative inline-block">
              <span className="text-brand">Triatech</span>
              {/* Underline accent */}
              <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 6" preserveAspectRatio="none">
                <path d="M0,5 Q50,0 100,4 Q150,8 200,3" stroke="#0F1C3F" strokeWidth="2.5"
                      fill="none" strokeLinecap="round" opacity="0.4"/>
              </svg>
            </span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Our people are our greatest asset. Driven by purpose, shaped by culture, and united by
            a passion for connecting world-class talent with industry-leading organisations.
          </p>
        </div>

        {/* ── Team cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {members.map((member, i) => (
            <div
              key={i}
              className={`group relative flex flex-col items-center text-center
                          rounded-3xl transition-all duration-500
                          hover:-translate-y-3
                          ${member.featured ? 'md:-mt-6' : ''}`}
            >
              {/* Card background */}
              <div
                className={`absolute inset-0 rounded-3xl transition-all duration-500
                             ${member.featured
                               ? 'bg-brand shadow-brand-lg'
                               : 'bg-white border border-gray-100 shadow-card group-hover:shadow-card-lg'}`}
              />

              {/* Top accent bar */}
              {!member.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-b-full
                                bg-gradient-to-r from-brand to-brand-light
                                transition-all duration-500 group-hover:w-24" />
              )}

              {/* Card content */}
              <div className="relative z-10 flex flex-col items-center px-8 pt-10 pb-8 w-full">

                {/* ── Circular photo with layered rings ── */}
                <div className="relative mb-7">
                  {/* Animated pulse ring (featured only) */}
                  {member.featured && (
                    <div className="absolute inset-0 rounded-full animate-ping opacity-20 scale-110"
                      style={{ backgroundColor: 'rgba(255,255,255,0.4)', animationDuration: '2.5s' }} />
                  )}

                  {/* Outer decorative ring */}
                  <div
                    className="absolute rounded-full transition-all duration-500 group-hover:scale-110"
                    style={{
                      inset: '-8px',
                      borderRadius: '50%',
                      border: member.featured
                        ? '2px solid rgba(255,255,255,0.3)'
                        : '2px dashed rgba(15,28,63,0.2)',
                    }}
                  />

                  {/* Gradient ring */}
                  <div
                    className="absolute rounded-full transition-all duration-500"
                    style={{
                      inset: '-4px',
                      borderRadius: '50%',
                      background: member.featured
                        ? 'linear-gradient(135deg, rgba(255,255,255,0.6), rgba(255,255,255,0.1))'
                        : 'linear-gradient(135deg, #0F1C3F, #1E3A8A)',
                      padding: '3px',
                    }}
                  />

                  {/* White gap */}
                  <div className="absolute rounded-full bg-white"
                    style={{ inset: '-1px', borderRadius: '50%' }} />

                  {/* The photo */}
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="relative z-10 rounded-full object-cover object-top block
                               transition-transform duration-500 group-hover:scale-105"
                    style={{
                      width:  member.featured ? 164 : 140,
                      height: member.featured ? 164 : 140,
                    }}
                  />

                  {/* Tag badge */}
                  <div
                    className={`absolute -bottom-3 left-1/2 -translate-x-1/2 z-20
                                 whitespace-nowrap text-xs font-bold px-3 py-1 rounded-full
                                 shadow-md border
                                 ${member.featured
                                   ? 'bg-white text-brand border-white'
                                   : 'bg-brand text-white border-brand'}`}
                  >
                    {member.featured && <i className="fas fa-star text-yellow-400 mr-1 text-xs"></i>}
                    {member.tag}
                  </div>
                </div>

                {/* Spacer for badge */}
                <div className="h-4" />

                {/* Name */}
                <h3 className={`text-xl font-black mb-1 ${member.featured ? 'text-white' : 'text-gray-900'}`}>
                  {member.name}
                </h3>

                {/* Role */}
                <p className={`text-xs font-bold tracking-widest uppercase mb-5
                               ${member.featured ? 'text-blue-200' : 'text-brand'}`}>
                  {member.role}
                </p>

                {/* Divider */}
                <div className={`w-10 h-px mb-5 rounded-full transition-all duration-300 group-hover:w-20
                                 ${member.featured ? 'bg-white/30' : 'bg-brand/20'}`} />

                {/* Quote */}
                <div className="relative mb-6">
                  <i className={`fas fa-quote-left absolute -top-2 -left-1 text-2xl opacity-20
                                 ${member.featured ? 'text-white' : 'text-brand'}`}></i>
                  <p className={`text-sm leading-relaxed italic pl-5
                                 ${member.featured ? 'text-blue-100' : 'text-gray-500'}`}>
                    {member.quote}
                  </p>
                </div>

                {/* Social icons */}
                <div className="flex items-center justify-center gap-2 mt-auto">
                  {socials.map((s, j) => (
                    <a
                      key={j}
                      href="#"
                      aria-label={s.label}
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-sm
                                  transition-all duration-200
                                  ${member.featured
                                    ? 'border border-white/30 text-white/70 hover:bg-white hover:text-brand hover:border-white'
                                    : 'border border-gray-200 text-gray-400 hover:bg-brand hover:border-brand hover:text-white'}`}
                    >
                      <i className={`${s.prefix} ${s.icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Stats strip ── */}
        <div
          className="rounded-3xl p-1 shadow-brand-lg"
          style={{ background: 'linear-gradient(135deg, #0F1C3F, #1E3A8A)' }}
        >
          <div className="bg-white/5 rounded-[22px] grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center py-8 px-4 group cursor-default"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3
                              transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
                >
                  <i className={`fas ${s.icon} text-white text-lg`}></i>
                </div>
                <strong className="block text-3xl font-black text-white leading-none mb-1">
                  {s.num}
                </strong>
                <span className="text-xs text-blue-200 font-medium tracking-wide">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">
            Want to be part of our story?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 bg-brand text-white font-bold
                       px-8 py-3.5 rounded-full shadow-brand
                       hover:shadow-brand-lg hover:-translate-y-0.5
                       transition-all duration-300"
          >
            <i className="fas fa-paper-plane text-sm"></i>
            Join Our Team
          </a>
        </div>

      </div>
    </section>
  )
}
