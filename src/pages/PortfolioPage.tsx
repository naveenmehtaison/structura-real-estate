import { Link } from 'react-router-dom'
import { availableProjects, categoryAccent, projectCover, projectGallery } from '../data/projects'

export function PortfolioPage() {
  const [featured, ...rest] = availableProjects
  const featuredGallery = featured ? projectGallery(featured) : []

  return (
    <>
      <main className="flex-grow max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        <section className="mb-xl">
          <div className="max-w-3xl">
            <h1 className="font-display-lg text-display-lg mb-md text-primary">पूर्ण प्रोजेक्ट्स का प्रदर्शन</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              हमारे आर्किटेक्चरल प्रोजेक्ट्स देखें — सक्रिय Asset कैटलॉग से चुने हुए काम।
            </p>
          </div>
          <div className="flex flex-wrap gap-sm mt-lg">
            <button className="px-md py-xs bg-primary text-on-primary font-label-md text-label-md rounded">
              सभी प्रोजेक्ट
            </button>
            <button className="px-md py-xs bg-surface-container-lowest border border-outline-variant hover:bg-surface-container-low font-label-md text-label-md rounded transition-all">
              आवासीय
            </button>
            <button className="px-md py-xs bg-surface-container-lowest border border-outline-variant hover:bg-surface-container-low font-label-md text-label-md rounded transition-all">
              व्यावसायिक
            </button>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter">
          {featured ? (
            <div className="lg:col-span-8 group bg-surface-container-lowest border border-outline-variant overflow-hidden">
              <div className="aspect-video w-full overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={featured.name}
                  src={projectCover(featured)}
                />
                <div className="absolute top-sm left-sm px-sm py-1 bg-primary text-on-primary font-label-sm text-label-sm tracking-widest">
                  विशेष
                </div>
              </div>
              <div className="p-lg">
                <div className="flex justify-between items-start gap-md">
                  <div>
                    <h3 className="font-headline-md text-headline-md mb-xs">{featured.name}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant flex items-center">
                      <span className="material-symbols-outlined text-sm mr-1">location_on</span>
                      {featured.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="block font-label-md text-label-md text-primary">{featured.status}</span>
                    <span className="block font-body-sm text-body-sm text-on-surface-variant">
                      {featuredGallery.length} फोटो
                    </span>
                  </div>
                </div>
                <div className="mt-md pt-md border-t border-outline-variant flex justify-between items-center">
                  <span className="bg-secondary-container text-on-secondary-container px-sm py-1 rounded font-label-sm text-label-sm">
                    {categoryAccent[featured.category].label}
                  </span>
                  <Link
                    className="flex items-center font-label-md text-label-md text-primary hover:underline"
                    to={`/properties/${featured.id}`}
                  >
                    विवरण देखें <span className="material-symbols-outlined ml-1">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          ) : null}

          {rest.map((project) => {
            const gallery = projectGallery(project)
            return (
              <div
                key={project.id}
                className="lg:col-span-4 group bg-surface-container-lowest border border-outline-variant"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={project.name}
                    src={projectCover(project)}
                  />
                </div>
                <div className="p-md">
                  <h3 className="font-headline-sm text-headline-sm mb-xs">{project.name}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {project.location} • {gallery.length} फोटो
                  </p>
                  <div className="mt-md flex justify-between items-center">
                    <span className="bg-secondary-container text-on-secondary-container px-sm py-1 rounded font-label-sm text-label-sm">
                      {categoryAccent[project.category].label}
                    </span>
                    <Link
                      to={`/properties/${project.id}`}
                      className="material-symbols-outlined text-outline hover:text-primary"
                    >
                      arrow_forward
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </>
  )
}
