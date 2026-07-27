import { Link } from 'react-router-dom'

export function AboutPage() {
  return (
    <>
      {/* Top Navigation Bar */}
      <header className="w-full top-0 sticky bg-surface-container-lowest dark:bg-inverse-surface border-b border-outline-variant dark:border-outline z-50">
      <div className="flex justify-between items-center max-w-max-width mx-auto px-margin-desktop h-20">
      <a className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed tracking-tighter" href="#">Strucura</a>
      <nav className="hidden md:flex items-center space-x-lg">
      <Link className="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" to="/">Home</Link>
      <Link className="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" to="/properties">Properties</Link>
      <Link className="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" to="/construction">Construction</Link>
      <Link className="font-label-md text-label-md text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1" to="/about">About</Link>
      <Link className="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" to="/contact">Contact</Link>
      </nav>
      <div className="flex items-center gap-md">
      <div className="hidden lg:flex items-center bg-surface-container-low px-sm py-xs rounded">
      <span className="material-symbols-outlined text-outline mr-xs">search</span>
      <input className="bg-transparent border-none focus:ring-0 text-body-sm w-32" placeholder="Search..." type="text"/>
      </div>
      <button className="bg-primary text-on-primary px-lg py-xs font-label-md text-label-md rounded hover:opacity-80 duration-200">Inquire</button>
      </div>
      </div>
      </header>
      <main>
      {/* Hero Section: The Structura Story */}
      <section className="py-xl bg-surface">
      <div className="max-w-max-width mx-auto px-margin-desktop">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
      <div className="space-y-md">
      <h1 className="font-display-lg text-display-lg text-primary-container leading-tight">The Structura Story</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                                  Founded on the principles of architectural integrity and unwavering reliability, Structura has spent over a quarter-century redefining the skyline. Our legacy is built not just with steel and stone, but with the trust of partners who demand excellence in every square foot.
                              </p>
      <p className="font-body-md text-body-md text-on-surface-variant">
                                  We believe that every structure tells a story. From modern residential marvels to expansive commercial hubs, our approach combines traditional craftsmanship with pioneering technology to deliver spaces that endure for generations.
                              </p>
      </div>
      <div className="relative">
      <div className="aspect-[4/3] w-full bg-surface-container-high rounded-lg overflow-hidden border border-outline-variant">
      <img className="w-full h-full object-cover" data-alt="A cinematic, low-angle photograph of a modern skyscraper's architectural details featuring sharp glass angles and polished steel beams. The lighting is crisp morning sun, creating high-contrast shadows and reflecting a clear blue sky. The aesthetic is clean, corporate, and emphasizes structural stability and precision. The overall mood is powerful and visionary." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCewDbAiqYvd1tt-mpZWRXXwUxxTmmIIwznEFBHGgi2BqYRiI4j2YdlGxub9xZ3CtLfjTqvz1fGb3H9LHi8VU8JpmuBrz87rQBBG91bODJmFWYCIGzKZ7jAD4jBoubh-MedKsb_OqFKwz-wy3HuQ4rXs489VM9twc72b6bquQ5KP4vScoid6b_QV6m22qjGGZrGoR085YLD_tSll0Gw-YU46qgJgmOsMCUJqE4imXIjQqtgErnC8v5C0vO8lIoK-QrQml_ayhn3rEp"/>
      </div>
      <div className="absolute -bottom-xs -left-xs bg-primary-container p-lg text-on-primary rounded">
      <span className="font-headline-sm text-headline-sm block">Est. 1998</span>
      <span className="font-label-sm text-label-sm uppercase tracking-widest opacity-80">A Legacy of Excellence</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Stats Section */}
      <section className="py-xl bg-primary-container text-on-primary">
      <div className="max-w-max-width mx-auto px-margin-desktop">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
      <div className="space-y-xs">
      <div className="font-display-lg text-display-lg font-bold">25+</div>
      <div className="font-label-md text-label-md uppercase tracking-wider text-on-primary-container">Years of Experience</div>
      </div>
      <div className="space-y-xs border-l border-on-primary-fixed-variant">
      <div className="font-display-lg text-display-lg font-bold">1,200+</div>
      <div className="font-label-md text-label-md uppercase tracking-wider text-on-primary-container">Projects Completed</div>
      </div>
      <div className="space-y-xs border-l border-on-primary-fixed-variant">
      <div className="font-display-lg text-display-lg font-bold">850+</div>
      <div className="font-label-md text-label-md uppercase tracking-wider text-on-primary-container">Properties Sold</div>
      </div>
      <div className="space-y-xs border-l border-on-primary-fixed-variant">
      <div className="font-display-lg text-display-lg font-bold">98%</div>
      <div className="font-label-md text-label-md uppercase tracking-wider text-on-primary-container">Customer Satisfaction</div>
      </div>
      </div>
      </div>
      </section>
      {/* Mission & Vision Section */}
      <section className="py-xl bg-surface-container-lowest">
      <div className="max-w-max-width mx-auto px-margin-desktop">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
      <div className="p-lg border border-outline-variant bg-white flex flex-col justify-center">
      <h2 className="font-headline-sm text-headline-sm text-primary mb-md flex items-center">
      <span className="material-symbols-outlined mr-sm">rocket_launch</span>
                                  Our Mission
                              </h2>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                  To empower communities through superior structural design and sustainable construction practices. We aim to set the global standard for architectural excellence, ensuring every project serves its inhabitants with safety, luxury, and functionality.
                              </p>
      </div>
      <div className="p-lg border border-outline-variant bg-white flex flex-col justify-center">
      <h2 className="font-headline-sm text-headline-sm text-primary mb-md flex items-center">
      <span className="material-symbols-outlined mr-sm">visibility</span>
                                  Our Vision
                              </h2>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                  To be the architect of the future, leading the industry toward a horizon where stability meets innovation. We envision a world where every structure is a masterpiece of efficiency and a testament to human ingenuity.
                              </p>
      </div>
      </div>
      </div>
      </section>
      {/* Team Section */}
      <section className="py-xl bg-surface">
      <div className="max-w-max-width mx-auto px-margin-desktop">
      <div className="mb-lg text-center">
      <h2 className="font-headline-md text-headline-md text-primary mb-xs">Leadership Team</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">The visionary minds behind our structural triumphs.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
      {/* Team Member 1 */}
      <div className="bg-white border border-outline-variant rounded overflow-hidden group">
      <div className="aspect-[4/5] overflow-hidden">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A professional corporate headshot of a middle-aged male executive with a confident expression. He is wearing a tailored charcoal suit and a crisp white shirt. The background is a blurred high-end office interior with warm wooden accents and soft lighting. The style is sophisticated, realistic, and emphasizes professional trust." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNPVPL8Sz9ZErHfV4kWQHFLZ7Qm69X9G2DwRysPnTnXAbkvGcJtDCjk-Kx3eNGHJ-yi3fqgYce8nLHBslq0QVLDZWh60TOtakdRl5LUoFtaeb2vueP_Xxr8T6hHPfEiVQb6BPEgjR4fiigIPamO_qDQUTGXiuX0J7snLV7rU9G09t13Mc5yCeiDlHQqagaaHbRtY6ATGFajPG2PsuIuX1LJGz8_kBih-GcsBETL57xOHc9Tt2NX9F622kDJ8_QBlhKstJkELlWrTSw"/>
      </div>
      <div className="p-md text-center">
      <h3 className="font-headline-sm text-[20px] text-primary">Marcus Thorne</h3>
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mt-base">Chief Executive Officer</p>
      </div>
      </div>
      {/* Team Member 2 */}
      <div className="bg-white border border-outline-variant rounded overflow-hidden group">
      <div className="aspect-[4/5] overflow-hidden">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A professional corporate headshot of a female architect in her late 30s with a focused and intelligent gaze. She has her hair neatly styled and is wearing a modern navy blazer. The background is a minimalist studio with architectural drawings visible in soft focus. The aesthetic is modern, professional, and grounded." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqgnvjdfzvaem5Vj4h7s5sCWcJIPZ8GogfOkC74eAIRjyBb0oBo-5wqtfj6DiM_eckR49SCfeVChrO79DLdKWURLATRdJXscnoU-Vy_GzQuL4YDupVpBFVlDP1bK-ZCaNmFQpJl2GRy0X2FQ3lgmNoD6UFgGEaZmQP6Cbxql2MooIlvOuwocYrX4YdAOsJFqBBh9GLC7wgrJ5CucQj4d-NtnXsMU3SuscELcYzX2QkKQXlhDPqTGdXVpHZwJgQBHLrVqRJIpUeNzyE"/>
      </div>
      <div className="p-md text-center">
      <h3 className="font-headline-sm text-[20px] text-primary">Elena Rodriguez</h3>
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mt-base">Principal Architect</p>
      </div>
      </div>
      {/* Team Member 3 */}
      <div className="bg-white border border-outline-variant rounded overflow-hidden group">
      <div className="aspect-[4/5] overflow-hidden">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A professional corporate headshot of a senior male construction manager wearing a premium navy polo shirt. He has a friendly but authoritative demeanor. The setting is an outdoor construction site during the golden hour, with a modern structure partially visible behind him. The lighting is warm and emphasizes reliability." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVJc6-EEQ5kB3-jsQndePD4jd8ucBsJ0i8Do5PbvoeEE1agTGBFrPH4Fyr7h_uM3CGLMCV8m_fEOWsOmmaP1Az7VC-YdcdR5jtJ2kpME1FEDRZ2br3KYdYL_b6U3eHEK2aJVFcQgC1nFSF2-n6G8UyUA0uUhwi0L-feCaDtv6jytVn2mCZJEkm5bdj2zFWZ-rbzOJRjdtCI7426f5hnRpHTCZUPAT3C_WAJJLZIowiNVBzK1AQSW8nvMrsXG3l7Z1qgfgg77omhqLe"/>
      </div>
      <div className="p-md text-center">
      <h3 className="font-headline-sm text-[20px] text-primary">Samuel Vance</h3>
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mt-base">Head of Operations</p>
      </div>
      </div>
      {/* Team Member 4 */}
      <div className="bg-white border border-outline-variant rounded overflow-hidden group">
      <div className="aspect-[4/5] overflow-hidden">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A professional corporate headshot of a young female financial director with a poised and welcoming smile. She is wearing a smart grey dress and minimal jewelry. The background is a bright, high-key corporate lobby with large windows. The style is clean, modern light-mode, and projects financial stability." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi8nXEfVRqCIHt6xz3L_s3v-QRG1hCjKeM5Vi_yjkbeZEHvZQwqOGs2eUItBjoUTZsxhy99BNU_xBKfKS2ZVKleKpj9ZKMKnTjcZyQxZabsahDmll_ig9F8fHLPKILCrxIzOSk7WMOJY-e_zBfozIXrLsX-9-zlWCuP84UYkSR1dQ6_C-htbDZpOZLzhoTeo4fEkznp4SkjwbbmM-KpQNnYG-f46pDtvmn4GNPvqT5Ce2o6XVQp3qkqXGBhwYLUBHjBKJBg7KWZWx2"/>
      </div>
      <div className="p-md text-center">
      <h3 className="font-headline-sm text-[20px] text-primary">Sarah Jenkins</h3>
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mt-base">Director of Finance</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Credentials Section */}
      <section className="py-xl bg-surface-container-low border-t border-outline-variant">
      <div className="max-w-max-width mx-auto px-margin-desktop">
      <div className="flex flex-col md:flex-row items-center justify-between gap-lg">
      <div className="md:w-1/3">
      <h2 className="font-headline-sm text-headline-sm text-primary">Industry Credentials</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-base">Certified by the leading global authorities in construction and architectural safety.</p>
      </div>
      <div className="md:w-2/3 flex flex-wrap justify-center md:justify-end gap-xl opacity-60 grayscale hover:grayscale-0 transition-all">
      {/* Certification Logos (Symbolic Representation) */}
      <div className="flex items-center gap-xs">
      <span className="material-symbols-outlined text-[48px]">architecture</span>
      <span className="font-label-md text-label-md font-bold">AIA Gold Member</span>
      </div>
      <div className="flex items-center gap-xs">
      <span className="material-symbols-outlined text-[48px]">verified</span>
      <span className="font-label-md text-label-md font-bold">ISO 9001:2024</span>
      </div>
      <div className="flex items-center gap-xs">
      <span className="material-symbols-outlined text-[48px]">eco</span>
      <span className="font-label-md text-label-md font-bold">LEED Platinum</span>
      </div>
      <div className="flex items-center gap-xs">
      <span className="material-symbols-outlined text-[48px]">safety_check</span>
      <span className="font-label-md text-label-md font-bold">OSHA Certified</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      </main>
      {/* Footer */}
      <footer className="w-full mt-auto bg-surface-container-highest dark:bg-on-primary-container border-t border-outline-variant dark:border-outline">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-max-width mx-auto px-margin-desktop py-xl">
      <div className="space-y-md">
      <a className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed" href="#">Structura</a>
      <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-primary-fixed-variant">
                          Defining the future of the built environment with precision, stability, and excellence.
                      </p>
      </div>
      <div className="space-y-sm">
      <h4 className="font-label-md text-label-md text-primary dark:text-primary-fixed">Quick Links</h4>
      <ul className="space-y-xs">
      <li><Link className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-primary-fixed-variant hover:text-primary transition-all" to="/">Home</Link></li>
      <li><Link className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-primary-fixed-variant hover:text-primary transition-all" to="/properties">Properties</Link></li>
      <li><Link className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-primary-fixed-variant hover:text-primary transition-all" to="/construction">Construction</Link></li>
      <li><Link className="font-body-sm text-body-sm text-primary dark:text-primary-fixed underline" to="/about">About Us</Link></li>
      </ul>
      </div>
      <div className="space-y-sm">
      <h4 className="font-label-md text-label-md text-primary dark:text-primary-fixed">Legal</h4>
      <ul className="space-y-xs">
      <li><a className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-primary-fixed-variant hover:text-primary transition-all" href="#">Privacy Policy</a></li>
      <li><a className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-primary-fixed-variant hover:text-primary transition-all" href="#">Terms of Service</a></li>
      <li><a className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-primary-fixed-variant hover:text-primary transition-all" href="#">Licensing</a></li>
      <li><a className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-primary-fixed-variant hover:text-primary transition-all" href="#">Careers</a></li>
      </ul>
      </div>
      <div className="space-y-sm">
      <h4 className="font-label-md text-label-md text-primary dark:text-primary-fixed">Connect</h4>
      <div className="flex gap-md">
      <a className="text-on-surface-variant hover:text-primary" href="#"><span className="material-symbols-outlined">share</span></a>
      <a className="text-on-surface-variant hover:text-primary" href="#"><span className="material-symbols-outlined">mail</span></a>
      <a className="text-on-surface-variant hover:text-primary" href="#"><span className="material-symbols-outlined">call</span></a>
      </div>
      <p className="font-label-sm text-label-sm text-on-surface-variant mt-md">© 2024 Structura Architectural Excellence. All rights reserved.</p>
      </div>
      </div>
      </footer>
      {/* Simple Scroll Interaction */}
    </>
  )
}
