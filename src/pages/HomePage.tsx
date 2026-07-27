import { Link } from 'react-router-dom'
import { useStitchEffects } from '../hooks/useStitchEffects'

export function HomePage() {
  useStitchEffects()
  return (
    <div className="font-body-md text-body-md selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-hidden">
      {/* TopNavBar */}
      <header className="w-full top-0 sticky bg-surface-container-lowest/80 dark:bg-inverse-surface/80 backdrop-blur-md border-b border-outline-variant dark:border-outline z-[60]">
      <nav className="flex justify-between items-center max-w-max-width mx-auto px-margin-desktop h-20">
      <div className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed tracking-tighter">
                  Structura
              </div>
      <div className="hidden md:flex items-center gap-lg">
      <Link className="font-label-md text-label-md text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1" to="/">Home</Link>
      <Link className="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" to="/properties">Properties</Link>
      <Link className="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" to="/construction">Construction</Link>
      <Link className="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" to="/about">About</Link>
      <Link className="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" to="/contact">Contact</Link>
      </div>
      <div className="flex items-center gap-md">
      <button className="hidden lg:flex material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">search</button>
      <Link to="/contact" className="bg-primary text-on-primary px-lg py-xs font-label-md text-label-md rounded hover:bg-opacity-80 transition-all active:scale-95 duration-200 uppercase tracking-widest">
                      Inquire
                  </Link>
      <button className="md:hidden material-symbols-outlined">menu</button>
      </div>
      </nav>
      </header>
      <main>
      {/* Immersive Hero Section */}
      <section className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
      <img alt="Luxury Modern Architecture" className="w-full h-full object-cover scale-105 animate-[pulse_10s_ease-in-out_infinite]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6mFGNTJISJq0JYdbufn3qU8kDzqDFEn2N8urt09j9Uizunc_XQmFIBRjMQ_keYZwqFwv_qJo-SnB_8zoGoYdDusHPfKJedE8WH-TcmA75dz04cSDl_lOjViJnos1-ZM-epd04PDIoqEushEjLgkhzZE59DH-u-lBL4ym3s7C70OX0pn6oXsEJ_-9UWYzC9xz8i4bRQ7UQK5cMuUd6CDTtwxWFvWYfdmtkFfP3lUGlQ970Ji61Lc6mQf8ILFuB3sNUNzdMOXFMijHo"/>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>
      </div>
      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-secondary-container/20 blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-primary-fixed/10 blur-3xl animate-float" style={{ animationDelay: '-2s' }}></div>
      <div className="relative z-10 max-w-max-width mx-auto px-margin-desktop w-full">
      <div className="max-w-2xl reveal-on-scroll" id="hero-content">
      <span className="inline-block px-sm py-1 bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm rounded mb-sm tracking-widest">ESTABLISHED 1994</span>
      <h1 className="font-display-lg text-white text-display-lg lg:text-[72px] lg:leading-[80px] mb-md tracking-tight">
                          Building Your Future, <span className="text-secondary-fixed">Finding Your Home</span>
      </h1>
      <p className="font-body-lg text-body-lg text-white/80 mb-lg max-w-lg leading-relaxed">
                          Providing decades of architectural excellence and reliable property management. We turn blueprints into legacies and houses into sanctuaries.
                      </p>
      <div className="flex flex-wrap gap-md">
      <Link to="/portfolio" className="bg-white text-primary px-xl py-md font-label-md text-label-md rounded hover:scale-105 active:scale-95 transition-all flex items-center gap-xs shadow-xl shadow-black/20">
                          View Portfolio <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
      </Link>
      <Link to="/construction" className="border border-white/30 text-white backdrop-blur-sm px-xl py-md font-label-md text-label-md rounded hover:bg-white/10 transition-all">
                          Construction Services
                      </Link>
      </div>
      </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-lg left-1/2 -translate-x-1/2 flex flex-col items-center gap-xs text-white/50 animate-bounce">
      <span className="font-label-sm text-[10px] uppercase tracking-[0.2em]">Scroll</span>
      <span className="material-symbols-outlined">expand_more</span>
      </div>
      </section>
      {/* Stats Section with Counter Animation */}
      <section className="bg-surface py-xl border-b border-outline-variant relative overflow-hidden">
      <div className="max-w-max-width mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-xl">
      <div className="flex flex-col items-center text-center p-lg bg-surface-container-lowest border border-outline-variant rounded hover:shadow-lg transition-all duration-500 group reveal-on-scroll">
      <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-md group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-primary text-[32px]">history</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">
      <span className="counter" data-target="30">0</span>+ Years
                      </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Of Experience in Architectural Design &amp; Engineering</p>
      </div>
      <div className="flex flex-col items-center text-center p-lg bg-surface-container-lowest border border-outline-variant rounded hover:shadow-lg transition-all duration-500 group reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
      <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-md group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-primary text-[32px]">engineering</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">
      <span className="counter" data-target="150">0</span>+ Experts
                      </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">A dedicated team of certified architects and craftsmen</p>
      </div>
      <div className="flex flex-col items-center text-center p-lg bg-surface-container-lowest border border-outline-variant rounded hover:shadow-lg transition-all duration-500 group reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
      <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-md group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-primary text-[32px]">verified</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">
      <span className="counter" data-target="100">0</span>% Verified
                      </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Ensuring quality and legal compliance for every property</p>
      </div>
      </div>
      </section>
      {/* Featured Properties with Interactive Cards */}
      <section className="max-w-max-width mx-auto px-margin-desktop py-xl">
      <div className="flex flex-col md:flex-row justify-between items-end mb-xl reveal-on-scroll">
      <div className="max-w-xl">
      <h2 className="font-headline-md text-headline-md text-primary mb-xs">Featured Properties</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">Curated high-value investments for your future, featuring sustainable designs and premium finishes.</p>
      </div>
      <Link className="group text-primary font-label-md text-label-md flex items-center gap-xs hover:gap-md transition-all" to="/properties">
                      Browse All Properties <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
      </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      {/* Property Card 1 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl group overflow-hidden hover:shadow-2xl transition-all duration-500 reveal-on-scroll">
      <div className="h-72 overflow-hidden relative">
      <img alt="Oak Atrium" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZThZ_UorupdGaSgUeX6Ri9P5mk7vrObay2S1Gx8FT-NxEW4-oji8HVQeubHUrBT_G3WiUVTKWinaplD0T63KuZ7kItjYyBODTFA48pvMzn8WV3RgycvlUnLx7vXdwst_OvsUgeXXDHDH1UsogYrtyL8GPQSEZ_5O-c_PyiloC4hrkqIQ0Ikp53eBfOfz804rY8P4zoWNTL_dqMVWNmul9cS6VWYikdBaypAoy0XaIm0jZ-ycejnq8GbATrfMmyZIC3HVdCx987v3C"/>
      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
      <button className="bg-white text-primary px-lg py-sm rounded-full font-label-md scale-90 group-hover:scale-100 transition-transform">Quick View</button>
      </div>
      </div>
      <div className="p-md relative">
      <div className="flex justify-between items-start mb-sm">
      <h4 className="font-headline-sm text-headline-sm text-primary">The Oak Atrium</h4>
      <span className="bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm px-xs py-base rounded">For Sale</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">422 Maple Drive, North Hill</p>
      <div className="flex items-center justify-between border-t border-outline-variant pt-md">
      <div className="flex gap-md text-on-surface-variant font-label-sm">
      <span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[18px]">bed</span> 4</span>
      <span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[18px]">bathtub</span> 3</span>
      </div>
      <span className="font-headline-sm text-headline-sm text-primary">$1.2M</span>
      </div>
      </div>
      </div>
      {/* Property Card 2 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl group overflow-hidden hover:shadow-2xl transition-all duration-500 reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
      <div className="h-72 overflow-hidden relative">
      <img alt="Vista Heights" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD11KWQZEYkAviqow0u4NQ21xELQ30GhCMCcu3aGWpl-pOwXGr14XTX20f2Wj7PhDbIwngP-87UCWj5RJTxo51Z0GX2VtbDx0Hrm4vb9bx0M76ysDWkx8-IYruCk_2DaOh8c4JweEmt9hgfV_khERWAADeCAVSuxGKfcO1DeIwRGp1yVRMw3stucdJ9Y7s-CAVEO3AZ6v15lNBCBFmY9I8GdvwuLnnw9fqoOMqMk4m2eQ1Bld8CCDXhkhccT_KQaoB4JVilx6joUKXi"/>
      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
      <button className="bg-white text-primary px-lg py-sm rounded-full font-label-md scale-90 group-hover:scale-100 transition-transform">Quick View</button>
      </div>
      </div>
      <div className="p-md relative">
      <div className="flex justify-between items-start mb-sm">
      <h4 className="font-headline-sm text-headline-sm text-primary">Vista Heights</h4>
      <span className="bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm px-xs py-base rounded">For Sale</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">Penthouse 12, Skyline Tower</p>
      <div className="flex items-center justify-between border-t border-outline-variant pt-md">
      <div className="flex gap-md text-on-surface-variant font-label-sm">
      <span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[18px]">bed</span> 3</span>
      <span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[18px]">bathtub</span> 2</span>
      </div>
      <span className="font-headline-sm text-headline-sm text-primary">$850K</span>
      </div>
      </div>
      </div>
      {/* Property Card 3 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl group overflow-hidden hover:shadow-2xl transition-all duration-500 reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
      <div className="h-72 overflow-hidden relative">
      <img alt="Coastal Verge" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkDeFMhRL5lKG7Z11SS3gDNiZ6pz2x8lt4QlgeOc21MERr-XCyhT7C0YLcBuZG3WNQWePGaj8Ght4FWaVtxanNuZg9KSZdKeYZ8frAAylAlMbaN68JYKyIYObq1NWWJg-ztlZcduKrtmYZ9nBHimIGZhvf-yWvJLJSS1grV1q3Jqm1mhyus1ZSuWjsrge3CT4CWkCjWXF0Vrp4h9JpXebvP3h5OF86J-SskkZeHSuBdPotxhwtH_FzqWBUuBTZnsUms0F4zcuh44P-"/>
      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
      <button className="bg-white text-primary px-lg py-sm rounded-full font-label-md scale-90 group-hover:scale-100 transition-transform">Quick View</button>
      </div>
      </div>
      <div className="p-md relative">
      <div className="flex justify-between items-start mb-sm">
      <h4 className="font-headline-sm text-headline-sm text-primary">Coastal Verge</h4>
      <span className="bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm px-xs py-base rounded">For Sale</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">88 Marina Bay, Westpoint</p>
      <div className="flex items-center justify-between border-t border-outline-variant pt-md">
      <div className="flex gap-md text-on-surface-variant font-label-sm">
      <span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[18px]">bed</span> 5</span>
      <span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[18px]">bathtub</span> 4</span>
      </div>
      <span className="font-headline-sm text-headline-sm text-primary">$2.4M</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Interactive Construction Services */}
      <section className="bg-primary text-on-primary py-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/2"></div>
      <div className="max-w-max-width mx-auto px-margin-desktop relative z-10">
      <div className="grid lg:grid-cols-2 gap-xl items-center">
      <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-md">
      <div className="p-lg border border-on-primary/10 bg-on-primary/5 hover:bg-white hover:text-primary transition-all duration-500 rounded-xl group cursor-pointer reveal-on-scroll shadow-lg">
      <span className="material-symbols-outlined text-[40px] mb-sm group-hover:scale-110 transition-transform">architecture</span>
      <h4 className="font-headline-sm text-headline-sm mb-xs">Construction</h4>
      <p className="font-body-sm text-body-sm opacity-70 group-hover:opacity-100">Ground-up architectural masterpieces built with structural integrity.</p>
      </div>
      <div className="p-lg border border-on-primary/10 bg-on-primary/5 hover:bg-white hover:text-primary transition-all duration-500 rounded-xl group cursor-pointer reveal-on-scroll shadow-lg" style={{ transitionDelay: '100ms' }}>
      <span className="material-symbols-outlined text-[40px] mb-sm group-hover:scale-110 transition-transform">video_file</span>
      <h4 className="font-headline-sm text-headline-sm mb-xs">Renovation</h4>
      <p className="font-body-sm text-body-sm opacity-70 group-hover:opacity-100">Transforming existing spaces into contemporary environments.</p>
      </div>
      <div className="p-lg border border-on-primary/10 bg-on-primary/5 hover:bg-white hover:text-primary transition-all duration-500 rounded-xl group cursor-pointer reveal-on-scroll shadow-lg" style={{ transitionDelay: '200ms' }}>
      <span className="material-symbols-outlined text-[40px] mb-sm group-hover:scale-110 transition-transform">build</span>
      <h4 className="font-headline-sm text-headline-sm mb-xs">Maintenance</h4>
      <p className="font-body-sm text-body-sm opacity-70 group-hover:opacity-100">Proactive care to preserve the long-term value of your asset.</p>
      </div>
      <div className="p-lg border border-on-primary/10 bg-on-primary/5 hover:bg-white hover:text-primary transition-all duration-500 rounded-xl group cursor-pointer reveal-on-scroll shadow-lg" style={{ transitionDelay: '300ms' }}>
      <span className="material-symbols-outlined text-[40px] mb-sm group-hover:scale-110 transition-transform">handshake</span>
      <h4 className="font-headline-sm text-headline-sm mb-xs">Consultancy</h4>
      <p className="font-body-sm text-body-sm opacity-70 group-hover:opacity-100">Strategic advice on urban planning and project feasibility.</p>
      </div>
      </div>
      <div className="order-1 lg:order-2 mb-lg lg:mb-0 reveal-on-scroll">
      <h2 className="font-display-lg text-display-lg mb-md leading-tight">Comprehensive Architectural Services</h2>
      <p className="font-body-lg text-body-lg opacity-80 mb-lg">
                              We bridge the gap between imagination and execution. Our construction wing employs the region's finest engineers to deliver projects on time and above code.
                          </p>
      <Link className="inline-flex items-center gap-xs font-label-md text-label-md border-b border-white pb-1 hover:gap-md transition-all" to="/construction">
                              Explore All Services <span className="material-symbols-outlined">arrow_outward</span>
      </Link>
      </div>
      </div>
      </div>
      </section>
      {/* Testimonials */}
      <section className="py-xl bg-surface">
      <div className="max-w-max-width mx-auto px-margin-desktop">
      <div className="text-center mb-xl reveal-on-scroll">
      <h2 className="font-headline-md text-headline-md text-primary mb-xs">Trusted by Industry Leaders</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">Our success is measured by the satisfaction of our partners and families.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
      <div className="bg-white p-lg rounded-xl flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-500 reveal-on-scroll border border-outline-variant/30">
      <p className="font-body-lg italic text-on-surface-variant mb-lg leading-relaxed">
                              "Structura managed our headquarters renovation with surgical precision. Their attention to detail in the structural framing was exceptional, and they kept us informed at every milestone. A true partner in the construction process."
                          </p>
      <div className="flex items-center gap-md">
      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary-fixed group">
      <img alt="David Chen" className="w-full h-full object-cover transition-transform group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABBsU8_H0K_Pv3BiTqqAXvNLnTTwK_wBhCMm1ZFW4zMBYfcSaM8EmZMtcp0RlsJeYQJboZwVo75pr94OtVPXYu69ny_Npf6sG_0snrRlNxvC0hl7oxU-HNduxConAa7kTK1uGRIKlJ101IHF-2EIAVm6k6aJfxk_W9_up5ZUK1Y_Z1t0eWTfH0-p9ygSP3zIk6iu-y4UdcRBKUZ-qvK4lIDbCdXTvYTCad2QtMbBWCOSy7UML2zaKFW3DXC1KEpz0tcS-NV_xv9LDh"/>
      </div>
      <div>
      <p className="font-label-md text-label-md text-primary">David Chen</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">CEO, Nexus Global Tech</p>
      </div>
      </div>
      </div>
      <div className="bg-white p-lg rounded-xl flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-500 reveal-on-scroll border border-outline-variant/30" style={{ transitionDelay: '100ms' }}>
      <p className="font-body-lg italic text-on-surface-variant mb-lg leading-relaxed">
                              "Finding our forever home was a stressful journey until we met the Structura team. They weren't just showing us listings; they were helping us envision our life there. Their verified property checks gave us immense peace of mind."
                          </p>
      <div className="flex items-center gap-md">
      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary-fixed group">
      <img alt="Sarah Jennings" className="w-full h-full object-cover transition-transform group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs44_KvtcVm-NsK6FlZbG3A7IsZJ0ktzxqPW-2ZeLLPAmEhF9F6-dr5sGjJ5hucfVF8rheiVsFWrvxBMv7ljDpcwQG9qCGL2B2cNVJ8ttb2nED8b-NJGWt6SCm5gYgpzNdc2irEqCQIcx-_xeUJ8aGE5_qNe4UTTWPgz6jAmD2QQv-5I2IuzXICLmB1IDtmE8jF1Bn9mZlMJIf7e5y_iY_ElONl0eS2iwdd1u7uYyq4mEWAFYkEJkqxak_2pAgsAD7MuLRnMQ7uypA"/>
      </div>
      <div>
      <p className="font-label-md text-label-md text-primary">Sarah Jennings</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Homeowner &amp; Designer</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Glassmorphic CTA Section */}
      <section className="max-w-max-width mx-auto px-margin-desktop py-xl">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-primary">
      {/* Shimmer Background */}
      <div className="absolute inset-0 glass-shimmer animate-shimmer pointer-events-none opacity-40"></div>
      <div className="relative z-10 p-xl md:p-[100px] text-center flex flex-col items-center">
      <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-md reveal-on-scroll">Ready to start your journey?</h2>
      <p className="font-body-lg text-body-lg text-white/80 mb-xl max-w-2xl mx-auto reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
                          Whether you are looking to find your next luxury home or require expert construction management for a commercial project, our advisors are here to help.
                      </p>
      <div className="flex flex-wrap justify-center gap-md reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
      <button className="bg-white text-primary px-xl py-md font-label-md text-label-md rounded-full hover:bg-surface transition-all uppercase tracking-widest font-bold shadow-lg shadow-black/10 active:scale-95">
                              Contact Us Today
                          </button>
      <button className="border border-white/30 text-white backdrop-blur-md px-xl py-md font-label-md text-label-md rounded-full hover:bg-white/10 transition-all">
                              Request a Quote
                          </button>
      </div>
      </div>
      {/* Abstract background graphic */}
      <div className="absolute top-0 left-0 w-64 h-64 border border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 border border-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>
      </section>
      </main>
      {/* Footer */}
      <footer className="w-full bg-surface-container-highest dark:bg-on-primary-container border-t border-outline-variant">
      <div className="max-w-max-width mx-auto px-margin-desktop py-xl grid grid-cols-1 md:grid-cols-4 gap-gutter">
      <div className="md:col-span-1">
      <div className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed mb-md">
                      Structura
                  </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-primary-fixed-variant mb-md leading-relaxed">
                      Architectural Excellence since 1994. Building high-quality residential and commercial spaces across the globe with precision and passion.
                  </p>
      <div className="flex gap-sm">
      <a className="w-10 h-10 flex items-center justify-center border border-outline rounded-full hover:bg-primary hover:text-white transition-all group" href="#">
      <span className="material-symbols-outlined text-[20px] group-hover:scale-110">public</span>
      </a>
      <a className="w-10 h-10 flex items-center justify-center border border-outline rounded-full hover:bg-primary hover:text-white transition-all group" href="#">
      <span className="material-symbols-outlined text-[20px] group-hover:scale-110">share</span>
      </a>
      </div>
      </div>
      <div>
      <h5 className="font-label-md text-label-md text-primary mb-md uppercase tracking-widest">Company</h5>
      <ul className="flex flex-col gap-sm">
      <li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all" to="/about">About Us</Link></li>
      <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all" href="#">Careers</a></li>
      <li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all" to="/portfolio">Project Portfolio</Link></li>
      <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all" href="#">Partners</a></li>
      </ul>
      </div>
      <div>
      <h5 className="font-label-md text-label-md text-primary mb-md uppercase tracking-widest">Support</h5>
      <ul className="flex flex-col gap-sm">
      <li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all" to="/contact">Contact Us</Link></li>
      <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all" href="#">Privacy Policy</a></li>
      <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all" href="#">Terms of Service</a></li>
      <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all" href="#">Licensing</a></li>
      </ul>
      </div>
      <div>
      <h5 className="font-label-md text-label-md text-primary mb-md uppercase tracking-widest">Newsletter</h5>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">Subscribe to get the latest architectural trends and market updates.</p>
      <div className="flex overflow-hidden rounded-lg border border-outline-variant bg-white">
      <input className="bg-transparent border-none px-md py-xs w-full focus:ring-0 font-body-sm" placeholder="Your email" type="email"/>
      <button className="bg-primary text-on-primary px-md hover:bg-opacity-90 transition-all font-label-md active:scale-95">Join</button>
      </div>
      </div>
      </div>
      <div className="max-w-max-width mx-auto px-margin-desktop py-md border-t border-outline-variant/30 text-center md:text-left">
      <p className="font-label-sm text-label-sm text-on-surface-variant">
                  © 2024 Structura Architectural Excellence. All rights reserved.
              </p>
      </div>
      </footer>
    </div>
  )
}
