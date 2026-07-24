import { useState } from 'react'
import { Icon } from '../components/Icon'
import { images } from '../data/content'

export function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  return (
    <>
      <section className="container-site py-12">
        <h1 className="text-display mb-4 text-primary">Connect with Structura</h1>
        <p className="mb-10 max-w-2xl text-body-lg text-on-surface-variant">
          Building excellence requires precision and open dialogue. We look forward to discussing
          your next architectural landmark.
        </p>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="rounded border border-outline-variant bg-surface-container-lowest p-6 lg:col-span-7 lg:p-8">
            <h2 className="mb-6 font-headline text-2xl text-primary">Get in Touch</h2>
            {status === 'sent' ? (
              <div className="rounded bg-secondary-container p-6 text-on-secondary-container">
                <p className="font-headline text-lg">Inquiry received</p>
                <p className="mt-2 text-sm">
                  Thank you for contacting Structura. A specialist will respond within one business
                  day.
                </p>
              </div>
            ) : (
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  setStatus('sending')
                  window.setTimeout(() => setStatus('sent'), 900)
                }}
              >
                <label className="block">
                  <span className="mb-1 block text-sm text-on-surface-variant">Full Name</span>
                  <input
                    required
                    className="w-full rounded border border-outline-variant px-3 py-2.5 text-sm outline-none focus:ring-1 focus:ring-secondary"
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-sm text-on-surface-variant">Email Address</span>
                  <input
                    type="email"
                    required
                    className="w-full rounded border border-outline-variant px-3 py-2.5 text-sm outline-none focus:ring-1 focus:ring-secondary"
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-sm text-on-surface-variant">Subject</span>
                  <select
                    required
                    className="w-full rounded border border-outline-variant px-3 py-2.5 text-sm outline-none focus:ring-1 focus:ring-secondary"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    <option>Residential Inquiry</option>
                    <option>Commercial Development</option>
                    <option>Design Consultation</option>
                    <option>Careers & Partnerships</option>
                  </select>
                </label>
                <label className="block">
                  <span className="mb-1 block text-sm text-on-surface-variant">Message</span>
                  <textarea
                    required
                    rows={5}
                    className="w-full rounded border border-outline-variant px-3 py-2.5 text-sm outline-none focus:ring-1 focus:ring-secondary"
                  />
                </label>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="rounded bg-primary-container px-8 py-3 text-label text-on-primary transition hover:opacity-90 disabled:opacity-70"
                >
                  {status === 'sending' ? 'Transmitting…' : 'Submit Inquiry'}
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-6 lg:col-span-5">
            <div className="overflow-hidden rounded border border-outline-variant">
              <img
                src={images.contactOffice}
                alt="Structura headquarters"
                className="h-48 w-full object-cover"
              />
            </div>
            <div className="rounded border border-outline-variant bg-surface-container-lowest p-6">
              <h3 className="mb-4 font-headline text-xl text-primary">Office Information</h3>
              <ul className="space-y-4 text-sm text-on-surface-variant">
                <li className="flex gap-3">
                  <Icon name="location_on" className="text-secondary" />
                  <span>482 Architectural Way, Suite 100, Design District, London, SW1A 1AA</span>
                </li>
                <li className="flex gap-3">
                  <Icon name="call" className="text-secondary" />
                  <a href="tel:+442079460123" className="hover:text-primary">
                    +44 (0) 20 7946 0123
                  </a>
                </li>
                <li className="flex gap-3">
                  <Icon name="mail" className="text-secondary" />
                  <a href="mailto:office@structura-arch.com" className="hover:text-primary">
                    office@structura-arch.com
                  </a>
                </li>
                <li className="flex gap-3">
                  <Icon name="schedule" className="text-secondary" />
                  <span>Mon–Fri 08:00–18:00 · Sat–Sun by appointment</span>
                </li>
              </ul>
            </div>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded bg-[#49935c] p-5 text-white transition hover:opacity-90"
            >
              <Icon name="chat" className="text-[28px]" />
              <div>
                <p className="text-label">Direct Consultation</p>
                <p className="text-sm opacity-90">Message us on WhatsApp</p>
              </div>
            </a>
          </aside>
        </div>
      </section>

      <section className="relative mt-4 h-[450px] w-full overflow-hidden border-t border-outline-variant bg-surface-container">
        <iframe
          title="Structura headquarters map"
          className="h-full w-full border-0 grayscale"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-0.145%2C51.500%2C-0.120%2C51.510&layer=mapnik&marker=51.505%2C-0.132"
        />
        <div className="absolute bottom-6 left-6 max-w-sm rounded border border-outline-variant bg-surface-container-lowest p-5 shadow-sm">
          <p className="font-headline text-lg text-primary">Structura Main Office</p>
          <p className="mt-1 text-sm text-on-surface-variant">
            Access via North Gate. Visitor parking available in Basement B2.
          </p>
          <a
            href="https://www.openstreetmap.org/?mlat=51.505&mlon=-0.132#map=16/51.505/-0.132"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-label text-secondary hover:underline"
          >
            Get Directions <Icon name="arrow_outward" className="text-[16px]" />
          </a>
        </div>
      </section>
    </>
  )
}
