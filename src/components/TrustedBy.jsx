/* Brand icons need "fab", solid icons need "fas" */
const row1 = [
  { name: 'Microsoft',     icon: 'fa-windows',       prefix: 'fab' },
  { name: 'Google',        icon: 'fa-google',         prefix: 'fab' },
  { name: 'JPMorgan',      icon: 'fa-landmark',       prefix: 'fas' },
  { name: 'Goldman Sachs', icon: 'fa-chart-line',     prefix: 'fas' },
  { name: 'Pfizer',        icon: 'fa-syringe',        prefix: 'fas' },
  { name: 'Boeing',        icon: 'fa-plane',          prefix: 'fas' },
  { name: 'Deloitte',      icon: 'fa-briefcase',      prefix: 'fas' },
  { name: 'Cisco',         icon: 'fa-network-wired',  prefix: 'fas' },
  { name: 'IBM',           icon: 'fa-server',         prefix: 'fas' },
  { name: 'Oracle',        icon: 'fa-database',       prefix: 'fas' },
  { name: 'SAP',           icon: 'fa-gear',           prefix: 'fas' },
  { name: 'Adobe',         icon: 'fa-pen-nib',        prefix: 'fas' },
]

const row2 = [
  { name: 'Amazon',     icon: 'fa-amazon',       prefix: 'fab' },
  { name: 'Apple',      icon: 'fa-apple',        prefix: 'fab' },
  { name: 'Accenture',  icon: 'fa-chart-pie',    prefix: 'fas' },
  { name: 'Salesforce', icon: 'fa-cloud',        prefix: 'fas' },
  { name: 'Tesla',      icon: 'fa-bolt',         prefix: 'fas' },
  { name: 'Intel',      icon: 'fa-microchip',    prefix: 'fas' },
  { name: 'HP',         icon: 'fa-laptop',       prefix: 'fas' },
  { name: 'Dell',       icon: 'fa-desktop',      prefix: 'fas' },
  { name: 'Siemens',    icon: 'fa-industry',     prefix: 'fas' },
  { name: 'Capgemini',  icon: 'fa-code-branch',  prefix: 'fas' },
  { name: 'Infosys',    icon: 'fa-infinity',     prefix: 'fas' },
  { name: 'Wipro',      icon: 'fa-globe',        prefix: 'fas' },
]

/* Single logo pill — correct icon prefix, no duplication */
function LogoPill({ name, icon, prefix }) {
  return (
    <div
      className="flex-shrink-0 flex items-center gap-2.5 mx-3 px-5 py-3
                 border border-gray-200 rounded-xl bg-white
                 hover:border-brand hover:bg-brand-pale
                 transition-all duration-300 cursor-default select-none group"
    >
      <i className={`${prefix} ${icon} text-gray-300 text-base
                     group-hover:text-brand transition-colors duration-300`}></i>
      <span className="text-gray-400 font-semibold text-sm whitespace-nowrap
                       group-hover:text-brand transition-colors duration-300">
        {name}
      </span>
    </div>
  )
}

/* One infinite-scroll row — tripled so the seam never shows */
function MarqueeRow({ items, reverse = false, speed = 35 }) {
  const track = [...items, ...items, ...items]

  return (
    <div
      className="overflow-hidden relative"
      style={{
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        maskImage:
          'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
      }}
    >
      <div
        className="flex w-max"
        style={{
          animation: `${reverse ? 'marqueeReverse' : 'marqueeForward'} ${speed}s linear infinite`,
        }}
      >
        {track.map((item, i) => (
          <LogoPill key={i} name={item.name} icon={item.icon} prefix={item.prefix} />
        ))}
      </div>
    </div>
  )
}

export default function TrustedBy() {
  return (
    <section className="py-12 border-b border-gray-100 bg-gray-50/60 overflow-hidden">
      {/* Keyframes injected once */}
      <style>{`
        @keyframes marqueeForward {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        @keyframes marqueeReverse {
          0%   { transform: translateX(calc(-100% / 3)); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="container mx-auto px-6 mb-7">
        <p className="text-center text-gray-400 text-xs font-bold tracking-[0.2em] uppercase">
          Trusted by global enterprises across every industry
        </p>
      </div>

      {/* Row 1 — left → right */}
      <div className="mb-4">
        <MarqueeRow items={row1} reverse={false} speed={35} />
      </div>

      {/* Row 2 — right → left */}
      <MarqueeRow items={row2} reverse={true} speed={28} />
    </section>
  )
}
