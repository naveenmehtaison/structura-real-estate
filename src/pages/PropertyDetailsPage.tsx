import { Link } from 'react-router-dom'

export function PropertyDetailsPage() {
  return (
    <>
      {/* TopNavBar */}
      <header className="w-full top-0 sticky z-50 bg-surface-container-lowest border-b border-outline-variant">
      <nav className="flex justify-between items-center max-w-max-width mx-auto px-margin-desktop h-20">
      <div className="font-headline-md text-headline-md font-bold text-primary tracking-tighter">
                      Structura
                  </div>
      <div className="hidden md:flex items-center space-x-lg">
      <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/">Home</Link>
      <Link className="font-label-md text-label-md text-primary border-b-2 border-primary pb-1" to="/properties">Properties</Link>
      <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/construction">Construction</Link>
      <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/about">About</Link>
      <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/contact">Contact</Link>
      </div>
      <div className="flex items-center gap-md">
      <div className="hidden md:block relative">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
      <input className="pl-10 pr-4 py-2 bg-surface-container border border-outline-variant rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none text-body-sm w-64" placeholder="Search locations..." type="text"/>
      </div>
      <button className="bg-primary text-on-primary px-lg py-2.5 rounded font-label-md text-label-md hover:bg-primary-container transition-all">
                          Inquire
                      </button>
      </div>
      </nav>
      </header>
      <main className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-lg">
      {/* Breadcrumbs */}
      <nav className="mb-md flex items-center gap-xs font-label-sm text-label-sm text-on-surface-variant">
      <Link className="hover:text-primary" to="/properties">Properties</Link>
      <span className="material-symbols-outlined text-[14px]">chevron_right</span>
      <a className="hover:text-primary" href="#">Residential</a>
      <span className="material-symbols-outlined text-[14px]">chevron_right</span>
      <span className="text-primary font-semibold">The Obsidian Heights</span>
      </nav>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-start">
      {/* Left Column: Content */}
      <div className="lg:col-span-8 space-y-lg">
      {/* Image Gallery */}
      <section className="space-y-sm">
      <div className="aspect-[16/9] w-full bg-surface-container-highest rounded overflow-hidden relative">
      <img className="w-full h-full object-cover transition-opacity duration-500" data-alt="A wide-angle, high-resolution architectural photograph of a modern luxury penthouse interior at sunset. The room features floor-to-ceiling glass windows overlooking a prestigious city skyline, with warm golden light reflecting off polished marble floors. Minimalist furniture in deep charcoal and cream tones is arranged with geometric precision, emphasizing a high-end corporate aesthetic. The mood is serene, sophisticated, and exclusive." id="main-image" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4zCqOAvkvvR422L9gi1uo_KMskxfTaDMoChH2Rofk7baglsN-r4cZzsYELH23F5FDaoESy0jWuGX3wA26cWVyBEYKyc6OnHb9HhM1lDDauDKEHN8RakDcAK1O0of47xrLUr0o0Jvl-y45blcWwhvX0E93R9Nnn1lSjtgza-IvYakHer348vbtDa9UG_mXnxyjVpjFprUOxc0zXGjySfDm_mcjU4cxOt8YWx1SW2tBknKP1uGXLuXaEEknfBCSab-p45ZZX856Z3j1"/>
      <div className="absolute bottom-md right-md bg-primary/80 backdrop-blur-md text-on-primary px-sm py-1.5 rounded font-label-sm text-label-sm flex items-center gap-xs">
      <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                                  1/12 Photos
                              </div>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-6 gap-sm">
      <button className="aspect-square bg-surface-container-high rounded overflow-hidden active-thumb transition-all hover:opacity-80" onClick={(e) => e.preventDefault()}>
      <img className="w-full h-full object-cover" data-alt="A detailed close-up shot of the property's primary living space, highlighting the interplay of natural light and structural lines. The design follows a strict architectural grid with high-contrast surfaces of matte black steel and light oak wood. Soft ambient lighting creates a welcoming yet professional atmosphere. The visual style is crisp, clean, and anchored in modern structuralism." src="https://lh3.googleusercontent.com/aida-public/AB6AXuADJsoIoi_ou5r0uLM4HmTS30Zv7BbiogLeYG8yGo3CzMJvgbxiHJTshGhVlj3C9VBZDqBfxP-xjRGm6Oy094nzqa_tcSg98z2OI6B95cP7gQh8huVhaT_wNnhvkNFjmV0QKw1BiWgbXCnxir1ZnDvAzR0T-tVk-1BgfDMzEewEYLPbCiKV1fx_4Kaea_3oYKlqtxXcbC-PGiaEYo-uDCQtkryTcgGXIhhaxnTnrm63IBdowJG24NWfC4WndZyN99FyJWYYSYde5M7k"/>
      </button>
      <button className="aspect-square bg-surface-container-high rounded overflow-hidden transition-all hover:opacity-80" onClick={(e) => e.preventDefault()}>
      <img className="w-full h-full object-cover" data-alt="A professional photograph of the master bedroom in a luxury residence, featuring a minimalist aesthetic and neutral color palette. Large windows invite bright morning light, emphasizing the spaciousness and clarity of the structural design. The bedding is crisp white with charcoal accents, maintaining a consistent corporate-chic vibe that radiates stability and comfort." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXirFhvnd8lbZB-GJ6jgtK7hLOpvt0E_jmsvMyKBOGgR0qPWXU9VQHmjONh0fxD2Y7tKmNZAQ6jz9or4Kgn97E88-2P7zyITjZ13eQLvElqwIjITL6UC0mgkSrWVmqjr6RP-KvMQx-NO_s5V47BX49iPRGA9C5kkZRXJDg2dXYMp2eGooI0tZKVBx55kXHEtvgS1vIhQWhbXvX8FqW9XzD0oINLyMhxMhBjkjT3EGjcOdevGPxKz5OjrcowUTVsylPKEIgTE-APHU0"/>
      </button>
      <button className="aspect-square bg-surface-container-high rounded overflow-hidden transition-all hover:opacity-80" onClick={(e) => e.preventDefault()}>
      <img className="w-full h-full object-cover" data-alt="An ultra-modern gourmet kitchen showcasing high-end integrated appliances and seamless cabinetry. The surfaces are a mix of brushed stainless steel and dark slate, reflecting a commitment to durability and precision engineering. The lighting is focused and functional, highlighting the architectural integrity of the space within the Structura brand ecosystem." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6PS12_C0Uqm1usjfksk4W7rKxO9Eempmm6l2eIg5JH6lMN1YruHwqO9ctfG3rTi-bGmQF1oGpCfE7DdVjvE-xNsWX7QRlWupLz8sEwzQTAiI0nZx2wZzLvmw-AQDDwI9CAFKjYz6Tc8b2hjmpB6r5Svr99hxlTftxcgnfqvcVjLirdfWCF7stSF4pn-Nwn2B4ZWthAcwe06foEf6snpoEcnNcV2cUPEcpI4RW3RcEEsC18S0c7m2bEE_WBa3u_UL7Z_hLgeMKCT8e"/>
      </button>
      <button className="aspect-square bg-surface-container-high rounded overflow-hidden transition-all hover:opacity-80" onClick={(e) => e.preventDefault()}>
      <img className="w-full h-full object-cover" data-alt="A serene balcony view from a high-rise residential building, showing a structured glass railing and elegant outdoor furniture. Beyond the balcony, a clean and orderly urban skyline is visible under a clear blue sky. The composition emphasizes the connection between interior safety and external opportunity, a hallmark of high-stakes real estate design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZrOPIpQXJIAEAasUShMokPYaZrIS3gWqFAA50dNvXOAz4uW5tU3IR2C4vMysXpC6qUcGHUxk4MdskgXxYE6bhYLJqCW10Ku48RRf6WdU-1chdJsUHn6rpAhQ7YsWl4bbdV2M6ya_Q3kYLynWD6gCw7zeQVabeigVK5PREe3e-57dSLjHTfAO5PMkxQD16vjxpmAo4Dgmp7OaeWprIYXbI4jKpeJyUHwQu2XCakMmIQqMwTZ__lNOZBwlK8K5lSr7f7yiEdKIDqg5u"/>
      </button>
      <button className="hidden md:block aspect-square bg-surface-container-high rounded overflow-hidden transition-all hover:opacity-80" onClick={(e) => e.preventDefault()}>
      <img className="w-full h-full object-cover" data-alt="A wide-angle interior shot of a sophisticated home office or study, featuring built-in shelving and a large, structured desk. The lighting is soft but clear, providing a focused environment for decision-making and professional work. The color palette of deep navy and light gray maintains the quiet confidence of the overall design system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAPg9l3h2BlRD1X7jj-SRvxeDoYaKbZS5lkCzBqB0GuQuFXEIIc_7o2uD6avYeUXfZVMo1Njb0vAJQvAF861xGvyGNRJi9clQCuO716_go39j7Lj2tf86B_39WR0R4xVfhpEHWeQ5ReozhFrT-sDKTVljATPB7bpq4Rggp_0M7uwp8UzJUtLYjKvg68Z7qSQVmJ4Posn_PS-ZbGyilJgcdhdlMST2diov1ifKHJaH7OrvMcG_f1GsbsdD-5Dg60yBM-KQwhDVvZGL8"/>
      </button>
      <button className="relative aspect-square bg-surface-container-highest rounded overflow-hidden flex items-center justify-center hover:bg-surface-container-high transition-colors border border-outline-variant">
      <span className="font-label-md text-label-md text-primary">+8 More</span>
      </button>
      </div>
      </section>
      {/* Key Details Bar */}
      <section className="bg-surface-container-lowest border border-outline-variant p-md md:p-lg grid grid-cols-2 md:grid-cols-4 gap-md">
      <div className="flex flex-col">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">Price</span>
      <span className="font-headline-sm text-headline-sm text-primary">$4,250,000</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">Status</span>
      <div className="flex items-center gap-xs">
      <span className="w-2 h-2 rounded-full bg-[#005226]"></span>
      <span className="font-label-md text-label-md text-[#005226]">Ready to Move</span>
      </div>
      </div>
      <div className="flex flex-col">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">Area</span>
      <span className="font-label-md text-label-md text-primary">3,850 sq.ft</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">Configuration</span>
      <span className="font-label-md text-label-md text-primary">4 Bed / 4.5 Bath</span>
      </div>
      </section>
      {/* Property Description */}
      <section className="space-y-md">
      <h2 className="font-headline-sm text-headline-sm text-primary">The Obsidian Heights</h2>
      <div className="prose max-w-none text-on-surface-variant font-body-md leading-relaxed">
      <p>Located in the heart of the architectural district, The Obsidian Heights represents the pinnacle of structuralist design and modern corporate living. This exceptional 4-bedroom penthouse offers an unparalleled blend of spatial efficiency and aesthetic grandeur. Every corner of the residence has been meticulously engineered to provide stability and a sense of enduring legacy.</p>
      <p className="mt-base">Featuring triple-height ceilings in the main gallery and automated climate controls integrated seamlessly into the structural facade, this property isn't just a home; it's a statement of quiet confidence. The open-plan layout facilitates seamless transitions between professional entertaining and private relaxation, mirroring the dynamic lifestyle of high-stakes stakeholders.</p>
      </div>
      </section>
      {/* Amenities */}
      <section className="space-y-md pt-md border-t border-outline-variant">
      <h3 className="font-label-md text-label-md text-primary uppercase tracking-widest">Building Amenities</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-md">
      <div className="flex items-center gap-sm p-sm bg-surface-container-low border border-transparent hover:border-outline-variant transition-colors rounded">
      <span className="material-symbols-outlined text-primary">local_parking</span>
      <span className="font-body-sm text-body-sm">Secure Parking</span>
      </div>
      <div className="flex items-center gap-sm p-sm bg-surface-container-low border border-transparent hover:border-outline-variant transition-colors rounded">
      <span className="material-symbols-outlined text-primary">security</span>
      <span className="font-body-sm text-body-sm">24/7 Security</span>
      </div>
      <div className="flex items-center gap-sm p-sm bg-surface-container-low border border-transparent hover:border-outline-variant transition-colors rounded">
      <span className="material-symbols-outlined text-primary">bolt</span>
      <span className="font-body-sm text-body-sm">Power Backup</span>
      </div>
      <div className="flex items-center gap-sm p-sm bg-surface-container-low border border-transparent hover:border-outline-variant transition-colors rounded">
      <span className="material-symbols-outlined text-primary">fitness_center</span>
      <span className="font-body-sm text-body-sm">Premium Gym</span>
      </div>
      <div className="flex items-center gap-sm p-sm bg-surface-container-low border border-transparent hover:border-outline-variant transition-colors rounded">
      <span className="material-symbols-outlined text-primary">pool</span>
      <span className="font-body-sm text-body-sm">Infinity Pool</span>
      </div>
      <div className="flex items-center gap-sm p-sm bg-surface-container-low border border-transparent hover:border-outline-variant transition-colors rounded">
      <span className="material-symbols-outlined text-primary">wifi</span>
      <span className="font-body-sm text-body-sm">Fiber Optic</span>
      </div>
      <div className="flex items-center gap-sm p-sm bg-surface-container-low border border-transparent hover:border-outline-variant transition-colors rounded">
      <span className="material-symbols-outlined text-primary">deck</span>
      <span className="font-body-sm text-body-sm">Private Deck</span>
      </div>
      <div className="flex items-center gap-sm p-sm bg-surface-container-low border border-transparent hover:border-outline-variant transition-colors rounded">
      <span className="material-symbols-outlined text-primary">dry_cleaning</span>
      <span className="font-body-sm text-body-sm">Concierge</span>
      </div>
      </div>
      </section>
      {/* Nearby Places */}
      <section className="space-y-md pt-md border-t border-outline-variant">
      <h3 className="font-label-md text-label-md text-primary uppercase tracking-widest">Connectivity &amp; Logistics</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
      <div className="flex justify-between items-center p-sm border border-outline-variant rounded bg-surface-container-lowest">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-on-surface-variant">local_hospital</span>
      <span className="font-body-md text-body-md">City General Hospital</span>
      </div>
      <span className="font-label-md text-label-md text-on-surface-variant">1.2 km</span>
      </div>
      <div className="flex justify-between items-center p-sm border border-outline-variant rounded bg-surface-container-lowest">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-on-surface-variant">school</span>
      <span className="font-body-md text-body-md">St. Jude International School</span>
      </div>
      <span className="font-label-md text-label-md text-on-surface-variant">0.8 km</span>
      </div>
      <div className="flex justify-between items-center p-sm border border-outline-variant rounded bg-surface-container-lowest">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-on-surface-variant">subway</span>
      <span className="font-body-md text-body-md">Metro Station Central</span>
      </div>
      <span className="font-label-md text-label-md text-on-surface-variant">0.4 km</span>
      </div>
      <div className="flex justify-between items-center p-sm border border-outline-variant rounded bg-surface-container-lowest">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-on-surface-variant">flight</span>
      <span className="font-body-md text-body-md">International Airport</span>
      </div>
      <span className="font-label-md text-label-md text-on-surface-variant">12.5 km</span>
      </div>
      </div>
      </section>
      {/* Location Map */}
      <section className="space-y-md pt-md border-t border-outline-variant">
      <h3 className="font-label-md text-label-md text-primary uppercase tracking-widest">Neighborhood Context</h3>
      <div className="w-full h-80 bg-surface-container-highest rounded border border-outline-variant relative overflow-hidden grayscale contrast-125">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
      <div className="bg-primary text-on-primary px-lg py-2 rounded shadow-lg font-label-md text-label-md flex items-center gap-xs">
      <span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>location_on</span>
                                      The Obsidian Heights
                                  </div>
      </div>
      <img className="w-full h-full object-cover opacity-60" data-location="New York City" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvoPzxklrRB8mzL0ktuk-GmEjjAQ3oZ8W2-lepjIPjTUrZ5F351GfpyCk0R3QVVuOYkEMZ4kq9Y9nNFghIp4aQgYhWJP8f6FG90sliklW7nVgw6ahKbtV93zDv2nkvKN5gGlIGvKda_SjSl6oxaeIBBhAamUiR7gzREO_drIK38N9pKMTxa44sEbzJnBuVsemBbs5KcE8SlCEt3xfmMHSh5-8CsIwsq2j_ryTpeuIjfN7ud7swRpt0Jrtrd2KER9OfKetoDtTgyFlp"/>
      </div>
      </section>
      </div>
      {/* Right Column: Sticky Contact Sidebar */}
      <aside className="lg:col-span-4 sticky top-24">
      <div className="bg-surface-container-lowest border border-outline-variant p-lg shadow-sm">
      <h3 className="font-headline-sm text-headline-sm mb-base text-primary">Inquire About This Property</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">Our senior architectural advisors are ready to assist with your investment journey.</p>
      <form className="space-y-md" onSubmit={(e) => e.preventDefault()}>
      <div>
      <label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Full Name</label>
      <input className="w-full px-sm py-2 bg-surface border border-outline-variant rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none text-body-md" placeholder="John Doe" required={true} type="text"/>
      </div>
      <div>
      <label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Professional Email</label>
      <input className="w-full px-sm py-2 bg-surface border border-outline-variant rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none text-body-md" placeholder="john@company.com" required={true} type="email"/>
      </div>
      <div>
      <label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Message</label>
      <textarea className="w-full px-sm py-2 bg-surface border border-outline-variant rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none text-body-md resize-none" placeholder="I am interested in scheduling a private tour..." rows={4}></textarea>
      </div>
      <button className="w-full bg-primary text-on-primary py-3 rounded font-label-md text-label-md hover:bg-primary-container transition-all flex items-center justify-center gap-xs" type="submit">
      <span className="material-symbols-outlined text-[20px]">send</span>
                                  Submit Inquiry
                              </button>
      </form>
      <div className="mt-lg pt-md border-t border-outline-variant space-y-sm">
      <button className="w-full border border-outline-variant text-primary py-3 rounded font-label-md text-label-md hover:bg-surface-container-low transition-all flex items-center justify-center gap-xs">
      <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                                  Schedule Visit
                              </button>
      <a className="w-full bg-[#25D366] text-white py-3 rounded font-label-md text-label-md hover:opacity-90 transition-all flex items-center justify-center gap-xs" href="#">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
                                  WhatsApp Us
                              </a>
      </div>
      </div>
      <div className="mt-md p-md bg-surface-container border border-outline-variant">
      <div className="flex items-center gap-sm">
      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
      <span className="material-symbols-outlined text-on-primary">person</span>
      </div>
      <div>
      <p className="font-label-md text-label-md text-primary">Marcus Vance</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Senior Portfolio Manager</p>
      </div>
      </div>
      </div>
      </aside>
      </div>
      </main>
      {/* Footer */}
      <footer className="w-full mt-xl bg-surface-container-highest border-t border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-max-width mx-auto px-margin-desktop py-xl">
      <div className="space-y-sm">
      <div className="font-headline-sm text-headline-sm font-bold text-primary">Structura</div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Building excellence through architectural precision and high-stakes real estate expertise since 1994.</p>
      </div>
      <div className="space-y-sm">
      <h4 className="font-label-md text-label-md text-primary uppercase tracking-widest">Navigation</h4>
      <nav className="flex flex-col space-y-xs">
      <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all underline" to="/properties">Properties</Link>
      <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all" to="/construction">Construction</Link>
      <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all" href="#">Portfolio</a>
      <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all" href="#">Careers</a>
      </nav>
      </div>
      <div className="space-y-sm">
      <h4 className="font-label-md text-label-md text-primary uppercase tracking-widest">Legal</h4>
      <nav className="flex flex-col space-y-xs">
      <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all" href="#">Privacy Policy</a>
      <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all" href="#">Terms of Service</a>
      <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all" href="#">Licensing</a>
      </nav>
      </div>
      <div className="space-y-sm">
      <h4 className="font-label-md text-label-md text-primary uppercase tracking-widest">Contact</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">1200 Avenue of the Architects,<br/>New York, NY 10001</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">+1 (212) 555-0198</p>
      </div>
      </div>
      <div className="max-w-max-width mx-auto px-margin-desktop py-md border-t border-outline-variant flex justify-between items-center">
      <p className="font-label-sm text-label-sm text-on-surface-variant">© 2024 Structura Architectural Excellence. All rights reserved.</p>
      <div className="flex gap-md">
      <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">language</span>
      <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">public</span>
      </div>
      </div>
      </footer>
    </>
  )
}
