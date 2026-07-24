import { Link } from 'react-router-dom'
import { images } from '../data/content'

const sold = [
  { name: 'The Obsidian Villa', type: 'Estate', location: 'Beverly Hills, CA', price: '$12,450,000', date: 'Oct 14, 2023', image: images.soldObsidian },
  { name: 'Skyline Penthouse', type: 'Condo', location: 'Lower Manhattan, NY', price: '$8,900,000', date: 'Sep 28, 2023', image: images.soldSkyline },
  { name: 'Apex HQ Building', type: 'Commercial', location: 'Austin, TX', price: '$45,000,000', date: 'Aug 12, 2023', image: images.soldApex },
  { name: 'Heritage Ranch', type: 'Residential', location: 'Aspen, CO', price: '$15,200,000', date: 'Jul 30, 2023', image: images.soldHeritage },
  { name: 'Cove Residence', type: 'Waterfront', location: 'Miami, FL', price: '$7,100,000', date: 'Jun 15, 2023', image: images.soldCove },
  { name: 'The Foundry Lofts', type: 'Loft', location: 'Chicago, IL', price: '$3,450,000', date: 'May 22, 2023', image: images.soldFoundry },
]

const stats = [
  { label: 'Total Sales Value', value: '$428.5M' },
  { label: 'Properties Sold', value: '124' },
  { label: 'Avg. Days on Market', value: '18 Days' },
  { label: 'Success Rate', value: '98.2%' },
]

export function SoldPage() {
  return (
    <>
      <section className="container-site py-12">
        <p className="mb-2 text-label text-secondary">Portfolio</p>
        <h1 className="text-display mb-4 text-primary">Sold Properties</h1>
        <p className="mb-8 max-w-2xl text-body-lg text-on-surface-variant">
          A showcase of successful transactions and architectural legacies recently transferred to
          their new owners.
        </p>

        <div className="mb-10 grid grid-cols-2 gap-4 border border-outline-variant bg-surface-container-lowest p-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="font-headline text-2xl text-primary md:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-on-surface-variant">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sold.map((item) => (
            <article
              key={item.name}
              className="group overflow-hidden rounded border border-outline-variant bg-surface-container-lowest"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 top-6 -rotate-12 bg-black/85 py-2 text-center text-label text-white backdrop-blur-sm">
                  Sold
                </div>
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <h3 className="font-headline text-xl text-primary">{item.name}</h3>
                  <span className="rounded bg-surface-container px-2 py-1 text-[10px] uppercase text-on-surface-variant">
                    {item.type}
                  </span>
                </div>
                <p className="mb-4 text-sm text-on-surface-variant">{item.location}</p>
                <div className="flex items-center justify-between border-t border-outline-variant pt-4">
                  <span className="font-headline text-lg text-primary">{item.price}</span>
                  <span className="text-label text-on-surface-variant">{item.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary py-16 text-on-primary">
        <div className="container-site text-center">
          <h2 className="text-headline-lg mb-4">Have a property you&apos;re looking to list?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-on-primary/80">
            Our architectural marketing approach positions your asset for premium buyers and
            decisive closings.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded bg-[#49935c] px-8 py-3 text-label text-white transition hover:opacity-90"
            >
              Get a Valuation
            </Link>
            <Link
              to="/contact"
              className="rounded border border-white px-8 py-3 text-label transition hover:bg-white/10"
            >
              Speak to an Agent
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
