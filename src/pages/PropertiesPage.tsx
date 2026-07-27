import { Link } from 'react-router-dom'

export function PropertiesPage() {
  return (
    <>
      {/* TopNavBar */}
      <header className="w-full top-0 sticky z-50 bg-surface-container-lowest border-b border-outline-variant">
      <nav className="flex justify-between items-center max-w-max-width mx-auto px-margin-desktop h-20">
      <div className="font-headline-md text-headline-md font-bold text-primary tracking-tighter">
                      Strucura
                  </div>
      <div className="hidden md:flex items-center space-x-lg">
      <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/">Home</Link>
      <Link className="font-label-md text-label-md text-primary border-b-2 border-primary pb-1" to="/properties">Properties</Link>
      <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/construction">Construction</Link>
      <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/about">About</Link>
      <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/contact">Contact</Link>
      </div>
      <div className="flex items-center space-x-md">
      <button className="material-symbols-outlined text-on-surface-variant hover:text-primary">search</button>
      <button className="bg-[#00210b] text-white px-6 py-2 rounded-lg font-label-md text-label-md hover:bg-opacity-90 transition-all">Inquire</button>
      </div>
      </nav>
      </header>
      <main className="max-w-max-width mx-auto px-margin-desktop py-lg grid grid-cols-12 gap-gutter">
      {/* Sidebar Filter */}
      <aside className="col-span-12 lg:col-span-3 space-y-md h-fit lg:sticky lg:top-24">
      <div className="bg-surface-container-lowest border border-outline-variant p-md rounded-lg">
      <h2 className="font-headline-sm text-headline-sm mb-md">Filters</h2>
      {/* Buy/Rent Toggle */}
      <div className="flex p-1 bg-surface-container-low rounded-lg mb-md">
      <button className="flex-1 py-2 font-label-md text-label-md rounded bg-white shadow-sm border border-outline-variant">Buy</button>
      <button className="flex-1 py-2 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">Rent</button>
      </div>
      {/* Location */}
      <div className="space-y-xs mb-md">
      <label className="font-label-md text-label-md text-on-surface-variant block">Location</label>
      <div className="relative">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">location_on</span>
      <input className="w-full pl-10 pr-4 py-2 border border-outline-variant rounded bg-white font-body-sm focus:ring-1 focus:ring-primary focus:outline-none" placeholder="City, Area or Zip" type="text"/>
      </div>
      </div>
      {/* Property Type */}
      <div className="space-y-xs mb-md">
      <label className="font-label-md text-label-md text-on-surface-variant block">Property Type</label>
      <select className="w-full px-4 py-2 border border-outline-variant rounded bg-white font-body-sm focus:ring-1 focus:ring-primary focus:outline-none appearance-none cursor-pointer">
      <option>All Types</option>
      <option>Modern Villa</option>
      <option>Penthouse</option>
      <option>Commercial Plaza</option>
      <option>Luxury Apartment</option>
      </select>
      </div>
      {/* Price Range */}
      <div className="space-y-xs mb-md">
      <div className="flex justify-between items-center">
      <label className="font-label-md text-label-md text-on-surface-variant">Price Range</label>
      <span className="font-label-sm text-label-sm font-bold text-primary">$500k - $5M+</span>
      </div>
      <input className="w-full accent-primary" max={10000000} min={500000} step={100000} type="range"/>
      </div>
      {/* Bedrooms */}
      <div className="space-y-xs mb-md">
      <label className="font-label-md text-label-md text-on-surface-variant block">Bedrooms</label>
      <div className="flex gap-2">
      <button className="w-10 h-10 border border-outline-variant rounded flex items-center justify-center font-label-md text-label-md hover:bg-surface-container-low">1+</button>
      <button className="w-10 h-10 border border-outline-variant rounded flex items-center justify-center font-label-md text-label-md bg-primary text-white">3+</button>
      <button className="w-10 h-10 border border-outline-variant rounded flex items-center justify-center font-label-md text-label-md hover:bg-surface-container-low">5+</button>
      <button className="flex-1 border border-outline-variant rounded flex items-center justify-center font-label-md text-label-md hover:bg-surface-container-low">Any</button>
      </div>
      </div>
      {/* Status */}
      <div className="space-y-xs mb-lg">
      <label className="font-label-md text-label-md text-on-surface-variant block">Project Status</label>
      <div className="space-y-2">
      <label className="flex items-center gap-2 cursor-pointer">
      <input checked={true} className="rounded border-outline-variant text-primary focus:ring-0" type="checkbox"/>
      <span className="font-body-sm">Ready to Move</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
      <input className="rounded border-outline-variant text-primary focus:ring-0" type="checkbox"/>
      <span className="font-body-sm">Under Construction</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
      <input className="rounded border-outline-variant text-primary focus:ring-0" type="checkbox"/>
      <span className="font-body-sm">Off-Plan</span>
      </label>
      </div>
      </div>
      <button className="w-full bg-primary text-white font-label-md text-label-md py-3 rounded hover:bg-opacity-90 transition-all">Apply Search</button>
      </div>
      </aside>
      {/* Main Content: Grid Layout */}
      <section className="col-span-12 lg:col-span-9">
      {/* Header & Sorting */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-lg gap-md">
      <div>
      <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary">Featured Properties</h1>
      <p className="font-body-md text-on-surface-variant">Showing 24 high-precision architectural listings</p>
      </div>
      <div className="flex items-center gap-sm">
      <span className="font-label-md text-label-md text-on-surface-variant">Sort by:</span>
      <select className="border-none bg-transparent font-label-md text-label-md text-primary focus:ring-0 cursor-pointer">
      <option>Newest First</option>
      <option>Price: Low to High</option>
      <option>Price: High to Low</option>
      <option>Area: Largest</option>
      </select>
      </div>
      </div>
      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
      {/* Card 1 */}
      <article className="property-card bg-surface-container-lowest border border-outline-variant rounded group overflow-hidden flex flex-col">
      <div className="relative h-64 overflow-hidden bg-surface-container-high">
      <img className="property-image w-full h-full object-cover transition-transform duration-700" data-alt="A cinematic, high-angle exterior photograph of a contemporary minimalist glass villa at dusk. The architecture features clean horizontal lines, expansive floor-to-ceiling windows, and a pristine infinity pool reflecting the deep indigo sky. Soft warm interior lighting glows through the glass, contrasting with the cool blue hour atmosphere. Modern structuralist design elements are prominent." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFvoH8dSPsJQh_U4Jkl_jm5MQyVYcxU1gFVjMs2Gx4bhLuan_Ezp_UeZ6z8UFWTJZBdgjHtRZVOeGpvlafTg4F2lBinHybCzCUi69IpG9gIuZO-J5hjMAkehPceicssMCFaVs3CESiHQaebHu_hpgp0uhzovm55vWCJlww7gnrxcZkTtszTl7rtag6BcGlXXZN1JOwJdZg42D5LC1FJ0-bhYMmDYURSZU8KdrVUZK1ej4F_2ykJTpUsMaIMYSMzN_4jSmvMFj5d7sX"/>
      <div className="absolute top-4 left-4 flex gap-2">
      <span className="bg-[#00210b] text-white font-label-sm text-label-sm px-3 py-1 rounded">Completed</span>
      <span className="bg-primary text-white font-label-sm text-label-sm px-3 py-1 rounded">Exclusive</span>
      </div>
      </div>
      <div className="p-md flex-1 flex flex-col">
      <div className="flex justify-between items-start mb-2">
      <div>
      <h3 className="font-headline-sm text-headline-sm text-primary">Glass Horizon Villa</h3>
      <p className="font-body-sm text-on-surface-variant">124 Skyline Drive, West Ridge</p>
      </div>
      <span className="font-headline-sm text-headline-sm text-primary">$4,250,000</span>
      </div>
      <p className="font-body-sm text-on-surface-variant mb-md line-clamp-2">An architectural masterpiece featuring cantilevered concrete floors and seamless indoor-outdoor living integration.</p>
      <div className="grid grid-cols-2 gap-y-3 gap-x-gutter border-t border-outline-variant pt-md mb-md">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-outline">square_foot</span>
      <span className="font-label-md text-label-md text-primary">5,400 sq ft</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-outline">bed</span>
      <span className="font-label-md text-label-md text-primary">5 Bedrooms</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-outline">bathtub</span>
      <span className="font-label-md text-label-md text-primary">6 Bathrooms</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-outline">road</span>
      <span className="font-label-md text-label-md text-primary">0.2 mi from Main Road</span>
      </div>
      </div>
      <div className="bg-surface-container-low p-sm rounded mb-md flex items-center gap-2">
      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '\'FILL\' 1' }}>account_balance</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Near: Central Business District, Metro Station West</span>
      </div>
      <button className="w-full mt-auto border border-primary text-primary font-label-md text-label-md py-3 hover:bg-primary hover:text-white transition-all">View Details</button>
      </div>
      </article>
      {/* Card 2 */}
      <article className="property-card bg-surface-container-lowest border border-outline-variant rounded group overflow-hidden flex flex-col">
      <div className="relative h-64 overflow-hidden bg-surface-container-high">
      <img className="property-image w-full h-full object-cover transition-transform duration-700" data-alt="A sharp, architectural photograph of a luxury high-rise penthouse terrace overlooking a modern city skyline. The foreground features sleek slate paving, minimalist outdoor furniture in navy and grey, and low-profile planters. The lighting is bright and clear mid-morning sun, casting sharp geometric shadows that emphasize the structural integrity of the building. The mood is professional and elite." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDueEfqovC8xJ2b_YoHKmDAHKD7usDGT0r5SvZo9nnuI1-I60_AsbBpvQXRIa27-aKifln0pWiiOSqMRvRSOxMRREqgrtclsLqCjp2pJpIoR9guosTeAIZRpve1T1L0jWiIakQpeNnycnmcC_uQxUnjaTHpZhd3EErKZwDurdfvA-kILhFj1E4TQ3BV1Fpa69IxKifjHont1c0FnGobYAhgJPPitKgv58cv4L89INJlzHv0bpWh7AHCr9CuYp43MgWjwcC0MOPx_Xf0"/>
      <div className="absolute top-4 left-4 flex gap-2">
      <span className="bg-[#49935c] text-white font-label-sm text-label-sm px-3 py-1 rounded">Under Construction</span>
      </div>
      </div>
      <div className="p-md flex-1 flex flex-col">
      <div className="flex justify-between items-start mb-2">
      <div>
      <h3 className="font-headline-sm text-headline-sm text-primary">Apex Penthouse</h3>
      <p className="font-body-sm text-on-surface-variant">Penthouse 4B, The Monolith Towers</p>
      </div>
      <span className="font-headline-sm text-headline-sm text-primary">$2,100,000</span>
      </div>
      <p className="font-body-sm text-on-surface-variant mb-md line-clamp-2">Breathtaking 360-degree urban vistas with double-height ceilings and a private climate-controlled sky garden.</p>
      <div className="grid grid-cols-2 gap-y-3 gap-x-gutter border-t border-outline-variant pt-md mb-md">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-outline">square_foot</span>
      <span className="font-label-md text-label-md text-primary">3,200 sq ft</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-outline">bed</span>
      <span className="font-label-md text-label-md text-primary">3 Bedrooms</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-outline">bathtub</span>
      <span className="font-label-md text-label-md text-primary">4 Bathrooms</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-outline">road</span>
      <span className="font-label-md text-label-md text-primary">Central Hub Access</span>
      </div>
      </div>
      <div className="bg-surface-container-low p-sm rounded mb-md flex items-center gap-2">
      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '\'FILL\' 1' }}>theater_comedy</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Near: Grand Opera House, Financial District</span>
      </div>
      <button className="w-full mt-auto border border-primary text-primary font-label-md text-label-md py-3 hover:bg-primary hover:text-white transition-all">View Details</button>
      </div>
      </article>
      {/* Card 3 */}
      <article className="property-card bg-surface-container-lowest border border-outline-variant rounded group overflow-hidden flex flex-col">
      <div className="relative h-64 overflow-hidden bg-surface-container-high">
      <img className="property-image w-full h-full object-cover transition-transform duration-700" data-alt="An expansive aerial view of a brutalist-inspired residential complex nestled within a lush green forest landscape. The architecture uses raw concrete textures and organic wood accents. The lighting is soft and diffused, suggesting a peaceful early morning fog. The image emphasizes the harmony between rigid structural forms and the fluid natural environment. Professional real estate photography style with high contrast." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo_7nNsYvZxJUBFe-QNLJ6l_FwIOJsD_0OKBZrgifEzddGjMlkwMR-YGK5JskjmWKrU0u1OcZhHe1rGG63_JpLTHzmvIn8wLveNMTDgLVHdle48IC6KxS5nVOqeo5Cw4uQ2zFhE9g7UOSqE8OfdJYR1EP9ODVJlv2w9UuNpCR9chAWUoetttRNSdQoAieCKOGDGWPO8EsyRSXBi3GugR-ZntjfOtOhAigDY9A0Bmk1n1ZopD3Zl0jRcDIjyA0E5pUMh_olMes3o4lY"/>
      <div className="absolute top-4 left-4 flex gap-2">
      <span className="bg-[#00210b] text-white font-label-sm text-label-sm px-3 py-1 rounded">Completed</span>
      </div>
      </div>
      <div className="p-md flex-1 flex flex-col">
      <div className="flex justify-between items-start mb-2">
      <div>
      <h3 className="font-headline-sm text-headline-sm text-primary">Cedar &amp; Stone Estate</h3>
      <p className="font-body-sm text-on-surface-variant">900 Timberline Way, Evergreen</p>
      </div>
      <span className="font-headline-sm text-headline-sm text-primary">$3,800,000</span>
      </div>
      <p className="font-body-sm text-on-surface-variant mb-md line-clamp-2">A sustainable luxury estate built with locally sourced limestone and reclaimed cedar wood panels.</p>
      <div className="grid grid-cols-2 gap-y-3 gap-x-gutter border-t border-outline-variant pt-md mb-md">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-outline">square_foot</span>
      <span className="font-label-md text-label-md text-primary">6,100 sq ft</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-outline">bed</span>
      <span className="font-label-md text-label-md text-primary">6 Bedrooms</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-outline">bathtub</span>
      <span className="font-label-md text-label-md text-primary">7 Bathrooms</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-outline">road</span>
      <span className="font-label-md text-label-md text-primary">1.5 mi from Main Road</span>
      </div>
      </div>
      <div className="bg-surface-container-low p-sm rounded mb-md flex items-center gap-2">
      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '\'FILL\' 1' }}>park</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Near: National Forest Reserve, Silver Lake</span>
      </div>
      <button className="w-full mt-auto border border-primary text-primary font-label-md text-label-md py-3 hover:bg-primary hover:text-white transition-all">View Details</button>
      </div>
      </article>
      {/* Card 4 */}
      <article className="property-card bg-surface-container-lowest border border-outline-variant rounded group overflow-hidden flex flex-col">
      <div className="relative h-64 overflow-hidden bg-surface-container-high">
      <img className="property-image w-full h-full object-cover transition-transform duration-700" data-alt="A vibrant, professional photograph of a mixed-use commercial and residential plaza in an active urban area. The building features a modular grid facade with metallic finishes and integrated vertical gardens. The scene is full of bright, natural daylight, with clear blue skies. People are depicted as blurred silhouettes to emphasize the architecture. The aesthetic is clean, modern corporate, and highly stable." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbpFAZ4SN_Id3grujKgQRcygf3iJJH7ck8UKbTPT79Zl8ltxid3IAIjBOMA6rN3LiHqrMFuJsGYLFbh9ZjYjQYy4TkL0zwzu5VVk_GywCqXyZCkWiPIfY_WM7WJZp8wpWPe_4lzz_kFVU7JMwX_zoQH7AZ0p1NrE2a74HXetB9hCyZmL1PXRm5iSom5OCuzQK6KDQuDF8wBodvMTF4V9qhmwDtMbcAJ20Qrz8kQjidTPpcx6kZWptHQwXMUDcs1Em2w-USB8KdKrJK"/>
      <div className="absolute top-4 left-4 flex gap-2">
      <span className="bg-[#49935c] text-white font-label-sm text-label-sm px-3 py-1 rounded">Off-Plan</span>
      </div>
      </div>
      <div className="p-md flex-1 flex flex-col">
      <div className="flex justify-between items-start mb-2">
      <div>
      <h3 className="font-headline-sm text-headline-sm text-primary">The Grid Plaza</h3>
      <p className="font-body-sm text-on-surface-variant">Sector 12, Innovation District</p>
      </div>
      <span className="font-headline-sm text-headline-sm text-primary">$1,450,000+</span>
      </div>
      <p className="font-body-sm text-on-surface-variant mb-md line-clamp-2">Smart-tech integrated units with flexible floorplans designed for modern live-work lifestyles.</p>
      <div className="grid grid-cols-2 gap-y-3 gap-x-gutter border-t border-outline-variant pt-md mb-md">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-outline">square_foot</span>
      <span className="font-label-md text-label-md text-primary">1,800 - 4,500 sq ft</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-outline">bed</span>
      <span className="font-label-md text-label-md text-primary">Variable</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-outline">bathtub</span>
      <span className="font-label-md text-label-md text-primary">2-4 Bathrooms</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-outline">road</span>
      <span className="font-label-md text-label-md text-primary">Direct Highway Access</span>
      </div>
      </div>
      <div className="bg-surface-container-low p-sm rounded mb-md flex items-center gap-2">
      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '\'FILL\' 1' }}>terminal</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Near: Tech Innovation Center, North Station</span>
      </div>
      <button className="w-full mt-auto border border-primary text-primary font-label-md text-label-md py-3 hover:bg-primary hover:text-white transition-all">View Details</button>
      </div>
      </article>
      {/* Card 5 */}
      <article className="property-card bg-surface-container-lowest border border-outline-variant rounded group overflow-hidden flex flex-col">
      <div className="relative h-64 overflow-hidden bg-surface-container-high">
      <img className="property-image w-full h-full object-cover transition-transform duration-700" data-alt="A detailed eye-level shot of a luxury townhouse development in an upscale suburban neighborhood. The design uses premium dark slate roofing and white brick masonry. Large windows frame perfectly manicured front gardens. The lighting is golden hour, creating a warm and inviting yet prestigious atmosphere. The image feels grounded and secure, prioritizing architectural precision and clarity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyFNMtd3CnoaJ12jqKdXVDFOozt_z3ULHF029Zr3zJxwQj_-1HnfcGg0zd8Bd405knz6Qo8B21HQqNDXsT_F17Mh7YpCriKujMCGv_e7ZPqGhhAHrS73ZVGpqSQmNMQIEnQfWVEblL-T8ITb1tJuRrBvf4vTQL_2eg-8w-dplkWGG7ASQ6TvRH29R8xu2EkHe7uCA9O1RUPBgFAZBJMbtV0MzSdQP2P8lhUWtLZrN4IAM3tEKhSJn--kTPel2i7623FNxczmbkkD-K"/>
      <div className="absolute top-4 left-4 flex gap-2">
      <span className="bg-[#00210b] text-white font-label-sm text-label-sm px-3 py-1 rounded">Completed</span>
      </div>
      </div>
      <div className="p-md flex-1 flex flex-col">
      <div className="flex justify-between items-start mb-2">
      <div>
      <h3 className="font-headline-sm text-headline-sm text-primary">Marble Arch Mews</h3>
      <p className="font-body-sm text-on-surface-variant">15 Parkside Lane, Kensington</p>
      </div>
      <span className="font-headline-sm text-headline-sm text-primary">$2,850,000</span>
      </div>
      <p className="font-body-sm text-on-surface-variant mb-md line-clamp-2">Traditional architectural silhouettes reimagined with a high-contrast palette and ultra-modern interiors.</p>
      <div className="grid grid-cols-2 gap-y-3 gap-x-gutter border-t border-outline-variant pt-md mb-md">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-outline">square_foot</span>
      <span className="font-label-md text-label-md text-primary">4,100 sq ft</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-outline">bed</span>
      <span className="font-label-md text-label-md text-primary">4 Bedrooms</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-outline">bathtub</span>
      <span className="font-label-md text-label-md text-primary">4 Bathrooms</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-outline">road</span>
      <span className="font-label-md text-label-md text-primary">0.1 mi from Main Road</span>
      </div>
      </div>
      <div className="bg-surface-container-low p-sm rounded mb-md flex items-center gap-2">
      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '\'FILL\' 1' }}>school</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Near: Elite International Academy, City Park</span>
      </div>
      <button className="w-full mt-auto border border-primary text-primary font-label-md text-label-md py-3 hover:bg-primary hover:text-white transition-all">View Details</button>
      </div>
      </article>
      {/* Card 6 */}
      <article className="property-card bg-surface-container-lowest border border-outline-variant rounded group overflow-hidden flex flex-col">
      <div className="relative h-64 overflow-hidden bg-surface-container-high">
      <img className="property-image w-full h-full object-cover transition-transform duration-700" data-alt="A modern industrial loft interior featured as a hero property image. Exposed steel beams, polished concrete floors, and large black-framed factory windows characterize the space. The lighting is moody and focused, with designer lamps highlighting structural details. A palette of deep navy, grey, and wood tones creates a professional urban aesthetic. High-end architectural visualization style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIG0w0LWjiGsK2xGxTduuu212TD28VcJ151qiri3hp1KDB30tib1nNu5RS46ERx1Y9IQm-A8lFDxg3YU-rgNP76cSWw94UaTZBeEl3w-dLuv2fIf_hX0ENzS4ZhyTA_Mw2Pxt62VMW03bw-Nli2KB5XwmwgipyCYPoMUt9J9QwxzZL_5UxLEVPMFZQ_T0tRelp8XAC1QC6Pck5hagA2F-AP1uVuFuUg88djn7PRqEjgTzBOfWnBzwQf1YcW1hZI3nSb9mYeTTDSqVm"/>
      <div className="absolute top-4 left-4 flex gap-2">
      <span className="bg-[#00210b] text-white font-label-sm text-label-sm px-3 py-1 rounded">Completed</span>
      <span className="bg-[#ba1a1a] text-white font-label-sm text-label-sm px-3 py-1 rounded">Last Unit</span>
      </div>
      </div>
      <div className="p-md flex-1 flex flex-col">
      <div className="flex justify-between items-start mb-2">
      <div>
      <h3 className="font-headline-sm text-headline-sm text-primary">Foundry Loft One</h3>
      <p className="font-body-sm text-on-surface-variant">Unit 402, The Old Foundry District</p>
      </div>
      <span className="font-headline-sm text-headline-sm text-primary">$980,000</span>
      </div>
      <p className="font-body-sm text-on-surface-variant mb-md line-clamp-2">Authentic industrial conversion featuring soaring 18ft ceilings and original heritage structural elements.</p>
      <div className="grid grid-cols-2 gap-y-3 gap-x-gutter border-t border-outline-variant pt-md mb-md">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-outline">square_foot</span>
      <span className="font-label-md text-label-md text-primary">2,100 sq ft</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-outline">bed</span>
      <span className="font-label-md text-label-md text-primary">2 Bedrooms</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-outline">bathtub</span>
      <span className="font-label-md text-label-md text-primary">2 Bathrooms</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-outline">road</span>
      <span className="font-label-md text-label-md text-primary">Urban Walkability Score: 98</span>
      </div>
      </div>
      <div className="bg-surface-container-low p-sm rounded mb-md flex items-center gap-2">
      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '\'FILL\' 1' }}>restaurant</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Near: Michelin Star Dining, Art Precinct</span>
      </div>
      <button className="w-full mt-auto border border-primary text-primary font-label-md text-label-md py-3 hover:bg-primary hover:text-white transition-all">View Details</button>
      </div>
      </article>
      </div>
      {/* Pagination */}
      <div className="mt-xl flex justify-center items-center gap-base">
      <button className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded hover:bg-surface-container-low transition-colors">
      <span className="material-symbols-outlined">chevron_left</span>
      </button>
      <button className="w-10 h-10 flex items-center justify-center border border-primary bg-primary text-white rounded">1</button>
      <button className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded hover:bg-surface-container-low">2</button>
      <button className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded hover:bg-surface-container-low">3</button>
      <span className="px-2">...</span>
      <button className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded hover:bg-surface-container-low">12</button>
      <button className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded hover:bg-surface-container-low transition-colors">
      <span className="material-symbols-outlined">chevron_right</span>
      </button>
      </div>
      </section>
      </main>
      {/* Footer */}
      <footer className="w-full mt-auto bg-surface-container-highest border-t border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-max-width mx-auto px-margin-desktop py-xl">
      <div className="space-y-md">
      <div className="font-headline-sm text-headline-sm font-bold text-primary">Structura</div>
      <p className="font-body-sm text-on-surface-variant">Defining the standard of architectural excellence and real estate integrity since 1994.</p>
      <div className="flex gap-sm">
      <button className="material-symbols-outlined text-on-surface-variant hover:text-primary">language</button>
      <button className="material-symbols-outlined text-on-surface-variant hover:text-primary">share</button>
      <button className="material-symbols-outlined text-on-surface-variant hover:text-primary">mail</button>
      </div>
      </div>
      <div>
      <h4 className="font-label-md text-label-md text-primary uppercase mb-md tracking-wider">Quick Links</h4>
      <ul className="space-y-sm">
      <li><a className="font-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="#">Active Listings</a></li>
      <li><a className="font-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="#">Portfolio Highlights</a></li>
      <li><a className="font-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="#">Investment Guide</a></li>
      <li><a className="font-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="#">Architectural Services</a></li>
      </ul>
      </div>
      <div>
      <h4 className="font-label-md text-label-md text-primary uppercase mb-md tracking-wider">Corporate</h4>
      <ul className="space-y-sm text-on-surface-variant font-body-sm">
      <li><a className="hover:text-primary hover:underline transition-all" href="#">Privacy Policy</a></li>
      <li><a className="hover:text-primary hover:underline transition-all" href="#">Terms of Service</a></li>
      <li><a className="hover:text-primary hover:underline transition-all" href="#">Licensing</a></li>
      <li><a className="hover:text-primary hover:underline transition-all" href="#">Careers</a></li>
      </ul>
      </div>
      <div>
      <h4 className="font-label-md text-label-md text-primary uppercase mb-md tracking-wider">Office</h4>
      <p className="font-body-sm text-on-surface-variant mb-base">888 Structural Way, Floor 12</p>
      <p className="font-body-sm text-on-surface-variant mb-base">San Francisco, CA 94103</p>
      <p className="font-body-sm text-on-surface-variant">contact@structura-arch.com</p>
      <p className="font-body-sm font-bold text-primary mt-sm">+1 (555) 012-9988</p>
      </div>
      </div>
      <div className="max-w-max-width mx-auto px-margin-desktop py-md border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-sm">
      <p className="font-label-sm text-label-sm text-on-surface-variant">© 2024 Structura Architectural Excellence. All rights reserved.</p>
      <div className="flex gap-md">
      <span className="font-label-sm text-label-sm text-on-surface-variant">Global Headquarters</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">ISO 9001 Certified</span>
      </div>
      </div>
      </footer>
      {/* Micro-interactions Script */}
    </>
  )
}
