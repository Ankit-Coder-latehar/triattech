import { useState } from 'react'

export default function JobSearch() {
  const [keyword, setKeyword] = useState('')
  const [location, setLocation] = useState('')
  const [type, setType] = useState('')

  const popular = ['Cloud Engineer','Data Scientist','Cybersecurity Analyst','Full Stack Developer','DevOps']

  return (
    <section id="jobs" className="relative z-10 pb-12 bg-white">
      <div className="container mx-auto px-6">
        {/* Card floats up over the hero wave */}
        <div className="-mt-14 bg-white rounded-2xl border border-gray-200 shadow-card-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1">
            Search <span className="text-brand">Thousands of IT Jobs</span>
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Find your next tech opportunity from our global network of leading employers.
          </p>

          {/* Search row */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            {/* Keyword */}
            <div className="flex items-center gap-2 flex-1 bg-gray-50 border border-gray-200
                            rounded-full px-5 py-3 focus-within:border-brand focus-within:bg-white
                            focus-within:ring-2 focus-within:ring-brand/10 transition-all">
              <i className="fa fa-search text-brand text-sm flex-shrink-0"></i>
              <input
                type="text"
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
                placeholder="Job title, skill or keyword…"
                className="flex-1 bg-transparent border-none outline-none text-sm text-gray-800
                           placeholder-gray-400"
              />
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 flex-1 bg-gray-50 border border-gray-200
                            rounded-full px-5 py-3 focus-within:border-brand focus-within:bg-white
                            focus-within:ring-2 focus-within:ring-brand/10 transition-all">
              <i className="fa fa-map-marker-alt text-brand text-sm flex-shrink-0"></i>
              <input
                type="text"
                value={location}
                onChange={e => setLocation(e.target.value)}
                placeholder="City, Country or Remote"
                className="flex-1 bg-transparent border-none outline-none text-sm text-gray-800
                           placeholder-gray-400"
              />
            </div>

            {/* Type */}
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full
                            px-5 py-3 focus-within:border-brand focus-within:bg-white
                            focus-within:ring-2 focus-within:ring-brand/10 transition-all">
              <i className="fa fa-filter text-brand text-sm flex-shrink-0"></i>
              <select
                value={type}
                onChange={e => setType(e.target.value)}
                className="bg-transparent border-none outline-none text-sm text-gray-600 cursor-pointer"
              >
                <option value="">Job Type</option>
                <option>Contract</option>
                <option>Permanent</option>
                <option>Remote</option>
                <option>Hybrid</option>
              </select>
            </div>

            {/* CTA */}
            <button className="bg-brand text-white font-semibold px-8 py-3 rounded-full
                               flex items-center gap-2 hover:bg-brand-dark transition-all
                               shadow-brand hover:shadow-brand-lg hover:-translate-y-0.5 flex-shrink-0">
              <i className="fa fa-search text-sm"></i> Search Jobs
            </button>
          </div>

          {/* Popular tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-gray-500 font-medium">Popular:</span>
            {popular.map((tag, i) => (
              <button
                key={i}
                onClick={() => setKeyword(tag)}
                className="bg-brand-pale text-brand font-semibold px-3 py-1 rounded-full
                           hover:bg-brand hover:text-white transition-all"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

