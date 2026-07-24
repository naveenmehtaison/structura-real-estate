import { useEffect, useRef, useState } from 'react'
import { Icon } from '../components/Icon'
import { images } from '../data/content'

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    let start: number | null = null
    let frame = 0
    const step = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / 1400, 1)
      setValue(Math.floor(p * target))
      if (p < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [active, target])
  return value
}

const team = [
  { name: 'Marcus Thorne', role: 'Chief Executive Officer', image: images.teamMarcus },
  { name: 'Elena Rodriguez', role: 'Principal Architect', image: images.teamElena },
  { name: 'Samuel Vance', role: 'Head of Operations', image: images.teamSamuel },
  { name: 'Sarah Jenkins', role: 'Director of Finance', image: images.teamSarah },
]

export function AboutPage() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const years = useCountUp(25, visible)
  const projects = useCountUp(1200, visible)
  const sold = useCountUp(850, visible)
  const satisfaction = useCountUp(98, visible)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), {
      threshold: 0.35,
    })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <section className="container-site grid items-center gap-10 py-14 lg:grid-cols-2">
        <div>
          <h1 className="text-display mb-6 text-primary">The Structura Story</h1>
          <p className="mb-4 text-body-lg text-on-surface-variant">
            Founded on the principles of architectural integrity and unwavering reliability,
            Structura has spent over a quarter-century redefining the skyline. Our legacy is built
            not just with steel and stone, but with the trust of partners who demand excellence in
            every square foot.
          </p>
          <p className="text-body-md text-on-surface-variant">
            We believe that every structure tells a story. From modern residential marvels to
            expansive commercial hubs, we craft environments that endure.
          </p>
        </div>
        <div className="relative overflow-hidden rounded border border-outline-variant">
          <img
            src={images.aboutHero}
            alt="Structura headquarters skyline"
            className="h-[420px] w-full object-cover"
          />
          <div className="absolute bottom-4 left-4 rounded bg-primary-container px-4 py-3 text-on-primary">
            <p className="text-label">Est. 1998</p>
            <p className="text-sm text-on-primary-container">A Legacy of Excellence</p>
          </div>
        </div>
      </section>

      <section ref={ref} className="bg-primary-container py-12 text-on-primary">
        <div className="container-site grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { value: `${years}+`, label: 'Years of Experience' },
            { value: `${projects.toLocaleString()}+`, label: 'Projects Completed' },
            { value: `${sold}+`, label: 'Properties Sold' },
            { value: `${satisfaction}%`, label: 'Customer Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-headline text-3xl md:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-on-primary-container">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-site grid gap-6 py-14 md:grid-cols-2">
        <div className="rounded border border-outline-variant bg-surface-container-lowest p-8">
          <Icon name="flag" className="mb-4 text-[32px] text-secondary" />
          <h2 className="mb-3 font-headline text-2xl text-primary">Mission</h2>
          <p className="text-on-surface-variant">
            Empower communities through superior design and sustainable construction — setting a
            global standard for architectural excellence.
          </p>
        </div>
        <div className="rounded border border-outline-variant bg-surface-container-lowest p-8">
          <Icon name="visibility" className="mb-4 text-[32px] text-azure" />
          <h2 className="mb-3 font-headline text-2xl text-primary">Vision</h2>
          <p className="text-on-surface-variant">
            To be the architect of the future, where structural stability meets forward-looking
            innovation in every project we deliver.
          </p>
        </div>
      </section>

      <section className="container-site pb-14">
        <h2 className="text-headline-lg mb-8 text-primary">Leadership Team</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <article
              key={member.name}
              className="overflow-hidden rounded border border-outline-variant bg-surface-container-lowest"
            >
              <img src={member.image} alt={member.name} className="aspect-[4/5] w-full object-cover" />
              <div className="p-4">
                <h3 className="font-headline text-lg text-primary">{member.name}</h3>
                <p className="text-sm text-on-surface-variant">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-outline-variant bg-surface-container-low py-14">
        <div className="container-site">
          <h2 className="text-headline-lg mb-8 text-center text-primary">Industry Credentials</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {['AIA Gold Member', 'ISO 9001:2024', 'LEED Platinum', 'OSHA Certified'].map((cred) => (
              <div
                key={cred}
                className="rounded border border-outline-variant bg-surface-container-lowest p-6 text-center grayscale transition hover:grayscale-0"
              >
                <Icon name="workspace_premium" className="mb-3 text-[36px] text-secondary" />
                <p className="text-label text-primary">{cred}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
