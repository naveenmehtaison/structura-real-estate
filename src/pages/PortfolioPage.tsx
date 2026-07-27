import { Link } from 'react-router-dom'

export function PortfolioPage() {
  return (
    <>
      {/* TopNavBar */}
      <header className="w-full top-0 sticky bg-surface-container-lowest z-50 border-b border-outline-variant">
      <div className="flex justify-between items-center max-w-max-width mx-auto px-margin-desktop h-20">
      <div className="font-headline-md text-headline-md font-bold text-primary tracking-tighter">
                      Strucura
                  </div>
      <nav className="hidden md:flex items-center gap-lg">
      <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/">Home</Link>
      <Link className="font-label-md text-label-md text-primary border-b-2 border-primary pb-1" to="/properties">Properties</Link>
      <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/construction">Construction</Link>
      <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/about">About</Link>
      <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/contact">Contact</Link>
      </nav>
      <div className="flex items-center gap-sm">
      <div className="hidden lg:flex items-center bg-surface-container-low px-sm py-xs border border-outline-variant">
      <span className="material-symbols-outlined text-on-surface-variant mr-xs">search</span>
      <input className="bg-transparent border-none focus:ring-0 text-body-sm w-32" placeholder="Search projects..." type="text"/>
      </div>
      <button className="bg-primary text-on-primary px-lg py-xs font-label-md text-label-md uppercase tracking-wider rounded">
                          Inquire
                      </button>
      </div>
      </div>
      </header>
      <main className="flex-grow max-w-max-width mx-auto px-margin-desktop py-xl">
      {/* Header Section */}
      <section className="mb-xl">
      <div className="max-w-3xl">
      <h1 className="font-display-lg text-display-lg mb-md text-primary">Completed Projects Showcase</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant">Explore our portfolio of high-stakes architectural achievements, ranging from expansive residential complexes to precision-engineered renovations.</p>
      </div>
      {/* Filters */}
      <div className="flex flex-wrap gap-sm mt-lg">
      <button className="px-md py-xs bg-primary text-on-primary font-label-md text-label-md rounded">All Projects</button>
      <button className="px-md py-xs bg-surface-container-lowest border border-outline-variant hover:bg-surface-container-low font-label-md text-label-md rounded transition-all">Residential</button>
      <button className="px-md py-xs bg-surface-container-lowest border border-outline-variant hover:bg-surface-container-low font-label-md text-label-md rounded transition-all">Commercial</button>
      <button className="px-md py-xs bg-surface-container-lowest border border-outline-variant hover:bg-surface-container-low font-label-md text-label-md rounded transition-all">Renovations</button>
      </div>
      </section>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter">
      {/* Project Card 1: Large (Residential) */}
      <div className="lg:col-span-8 group bg-surface-container-lowest border border-outline-variant overflow-hidden">
      <div className="aspect-video w-full overflow-hidden relative">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A wide-angle professional architectural photograph of a contemporary luxury residential complex at sunset. The building features clean geometric lines, floor-to-ceiling glass windows reflecting warm twilight skies, and premium concrete finishes. The landscaping is minimalist with structural greenery. The lighting is soft and high-end, emphasizing the structural integrity and modern corporate aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc9t588vJvdI4zwL376k3qMkK0jwa1AbgVZsyhK41eoEaZPVpj8Fv_21ABOdmhiJDFKpZ-tGkdRirPm6NNnZqjjUiJS_JnSabqDJKpnk9pBJduLCxqWv5iTMlj2NUQ_U-D4cHJu0b2nFh5L7Cacvi_tQG_0LpuNnce-K0wW3qH4o7K2-Mf_2Kn2Y5ov9HkOKGcZnYX89i9rJAjiSCPkpb5Mwc6OGOkhqzwS1dOwjuvdYAvqiNuu5rCEKY1uxqXrRxO_r-ukqSxcIID"/>
      <div className="absolute top-sm left-sm px-sm py-1 bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest">Featured</div>
      </div>
      <div className="p-lg">
      <div className="flex justify-between items-start">
      <div>
      <h3 className="font-headline-md text-headline-md mb-xs">The Meridian Heights</h3>
      <p className="font-body-md text-body-md text-on-surface-variant flex items-center">
      <span className="material-symbols-outlined text-sm mr-1">location_on</span> Oslo, Norway
                                  </p>
      </div>
      <div className="text-right">
      <span className="block font-label-md text-label-md text-primary">Completed</span>
      <span className="block font-body-sm text-body-sm text-on-surface-variant">Oct 2023</span>
      </div>
      </div>
      <div className="mt-md pt-md border-t border-outline-variant flex justify-between items-center">
      <span className="bg-secondary-container text-on-secondary-container px-sm py-1 rounded font-label-sm text-label-sm">Residential Complex</span>
      <a className="flex items-center font-label-md text-label-md text-primary hover:underline" href="#">
                                  View Details <span className="material-symbols-outlined ml-1">arrow_forward</span>
      </a>
      </div>
      </div>
      </div>
      {/* Project Card 2: Medium (Before & After) */}
      <div className="lg:col-span-4 group bg-surface-container-lowest border border-outline-variant flex flex-col">
      <div className="before-after-slider h-64 w-full cursor-ew-resize" id="slider-1">
      {/* Before Image */}
      <div className="absolute inset-0 bg-cover bg-center" data-alt="A grainy, high-contrast interior photograph showing a dilapidated 1970s kitchen before renovation. Dated wood cabinets, stained linoleum flooring, and dim fluorescent lighting create a sense of neglect. The mood is utilitarian and outdated, highlighting the significant transformation required by Structura's architectural team." style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuCJ2mvTJD9qPe1u_cfJMAkfdvpptzSgBY46WDa_uke3lJ185gh-LqtkrwRdLRM7Au7eXlaO5vIX-BB38FY2k1rKHpesgkkJo6zsYs57O7O0kAvfxkZY3DWa8QESTjDjLN6lhZWm02eC7r7Vn_CKxwOhYig3CL2jqHrFnmeBtTxduW1v7_ouLInfkqHIUiE6vbqpYIfJacXHQc6lSxiqIMXO5Isy6Y8xvC5Z97p2dnF2d4VFxHd1wjK4gkMRlOuKgQvhRhEIoJXigziw\')' }}></div>
      {/* After Image */}
      <div className="after-img bg-cover bg-center transition-all duration-300" data-alt="A high-end architectural interior photograph of a fully renovated modern kitchen. Features include matte charcoal cabinetry, white marble countertops, brushed gold hardware, and recessed warm LED lighting. The floor is polished concrete. The atmosphere is sophisticated, airy, and exemplifies structural precision and modern luxury." style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuC_DuCtIFGCSDlbcJ8itSdekHE6sbiZvzyFy1QdHoAEVcoC_d8tkc4_P_KUSlAzJAsfpzdwsPUuE23V1l_beeOl8eDRYkA5nt1lQPWoHL_GWbs9s9AhzdqfM5L1DNV97jvACvke2qvtPWfgvP7wc8FnBULkkJfTWiL2YUjrstylkFo3H2q_3Qi5BVtUrXUx3zTbv4253c3dcHr0D9PNRXdHCF3GbIw75eg94uojovUI1Ddk4njjD4DAGHtsE9QrlVKb2rcBn6XIMBoo\')' }}></div>
      <div className="slider-handle"></div>
      <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/50 text-white font-label-sm text-[10px] uppercase">Before</div>
      <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/50 text-white font-label-sm text-[10px] uppercase">After</div>
      </div>
      <div className="p-md flex-grow">
      <h3 className="font-headline-sm text-headline-sm mb-xs">Vanguard Kitchen Redesign</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">Stockholm, Sweden • May 2023</p>
      <span className="bg-tertiary-container text-on-tertiary-container px-sm py-1 rounded font-label-sm text-label-sm">Kitchen Renovation</span>
      </div>
      </div>
      {/* Project Card 3: Grid Item */}
      <div className="lg:col-span-4 group bg-surface-container-lowest border border-outline-variant">
      <div className="aspect-[4/3] overflow-hidden">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A professional vertical shot of a modern office building lobby with high ceilings and structural steel beams. The flooring is polished gray stone, and the space is filled with natural light from a large glass atrium. The setting is professional and quiet, conveying the corporate reliability and strength of the construction. Dominant colors are slate, steel blue, and white." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc0vw4MOG2DQYbjekhuzGxw0jpYicAvesD22MepvozXEzB3qcDID59Ieamnm_vC3vF3pxBEzKjM1G6h3N_JlZeHFO0l1kkYxT31Z-v5hxGEJckjJuiqKUPnNtE5NGmRxyNSVK8mxF9WPYSjCh9CpCRCiP8q8pg6PRsaLTTDbeUQNZkckRpPrRQRFjbLmvDivmQcswXOovLE0ojyrTWBnQFW6PBWKWIvxMAzVRaZpo97XwWvvhBtSZc48yYBsib3MD6aTb5ukGqR68a"/>
      </div>
      <div className="p-md">
      <h3 className="font-headline-sm text-headline-sm mb-xs">Stellar HQ Atrium</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Berlin, Germany • Aug 2023</p>
      <div className="mt-md flex justify-between items-center">
      <span className="bg-secondary-container text-on-secondary-container px-sm py-1 rounded font-label-sm text-label-sm">Commercial</span>
      <span className="material-symbols-outlined text-outline">verified</span>
      </div>
      </div>
      </div>
      {/* Project Card 4: Grid Item */}
      <div className="lg:col-span-4 group bg-surface-container-lowest border border-outline-variant">
      <div className="aspect-[4/3] overflow-hidden">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="An exterior shot of a brutalist-inspired concrete villa nestled in a forest. The architecture uses heavy concrete slabs and large glass panels to integrate with the surrounding pine trees. The lighting is diffused daylight, highlighting the raw textures of the concrete and the precision of the construction joints. A serene, stable, and high-contrast composition." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyz4oSOxZM8eVVf6YcXq0bcLxNzFal5uKo4vnXvfK4WB2qfplUcSk5nDm5htqP2MI39V50ok_krn4Q4IrCQVU7atVdq-0nZlpgusb5QXlfYawXSypOXknE-tAN0yjw0pwdalADtz-2Bzi9aQTrRrh5pbAoR74JQfD0CYT3TMkf-0dAqdUCd-1ShQ7MZe6V_rNbXY1vNUrP0d54V-Tn4g3yve5ft53Iy4DVpoBE4TOjJ2nBl8GWRrMHZx_Ol7IdiKnql-u_c9iUdKgv"/>
      </div>
      <div className="p-md">
      <h3 className="font-headline-sm text-headline-sm mb-xs">The Concrete Retreat</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Helsinki, Finland • Jan 2024</p>
      <div className="mt-md flex justify-between items-center">
      <span className="bg-secondary-container text-on-secondary-container px-sm py-1 rounded font-label-sm text-label-sm">Residential</span>
      <span className="material-symbols-outlined text-outline">verified</span>
      </div>
      </div>
      </div>
      {/* Project Card 5: Before & After */}
      <div className="lg:col-span-4 group bg-surface-container-lowest border border-outline-variant flex flex-col">
      <div className="before-after-slider h-full w-full cursor-ew-resize" id="slider-2">
      <div className="absolute inset-0 bg-cover bg-center" data-alt="A wide shot of an abandoned industrial warehouse with broken windows, rusted girders, and debris-covered floors. The lighting is harsh and dusty. This serves as the 'before' state for a major urban loft conversion project, showcasing the structural challenges and the raw starting point for Structura's renovation." style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuBn1nud-4Nvsl61DCANpJXrDs51vRyL81bypPCwxo2nJocCfjTP-hWIkx0NdIKyeYJb7WgjZdT9vzFsEXtPXzrhTYgseqdOMFYpBv5L_JjhNfbmsxWbhXnbZ80Nu5sjt__z_ZLODFjYsKgCMoAsij6qcrF1yozEOQdOoMofz5jM2rbJ3tKr6_FhTSqyyiBkJXo4NmLBiwHp6rUt0iFvsBXw9Pu_hkgnIqVHVqQI66r4sMcxHls8rZsFPtxUK031dk9Ml2yO_tyzg0Nn\')' }}></div>
      <div className="after-img bg-cover bg-center transition-all duration-300" data-alt="A breathtaking photograph of a luxury industrial loft conversion in a former warehouse. High-polished wood floors, sandblasted brick walls, and modern black steel staircases are visible. The lighting is sophisticated gallery-style track lighting. The mood is premium, urban, and expertly crafted, demonstrating the peak of renovation quality." style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuDMveDkiHTEMjf5KayMBY_f-6EjpB4EeC2InoCpnayqryG1LmNjQ9c-t4PlMparW-b4WhHi4_dSdPgQeWSeAUu4X5-BDMslnN3OnGDAEDZOeBK4GsoONvi8Mrnq4d7Q64Wwc2Xo1Wc_hZ-klJ5CckXjO1PxAI2pSH18LygAKiTV2qk5DUrepwMQRJNSwrXEdpOgRfIWl0o14nob4t-1PXINEYlIBOD7nXCk1GqFLUuf8oasGT6gc00m9D3cFylrsu1me9kQAjV_3Mpp\')' }}></div>
      <div className="slider-handle"></div>
      </div>
      <div className="p-md">
      <h3 className="font-headline-sm text-headline-sm mb-xs">Warehouse No. 9 Lofts</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">London, UK • Dec 2023</p>
      <span className="bg-tertiary-container text-on-tertiary-container px-sm py-1 rounded font-label-sm text-label-sm">Urban Conversion</span>
      </div>
      </div>
      </div>
      {/* Load More */}
      <div className="mt-xl flex justify-center">
      <button className="flex items-center gap-sm px-xl py-md border border-outline text-primary font-label-md text-label-md hover:bg-surface-container-low transition-colors rounded">
                      LOAD MORE PROJECTS <span className="material-symbols-outlined">expand_more</span>
      </button>
      </div>
      </main>
      {/* Footer */}
      <footer className="w-full mt-auto bg-surface-container-highest border-t border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-max-width mx-auto px-margin-desktop py-xl">
      <div className="col-span-1">
      <div className="font-headline-sm text-headline-sm font-bold text-primary mb-md">Structura</div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Architectural excellence for high-stakes real estate and structural innovation. Built on a legacy of precision.</p>
      </div>
      <div>
      <h4 className="font-label-md text-label-md text-primary mb-sm uppercase tracking-wider">Quick Links</h4>
      <ul className="flex flex-col gap-xs">
      <li><Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all" to="/properties">Properties</Link></li>
      <li><Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all" to="/construction">Construction Services</Link></li>
      <li><a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all" href="#">Sustainability</a></li>
      <li><a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all" href="#">Investor Relations</a></li>
      </ul>
      </div>
      <div>
      <h4 className="font-label-md text-label-md text-primary mb-sm uppercase tracking-wider">Company</h4>
      <ul className="flex flex-col gap-xs">
      <li><a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all" href="#">Careers</a></li>
      <li><a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all" href="#">Licensing</a></li>
      <li><a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all" href="#">Privacy Policy</a></li>
      <li><a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all" href="#">Terms of Service</a></li>
      </ul>
      </div>
      <div>
      <h4 className="font-label-md text-label-md text-primary mb-sm uppercase tracking-wider">Newsletter</h4>
      <div className="flex">
      <input className="bg-surface-container-low border border-outline-variant p-2 text-body-sm flex-grow rounded-l" placeholder="Email Address" type="email"/>
      <button className="bg-primary text-on-primary px-sm py-2 rounded-r">
      <span className="material-symbols-outlined">send</span>
      </button>
      </div>
      <div className="mt-md flex gap-sm">
      <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">share</span>
      <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">public</span>
      <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">business</span>
      </div>
      </div>
      </div>
      <div className="border-t border-outline-variant py-md">
      <div className="max-w-max-width mx-auto px-margin-desktop flex justify-between items-center">
      <span className="font-label-sm text-label-sm text-on-surface-variant">© 2024 Structura Architectural Excellence. All rights reserved.</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">ISO 9001 Certified Construction</span>
      </div>
      </div>
      </footer>
      {/* Interactive Logic for Before/After Slider */}
    </>
  )
}
