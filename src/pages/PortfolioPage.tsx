import { useRef, useState } from 'react'
import { Icon } from '../components/Icon'
import { images } from '../data/content'

type Category = 'all' | 'residential' | 'commercial' | 'renovations'

function BeforeAfter({ before, after, label }: { before: string; after: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState(50)

  function onMove(clientX: number) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const next = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(95, Math.max(5, next)))
  }

  return (
    <div
      ref={ref}
      className="relative h-56 cursor-ew-resize overflow-hidden rounded border border-outline-variant select-none"
      onMouseMove={(e) => e.buttons === 1 && onMove(e.clientX)}
      onTouchMove={(e) => onMove(e.touches[0].clientX)}
      onClick={(e) => onMove(e.clientX)}
    >
      <img src={after} alt={`${label} after`} className="absolute inset-0 h-full w-full object-cover" />
      <img
        src={before}
        alt={`${label} before`}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />
      <div className="absolute inset-y-0 w-0.5 bg-white shadow" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow">
          <Icon name="compare_arrows" className="text-[18px]" />
        </div>
      </div>
      <span className="absolute left-2 top-2 rounded bg-black/60 px-2 py-1 text-[10px] uppercase text-white">
        Before
      </span>
      <span className="absolute right-2 top-2 rounded bg-black/60 px-2 py-1 text-[10px] uppercase text-white">
        After
      </span>
    </div>
  )
}

const projects = [
  {
    id: 'meridian',
    title: 'The Meridian Heights',
    location: 'Oslo, Norway',
    date: 'Oct 2023',
    category: 'residential' as const,
    span: 'md:col-span-8',
    featured: true,
    image: images.meridian,
  },
  {
    id: 'vanguard',
    title: 'Vanguard Kitchen',
    location: 'Stockholm',
    date: 'May 2023',
    category: 'renovations' as const,
    span: 'md:col-span-4',
    before: images.vanguardBefore,
    after: images.vanguardAfter,
  },
  {
    id: 'stellar',
    title: 'Stellar HQ Atrium',
    location: 'Berlin',
    date: 'Aug 2023',
    category: 'commercial' as const,
    span: 'md:col-span-4',
    image: images.stellar,
  },
  {
    id: 'concrete',
    title: 'The Concrete Retreat',
    location: 'Helsinki',
    date: 'Jan 2024',
    category: 'residential' as const,
    span: 'md:col-span-4',
    image: images.concreteRetreat,
  },
  {
    id: 'warehouse',
    title: 'Warehouse No. 9',
    location: 'London',
    date: 'Dec 2023',
    category: 'renovations' as const,
    span: 'md:col-span-4',
    before: images.warehouseBefore,
    after: images.warehouseAfter,
  },
]

const chipStyle: Record<Exclude<Category, 'all'>, string> = {
  residential: 'bg-secondary-container text-on-secondary-container',
  commercial: 'bg-primary-fixed text-on-primary-fixed',
  renovations: 'bg-tertiary-fixed text-on-tertiary-fixed-variant',
}

export function PortfolioPage() {
  const [filter, setFilter] = useState<Category>('all')
  const visible = projects.filter((p) => filter === 'all' || p.category === filter)

  return (
    <section className="container-site py-12">
      <h1 className="text-display mb-4 text-primary">Completed Projects Showcase</h1>
      <p className="mb-8 max-w-3xl text-body-lg text-on-surface-variant">
        Explore our portfolio of high-stakes architectural achievements, ranging from expansive
        residential complexes to precision-engineered renovations.
      </p>

      <div className="mb-8 flex flex-wrap gap-2">
        {(
          [
            ['all', 'All Projects'],
            ['residential', 'Residential'],
            ['commercial', 'Commercial'],
            ['renovations', 'Renovations'],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setFilter(id)}
            className={`rounded px-4 py-2 text-label transition ${
              filter === id ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {visible.map((project) => (
          <article
            key={project.id}
            className={`overflow-hidden rounded border border-outline-variant bg-surface-container-lowest ${project.span}`}
          >
            {'before' in project && project.before && project.after ? (
              <BeforeAfter before={project.before} after={project.after} label={project.title} />
            ) : (
              <div className="relative h-64 overflow-hidden md:h-80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
                {project.featured ? (
                  <span className="absolute left-3 top-3 rounded bg-secondary px-2 py-1 text-[10px] uppercase text-white">
                    Featured
                  </span>
                ) : null}
              </div>
            )}
            <div className="p-5">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className={`rounded px-2 py-1 text-[10px] uppercase ${chipStyle[project.category]}`}>
                  {project.category}
                </span>
                {project.category !== 'renovations' ? (
                  <Icon name="verified" className="text-[16px] text-secondary" />
                ) : null}
              </div>
              <h3 className="font-headline text-xl text-primary">{project.title}</h3>
              <p className="mt-1 text-label text-on-surface-variant">
                {project.location} · {project.date}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button
          type="button"
          className="rounded border border-outline-variant px-8 py-3 text-label transition hover:bg-surface-container"
        >
          Load More Projects
        </button>
      </div>
    </section>
  )
}
