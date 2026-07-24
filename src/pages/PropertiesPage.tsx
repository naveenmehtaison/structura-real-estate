import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { categoryAccent, properties, type PropertyCategory } from '../data/content'

const categories: Array<PropertyCategory | 'all'> = ['all', 'residential', 'commercial', 'land']

export function PropertiesPage() {
  const [params] = useSearchParams()
  const q = params.get('q')?.toLowerCase() ?? ''
  const [mode, setMode] = useState<'buy' | 'rent'>('buy')
  const [category, setCategory] = useState<PropertyCategory | 'all'>('all')
  const [status, setStatus] = useState<string[]>(['Ready to Move'])
  const [location, setLocation] = useState('')
  const [sort, setSort] = useState('newest')
  const [maxPrice, setMaxPrice] = useState(5000000)

  const filtered = useMemo(() => {
    let list = [...properties]
    list = list.filter((p) => {
      if (category !== 'all' && p.category !== category) return false
      if (location && !p.location.toLowerCase().includes(location.toLowerCase())) return false
      if (q && !`${p.name} ${p.location} ${p.description}`.toLowerCase().includes(q)) return false
      if (p.priceValue > maxPrice && maxPrice < 5000000) return false
      return true
    })
    if (sort === 'price-asc') list = [...list].sort((a, b) => a.priceValue - b.priceValue)
    if (sort === 'price-desc') list = [...list].sort((a, b) => b.priceValue - a.priceValue)
    if (sort === 'area') list = [...list].sort((a, b) => b.area.localeCompare(a.area))
    return list
  }, [category, location, maxPrice, q, sort])

  function toggleStatus(value: string) {
    setStatus((prev) =>
      prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value],
    )
  }

  return (
    <section className="container-site py-10">
      <div className="mb-8">
        <h1 className="text-headline-lg mb-2 text-primary">Featured Properties</h1>
        <p className="text-on-surface-variant">
          Showing {filtered.length} high-precision architectural listings
          {q ? ` for “${q}”` : ''}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <aside className="h-fit rounded border border-outline-variant bg-surface-container-lowest p-6 lg:sticky lg:top-24 lg:col-span-3">
          <div className="mb-6 flex rounded border border-outline-variant p-1">
            {(['buy', 'rent'] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setMode(item)}
                className={`flex-1 rounded py-2 text-label transition ${
                  mode === item ? 'bg-primary text-on-primary' : 'text-on-surface-variant'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <label className="mb-4 block">
            <span className="mb-2 block text-label text-on-surface-variant">Location</span>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="City, Area or Zip"
              className="w-full rounded border border-outline-variant bg-surface px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-secondary"
            />
          </label>

          <div className="mb-4">
            <span className="mb-2 block text-label text-on-surface-variant">Property Category</span>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`rounded px-3 py-1.5 text-xs capitalize transition ${
                    category === cat
                      ? 'bg-primary text-on-primary'
                      : 'bg-surface-container text-on-surface-variant'
                  }`}
                >
                  {cat === 'all' ? 'All' : cat}
                </button>
              ))}
            </div>
          </div>

          <label className="mb-4 block">
            <span className="mb-2 block text-label text-on-surface-variant">
              Price Range — up to ${(maxPrice / 1000000).toFixed(1)}M
            </span>
            <input
              type="range"
              min={500000}
              max={5000000}
              step={100000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-black"
            />
            <div className="mt-1 flex justify-between text-xs text-on-surface-variant">
              <span>$500k</span>
              <span>$5M+</span>
            </div>
          </label>

          <div className="mb-6">
            <span className="mb-2 block text-label text-on-surface-variant">Project Status</span>
            {['Ready to Move', 'Under Construction', 'Off-Plan'].map((item) => (
              <label key={item} className="mb-2 flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={status.includes(item)}
                  onChange={() => toggleStatus(item)}
                  className="rounded border-outline-variant"
                />
                {item}
              </label>
            ))}
          </div>

          <button
            type="button"
            className="w-full rounded bg-primary py-3 text-label text-on-primary transition hover:opacity-90"
          >
            Apply Search
          </button>
        </aside>

        <div className="lg:col-span-9">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-on-surface-variant">{filtered.length} results</p>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded border border-outline-variant bg-surface-container-lowest px-3 py-2 text-sm"
            >
              <option value="newest">Newest First</option>
              <option value="price-asc">Price Low → High</option>
              <option value="price-desc">Price High → Low</option>
              <option value="area">Area: Largest</option>
            </select>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {filtered.map((property) => {
              const accent = categoryAccent[property.category]
              return (
                <Link
                  key={property.id}
                  to={`/properties/${property.id}`}
                  className={`group overflow-hidden rounded border bg-surface-container-lowest transition hover:shadow-sm ${accent.border}`}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.name}
                      className="property-image h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-3 top-3 flex gap-2">
                      <span className={`rounded px-2 py-1 text-[10px] uppercase ${accent.bg} ${accent.text}`}>
                        {accent.label}
                      </span>
                      {property.badge || property.status ? (
                        <span className="rounded bg-primary/80 px-2 py-1 text-[10px] uppercase text-white">
                          {property.badge ?? property.status}
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="mb-2 flex items-start justify-between gap-2">
                      <h3 className="font-headline text-xl text-primary">{property.name}</h3>
                      <span className={`font-headline text-lg ${accent.text}`}>{property.price}</span>
                    </div>
                    <p className="mb-3 text-sm text-on-surface-variant">{property.location}</p>
                    <p className="mb-4 line-clamp-2 text-sm text-on-surface-variant">
                      {property.description}
                    </p>
                    <div className="flex gap-4 text-xs text-on-surface-variant">
                      <span className="flex items-center gap-1">
                        <Icon name="square_foot" className="text-[16px]" /> {property.area}
                      </span>
                      {property.beds ? (
                        <span className="flex items-center gap-1">
                          <Icon name="bed" className="text-[16px]" /> {property.beds} Beds
                        </span>
                      ) : null}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="mt-10 flex items-center justify-center gap-2">
            {[1, 2, 3, '…', 12].map((page, i) => (
              <button
                key={`${page}-${i}`}
                type="button"
                className={`h-9 min-w-9 rounded px-3 text-sm ${
                  page === 1 ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
