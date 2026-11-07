import AnnouncementBar from './components/AnnouncementBar'
import Header         from './components/Header'
import Hero           from './components/Hero'
import JobSearch      from './components/JobSearch'
import TrustedBy      from './components/TrustedBy'
import Solutions      from './components/Solutions'
import Expertise      from './components/Expertise'
import WhyTriatech    from './components/WhyTriatech'
import Insights       from './components/Insights'
import Testimonials   from './components/Testimonials'
import CTABanner      from './components/CTABanner'
import About          from './components/About'
import OurTeam        from './components/OurTeam'
import Contact        from './components/Contact'
import Footer         from './components/Footer'
import BackToTop      from './components/BackToTop'

export default function App() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <JobSearch />
        <TrustedBy />
        <Solutions />
        <Expertise />
        <WhyTriatech />
        <Insights />
        <Testimonials />
        <CTABanner />
        <About />
        <OurTeam />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

