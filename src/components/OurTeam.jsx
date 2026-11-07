/* Social icons — correct prefix per icon type */
const socials = [
  { icon: 'fa-linkedin-in', prefix: 'fab' },
  { icon: 'fa-twitter',     prefix: 'fab' },
  { icon: 'fa-envelope',    prefix: 'fas' },   /* ← was wrongly "fab", fixed to "fas" */
]

export default function OurTeam() {
  const members = [
    {
      name:    'Sarah Mitchell',
      role:    'Chief Executive Officer',
      quote:   `"Building elite tech teams is an art — we've mastered it."`,
      initials:'SM',
      featured: false,
      /* Use only standard Tailwind opacity values (multiples of 5) */
      circlesBg: [
        { w: 112, h: 112, top: -24, left: -32,  opacity: 0.12 }, /* ~w-28 h-28 */
        { w: 40,  h: 40,  top:  32, left:  64,  opacity: 1    }, /* solid brand dot */
        { w: 24,  h: 24,  top:   8, right: 16,  opacity: 0.5  },
      ],
    },
    {
      name:    'James Okonkwo',
      role:    'Head of Talent Solutions',
      quote:   '"Every placement is a partnership — we invest in both sides."',
      initials:'JO',
      featured: true,
      circlesBg: [
        { w: 144, h: 144, top: -40, left: '50%', marginLeft: -72, opacity: 0.08 },
        { w: 32,  h: 32,  top:  16, left:  24,   opacity: 1 },
        { w: 20,  h: 20,  top:  40, right: 32,   opacity: 0.5 },
        { w: 44,  h: 44,  bottom: 0, left: 32,   opacity: 0.3 },
      ],
    },
    {
      name:    'Richard Holt',
      role:    'VP Global Partnerships',
      quote:   '"Our reach is global; our relationships are personal."',
      initials:'RH',
      featured: false,
      circlesBg: [
        { w: 112, h: 112, top: -24, right: -32, opacity: 0.12 },
        { w: 36,  h: 36,  top:  24, right: 56,  opacity: 0.5 },
        { w: 20,  h: 20,  top:   8, left:  24,  opacity: 1 },
      ],
    },
  ]

  const stats = [
    { icon: 'fa-users',  num: '1,200+', label: 'Team Members Worldwide' },
    { icon: 'fa-globe',  num: '50+',    label: 'Countries We Operate In' },
    { icon: 'fa-award',  num: '15+',    label: 'Industry Awards Won' },
    { icon: 'fa-heart',  num: '98%',    label: 'Employee Satisfaction' },
  ]

  return (
    <section id="team" className="relative py-20 bg-white overflow-hidden">

      {/* Faint gradient blobs — decorative */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand/5 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-brand/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* ── Section header ── */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-brand-pale text-brand text-xs font-bold
                           tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Our People
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-5">
            Our Culture Shapes{' '}
            <span className="text-brand">Everything We Do</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-8">
            Our people, clients, and consultants matter to us more than anything. We are driven
            by a culture of purpose, shared values, and growth. See who we are and how we roll —
            it&apos;s pretty unique.
          </p>
          <a
            href="#about"
            className="inline-flex items-center gap-2 border-2 border-brand text-brand font-semibold
                       px-8 py-3.5 rounded-full hover:bg-brand hover:text-white
                       transition-all duration-300 hover:-translate-y-0.5 hover:shadow-brand"
          >
            Explore Our Culture <i className="fa fa-arrow-right text-sm"></i>
          </a>
        </div>

        {/* ── Team cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end pb-4">
          {members.map((member, i) => (
            <div
              key={i}
              /* Extra top padding so absolute circles don't clip the grid row above */
              className={`relative pt-10 group ${i === 1 ? 'md:-mt-6' : ''}`}
            >
              {/* Decorative circles — using inline styles avoids Tailwind scanning issues */}
              {member.circlesBg.map((c, j) => (
                <div
                  key={j}
                  aria-hidden
                  style={{
                    position:   'absolute',
                    width:       c.w,
                    height:      c.h,
                    top:         c.top  !== undefined ? c.top  : undefined,
                    bottom:      c.bottom !== undefined ? c.bottom : undefined,
                    left:        c.left !== undefined ? c.left : undefined,
                    right:       c.right !== undefined ? c.right : undefined,
                    marginLeft:  c.marginLeft,
                    borderRadius:'50%',
                    backgroundColor: `rgba(204, 0, 0, ${c.opacity})`,
                    zIndex:      j === 0 ? 0 : 2,
                    transition:  'transform 0.5s ease',
                    pointerEvents: 'none',
                  }}
                  className="group-hover:scale-110"
                />
              ))}

              {/* Card */}
              <div
                className={`relative z-10 bg-white rounded-3xl overflow-hidden
                             border shadow-card group-hover:shadow-card-lg
                             transition-all duration-500 group-hover:-translate-y-2
                             ${member.featured
                               ? 'border-brand/30 ring-2 ring-brand/15'
                               : 'border-gray-100'}`}
              >

                {/* Avatar area */}
                <div
                  className={`relative flex items-end justify-center overflow-hidden
                               ${member.featured ? 'h-80' : 'h-72'}`}
                  style={{
                    background: member.featured
                      ? 'linear-gradient(to bottom, #FFF0F0, #FFE0E0, #fff)'
                      : 'linear-gradient(to bottom, #f9fafb, #fff0f0 60%, #fff)',
                  }}
                >
                  {/* Circle halo behind avatar */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                rounded-full transition-transform duration-500 group-hover:scale-105"
                    style={{
                      width:  member.featured ? 220 : 192,
                      height: member.featured ? 220 : 192,
                      backgroundColor: 'rgba(204,0,0,0.08)',
                      boxShadow: `0 0 0 ${member.featured ? 12 : 8}px rgba(204,0,0,0.06)`,
                    }}
                  />

                  {/* Initials avatar */}
                  <div
                    className="relative z-10 rounded-full flex items-center justify-center
                               font-black text-white transition-transform duration-300
                               group-hover:scale-105"
                    style={{
                      width:      member.featured ? 148 : 120,
                      height:     member.featured ? 148 : 120,
                      fontSize:   member.featured ? '2.5rem' : '2rem',
                      background: 'linear-gradient(135deg, #CC0000, #990000)',
                      boxShadow:  '0 8px 32px rgba(204,0,0,0.4)',
                    }}
                  >
                    {member.initials}
                  </div>

                  {/* Featured badge */}
                  {member.featured && (
                    <div className="absolute top-4 right-4 bg-brand text-white text-xs font-bold
                                    px-3 py-1.5 rounded-full shadow-brand flex items-center gap-1.5
                                    z-20">
                      <i className="fas fa-star text-yellow-300 text-xs"></i> Featured
                    </div>
                  )}
                </div>

                {/* Text info */}
                <div className="px-6 pt-5 pb-6 text-center">
                  <h3 className="text-lg font-extrabold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-brand text-xs font-bold tracking-widest uppercase mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-sm italic leading-relaxed mb-5">
                    {member.quote}
                  </p>

                  {/* Social icons — correct prefix per type */}
                  <div className="flex items-center justify-center gap-2">
                    {socials.map((s, j) => (
                      <a
                        key={j}
                        href="#"
                        className="w-9 h-9 rounded-full border border-gray-200 flex items-center
                                   justify-center text-gray-400 text-sm
                                   hover:bg-brand hover:border-brand hover:text-white
                                   transition-all duration-200"
                        aria-label={s.icon}
                      >
                        <i className={`${s.prefix} ${s.icon}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Stats strip ── */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-brand-pale border border-red-100 rounded-2xl px-5 py-6 text-center
                         hover:bg-brand hover:border-brand group transition-all duration-300
                         hover:-translate-y-1 hover:shadow-brand cursor-default"
            >
              <i className={`fas ${s.icon} text-brand text-2xl mb-2 block
                             group-hover:text-white transition-colors`}></i>
              <strong className="block text-2xl font-black text-brand mb-1
                                 group-hover:text-white transition-colors leading-none">
                {s.num}
              </strong>
              <span className="text-xs text-gray-500 font-medium leading-tight block
                               group-hover:text-white/80 transition-colors">
                {s.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
