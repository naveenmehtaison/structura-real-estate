import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { featuredProperties, images } from '../data/content'

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    let start: number | null = null
    let frame = 0
    const step = (ts: number) => {
      if (start === null) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      setValue(Math.floor(progress * target))
      if (progress < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [active, target, duration])
  return value
}

function StatCard({
  icon,
  title,
  subtitle,
}: {
  icon: string
  title: string
  subtitle: string
}) {
  return (
    <div className="flex flex-col items-center rounded border-t-4 border-primary-fixed-dim bg-surface-container-lowest p-5 text-center shadow-sm sm:p-6">
      <Icon name={icon} className="mb-3 text-[40px] text-on-primary-container sm:mb-4 sm:text-[48px]" />
      <h3 className="mb-2 font-headline text-xl text-primary sm:text-2xl">{title}</h3>
      <p className="text-sm text-on-surface-variant">{subtitle}</p>
    </div>
  )
}

export function HomePage() {
  const statsRef = useRef<HTMLElement>(null)
  const [statsVisible, setStatsVisible] = useState(false)
  const years = useCountUp(30, statsVisible)

  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true)
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Hero — responsive, full-width copy */}
      <section className="relative w-full bg-surface-container-lowest">
        <div className="container-site grid grid-cols-1 items-center gap-8 py-10 md:gap-10 md:py-14 lg:grid-cols-2 lg:gap-14 lg:py-16">
          <div className="z-10 flex w-full min-w-0 flex-col max-lg:order-2">
            <span className="mb-3 inline-flex w-fit rounded bg-secondary-container px-3 py-1 text-label text-on-secondary-container sm:mb-4 sm:px-4">
              1994 Se Trusted
            </span>
            <h1 className="mb-4 w-full font-display text-[clamp(1.85rem,5.5vw,3rem)] font-extrabold leading-[1.15] tracking-tight text-primary sm:mb-5">
              Dream Home Dhundo, Future Secure Karo
            </h1>
            <p className="mb-6 w-full max-w-xl text-base leading-relaxed text-on-surface-variant sm:mb-8 sm:text-lg">
              30+ saalon ka experience — verified properties, strong construction, aur bilkul clear
              deals. Blueprint se keys tak, hum aapke saath hain.
            </p>
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded bg-secondary px-6 py-3.5 text-label text-on-secondary transition hover:opacity-90"
              >
                Portfolio Dekho <Icon name="arrow_forward" className="text-[20px]" />
              </Link>
              <Link
                to="/construction"
                className="inline-flex items-center justify-center rounded border border-tertiary-container px-6 py-3.5 text-label text-on-tertiary-container transition hover:bg-tertiary-fixed"
              >
                Construction Services
              </Link>
            </div>
          </div>

          <div className="relative w-full min-w-0 overflow-hidden rounded-xl border border-outline-variant max-lg:order-1">
            <div className="aspect-[4/3] w-full sm:aspect-[16/11] lg:aspect-auto lg:h-[min(560px,70vh)]">
              <img
                src={images.heroHome}
                alt="Modern dream home at sunset"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
            <div className="absolute bottom-3 left-3 right-3 rounded border border-secondary bg-surface-container-lowest/95 p-3 shadow-sm backdrop-blur-md sm:bottom-4 sm:left-auto sm:right-4 sm:w-auto sm:max-w-[220px]">
              <p className="text-label text-secondary">Skyline Residence</p>
              <p className="text-sm text-on-surface-variant">Featured Project</p>
            </div>
          </div>
        </div>
      </section>

      <section ref={statsRef} className="border-y border-outline-variant bg-surface-container-low py-10 sm:py-14">
        <div className="container-site grid grid-cols-1 gap-5 sm:gap-8 md:grid-cols-3">
          <StatCard
            icon="history"
            title={`${years}+ Saal`}
            subtitle="Architecture aur engineering mein solid experience"
          />
          <StatCard
            icon="engineering"
            title="Skilled Team"
            subtitle="Certified architects aur trusted craftsmen ready hain"
          />
          <StatCard
            icon="verified"
            title="Verified Listings"
            subtitle="Har property legal check ke saath — no tension"
          />
        </div>
      </section>

      <section className="container-site py-12 sm:py-16">
        <div className="mb-6 flex flex-col items-start justify-between gap-3 sm:mb-8 sm:gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-headline-lg mb-2 text-primary">Featured Properties</h2>
            <p className="text-body-md text-on-surface-variant">
              Handpicked homes — investment ke liye perfect.
            </p>
          </div>
          <Link
            to="/properties"
            className="text-label text-secondary underline underline-offset-4 transition hover:opacity-70"
          >
            Saari Properties Dekho
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProperties.map((property) => (
            <Link
              key={property.id}
              to={`/properties/${property.id === 'oak-atrium' ? 'obsidian-heights' : property.id}`}
              className="group overflow-hidden rounded border border-outline-variant bg-surface-container-lowest transition-colors hover:border-secondary"
            >
              <div className="relative h-52 overflow-hidden sm:h-64">
                <img
                  src={property.image}
                  alt={property.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {property.featured ? (
                  <span className="absolute left-3 top-3 rounded bg-secondary px-2 py-1 text-[10px] uppercase tracking-wider text-on-secondary sm:left-4 sm:top-4">
                    Featured
                  </span>
                ) : null}
              </div>
              <div className="p-4 sm:p-6">
                <div className="mb-2 flex items-start justify-between gap-2 sm:mb-3">
                  <h4 className="font-headline text-lg text-primary sm:text-xl">{property.name}</h4>
                  <span className="shrink-0 rounded bg-secondary-container px-2 py-1 text-[10px] text-on-secondary-container">
                    For Sale
                  </span>
                </div>
                <p className="mb-3 text-sm text-on-surface-variant sm:mb-4">{property.location}</p>
                <div className="flex items-center justify-between border-t border-outline-variant pt-3 sm:pt-4">
                  <div className="flex gap-3 text-xs text-on-surface-variant sm:gap-4">
                    <span className="flex items-center gap-1">
                      <Icon name="bed" className="text-[18px]" /> {property.beds}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="bathtub" className="text-[18px]" /> {property.baths}
                    </span>
                  </div>
                  <span className="font-headline text-lg text-secondary sm:text-xl">
                    {property.price}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-primary-container py-12 text-on-primary sm:py-16">
        <div className="container-site">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="order-2 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:order-1">
              {[
                {
                  icon: 'architecture',
                  title: 'Construction',
                  copy: 'Ground-up building — strong structure, on-time delivery.',
                },
                {
                  icon: 'video_file',
                  title: 'Renovation',
                  copy: 'Purane ghar ko naya look — modern aur stylish.',
                },
                {
                  icon: 'build',
                  title: 'Maintenance',
                  copy: 'Property ki care, taaki value hamesha top rahe.',
                },
                {
                  icon: 'handshake',
                  title: 'Consultancy',
                  copy: 'Planning se budget tak — expert advice milta hai.',
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="rounded border border-on-tertiary-container/30 bg-tertiary-container/10 p-5 transition hover:bg-tertiary-container/20 sm:p-6"
                >
                  <Icon
                    name={service.icon}
                    className="mb-3 text-[28px] text-on-tertiary-container sm:text-[32px]"
                  />
                  <h4 className="mb-2 font-headline text-lg sm:text-xl">{service.title}</h4>
                  <p className="text-sm text-on-primary-container">{service.copy}</p>
                </div>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-4 font-display text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold leading-tight text-on-primary sm:mb-6">
                Poori Construction Support — Ek Jagah
              </h2>
              <p className="mb-6 text-base leading-relaxed text-on-primary-container sm:mb-8 sm:text-lg">
                Idea se execution tak hum handle karte hain. Best engineers, clear timelines, aur
                quality jo aap feel kar sako.
              </p>
              <Link
                to="/construction"
                className="inline-flex items-center gap-2 text-label text-on-tertiary-container hover:underline"
              >
                Saari Services Dekho <Icon name="arrow_outward" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-12 sm:py-16">
        <div className="container-site">
          <div className="mb-8 text-center sm:mb-12">
            <h2 className="text-headline-lg mb-2 text-primary">Log Kyun Trust Karte Hain</h2>
            <p className="text-body-md text-on-surface-variant">
              Hamari success = aapki smile aur satisfied families.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            <blockquote className="flex flex-col justify-between rounded-2xl border border-outline-variant border-l-4 border-l-on-primary-container bg-surface-container-lowest p-6 shadow-sm sm:p-8">
              <p className="mb-6 text-base italic leading-relaxed text-on-surface-variant sm:mb-8 sm:text-lg">
                &ldquo;Office renovation bilkul on point tha. Har step pe update milta raha —
                Structura ne partner jaisa kaam kiya, sirf contractor nahi.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border border-primary-fixed-dim">
                  <img src={images.davidChen} alt="David Chen" className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="text-label text-primary">David Chen</p>
                  <p className="text-sm text-on-surface-variant">CEO, Nexus Global Tech</p>
                </div>
              </div>
            </blockquote>
            <blockquote className="flex flex-col justify-between rounded-2xl border border-outline-variant border-l-4 border-l-secondary bg-surface-container-lowest p-6 shadow-sm sm:p-8">
              <p className="mb-6 text-base italic leading-relaxed text-on-surface-variant sm:mb-8 sm:text-lg">
                &ldquo;Dream home dhundna stress tha, jab tak Structura nahi mila. Sirf listings
                nahi — sahi ghar choose karne mein madad ki. Verified checks ne dil ko sukoon diya.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border border-secondary-fixed-dim">
                  <img
                    src={images.sarahJennings}
                    alt="Sarah Jennings"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-label text-primary">Sarah Jennings</p>
                  <p className="text-sm text-on-surface-variant">Homeowner & Designer</p>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="container-site py-12 sm:py-16">
        <div className="relative flex flex-col items-center overflow-hidden rounded-2xl border border-outline-variant bg-on-tertiary-container px-5 py-10 text-center shadow-lg sm:p-12 md:p-16">
          <div className="relative z-10 w-full max-w-2xl">
            <h2 className="mb-4 font-display text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold leading-tight text-on-tertiary sm:mb-6">
              Ready ho next step ke liye?
            </h2>
            <p className="mx-auto mb-8 text-base leading-relaxed text-on-tertiary/90 sm:mb-10 sm:text-lg">
              Luxury home chahiye ya commercial project — hamare advisors aapki help ke liye ready
              hain. Baat karo, tension free.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-secondary px-8 py-3.5 text-label font-bold text-on-secondary shadow-md transition hover:opacity-90 sm:px-10"
              >
                Abhi Contact Karo
              </Link>
              <Link
                to="/contact"
                className="rounded-full border-2 border-white px-8 py-3.5 text-label font-bold text-white transition hover:bg-white/10 sm:px-10"
              >
                Quote Maango
              </Link>
            </div>
          </div>
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '24px 24px',
            }}
          />
        </div>
      </section>
    </>
  )
}
