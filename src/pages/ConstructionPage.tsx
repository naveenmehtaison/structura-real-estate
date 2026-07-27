import { Link } from 'react-router-dom'

export function ConstructionPage() {
  return (
    <>
      {/* TopNavBar */}
      <header className="w-full top-0 sticky z-50 bg-surface-container-lowest border-b border-outline-variant">
      <div className="flex justify-between items-center max-w-max-width mx-auto px-margin-desktop h-20">
      <div className="font-headline-md text-headline-md font-bold text-primary tracking-tighter">
                      Structura
                  </div>
      <nav className="hidden md:flex items-center gap-lg">
      <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/">Home</Link>
      <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/properties">Properties</Link>
      <Link className="font-label-md text-label-md text-primary border-b-2 border-primary pb-1" to="/construction">Construction</Link>
      <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/about">About</Link>
      <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/contact">Contact</Link>
      </nav>
      <div className="flex items-center gap-md">
      <div className="hidden lg:flex items-center bg-surface-container-low px-sm py-xs rounded border border-outline-variant">
      <span className="material-symbols-outlined text-on-surface-variant mr-xs">search</span>
      <input className="bg-transparent border-none focus:ring-0 text-body-sm w-48" placeholder="Find professionals..." type="text"/>
      </div>
      <button className="bg-primary text-on-primary px-lg py-xs font-label-md rounded hover:opacity-80 transition-all">
                          Inquire
                      </button>
      </div>
      </div>
      </header>
      <main>
      {/* Hero Section */}
      <section className="bg-surface-container-lowest py-xl">
      <div className="max-w-max-width mx-auto px-margin-desktop">
      <div className="max-w-3xl">
      <h1 className="font-display-lg text-display-lg mb-md">
                              Expert Construction and Renovation Services
                          </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
                              Connect with highly vetted master craftsmen for your next architectural project. From structural masonry to precision electrical engineering, we deliver excellence at every scale.
                          </p>
      </div>
      </div>
      </section>
      {/* Categories Navigation */}
      <section className="bg-surface sticky top-20 z-40 border-b border-outline-variant">
      <div className="max-w-max-width mx-auto px-margin-desktop overflow-x-auto">
      <div className="flex gap-lg py-md whitespace-nowrap">
      <button className="font-label-md text-label-md tab-active flex items-center gap-xs pb-md">
      <span className="material-symbols-outlined">electric_bolt</span> Electrician
                          </button>
      <button className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-xs pb-md">
      <span className="material-symbols-outlined">plumbing</span> Plumber
                          </button>
      <button className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-xs pb-md">
      <span className="material-symbols-outlined">foundation</span> Mason
                          </button>
      <button className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-xs pb-md">
      <span className="material-symbols-outlined">carpenter</span> Carpenter
                          </button>
      <button className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-xs pb-md">
      <span className="material-symbols-outlined">format_paint</span> Painter
                          </button>
      </div>
      </div>
      </section>
      {/* Professional Profiles Grid */}
      <section className="py-xl bg-background">
      <div className="max-w-max-width mx-auto px-margin-desktop">
      <div className="flex justify-between items-end mb-lg">
      <div>
      <h2 className="font-headline-sm text-headline-sm">Certified Master Electricians</h2>
      <p className="text-on-surface-variant">Vetted professionals specialized in residential and commercial wiring.</p>
      </div>
      <div className="flex items-center gap-sm">
      <span className="font-label-sm text-label-sm text-on-surface-variant">Sort by:</span>
      <select className="bg-surface-container-lowest border-outline-variant font-label-md rounded p-xs">
      <option>Years of Experience</option>
      <option>Highest Rated</option>
      <option>Lowest Rate</option>
      </select>
      </div>
      </div>
      {/* Bento Grid / Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
      {/* Worker Card 1 */}
      <div className="bg-surface-container-lowest border border-outline-variant p-md flex flex-col transition-all worker-card">
      <div className="flex gap-md items-start mb-md">
      <img className="w-24 h-24 object-cover rounded-lg" data-alt="A professional headshot of a mature electrician in a clean navy blue uniform with a tool belt, posing in front of a modern architectural project. High-contrast, sharp lighting emphasizes his experienced and trustworthy expression. The style is professional corporate photography with a soft-focus construction site background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtJm4DRJH3yAs1JyrQcQjFXsBlh-DUrl0EeVVjRar-D7t-lgZ0ZNJwY_pTpwe2Kq4Ye-Y8dXa1e0dplG455vdiWw9Tk8nHkZMZ4ZLF41yAKAABBWa8JFiJY4lVv7McTOnit3ixFkWTm2GtHYArP5_8JKykBH7wK4iagn6UjLUpZIEB_OmAaksDkgc6j12rZK6cARU-U_RfZsHStwRpkNfn_O-b5w37isTk10x2tQOcG48iY1k_P4PouU_JkTRfRKtDtScshu2_MDtO"/>
      <div className="flex-1">
      <div className="flex justify-between items-start">
      <h3 className="font-headline-sm text-headline-sm text-[20px]">Marcus Thorne</h3>
      <span className="bg-tertiary-fixed text-on-tertiary-fixed px-xs py-[2px] font-label-sm rounded uppercase tracking-wider text-[10px]">Available Now</span>
      </div>
      <p className="text-on-surface-variant font-label-md">Master Electrician</p>
      <div className="flex items-center text-[#EAB308] mt-xs">
      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star_half</span>
      <span className="text-on-surface-variant font-label-sm ml-xs">4.9 (124 reviews)</span>
      </div>
      </div>
      </div>
      <div className="grid grid-cols-2 gap-sm border-y border-outline-variant py-md mb-md">
      <div>
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Experience</p>
      <p className="font-label-md text-label-md">15 Years</p>
      </div>
      <div>
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Hourly Rate</p>
      <p className="font-label-md text-label-md font-bold">$85.00</p>
      </div>
      </div>
      <div className="mb-md">
      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                                      Specialist in smart home automation and industrial panel upgrades. Certified by the National Board.
                                  </p>
      </div>
      <button className="mt-auto w-full bg-primary text-on-primary py-sm font-label-md rounded hover:bg-on-surface-variant transition-colors flex items-center justify-center gap-xs">
      <span className="material-symbols-outlined text-[18px]">calendar_today</span> Hire Now
                              </button>
      </div>
      {/* Worker Card 2 */}
      <div className="bg-surface-container-lowest border border-outline-variant p-md flex flex-col transition-all worker-card">
      <div className="flex gap-md items-start mb-md">
      <img className="w-24 h-24 object-cover rounded-lg" data-alt="A professional headshot of a female construction professional wearing a white hard hat and reflective vest, holding a digital tablet. She has a confident, bright smile against a backdrop of a clean, structured industrial interior. The lighting is crisp and modern, reflecting a sense of precision and architectural integrity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPVvrulsgbDPr-IWg0JoKF98R3j9QC-s_RxcEGQMJY2900SYRODC1CPTnELJj2BDrs0bQyoqTcOPOdO3s6p3EzZORwk0x5nYn6QKqH516Ds_fFj9rclvWgZpWGOcczIrYm_McVonFZZ1EqUd1WJQuKli5CoMIZXM8tR5XHRfKMiVicBNtMiuuNRtAmby0LwKRQzi6Gicp8AA3kqMlNf9xo07eF3oJ1cIO8ihI9tJHbH6kN6I0w_ASVYapJt-wfS8q1_2sNA0KlFu8K"/>
      <div className="flex-1">
      <div className="flex justify-between items-start">
      <h3 className="font-headline-sm text-headline-sm text-[20px]">Elena Rodriguez</h3>
      <span className="bg-surface-container-highest text-on-surface-variant px-xs py-[2px] font-label-sm rounded uppercase tracking-wider text-[10px]">In Project</span>
      </div>
      <p className="text-on-surface-variant font-label-md">Senior Electrician</p>
      <div className="flex items-center text-[#EAB308] mt-xs">
      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
      <span className="text-on-surface-variant font-label-sm ml-xs">5.0 (89 reviews)</span>
      </div>
      </div>
      </div>
      <div className="grid grid-cols-2 gap-sm border-y border-outline-variant py-md mb-md">
      <div>
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Experience</p>
      <p className="font-label-md text-label-md">12 Years</p>
      </div>
      <div>
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Hourly Rate</p>
      <p className="font-label-md text-label-md font-bold">$92.00</p>
      </div>
      </div>
      <div className="mb-md">
      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                                      Expert in solar integration and energy-efficient retrofitting for sustainable luxury homes.
                                  </p>
      </div>
      <button className="mt-auto w-full border border-primary text-primary py-sm font-label-md rounded hover:bg-surface-container-low transition-colors flex items-center justify-center gap-xs">
      <span className="material-symbols-outlined text-[18px]">visibility</span> View Schedule
                              </button>
      </div>
      {/* Worker Card 3 */}
      <div className="bg-surface-container-lowest border border-outline-variant p-md flex flex-col transition-all worker-card">
      <div className="flex gap-md items-start mb-md">
      <img className="w-24 h-24 object-cover rounded-lg" data-alt="A focused male electrician working with intricate wiring inside a modern circuit panel. He is wearing safety glasses and professional gear. The lighting is bright and clear, highlighting the technical nature of his work. High-end architectural office background, conveying stability and professional craftsmanship." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2Cucgay85OITk6L_FnaEefUS01dUvyyjvYBtOnmPg40vm-n3NaxAFJgKFlEKa9nrRJKo_oT7g0z-m3J_RjWe8DQPAudAqbo0_wa8xoEWrKqoyNPF8MivrfxenXxYOeB5ptGbGurQtvcl0QXNXvLhOeXdVS3QsfKMaZV8IJj32Xv3E-Uuj4AUSlR5W6ay1dJ4UkllNt8Jn9UEMORrykGy2nAJWDwzT8CCxoz-gQ7FkbYwTmE2BwLLE1LcXx7i6gen3-1_YDbyMUHOG"/>
      <div className="flex-1">
      <div className="flex justify-between items-start">
      <h3 className="font-headline-sm text-headline-sm text-[20px]">David Chen</h3>
      <span className="bg-tertiary-fixed text-on-tertiary-fixed px-xs py-[2px] font-label-sm rounded uppercase tracking-wider text-[10px]">Available Now</span>
      </div>
      <p className="text-on-surface-variant font-label-md">Journeyman Electrician</p>
      <div className="flex items-center text-[#EAB308] mt-xs">
      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
      <span className="material-symbols-outlined text-[18px]">star</span>
      <span className="text-on-surface-variant font-label-sm ml-xs">4.2 (45 reviews)</span>
      </div>
      </div>
      </div>
      <div className="grid grid-cols-2 gap-sm border-y border-outline-variant py-md mb-md">
      <div>
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Experience</p>
      <p className="font-label-md text-label-md">8 Years</p>
      </div>
      <div>
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Hourly Rate</p>
      <p className="font-label-md text-label-md font-bold">$65.00</p>
      </div>
      </div>
      <div className="mb-md">
      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                                      Reliable specialist in lighting design and commercial circuit maintenance.
                                  </p>
      </div>
      <button className="mt-auto w-full bg-primary text-on-primary py-sm font-label-md rounded hover:bg-on-surface-variant transition-colors flex items-center justify-center gap-xs">
      <span className="material-symbols-outlined text-[18px]">calendar_today</span> Hire Now
                              </button>
      </div>
      </div>
      </div>
      </section>
      {/* Service Benefits / Trust Block */}
      <section className="py-xl border-t border-outline-variant">
      <div className="max-w-max-width mx-auto px-margin-desktop">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-lg">
      <div className="flex flex-col gap-xs">
      <span className="material-symbols-outlined text-primary text-display-lg" style={{ fontSize: '40px' }}>verified</span>
      <h4 className="font-label-md text-label-md uppercase">Vetted Expertise</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Every professional passes rigorous background checks and skill assessments.</p>
      </div>
      <div className="flex flex-col gap-xs">
      <span className="material-symbols-outlined text-primary text-display-lg" style={{ fontSize: '40px' }}>security</span>
      <h4 className="font-label-md text-label-md uppercase">Project Insurance</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">All work booked through Structura is covered by our comprehensive liability bond.</p>
      </div>
      <div className="flex flex-col gap-xs">
      <span className="material-symbols-outlined text-primary text-display-lg" style={{ fontSize: '40px' }}>payments</span>
      <h4 className="font-label-md text-label-md uppercase">Escrow Protection</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Funds are released only when you sign off on milestone completion.</p>
      </div>
      <div className="flex flex-col gap-xs">
      <span className="material-symbols-outlined text-primary text-display-lg" style={{ fontSize: '40px' }}>support_agent</span>
      <h4 className="font-label-md text-label-md uppercase">24/7 Concierge</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Our site managers are available around the clock for project coordination.</p>
      </div>
      </div>
      </div>
      </section>
      </main>
      {/* Footer */}
      <footer className="w-full mt-auto bg-surface-container-highest border-t border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-max-width mx-auto px-margin-desktop py-xl">
      <div className="flex flex-col gap-md">
      <div className="font-headline-sm text-headline-sm font-bold text-primary">Structura</div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Defining architectural excellence through skilled labor and precise management. Your foundation for premium building services.</p>
      </div>
      <div className="flex flex-col gap-sm">
      <h5 className="font-label-md text-label-md text-on-surface">Company</h5>
      <nav className="flex flex-col gap-xs">
      <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="#">Careers</a>
      <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" to="/about">About Us</Link>
      <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="#">Sustainability</a>
      </nav>
      </div>
      <div className="flex flex-col gap-sm">
      <h5 className="font-label-md text-label-md text-on-surface">Legal</h5>
      <nav className="flex flex-col gap-xs">
      <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="#">Privacy Policy</a>
      <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="#">Terms of Service</a>
      <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="#">Licensing</a>
      </nav>
      </div>
      <div className="flex flex-col gap-sm">
      <h5 className="font-label-md text-label-md text-on-surface">Contact</h5>
      <div className="font-body-sm text-body-sm text-on-surface-variant">
      <p>1280 Architectural Plaza</p>
      <p>New York, NY 10001</p>
      <p className="mt-sm">contact@structura.arch</p>
      </div>
      </div>
      </div>
      <div className="max-w-max-width mx-auto px-margin-desktop py-md border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-md">
      <p className="font-label-sm text-label-sm text-on-surface-variant">© 2024 Structura Architectural Excellence. All rights reserved.</p>
      <div className="flex gap-md">
      <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">public</span>
      <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">share</span>
      </div>
      </div>
      </footer>
    </>
  )
}
