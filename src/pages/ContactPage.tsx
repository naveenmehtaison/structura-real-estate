import { Link } from 'react-router-dom'

export function ContactPage() {
  return (
    <>
      {/* TopNavBar */}
      <header className="w-full top-0 sticky z-50 bg-surface-container-lowest border-b border-outline-variant">
      <nav className="flex justify-between items-center max-w-max-width mx-auto px-margin-desktop h-20">
      <div className="font-headline-md text-headline-md font-bold text-primary tracking-tighter">
                      Strucura
                  </div>
      <div className="hidden md:flex items-center gap-gutter">
      <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/">Home</Link>
      <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/properties">Properties</Link>
      <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/construction">Construction</Link>
      <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/about">About</Link>
      <Link className="font-label-md text-label-md text-primary border-b-2 border-primary pb-1" to="/contact">Contact</Link>
      </div>
      <div className="flex items-center gap-sm">
      <button className="material-symbols-outlined p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-all" data-icon="search">search</button>
      <button className="bg-primary text-on-primary px-lg py-xs font-label-md text-label-md rounded-lg hover:opacity-80 transition-standard">
                          Inquire
                      </button>
      </div>
      </nav>
      </header>
      <main className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-xl">
      {/* Hero Section Title */}
      <div className="mb-xl text-center md:text-left">
      <h1 className="font-display-lg text-display-lg mb-base">Connect with Structura</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Building excellence requires precision and open dialogue. We look forward to discussing your next architectural landmark.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
      {/* Left: Contact Form */}
      <section className="md:col-span-7 bg-surface-container-lowest border border-outline-variant p-lg md:p-xl rounded shadow-sm">
      <h2 className="font-headline-sm text-headline-sm mb-lg">Get in Touch</h2>
      <form className="space-y-md" id="contactForm">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
      <div className="space-y-xs">
      <label className="font-label-md text-label-md block text-on-surface-variant" htmlFor="name">Full Name</label>
      <input className="w-full bg-white border border-outline-variant rounded-lg p-md font-body-md text-body-md form-input-focus transition-standard" id="name" name="name" placeholder="John Doe" required={true} type="text"/>
      </div>
      <div className="space-y-xs">
      <label className="font-label-md text-label-md block text-on-surface-variant" htmlFor="email">Email Address</label>
      <input className="w-full bg-white border border-outline-variant rounded-lg p-md font-body-md text-body-md form-input-focus transition-standard" id="email" name="email" placeholder="john@example.com" required={true} type="email"/>
      </div>
      </div>
      <div className="space-y-xs">
      <label className="font-label-md text-label-md block text-on-surface-variant" htmlFor="subject">Subject</label>
      <select className="w-full bg-white border border-outline-variant rounded-lg p-md font-body-md text-body-md form-input-focus transition-standard" id="subject" name="subject" required={true}>
      <option value="">Select a topic</option>
      <option value="residential">Residential Inquiry</option>
      <option value="commercial">Commercial Development</option>
      <option value="consultation">Design Consultation</option>
      <option value="careers">Careers &amp; Partnerships</option>
      </select>
      </div>
      <div className="space-y-xs">
      <label className="font-label-md text-label-md block text-on-surface-variant" htmlFor="message">Message</label>
      <textarea className="w-full bg-white border border-outline-variant rounded-lg p-md font-body-md text-body-md form-input-focus transition-standard" id="message" name="message" placeholder="Describe your project goals..." required={true} rows={5}></textarea>
      </div>
      <button className="w-full bg-primary-container text-on-primary py-md px-lg rounded-lg font-label-md text-label-md hover:opacity-90 transition-standard uppercase tracking-widest" type="submit">
                              Submit Inquiry
                          </button>
      </form>
      </section>
      {/* Right: Contact Info */}
      <aside className="md:col-span-5 space-y-md">
      <div className="bg-white border border-outline-variant p-lg rounded">
      <h3 className="font-headline-sm text-headline-sm mb-lg">Office Information</h3>
      <div className="space-y-lg">
      <div className="flex gap-md">
      <span className="material-symbols-outlined text-primary" data-icon="location_on">location_on</span>
      <div>
      <p className="font-label-md text-label-md text-on-surface mb-base">Global Headquarters</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">482 Architectural Way, Suite 100<br/>Design District, London, SW1A 1AA</p>
      </div>
      </div>
      <div className="flex gap-md">
      <span className="material-symbols-outlined text-primary" data-icon="call">call</span>
      <div>
      <p className="font-label-md text-label-md text-on-surface mb-base">Phone &amp; Support</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">+44 (0) 20 7946 0123</p>
      </div>
      </div>
      <div className="flex gap-md">
      <span className="material-symbols-outlined text-primary" data-icon="mail">mail</span>
      <div>
      <p className="font-label-md text-label-md text-on-surface mb-base">Email Inquiries</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">office@structura-arch.com</p>
      </div>
      </div>
      <div className="flex gap-md">
      <span className="material-symbols-outlined text-primary" data-icon="schedule">schedule</span>
      <div>
      <p className="font-label-md text-label-md text-on-surface mb-base">Business Hours</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Mon – Fri: 08:00 – 18:00<br/>Sat – Sun: By appointment only</p>
      </div>
      </div>
      </div>
      </div>
      {/* WhatsApp CTA */}
      <a className="block bg-on-tertiary-container text-white p-lg rounded-lg hover:opacity-90 transition-standard group" href="https://wa.me/1234567890" target="_blank">
      <div className="flex items-center justify-between">
      <div className="flex items-center gap-md">
      <div className="bg-white/20 p-2 rounded-full">
      <span className="material-symbols-outlined" data-icon="chat">chat</span>
      </div>
      <div>
      <p className="font-label-md text-label-md">Direct Consultation</p>
      <p className="font-body-sm text-body-sm opacity-90">Message us on WhatsApp</p>
      </div>
      </div>
      <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
      </div>
      </a>
      {/* Visual Asset / Texture */}
      <div className="relative h-48 rounded overflow-hidden border border-outline-variant bg-surface-container-highest">
      <img className="w-full h-full object-cover opacity-80" data-alt="A professional, high-end architectural office environment with large glass windows, minimalist drafting tables, and structural blueprints laid out. The lighting is bright and natural, suggesting a creative and professional workspace. The aesthetic is clean and modern, mirroring the Structura brand identity with a neutral color palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW9ajsbV4DkWbdGt8JAzjUpa72XJ-x2Oy511_7k_rdaujgCny1lzVkI_KMZPEEP_DFGiHvAUok2TRxGSOb3fBFOQw88ebzCux6ps2w_uslVxyFXxort4pPwXHW_jC5m1_7fwH4hF8kn47UQYj8B6Jch_FZUCtDfkS8Yx6JQVxxxe_A9IYOl49QeEW9H9QD6-8BV61jP_4i2xGzf3fd57DTucg9-WsumlvRUhz2Q3464bQyhzx2RREcuPqXr4HnpFjZKKdrgYOJm7Ns"/>
      <div className="absolute inset-0 bg-primary-container/10"></div>
      </div>
      </aside>
      </div>
      </main>
      {/* Bottom: Google Maps Section */}
      <section className="w-full border-t border-outline-variant mt-xl">
      <div className="relative h-[450px] w-full bg-surface-container-high group">
      <div className="w-full h-full grayscale hover:grayscale-0 transition-standard duration-700" data-location="London" style={{  }}>
      {/* Map integration placeholder */}
      <div className="w-full h-full flex flex-col items-center justify-center space-y-md">
      <span className="material-symbols-outlined text-6xl text-primary animate-bounce" data-icon="distance">distance</span>
      <p className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant">Interactive Site Map</p>
      <div className="px-lg py-xs border border-primary rounded-full font-label-sm text-label-sm text-primary group-hover:bg-primary group-hover:text-on-primary transition-standard">
                              Click to expand location
                          </div>
      </div>
      </div>
      {/* Map Overlay UI */}
      <div className="absolute bottom-lg left-margin-desktop bg-white p-md rounded shadow-lg border border-outline-variant max-w-xs hidden md:block">
      <p className="font-label-md text-label-md text-primary mb-base">Structura Main Office</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Access via North Gate. Visitor parking available in Basement B2.</p>
      <button className="mt-md text-primary font-label-sm text-label-sm underline hover:no-underline">Get Directions</button>
      </div>
      </div>
      </section>
      {/* Footer */}
      <footer className="w-full bg-surface-container-highest border-t border-outline-variant mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-max-width mx-auto px-margin-desktop py-xl">
      <div className="space-y-md">
      <div className="font-headline-sm text-headline-sm font-bold text-primary">Structura</div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Defining the skyline with architectural integrity and structural excellence since 1998.</p>
      </div>
      <div className="flex flex-col gap-sm">
      <h4 className="font-label-md text-label-md text-on-surface">Quick Links</h4>
      <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all" href="#">Careers</a>
      <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all" href="#">Licensing</a>
      <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all" to="/portfolio">Project Portfolio</Link>
      </div>
      <div className="flex flex-col gap-sm">
      <h4 className="font-label-md text-label-md text-on-surface">Legal</h4>
      <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all" href="#">Privacy Policy</a>
      <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all" href="#">Terms of Service</a>
      <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all" href="#">Cookie Policy</a>
      </div>
      <div className="flex flex-col gap-sm">
      <h4 className="font-label-md text-label-md text-on-surface">Stay Updated</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-xs">Join our quarterly newsletter for architectural insights.</p>
      <div className="flex">
      <input className="bg-white border border-outline-variant p-2 text-sm w-full rounded-l-lg focus:outline-none" placeholder="Email address" type="email"/>
      <button className="bg-primary text-white px-md py-2 rounded-r-lg hover:opacity-90 transition-all">
      <span className="material-symbols-outlined text-sm" data-icon="send">send</span>
      </button>
      </div>
      </div>
      </div>
      <div className="max-w-max-width mx-auto px-margin-desktop py-md border-t border-outline-variant/30 text-center md:text-left">
      <p className="font-label-sm text-label-sm text-on-surface-variant">© 2024 Structura Architectural Excellence. All rights reserved.</p>
      </div>
      </footer>
    </>
  )
}
