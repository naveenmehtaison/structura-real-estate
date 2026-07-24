import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { images, properties } from '../data/content'

const gallery = [
  images.obsidianMain,
  images.obsidianThumb1,
  images.obsidianThumb2,
  images.obsidianThumb3,
  images.obsidianThumb4,
  images.obsidianThumb5,
]

const amenities = [
  { icon: 'local_parking', label: 'Secure Parking' },
  { icon: 'security', label: '24/7 Security' },
  { icon: 'bolt', label: 'Power Backup' },
  { icon: 'fitness_center', label: 'Premium Gym' },
  { icon: 'pool', label: 'Infinity Pool' },
  { icon: 'wifi', label: 'Fiber Optic' },
  { icon: 'deck', label: 'Private Deck' },
  { icon: 'room_service', label: 'Concierge' },
]

const nearby = [
  { icon: 'local_hospital', place: 'City General Hospital', distance: '1.2 km' },
  { icon: 'school', place: 'St. Jude International School', distance: '0.8 km' },
  { icon: 'train', place: 'Metro Station Central', distance: '0.4 km' },
  { icon: 'flight', place: 'International Airport', distance: '12.5 km' },
]

export function PropertyDetailsPage() {
  const { id } = useParams()
  const property = properties.find((p) => p.id === id) ?? properties.find((p) => p.id === 'obsidian-heights')!
  const [active, setActive] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="container-site py-8">
      <nav className="mb-6 text-sm text-on-surface-variant">
        <Link to="/properties" className="hover:text-primary">
          Properties
        </Link>
        <span className="mx-2">›</span>
        <span className="capitalize">{property.category}</span>
        <span className="mx-2">›</span>
        <span className="text-primary">{property.name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="relative mb-3 overflow-hidden rounded border border-outline-variant">
            <img
              key={gallery[active]}
              src={gallery[active] ?? property.image}
              alt={property.name}
              className="aspect-video w-full object-cover animate-[fade_0.35s_ease]"
            />
            <span className="absolute bottom-3 right-3 rounded bg-primary/80 px-3 py-1 text-xs text-white">
              {active + 1}/12 Photos
            </span>
          </div>
          <div className="mb-8 grid grid-cols-3 gap-2 sm:grid-cols-6">
            {gallery.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setActive(index)}
                className={`overflow-hidden rounded border ${
                  active === index ? 'border-primary' : 'border-outline-variant'
                }`}
              >
                <img src={src} alt="" className="aspect-square h-20 w-full object-cover" />
              </button>
            ))}
            <div className="flex aspect-square h-20 items-center justify-center rounded border border-outline-variant bg-surface-container text-sm text-on-surface-variant">
              +8 More
            </div>
          </div>

          <div className="mb-8 grid grid-cols-2 gap-4 rounded border border-outline-variant bg-surface-container-lowest p-6 sm:grid-cols-4">
            <div>
              <p className="text-label text-on-surface-variant">Price</p>
              <p className="font-headline text-xl text-primary">{property.price}</p>
            </div>
            <div>
              <p className="text-label text-on-surface-variant">Status</p>
              <p className="font-headline text-xl text-[#005226]">Ready to Move</p>
            </div>
            <div>
              <p className="text-label text-on-surface-variant">Area</p>
              <p className="font-headline text-xl text-primary">{property.area}</p>
            </div>
            <div>
              <p className="text-label text-on-surface-variant">Config</p>
              <p className="font-headline text-xl text-primary">
                {property.beds ?? 4} Bed / {property.baths ?? 4.5} Bath
              </p>
            </div>
          </div>

          <h1 className="text-headline-lg mb-4 text-primary">{property.name}</h1>
          <p className="mb-4 text-body-md text-on-surface-variant">
            Located in the heart of the architectural district, The Obsidian Heights represents the
            pinnacle of structuralist design and modern corporate living. This exceptional 4-bedroom
            penthouse offers an unparalleled blend of spatial efficiency and aesthetic grandeur.
          </p>
          <p className="mb-8 text-body-md text-on-surface-variant">
            Featuring triple-height ceilings in the main gallery and automated climate controls
            integrated seamlessly into the structural facade, every detail has been engineered for
            lasting comfort and distinction.
          </p>

          <h2 className="mb-4 font-headline text-2xl text-primary">Amenities</h2>
          <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {amenities.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 rounded border border-outline-variant bg-surface-container-lowest p-3 text-sm"
              >
                <Icon name={item.icon} className="text-secondary" />
                {item.label}
              </div>
            ))}
          </div>

          <h2 className="mb-4 font-headline text-2xl text-primary">Connectivity</h2>
          <div className="mb-10 space-y-3">
            {nearby.map((item) => (
              <div
                key={item.place}
                className="flex items-center justify-between rounded border border-outline-variant bg-surface-container-lowest px-4 py-3"
              >
                <span className="flex items-center gap-2 text-sm">
                  <Icon name={item.icon} className="text-on-primary-container" />
                  {item.place}
                </span>
                <span className="text-label text-on-surface-variant">{item.distance}</span>
              </div>
            ))}
          </div>

          <h2 className="mb-4 font-headline text-2xl text-primary">Neighborhood Context</h2>
          <div className="relative overflow-hidden rounded border border-outline-variant">
            <img
              src={images.mapNeighborhood}
              alt="Neighborhood map"
              className="h-72 w-full object-cover grayscale"
            />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded bg-primary px-3 py-2 text-xs text-white shadow">
              The Obsidian Heights
            </div>
          </div>
        </div>

        <aside className="h-fit rounded border border-outline-variant bg-surface-container-lowest p-6 lg:sticky lg:top-24 lg:col-span-4">
          <h3 className="mb-4 font-headline text-xl text-primary">Inquire About This Property</h3>
          {submitted ? (
            <p className="rounded bg-secondary-container p-4 text-sm text-on-secondary-container">
              Thank you — your inquiry has been sent. An advisor will respond shortly.
            </p>
          ) : (
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
            >
              <label className="block">
                <span className="mb-1 block text-sm text-on-surface-variant">Full Name</span>
                <input
                  required
                  className="w-full rounded border border-outline-variant px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-secondary"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm text-on-surface-variant">Professional Email</span>
                <input
                  type="email"
                  required
                  className="w-full rounded border border-outline-variant px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-secondary"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm text-on-surface-variant">Message</span>
                <textarea
                  required
                  rows={4}
                  className="w-full rounded border border-outline-variant px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-secondary"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded bg-primary py-3 text-label text-on-primary transition hover:opacity-90"
              >
                Submit Inquiry
              </button>
            </form>
          )}
          <button
            type="button"
            className="mt-3 w-full rounded border border-outline-variant py-3 text-label transition hover:bg-surface-container"
          >
            Schedule Visit
          </button>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex w-full items-center justify-center gap-2 rounded bg-whatsapp py-3 text-label text-white transition hover:opacity-90"
          >
            <Icon name="chat" /> WhatsApp Us
          </a>
          <div className="mt-6 border-t border-outline-variant pt-6">
            <p className="text-label text-on-surface-variant">Listing Agent</p>
            <p className="mt-1 font-headline text-lg text-primary">Marcus Vance</p>
            <p className="text-sm text-on-surface-variant">Senior Portfolio Manager</p>
          </div>
        </aside>
      </div>

      <style>{`
        @keyframes fade {
          from { opacity: 0.4; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  )
}
