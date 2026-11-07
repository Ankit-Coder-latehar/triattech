import { useState } from 'react'

const contactDetails = [
  { icon: 'fa-phone',         label: 'Call Us',        value: '+1 (800) 942-4747' },
  { icon: 'fa-envelope',      label: 'Email Us',       value: 'hello@triatech.com' },
  { icon: 'fa-map-marker-alt',label: 'Headquarters',   value: 'Milwaukee, WI, USA' },
]

const socials = [
  { icon: 'fab fa-linkedin', href: '#' },
  { icon: 'fab fa-twitter',  href: '#' },
  { icon: 'fab fa-facebook', href: '#' },
  { icon: 'fab fa-youtube',  href: '#' },
]

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | loading | done

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => { setStatus('done'); setTimeout(() => setStatus('idle'), 5000) }, 1800)
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">

          {/* Info — 2 cols */}
          <div className="lg:col-span-2">
            <span className="inline-block bg-brand-pale text-brand text-xs font-bold tracking-widest
                             uppercase px-4 py-1.5 rounded-full mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Let's Talk <span className="text-brand">Tech Talent</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-7">
              Whether you need to hire one specialist or build an entire engineering department,
              our team is ready to help. We respond within 2 business hours.
            </p>

            <div className="space-y-5 mb-7">
              {contactDetails.map((d, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-11 h-11 bg-brand-pale text-brand rounded-xl flex items-center
                                  justify-content-center justify-center text-base flex-shrink-0">
                    <i className={`fa ${d.icon}`}></i>
                  </div>
                  <div>
                    <strong className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-0.5">
                      {d.label}
                    </strong>
                    <span className="text-gray-600 text-sm">{d.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              {socials.map((s, i) => (
                <a key={i} href={s.href}
                   className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center
                              justify-center hover:bg-brand hover:text-white transition-all
                              hover:-translate-y-0.5">
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Form — 3 cols */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-200 shadow-card p-8">
            <h3 className="text-xl font-extrabold text-gray-900 mb-6">Send us a message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">First Name *</label>
                  <input required type="text" placeholder="John"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50
                               focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10
                               focus:bg-white transition-all"/>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Last Name *</label>
                  <input required type="text" placeholder="Smith"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50
                               focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10
                               focus:bg-white transition-all"/>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Company *</label>
                  <input required type="text" placeholder="Acme Corp"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50
                               focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10
                               focus:bg-white transition-all"/>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Job Title</label>
                  <input type="text" placeholder="CTO"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50
                               focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10
                               focus:bg-white transition-all"/>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Business Email *</label>
                <input required type="email" placeholder="john@acmecorp.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50
                             focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10
                             focus:bg-white transition-all"/>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">How can we help?</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50
                                   focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10
                                   focus:bg-white transition-all text-gray-600">
                  <option value="">Select a service</option>
                  <option>IT Staff Augmentation</option>
                  <option>Permanent Recruitment</option>
                  <option>Managed Project Solutions</option>
                  <option>Managed Services (MSP)</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Message</label>
                <textarea rows={4} placeholder="Tell us about your requirements..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50
                             focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10
                             focus:bg-white transition-all resize-y"/>
              </div>

              <button
                type="submit"
                disabled={status !== 'idle'}
                className={`w-full py-4 rounded-full font-semibold text-white text-sm flex items-center
                            justify-center gap-2 transition-all
                  ${status === 'done'
                    ? 'bg-green-600 cursor-default'
                    : 'bg-brand hover:bg-brand-dark shadow-brand hover:shadow-brand-lg hover:-translate-y-0.5'
                  }`}
              >
                {status === 'idle'    && <><i className="fa fa-paper-plane"></i> Send Message</>}
                {status === 'loading' && <><i className="fa fa-spinner fa-spin"></i> Sending…</>}
                {status === 'done'    && <><i className="fa fa-check-circle"></i> Message Sent!</>}
              </button>

              <p className="text-xs text-gray-400 text-center">
                By submitting, you agree to our{' '}
                <a href="#" className="text-brand underline">Privacy Policy</a>.
              </p>

              {status === 'done' && (
                <div className="flex items-center gap-2 justify-center bg-green-50 text-green-700
                                border border-green-200 rounded-xl px-4 py-3 text-sm font-semibold">
                  <i className="fa fa-check-circle text-green-600"></i>
                  Thank you! We'll be in touch within 2 business hours.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

