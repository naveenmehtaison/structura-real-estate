import { Link } from 'react-router-dom'

export function SoldPage() {
  return (
    <>
      {/* TopNavBar */}
      <header className="w-full top-0 sticky bg-surface-container-lowest border-b border-outline-variant z-50">
      <div className="flex justify-between items-center max-w-max-width mx-auto px-margin-desktop h-20">
      <a className="font-headline-md text-headline-md font-bold text-primary tracking-tighter" href="#">Structura</a>
      <nav className="hidden md:flex items-center gap-lg">
      <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/">Home</Link>
      <Link className="font-label-md text-label-md text-primary border-b-2 border-primary pb-1" to="/properties">Properties</Link>
      <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/construction">Construction</Link>
      <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/about">About</Link>
      <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/contact">Contact</Link>
      </nav>
      <div className="flex items-center gap-md">
      <button className="material-symbols-outlined text-on-surface-variant p-2 hover:bg-surface-container-low transition-all">search</button>
      <button className="bg-primary text-on-primary px-lg py-sm font-label-md text-label-md uppercase tracking-wider rounded">Inquire</button>
      </div>
      </div>
      </header>
      <main className="max-w-max-width mx-auto px-margin-desktop py-xl">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-lg gap-md border-b border-outline-variant pb-md">
      <div>
      <span className="font-label-sm text-label-sm text-on-primary-container uppercase tracking-[0.2em] mb-xs block">Portfolio</span>
      <h1 className="font-display-lg text-display-lg text-primary">Sold Properties</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant mt-xs max-w-2xl">A showcase of successful transactions and architectural legacies recently transferred to their new owners.</p>
      </div>
      <div className="flex gap-sm">
      <button className="flex items-center gap-xs px-md py-sm border border-outline-variant font-label-md text-label-md hover:bg-surface-container-low transition-all">
      <span className="material-symbols-outlined text-[20px]">filter_list</span>
                          Filter
                      </button>
      <button className="flex items-center gap-xs px-md py-sm border border-outline-variant font-label-md text-label-md hover:bg-surface-container-low transition-all">
      <span className="material-symbols-outlined text-[20px]">sort</span>
                          Date Sold
                      </button>
      </div>
      </div>
      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter mb-xl">
      <div className="p-md bg-surface-container-lowest border border-outline-variant">
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-xs">Total Sales Value</p>
      <p className="font-headline-sm text-headline-sm text-primary">$428.5M</p>
      </div>
      <div className="p-md bg-surface-container-lowest border border-outline-variant">
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-xs">Properties Sold</p>
      <p className="font-headline-sm text-headline-sm text-primary">124</p>
      </div>
      <div className="p-md bg-surface-container-lowest border border-outline-variant">
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-xs">Avg. Days on Market</p>
      <p className="font-headline-sm text-headline-sm text-primary">18 Days</p>
      </div>
      <div className="p-md bg-surface-container-lowest border border-outline-variant">
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-xs">Success Rate</p>
      <p className="font-headline-sm text-headline-sm text-primary">98.2%</p>
      </div>
      </div>
      {/* Sold Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
      {/* Card 1 */}
      <div className="property-card bg-surface-container-lowest border border-outline-variant group">
      <div className="relative overflow-hidden aspect-[4/3]">
      <div className="bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-105" data-alt="A luxurious modern architectural masterpiece house with glass walls and clean steel lines set against a twilight sky in a high-end residential neighborhood. The lighting is warm and inviting, emphasizing the structural integrity and premium materials like limestone and dark metal. The overall mood is sophisticated and exclusive, reflecting a high-value real estate transaction." style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuB4Ay37pbA2YZNmPCy0i5G6SjztmpPJXHj7_6yvpKBz4rflV0XaLRY856X0x7HCdQJ7PPvVBXSv-yCyff4tpfKVo3aa0fk41K1tIv7S0NpQyWi8r6pHemPmrO33v-rypo_YpePbXhjFmxoSaBl0vlBz8LRRwvOzy50dB0qig2bo-ABklrS0Nzr2Q5Zmu4A0ud0jPZJN4U63fIqjPWTzUfRuDVMwucAxnhIC4gxcEuZoOJW9RpJVS1jUnnFmfnyz7jsPt7m3e1L0CDyO\')' }}></div>
      <div className="sold-ribbon absolute top-0 left-0 right-0 p-sm text-center">
      <span className="font-label-md text-label-md text-on-primary uppercase tracking-[0.3em]">Sold</span>
      </div>
      </div>
      <div className="p-md">
      <div className="flex justify-between items-start mb-xs">
      <h3 className="font-headline-sm text-headline-sm text-primary">The Obsidian Villa</h3>
      <span className="font-label-sm text-label-sm text-on-primary-container px-xs py-1 bg-primary-container/10 rounded-sm">Estate</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant mb-md flex items-center gap-xs">
      <span className="material-symbols-outlined text-[18px]">location_on</span>
                              Beverly Hills, CA
                          </p>
      <div className="border-t border-outline-variant pt-md flex justify-between items-center">
      <div>
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Selling Price</p>
      <p className="font-headline-sm text-headline-sm text-primary">$12,450,000</p>
      </div>
      <div className="text-right">
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Date Sold</p>
      <p className="font-body-md text-body-md text-primary">Oct 14, 2023</p>
      </div>
      </div>
      </div>
      </div>
      {/* Card 2 */}
      <div className="property-card bg-surface-container-lowest border border-outline-variant group">
      <div className="relative overflow-hidden aspect-[4/3]">
      <div className="bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-105" data-alt="A sleek minimalist penthouse with floor-to-ceiling windows overlooking a dense metropolitan skyline during the golden hour. The interior features polished concrete and dark wood accents, showcasing structural excellence. Soft amber light spills from the city below, creating a mood of professional success and urban luxury. The image is crisp, modern, and perfectly composed." style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuBOT3XxqnAl7IXM5ixiujHvOjeYvBslOm1LT_ITUJk_QIFfICJo8JCrixdIOrIXOvmV-4ps9jyyJ8aFgzhy5f-EiFLtYXiJhPe_TJpfusUbOe4513l1KFpl4QsUpKg51JW-JpOYRsS5JN3XJuXamgsFhNCPcc6blwL9FxvS6gSm2yDaDuPHlCmdb0RpElX2wXAlsQsIlRAmMBPSYQbM1PmivefZ7GB55vEyaZzRqu3xOdscZvtTdFyOAyBxsYDN2lS0uOcU1_60i5Ts\')' }}></div>
      <div className="sold-ribbon absolute top-0 left-0 right-0 p-sm text-center">
      <span className="font-label-md text-label-md text-on-primary uppercase tracking-[0.3em]">Sold</span>
      </div>
      </div>
      <div className="p-md">
      <div className="flex justify-between items-start mb-xs">
      <h3 className="font-headline-sm text-headline-sm text-primary">Skyline Penthouse</h3>
      <span className="font-label-sm text-label-sm text-on-primary-container px-xs py-1 bg-primary-container/10 rounded-sm">Condo</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant mb-md flex items-center gap-xs">
      <span className="material-symbols-outlined text-[18px]">location_on</span>
                              Lower Manhattan, NY
                          </p>
      <div className="border-t border-outline-variant pt-md flex justify-between items-center">
      <div>
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Selling Price</p>
      <p className="font-headline-sm text-headline-sm text-primary">$8,900,000</p>
      </div>
      <div className="text-right">
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Date Sold</p>
      <p className="font-body-md text-body-md text-primary">Sep 28, 2023</p>
      </div>
      </div>
      </div>
      </div>
      {/* Card 3 */}
      <div className="property-card bg-surface-container-lowest border border-outline-variant group">
      <div className="relative overflow-hidden aspect-[4/3]">
      <div className="bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-105" data-alt="A contemporary concrete and glass commercial building with sharp angles and an integrated vertical garden. Set in a clean, professional corporate park during a bright morning. The lighting is crisp and cool, highlighting the structural precision and sustainable design elements. The aesthetic is modern corporate, suggesting stability and high-stakes real estate value." style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuBS9dDUMj2RVdt2T0Y9euTqVXYEHnjn651_U0nkxfuTshw26w-UsObKp6iwClBEvxgXo-3NW94kM2Q9TV_08yR10_EfJKXch4AuYSjCtq3hO9Lwen0jV6OA5ApPkXJ3PYbbOPZx55noCqH1SnXO4L0mC0WhrqFw9gS6SSOdxM1UzNZpntwL9s2OAtphnqse6TDmvrCu-BF3r7fELs7ngAupnf5-x9h8CqoENPuJir5m9r_pqU_1DPhigumGcEjggtWEsK49zP6HN_Si\')' }}></div>
      <div className="sold-ribbon absolute top-0 left-0 right-0 p-sm text-center">
      <span className="font-label-md text-label-md text-on-primary uppercase tracking-[0.3em]">Sold</span>
      </div>
      </div>
      <div className="p-md">
      <div className="flex justify-between items-start mb-xs">
      <h3 className="font-headline-sm text-headline-sm text-primary">Apex HQ Building</h3>
      <span className="font-label-sm text-label-sm text-on-primary-container px-xs py-1 bg-primary-container/10 rounded-sm">Commercial</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant mb-md flex items-center gap-xs">
      <span className="material-symbols-outlined text-[18px]">location_on</span>
                              Austin, TX
                          </p>
      <div className="border-t border-outline-variant pt-md flex justify-between items-center">
      <div>
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Selling Price</p>
      <p className="font-headline-sm text-headline-sm text-primary">$45,000,000</p>
      </div>
      <div className="text-right">
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Date Sold</p>
      <p className="font-body-md text-body-md text-primary">Aug 12, 2023</p>
      </div>
      </div>
      </div>
      </div>
      {/* Card 4 */}
      <div className="property-card bg-surface-container-lowest border border-outline-variant group">
      <div className="relative overflow-hidden aspect-[4/3]">
      <div className="bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-105" data-alt="A sprawling modern farmhouse with white siding, black metal roof, and large wraparound porch. Set in a lush green valley with distant blue mountains under a clear afternoon sun. The design is a mix of traditional stability and modern clarity. The mood is peaceful and grounded, showcasing a successful residential property transition in a premium rural setting." style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuDtlJeVCadBsxOoYUieTBiTUmHQQu9pEbNC6oPezLn3iEb8GlzxoPg9vCpv5taq8S1745Z4LqEFSlGjbSevZn71bw63ulLbEjUU-gbBj8AnhPmgzBsGy1Kmdw2OoNnF9ao7OMlW2lilsW-H_3M86Jc61VEdjyKtmBwI4KUvLDGh1mvZ_K142SakTrlfO3J9WLvoHVkENedGAYIT1bfVbSfhJmSVGByFltPaEhwJ5DwmpK0aYv_rjRLMyGHrPp_xNSac9rYpAniexh11\')' }}></div>
      <div className="sold-ribbon absolute top-0 left-0 right-0 p-sm text-center">
      <span className="font-label-md text-label-md text-on-primary uppercase tracking-[0.3em]">Sold</span>
      </div>
      </div>
      <div className="p-md">
      <div className="flex justify-between items-start mb-xs">
      <h3 className="font-headline-sm text-headline-sm text-primary">Heritage Ranch</h3>
      <span className="font-label-sm text-label-sm text-on-primary-container px-xs py-1 bg-primary-container/10 rounded-sm">Residential</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant mb-md flex items-center gap-xs">
      <span className="material-symbols-outlined text-[18px]">location_on</span>
                              Aspen, CO
                          </p>
      <div className="border-t border-outline-variant pt-md flex justify-between items-center">
      <div>
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Selling Price</p>
      <p className="font-headline-sm text-headline-sm text-primary">$15,200,000</p>
      </div>
      <div className="text-right">
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Date Sold</p>
      <p className="font-body-md text-body-md text-primary">Jul 30, 2023</p>
      </div>
      </div>
      </div>
      </div>
      {/* Card 5 */}
      <div className="property-card bg-surface-container-lowest border border-outline-variant group">
      <div className="relative overflow-hidden aspect-[4/3]">
      <div className="bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-105" data-alt="An ultra-modern waterfront property with cantilevered decks over a calm blue bay. The structure features extensive use of glass and white concrete, creating a sharp contrast with the natural surroundings. Bright, high-key lighting suggests a high-end luxury lifestyle and architectural precision. The overall aesthetic is clean, structuralist, and elite." style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuBA7ek635rGEzY6ipa3BzD4fkeN7pdfUlO8vf4wD_qK5eTtfDZHcTA4kD24iii4Q-J6xXa3QBSHDSmxr7h5GCbQbzvSegVAC8Lwmkm2mdwIgh68KZiwNF13sejLQmpJ-OZfBFEyA3cn6_bSgdkVWrl3D3ot_nwGh0jyJF_U5AaOpG7KBoVdCBN_ebrvbyuV5WmNJ6UVgyilElN7fOqzLVN7oeOIiGDHAmKQ5--nZehtr9QYhxmTxglyjnOWAFxEtY0umWC7HRy5eYpe\')' }}></div>
      <div className="sold-ribbon absolute top-0 left-0 right-0 p-sm text-center">
      <span className="font-label-md text-label-md text-on-primary uppercase tracking-[0.3em]">Sold</span>
      </div>
      </div>
      <div className="p-md">
      <div className="flex justify-between items-start mb-xs">
      <h3 className="font-headline-sm text-headline-sm text-primary">Cove Residence</h3>
      <span className="font-label-sm text-label-sm text-on-primary-container px-xs py-1 bg-primary-container/10 rounded-sm">Waterfront</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant mb-md flex items-center gap-xs">
      <span className="material-symbols-outlined text-[18px]">location_on</span>
                              Miami, FL
                          </p>
      <div className="border-t border-outline-variant pt-md flex justify-between items-center">
      <div>
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Selling Price</p>
      <p className="font-headline-sm text-headline-sm text-primary">$7,100,000</p>
      </div>
      <div className="text-right">
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Date Sold</p>
      <p className="font-body-md text-body-md text-primary">Jun 15, 2023</p>
      </div>
      </div>
      </div>
      </div>
      {/* Card 6 */}
      <div className="property-card bg-surface-container-lowest border border-outline-variant group">
      <div className="relative overflow-hidden aspect-[4/3]">
      <div className="bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-105" data-alt="A historic brick building repurposed as a modern luxury loft residence in a trendy urban district. The architecture maintains its industrial heritage while incorporating modern black steel window frames and a clean entry plaza. The lighting is warm and directional, emphasizing the texture of the old brick and the precision of the new interventions. A perfect example of structural renewal." style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuD2Ea8M3AXDvWE1sWMPOfKercfRUpO1K2gyCds68k6t9bnPR0zzbIGijhk8nwqFK6FPhXOSeiFgUu5QHLntDPKOhKiC8KlxCfLttY-F1Y2MTvJ-IL3BLMaSbvs1SpPpAOddH9bmCccgSIz9TI4vKnRQ5u9TwFnorgOHU2gMmn5Fl19-WuqkAjN8arcIf1naageiqyOut-TxFmZkeSr7rjb1bTThi3du-bE9HD7UDgnQ1a_XwH8ttmhXk0iOdvYnaTAwZREjPWB32q9V\')' }}></div>
      <div className="sold-ribbon absolute top-0 left-0 right-0 p-sm text-center">
      <span className="font-label-md text-label-md text-on-primary uppercase tracking-[0.3em]">Sold</span>
      </div>
      </div>
      <div className="p-md">
      <div className="flex justify-between items-start mb-xs">
      <h3 className="font-headline-sm text-headline-sm text-primary">The Foundry Lofts</h3>
      <span className="font-label-sm text-label-sm text-on-primary-container px-xs py-1 bg-primary-container/10 rounded-sm">Loft</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant mb-md flex items-center gap-xs">
      <span className="material-symbols-outlined text-[18px]">location_on</span>
                              Chicago, IL
                          </p>
      <div className="border-t border-outline-variant pt-md flex justify-between items-center">
      <div>
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Selling Price</p>
      <p className="font-headline-sm text-headline-sm text-primary">$3,450,000</p>
      </div>
      <div className="text-right">
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Date Sold</p>
      <p className="font-body-md text-body-md text-primary">May 22, 2023</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Pagination */}
      <div className="mt-xl flex justify-center items-center gap-base">
      <button className="w-10 h-10 flex items-center justify-center border border-outline-variant text-on-surface hover:bg-surface-container-low transition-all">
      <span className="material-symbols-outlined">chevron_left</span>
      </button>
      <button className="w-10 h-10 flex items-center justify-center bg-primary text-on-primary font-label-md">1</button>
      <button className="w-10 h-10 flex items-center justify-center border border-outline-variant text-on-surface hover:bg-surface-container-low font-label-md">2</button>
      <button className="w-10 h-10 flex items-center justify-center border border-outline-variant text-on-surface hover:bg-surface-container-low font-label-md">3</button>
      <span className="px-xs text-outline-variant">...</span>
      <button className="w-10 h-10 flex items-center justify-center border border-outline-variant text-on-surface hover:bg-surface-container-low font-label-md">12</button>
      <button className="w-10 h-10 flex items-center justify-center border border-outline-variant text-on-surface hover:bg-surface-container-low transition-all">
      <span className="material-symbols-outlined">chevron_right</span>
      </button>
      </div>
      {/* Call to Action */}
      <section className="mt-xl bg-primary text-on-primary p-xl relative overflow-hidden">
      <div className="relative z-10 max-w-2xl">
      <h2 className="font-headline-md text-headline-md mb-md">Have a property you're looking to list?</h2>
      <p className="font-body-lg text-body-lg text-primary-fixed-dim mb-lg">Join our portfolio of successful transactions. Our architectural approach to real estate marketing ensures your property stands out and sells for its true value.</p>
      <div className="flex flex-wrap gap-md">
      <button className="bg-on-tertiary-container text-on-tertiary px-lg py-sm font-label-md text-label-md uppercase tracking-wider rounded">Get a Valuation</button>
      <button className="border border-on-primary text-on-primary px-lg py-sm font-label-md text-label-md uppercase tracking-wider rounded hover:bg-on-primary hover:text-primary transition-all">Speak to an Agent</button>
      </div>
      </div>
      {/* Subtle architectural background pattern */}
      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
      <span className="material-symbols-outlined text-[300px]">architecture</span>
      </div>
      </section>
      </main>
      {/* Footer */}
      <footer className="w-full mt-auto bg-surface-container-highest border-t border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-max-width mx-auto px-margin-desktop py-xl">
      <div className="col-span-1 md:col-span-1">
      <a className="font-headline-sm text-headline-sm font-bold text-primary" href="#">Structura</a>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-md">Pioneering architectural real estate excellence through precision, data, and design integrity.</p>
      </div>
      <div>
      <h4 className="font-label-md text-label-md text-primary uppercase mb-md">Properties</h4>
      <ul className="flex flex-col gap-sm">
      <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="#">New Listings</a></li>
      <li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" to="/sold">Sold Gallery</Link></li>
      <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="#">Commercial Portfolio</a></li>
      <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="#">Investments</a></li>
      </ul>
      </div>
      <div>
      <h4 className="font-label-md text-label-md text-primary uppercase mb-md">Company</h4>
      <ul className="flex flex-col gap-sm">
      <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="#">Careers</a></li>
      <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="#">Our Process</a></li>
      <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="#">Sustainability</a></li>
      <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="#">Press</a></li>
      </ul>
      </div>
      <div>
      <h4 className="font-label-md text-label-md text-primary uppercase mb-md">Connect</h4>
      <div className="flex gap-sm mb-md">
      <a className="w-10 h-10 flex items-center justify-center border border-outline-variant hover:bg-primary hover:text-on-primary transition-all" href="#">
      <span className="material-symbols-outlined text-[20px]">share</span>
      </a>
      <a className="w-10 h-10 flex items-center justify-center border border-outline-variant hover:bg-primary hover:text-on-primary transition-all" href="#">
      <span className="material-symbols-outlined text-[20px]">alternate_email</span>
      </a>
      </div>
      <p className="font-label-sm text-label-sm text-on-surface-variant">© 2024 Structura Architectural Excellence. All rights reserved.</p>
      </div>
      </div>
      <div className="max-w-max-width mx-auto px-margin-desktop py-md border-t border-outline-variant flex flex-wrap gap-lg">
      <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all" href="#">Privacy Policy</a>
      <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all" href="#">Terms of Service</a>
      <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all" href="#">Licensing</a>
      </div>
      </footer>
    </>
  )
}
