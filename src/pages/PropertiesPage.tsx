import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  availableProjects,
  formatPriceLabel,
  projectCover,
  type ListingType,
  type ProjectMeta,
  type PropertyTypeFilter,
} from '../data/projects'

const PROPERTY_TYPE_OPTIONS: { value: '' | PropertyTypeFilter; label: string }[] = [
  { value: '', label: 'सभी प्रकार' },
  { value: 'villa', label: 'आधुनिक विला' },
  { value: 'penthouse', label: 'पेंटहाउस' },
  { value: 'commercial', label: 'व्यावसायिक प्लाज़ा' },
  { value: 'apartment', label: 'लग्ज़री अपार्टमेंट' },
]

const STATUS_OPTIONS = ['तुरंत रहने योग्य', 'निर्माणाधीन', 'ऑफ-प्लान', 'पूर्ण'] as const

const PRICE_MIN = 500_000
const PRICE_MAX = 10_000_000

type SortOption = 'newest' | 'price-asc' | 'price-desc' | 'area'

function parseAreaValue(area: string): number {
  const match = area.replace(/,/g, '').match(/(\d+)/)
  return match ? Number(match[1]) : 0
}

function PropertyCard({ project }: { project: ProjectMeta }) {
  const cover = projectCover(project)

  return (
    <article className="property-card bg-surface-container-lowest border border-outline-variant rounded group overflow-hidden flex flex-col">
      <div className="relative h-64 overflow-hidden bg-surface-container-high">
        <img
          className="property-image w-full h-full object-cover transition-transform duration-700"
          alt={project.name}
          src={cover}
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-tertiary-container text-white font-label-sm text-label-sm px-3 py-1 rounded">
            {project.status}
          </span>
          {project.badge ? (
            <span className="bg-primary text-white font-label-sm text-label-sm px-3 py-1 rounded">
              {project.badge}
            </span>
          ) : null}
        </div>
      </div>
      <div className="p-md flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2 gap-sm">
          <div>
            <h3 className="font-headline-sm text-headline-sm text-primary">{project.name}</h3>
            <p className="font-body-sm text-on-surface-variant">{project.location}</p>
          </div>
          <span className="font-headline-sm text-headline-sm text-primary whitespace-nowrap">{project.price}</span>
        </div>
        <p className="font-body-sm text-on-surface-variant mb-md line-clamp-2">{project.description}</p>
        <div className="grid grid-cols-2 gap-y-3 gap-x-gutter border-t border-outline-variant pt-md mb-md">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-outline">square_foot</span>
            <span className="font-label-md text-label-md text-primary">{project.area}</span>
          </div>
          {project.beds != null ? (
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-outline">bed</span>
              <span className="font-label-md text-label-md text-primary">{project.beds} बेडरूम</span>
            </div>
          ) : null}
          {project.baths != null ? (
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-outline">bathtub</span>
              <span className="font-label-md text-label-md text-primary">{project.baths} बाथरूम</span>
            </div>
          ) : null}
          {project.distanceNote ? (
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-outline">road</span>
              <span className="font-label-md text-label-md text-primary">{project.distanceNote}</span>
            </div>
          ) : null}
        </div>
        {project.nearby ? (
          <div className="bg-surface-container-low p-sm rounded mb-md flex items-center gap-2">
            <span
              className="material-symbols-outlined text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              location_on
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">पास में: {project.nearby}</span>
          </div>
        ) : null}
        <Link
          to={`/properties/${project.id}`}
          className="mt-auto flex w-full items-center justify-center rounded border border-primary py-3 font-label-md text-label-md text-primary transition-all hover:bg-primary hover:text-on-primary"
        >
          विवरण देखें
        </Link>
      </div>
    </article>
  )
}

export function PropertiesPage() {
  const [searchParams] = useSearchParams()
  const urlQuery = searchParams.get('q') ?? ''

  const [listingType, setListingType] = useState<ListingType>('sale')
  const [locationQuery, setLocationQuery] = useState(urlQuery)
  const [propertyType, setPropertyType] = useState<'' | PropertyTypeFilter>('')
  const [maxPrice, setMaxPrice] = useState(PRICE_MAX)
  const [minBeds, setMinBeds] = useState<number | null>(null)
  const [statuses, setStatuses] = useState<string[]>([...STATUS_OPTIONS])
  const [sortBy, setSortBy] = useState<SortOption>('newest')
  const [appliedTick, setAppliedTick] = useState(0)

  useEffect(() => {
    setLocationQuery(urlQuery)
  }, [urlQuery])

  const filtered = useMemo(() => {
    void appliedTick
    let list = availableProjects.filter((p) => p.listingType === listingType)

    const q = locationQuery.trim().toLowerCase()
    if (q) {
      list = list.filter(
        (p) =>
          p.location.toLowerCase().includes(q) ||
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q),
      )
    }

    if (propertyType) {
      list = list.filter((p) => p.propertyType === propertyType)
    }

    list = list.filter((p) => {
      if (listingType === 'rent') return p.priceValue <= maxPrice
      return p.priceValue <= maxPrice
    })

    if (minBeds != null) {
      list = list.filter((p) => (p.beds ?? 0) >= minBeds)
    }

    if (statuses.length === 0) {
      list = []
    } else if (statuses.length < STATUS_OPTIONS.length) {
      list = list.filter((p) => statuses.includes(p.status))
    }

    const sorted = [...list]
    switch (sortBy) {
      case 'price-asc':
        sorted.sort((a, b) => a.priceValue - b.priceValue)
        break
      case 'price-desc':
        sorted.sort((a, b) => b.priceValue - a.priceValue)
        break
      case 'area':
        sorted.sort((a, b) => parseAreaValue(b.area) - parseAreaValue(a.area))
        break
      default:
        break
    }
    return sorted
  }, [listingType, locationQuery, propertyType, maxPrice, minBeds, statuses, sortBy, appliedTick])

  function toggleStatus(status: string) {
    setStatuses((prev) =>
      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status],
    )
  }

  const priceLabel =
    listingType === 'rent'
      ? `₹5k – ${formatPriceLabel(maxPrice, 'rent')}`
      : `₹5 लाख – ${formatPriceLabel(maxPrice, 'sale')}`

  return (
    <>
      <main className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-lg grid grid-cols-12 gap-gutter">
        <aside className="col-span-12 lg:col-span-3 space-y-md h-fit lg:sticky lg:top-24">
          <div className="bg-surface-container-lowest border border-outline-variant p-md rounded-lg">
            <h2 className="font-headline-sm text-headline-sm mb-md">फ़िल्टर</h2>
            <div className="flex p-1 bg-surface-container-low rounded-lg mb-md">
              <button
                type="button"
                onClick={() => setListingType('sale')}
                className={`flex-1 py-2 font-label-md text-label-md rounded transition-colors ${
                  listingType === 'sale'
                    ? 'bg-white shadow-sm border border-outline-variant'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                खरीदें
              </button>
              <button
                type="button"
                onClick={() => setListingType('rent')}
                className={`flex-1 py-2 font-label-md text-label-md rounded transition-colors ${
                  listingType === 'rent'
                    ? 'bg-white shadow-sm border border-outline-variant'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                किराया
              </button>
            </div>
            <div className="space-y-xs mb-md">
              <label className="font-label-md text-label-md text-on-surface-variant block">लोकेशन</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">
                  location_on
                </span>
                <input
                  className="field-input w-full rounded py-2 pl-10 pr-4 font-body-sm text-body-sm"
                  placeholder="शहर, इलाका या पिन"
                  type="text"
                  value={locationQuery}
                  onChange={(e) => setLocationQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-md space-y-xs">
              <label className="block font-label-md text-label-md text-on-surface-variant">प्रॉपर्टी प्रकार</label>
              <select
                className="field-input w-full cursor-pointer appearance-none rounded px-4 py-2 font-body-sm text-body-sm"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value as '' | PropertyTypeFilter)}
              >
                {PROPERTY_TYPE_OPTIONS.map((opt) => (
                  <option key={opt.label} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-xs mb-md">
              <div className="flex justify-between items-center">
                <label className="font-label-md text-label-md text-on-surface-variant">कीमत सीमा</label>
                <span className="font-label-sm text-label-sm font-bold text-primary">{priceLabel}</span>
              </div>
              <input
                className="w-full accent-primary"
                max={PRICE_MAX}
                min={listingType === 'rent' ? 10_000 : PRICE_MIN}
                step={listingType === 'rent' ? 5_000 : 100_000}
                type="range"
                value={Math.min(maxPrice, PRICE_MAX)}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
            </div>
            <div className="space-y-xs mb-md">
              <label className="font-label-md text-label-md text-on-surface-variant block">बेडरूम</label>
              <div className="flex gap-2">
                {[
                  { label: '1+', value: 1 },
                  { label: '3+', value: 3 },
                  { label: '5+', value: 5 },
                ].map((opt) => (
                  <button
                    key={opt.label}
                    type="button"
                    onClick={() => setMinBeds(opt.value)}
                    className={`w-10 h-10 border border-outline-variant rounded flex items-center justify-center font-label-md text-label-md transition-colors ${
                      minBeds === opt.value
                        ? 'bg-primary text-white'
                        : 'hover:bg-surface-container-low'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setMinBeds(null)}
                  className={`flex-1 border border-outline-variant rounded flex items-center justify-center font-label-md text-label-md transition-colors ${
                    minBeds == null ? 'bg-primary text-white' : 'hover:bg-surface-container-low'
                  }`}
                >
                  कोई भी
                </button>
              </div>
            </div>
            <div className="space-y-xs mb-lg">
              <label className="font-label-md text-label-md text-on-surface-variant block">प्रोजेक्ट स्थिति</label>
              <div className="space-y-2">
                {STATUS_OPTIONS.map((status) => (
                  <label key={status} className="flex items-center gap-2 cursor-pointer">
                    <input
                      checked={statuses.includes(status)}
                      className="rounded border-outline-variant text-primary focus:ring-0"
                      type="checkbox"
                      onChange={() => toggleStatus(status)}
                    />
                    <span className="font-body-sm">{status}</span>
                  </label>
                ))}
              </div>
            </div>
            <button
              type="button"
              className="w-full rounded bg-primary py-3 font-label-md text-label-md text-on-primary transition-all hover:opacity-90"
              onClick={() => setAppliedTick((n) => n + 1)}
            >
              खोज लागू करें
            </button>
          </div>
        </aside>

        <section className="col-span-12 lg:col-span-9">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-lg gap-md">
            <div>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary">
                चुनिंदा प्रॉपर्टी
              </h1>
              <p className="font-body-md text-on-surface-variant">
                कैटलॉग से {filtered.length} लिस्टिंग दिख रही हैं
              </p>
            </div>
            <div className="flex items-center gap-sm">
              <span className="font-label-md text-label-md text-on-surface-variant">क्रम:</span>
              <select
                className="border-none bg-transparent font-label-md text-label-md text-primary focus:ring-0 cursor-pointer"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
              >
                <option value="newest">नवीनतम पहले</option>
                <option value="price-asc">कीमत: कम से अधिक</option>
                <option value="price-desc">कीमत: अधिक से कम</option>
                <option value="area">क्षेत्रफल: सबसे बड़ा</option>
              </select>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-xl text-center">
              <p className="font-headline-sm text-headline-sm text-primary mb-xs">कोई प्रॉपर्टी नहीं मिली</p>
              <p className="font-body-md text-on-surface-variant">
                फ़िल्टर बदलकर फिर से खोजें — पिथौरागढ़, उत्तराखंड की भूमि उपलब्ध है।
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {filtered.map((project) => (
                <PropertyCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  )
}
