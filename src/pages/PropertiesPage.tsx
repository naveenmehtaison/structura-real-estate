import { Link } from 'react-router-dom'
import { availableProjects, projectCover, type ProjectMeta } from '../data/projects'

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
  return (
    <>
      <main className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-lg grid grid-cols-12 gap-gutter">
        <aside className="col-span-12 lg:col-span-3 space-y-md h-fit lg:sticky lg:top-24">
          <div className="bg-surface-container-lowest border border-outline-variant p-md rounded-lg">
            <h2 className="font-headline-sm text-headline-sm mb-md">फ़िल्टर</h2>
            <div className="flex p-1 bg-surface-container-low rounded-lg mb-md">
              <button className="flex-1 py-2 font-label-md text-label-md rounded bg-white shadow-sm border border-outline-variant">
                खरीदें
              </button>
              <button className="flex-1 py-2 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">
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
                />
              </div>
            </div>
            <div className="mb-md space-y-xs">
              <label className="block font-label-md text-label-md text-on-surface-variant">प्रॉपर्टी प्रकार</label>
              <select className="field-input w-full cursor-pointer appearance-none rounded px-4 py-2 font-body-sm text-body-sm">
                <option>सभी प्रकार</option>
                <option>आधुनिक विला</option>
                <option>पेंटहाउस</option>
                <option>व्यावसायिक प्लाज़ा</option>
                <option>लग्ज़री अपार्टमेंट</option>
              </select>
            </div>
            <div className="space-y-xs mb-md">
              <div className="flex justify-between items-center">
                <label className="font-label-md text-label-md text-on-surface-variant">कीमत सीमा</label>
                <span className="font-label-sm text-label-sm font-bold text-primary">$500k - $5M+</span>
              </div>
              <input className="w-full accent-primary" max={10000000} min={500000} step={100000} type="range" />
            </div>
            <div className="space-y-xs mb-md">
              <label className="font-label-md text-label-md text-on-surface-variant block">बेडरूम</label>
              <div className="flex gap-2">
                <button className="w-10 h-10 border border-outline-variant rounded flex items-center justify-center font-label-md text-label-md hover:bg-surface-container-low">
                  1+
                </button>
                <button className="w-10 h-10 border border-outline-variant rounded flex items-center justify-center font-label-md text-label-md bg-primary text-white">
                  3+
                </button>
                <button className="w-10 h-10 border border-outline-variant rounded flex items-center justify-center font-label-md text-label-md hover:bg-surface-container-low">
                  5+
                </button>
                <button className="flex-1 border border-outline-variant rounded flex items-center justify-center font-label-md text-label-md hover:bg-surface-container-low">
                  कोई भी
                </button>
              </div>
            </div>
            <div className="space-y-xs mb-lg">
              <label className="font-label-md text-label-md text-on-surface-variant block">प्रोजेक्ट स्थिति</label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    defaultChecked
                    className="rounded border-outline-variant text-primary focus:ring-0"
                    type="checkbox"
                  />
                  <span className="font-body-sm">तुरंत रहने योग्य</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input className="rounded border-outline-variant text-primary focus:ring-0" type="checkbox" />
                  <span className="font-body-sm">निर्माणाधीन</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input className="rounded border-outline-variant text-primary focus:ring-0" type="checkbox" />
                  <span className="font-body-sm">ऑफ-प्लान</span>
                </label>
              </div>
            </div>
            <button className="w-full rounded bg-primary py-3 font-label-md text-label-md text-on-primary transition-all hover:opacity-90">
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
                कैटलॉग से {availableProjects.length} लिस्टिंग दिख रही हैं
              </p>
            </div>
            <div className="flex items-center gap-sm">
              <span className="font-label-md text-label-md text-on-surface-variant">क्रम:</span>
              <select className="border-none bg-transparent font-label-md text-label-md text-primary focus:ring-0 cursor-pointer">
                <option>नवीनतम पहले</option>
                <option>कीमत: कम से अधिक</option>
                <option>कीमत: अधिक से कम</option>
                <option>क्षेत्रफल: सबसे बड़ा</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {availableProjects.map((project) => (
              <PropertyCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
