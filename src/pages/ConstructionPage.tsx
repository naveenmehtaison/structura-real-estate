import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { images } from '../data/content'

const trades = ['Electrician', 'Plumber', 'Mason', 'Carpenter', 'Painter'] as const

const workersByTrade: Record<
  (typeof trades)[number],
  Array<{
    name: string
    role: string
    status: 'Available Now' | 'In Project'
    rating: string
    reviews: number
    exp: string
    rate: string
    bio: string
    image: string
  }>
> = {
  Electrician: [
    {
      name: 'Marcus Thorne',
      role: 'Master Electrician',
      status: 'Available Now',
      rating: '4.9',
      reviews: 124,
      exp: '15 yrs',
      rate: '$85',
      bio: 'Smart home automation and industrial panel expertise.',
      image: images.workerMarcus,
    },
    {
      name: 'Elena Rodriguez',
      role: 'Senior Electrician',
      status: 'In Project',
      rating: '5.0',
      reviews: 89,
      exp: '12 yrs',
      rate: '$92',
      bio: 'Solar integration and energy-efficient retrofits.',
      image: images.workerElena,
    },
    {
      name: 'David Chen',
      role: 'Journeyman Electrician',
      status: 'Available Now',
      rating: '4.2',
      reviews: 45,
      exp: '8 yrs',
      rate: '$65',
      bio: 'Lighting design and commercial circuit work.',
      image: images.workerDavid,
    },
  ],
  Plumber: [
    {
      name: 'Marcus Thorne',
      role: 'Master Plumber',
      status: 'Available Now',
      rating: '4.8',
      reviews: 98,
      exp: '14 yrs',
      rate: '$78',
      bio: 'High-rise riser systems and luxury bathroom fit-outs.',
      image: images.workerMarcus,
    },
    {
      name: 'Elena Rodriguez',
      role: 'Senior Plumber',
      status: 'Available Now',
      rating: '4.7',
      reviews: 72,
      exp: '11 yrs',
      rate: '$74',
      bio: 'Sustainable water systems and leak diagnostics.',
      image: images.workerElena,
    },
    {
      name: 'David Chen',
      role: 'Plumbing Specialist',
      status: 'In Project',
      rating: '4.4',
      reviews: 51,
      exp: '7 yrs',
      rate: '$60',
      bio: 'Residential rough-ins and fixture installations.',
      image: images.workerDavid,
    },
  ],
  Mason: [
    {
      name: 'Marcus Thorne',
      role: 'Master Mason',
      status: 'Available Now',
      rating: '4.9',
      reviews: 110,
      exp: '18 yrs',
      rate: '$88',
      bio: 'Stone cladding, structural brickwork, and restoration.',
      image: images.workerMarcus,
    },
    {
      name: 'Elena Rodriguez',
      role: 'Senior Mason',
      status: 'In Project',
      rating: '4.8',
      reviews: 66,
      exp: '13 yrs',
      rate: '$80',
      bio: 'Architectural concrete finishes and custom detailing.',
      image: images.workerElena,
    },
    {
      name: 'David Chen',
      role: 'Masonry Craftsman',
      status: 'Available Now',
      rating: '4.5',
      reviews: 40,
      exp: '9 yrs',
      rate: '$68',
      bio: 'Fireplace rebuilds and exterior wall systems.',
      image: images.workerDavid,
    },
  ],
  Carpenter: [
    {
      name: 'Marcus Thorne',
      role: 'Master Carpenter',
      status: 'Available Now',
      rating: '4.9',
      reviews: 132,
      exp: '16 yrs',
      rate: '$90',
      bio: 'Custom millwork and structural timber framing.',
      image: images.workerMarcus,
    },
    {
      name: 'Elena Rodriguez',
      role: 'Finish Carpenter',
      status: 'Available Now',
      rating: '5.0',
      reviews: 77,
      exp: '12 yrs',
      rate: '$85',
      bio: 'Cabinetry, trim, and bespoke interior joinery.',
      image: images.workerElena,
    },
    {
      name: 'David Chen',
      role: 'Carpenter',
      status: 'In Project',
      rating: '4.3',
      reviews: 38,
      exp: '6 yrs',
      rate: '$62',
      bio: 'Framing packages and site-built features.',
      image: images.workerDavid,
    },
  ],
  Painter: [
    {
      name: 'Marcus Thorne',
      role: 'Lead Painter',
      status: 'Available Now',
      rating: '4.7',
      reviews: 91,
      exp: '12 yrs',
      rate: '$70',
      bio: 'Decorative finishes and large-scale commercial coats.',
      image: images.workerMarcus,
    },
    {
      name: 'Elena Rodriguez',
      role: 'Senior Painter',
      status: 'Available Now',
      rating: '4.9',
      reviews: 84,
      exp: '10 yrs',
      rate: '$72',
      bio: 'Low-VOC interiors and precision color matching.',
      image: images.workerElena,
    },
    {
      name: 'David Chen',
      role: 'Painter',
      status: 'In Project',
      rating: '4.1',
      reviews: 29,
      exp: '5 yrs',
      rate: '$55',
      bio: 'Exterior envelopes and protective coatings.',
      image: images.workerDavid,
    },
  ],
}

export function ConstructionPage() {
  const [trade, setTrade] = useState<(typeof trades)[number]>('Electrician')
  const workers = useMemo(() => workersByTrade[trade], [trade])

  return (
    <>
      <section className="container-site py-12">
        <span className="mb-4 inline-block rounded-full bg-tertiary-fixed px-4 py-1 text-label text-on-tertiary-fixed-variant">
          Service Pillar: Construction
        </span>
        <h1 className="text-display mb-4 max-w-3xl text-primary">
          Expert Construction and <span className="text-on-tertiary-container">Renovation</span>{' '}
          Services
        </h1>
        <p className="mb-8 max-w-2xl text-body-lg text-on-surface-variant">
          Connect with highly vetted master craftsmen. From structural masonry to precision
          electrical engineering, hire professionals who deliver lasting quality.
        </p>
        <div className="mb-10 flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="rounded bg-on-tertiary-container px-6 py-3 text-label text-white transition hover:opacity-90"
          >
            Start Project
          </Link>
          <Link
            to="/portfolio"
            className="rounded border border-outline-variant px-6 py-3 text-label transition hover:bg-surface-container"
          >
            Browse Portfolio
          </Link>
        </div>
      </section>

      <div className="sticky top-20 z-40 border-y border-outline-variant bg-surface-container-lowest">
        <div className="container-site flex gap-6 overflow-x-auto py-3">
          {trades.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTrade(item)}
              className={`whitespace-nowrap pb-1 text-label transition ${
                trade === item
                  ? 'border-b-2 border-on-tertiary-container text-on-tertiary-container'
                  : 'text-on-surface-variant'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <section className="container-site py-12">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-headline-lg mb-2 text-primary">Certified Master {trade}s</h2>
            <p className="text-on-surface-variant">
              Vetted professionals specialized in residential and commercial work.
            </p>
          </div>
          <select className="rounded border border-outline-variant bg-surface-container-lowest px-3 py-2 text-sm">
            <option>Years of Experience</option>
            <option>Highest Rated</option>
            <option>Lowest Rate</option>
          </select>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {workers.map((worker) => (
            <article
              key={`${trade}-${worker.name}`}
              className="overflow-hidden rounded border border-outline-variant bg-surface-container-lowest"
            >
              <img src={worker.image} alt={worker.name} className="h-52 w-full object-cover" />
              <div className="p-5">
                <div className="mb-2 flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-headline text-xl text-primary">{worker.name}</h3>
                    <p className="text-sm text-on-surface-variant">{worker.role}</p>
                  </div>
                  <span
                    className={`rounded px-2 py-1 text-[10px] uppercase ${
                      worker.status === 'Available Now'
                        ? 'bg-secondary-container text-on-secondary-container'
                        : 'bg-tertiary-fixed text-on-tertiary-fixed-variant'
                    }`}
                  >
                    {worker.status}
                  </span>
                </div>
                <div className="mb-3 flex flex-wrap gap-3 text-xs text-on-surface-variant">
                  <span className="flex items-center gap-1">
                    <Icon name="star" filled className="text-[16px] text-ochre" />
                    {worker.rating} ({worker.reviews})
                  </span>
                  <span>{worker.exp}</span>
                  <span className="font-headline text-primary">{worker.rate}/hr</span>
                </div>
                <p className="mb-4 text-sm text-on-surface-variant">{worker.bio}</p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="flex-1 rounded bg-primary py-2 text-label text-on-primary transition hover:opacity-90"
                  >
                    Hire Now
                  </button>
                  <button
                    type="button"
                    className="flex-1 rounded border border-outline-variant py-2 text-label transition hover:bg-surface-container"
                  >
                    View Schedule
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-outline-variant bg-surface-container-low py-14">
        <div className="container-site grid grid-cols-1 gap-8 md:grid-cols-4">
          {[
            { icon: 'verified_user', title: 'Vetted Expertise', copy: 'Background checks and skill assessments on every professional.' },
            { icon: 'policy', title: 'Project Insurance', copy: 'Full liability bonding for peace of mind on every site.' },
            { icon: 'account_balance', title: 'Escrow Protection', copy: 'Funds released only on milestone sign-off.' },
            { icon: 'support_agent', title: '24/7 Concierge', copy: 'Site managers available around the clock.' },
          ].map((item) => (
            <div key={item.title} className="text-center md:text-left">
              <Icon name={item.icon} className="mb-3 text-[32px] text-on-tertiary-container" />
              <h3 className="mb-2 font-headline text-lg text-primary">{item.title}</h3>
              <p className="text-sm text-on-surface-variant">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
