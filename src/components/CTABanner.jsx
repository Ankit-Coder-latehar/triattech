export default function CTABanner() {
  return (
    <section className="bg-cta-gradient py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
              Ready to Build Your World-Class Tech Team?
            </h2>
            <p className="text-white/80 text-base">
              Tell us about your challenge. Our team will respond within 2 business hours.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-brand font-semibold
                         px-7 py-3.5 rounded-full hover:bg-brand-pale transition-all
                         hover:-translate-y-0.5 shadow-lg"
            >
              Get in Touch <i className="fa fa-arrow-right text-sm"></i>
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold
                         px-7 py-3.5 rounded-full hover:bg-white/15 transition-all hover:-translate-y-0.5"
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

