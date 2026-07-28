import { Link } from 'react-router-dom'
import { projectCover, soldProjects } from '../data/projects'

export function SoldPage() {
  return (
    <>
      <main className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-lg gap-md border-b border-outline-variant pb-md">
          <div>
            <span className="font-label-sm text-label-sm text-on-primary-container mb-xs block">
              पोर्टफोलियो
            </span>
            <h1 className="font-display-lg text-display-lg text-primary">हमारा पिछला काम</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-xs max-w-2xl">
              सफल सौदों और उन प्रोजेक्ट्स का प्रदर्शन जो नए मालिकों तक पहुँच चुके हैं।
            </p>
          </div>
          <div className="flex gap-sm">
            <button className="flex items-center gap-xs px-md py-sm border border-outline-variant font-label-md text-label-md hover:bg-surface-container-low transition-all">
              <span className="material-symbols-outlined text-[20px]">filter_list</span>
              फ़िल्टर
            </button>
            <button className="flex items-center gap-xs px-md py-sm border border-outline-variant font-label-md text-label-md hover:bg-surface-container-low transition-all">
              <span className="material-symbols-outlined text-[20px]">sort</span>
              बिक्री तिथि
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter mb-xl">
          <div className="p-md bg-surface-container-lowest border border-outline-variant">
            <p className="font-label-sm text-label-sm text-on-surface-variant mb-xs">कुल बिक्री मूल्य</p>
            <p className="font-headline-sm text-headline-sm text-primary">जल्द</p>
          </div>
          <div className="p-md bg-surface-container-lowest border border-outline-variant">
            <p className="font-label-sm text-label-sm text-on-surface-variant mb-xs">बिकी प्रॉपर्टी</p>
            <p className="font-headline-sm text-headline-sm text-primary">{soldProjects.length}</p>
          </div>
          <div className="p-md bg-surface-container-lowest border border-outline-variant">
            <p className="font-label-sm text-label-sm text-on-surface-variant mb-xs">औसत बिक्री समय</p>
            <p className="font-headline-sm text-headline-sm text-primary">जल्द</p>
          </div>
          <div className="p-md bg-surface-container-lowest border border-outline-variant">
            <p className="font-label-sm text-label-sm text-on-surface-variant mb-xs">सफलता दर</p>
            <p className="font-headline-sm text-headline-sm text-primary">जल्द</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {soldProjects.map((project) => {
            const cover = projectCover(project)
            return (
              <div
                key={project.id}
                className="property-card bg-surface-container-lowest border border-outline-variant group"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <div
                    className="bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-105"
                    role="img"
                    aria-label={project.name}
                    style={{ backgroundImage: `url('${cover}')` }}
                  />
                  <div className="sold-ribbon absolute top-0 left-0 right-0 p-sm text-center">
                    <span className="font-label-md text-label-md text-on-primary tracking-[0.2em]">
                      बिक चुकी
                    </span>
                  </div>
                </div>
                <div className="p-md">
                  <div className="flex justify-between items-start mb-xs gap-sm">
                    <h3 className="font-headline-sm text-headline-sm text-primary">{project.name}</h3>
                    {project.typeLabel ? (
                      <span className="font-label-sm text-label-sm text-on-primary-container px-xs py-1 bg-primary-container/10 rounded-sm whitespace-nowrap">
                        {project.typeLabel}
                      </span>
                    ) : null}
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-md flex items-center gap-xs">
                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                    {project.location}
                  </p>
                  <div className="border-t border-outline-variant pt-md flex justify-between items-center">
                    <div>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">बिक्री मूल्य</p>
                      <p className="font-headline-sm text-headline-sm text-primary">{project.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-label-sm text-label-sm text-on-surface-variant">बिक्री तिथि</p>
                      <p className="font-body-md text-body-md text-primary">{project.dateSold ?? 'जल्द'}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <section className="mt-xl bg-primary text-on-primary p-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-headline-md text-headline-md mb-md">अपनी प्रॉपर्टी लिस्ट करवाना चाहते हैं?</h2>
            <p className="font-body-lg text-body-lg text-primary-fixed-dim mb-lg">
              सफल सौदों के हमारे पोर्टफोलियो से जुड़ें। सही मार्केटिंग से आपकी प्रॉपर्टी अपनी असली कीमत पाए।
            </p>
            <div className="flex flex-wrap gap-md">
              <Link
                to="/contact"
                className="rounded bg-on-tertiary-container px-lg py-sm font-label-md text-label-md text-on-tertiary transition-opacity hover:opacity-90"
              >
                वैल्यूएशन लें
              </Link>
              <Link
                to="/contact"
                className="rounded border border-on-primary px-lg py-sm font-label-md text-label-md text-on-primary transition-all hover:bg-on-primary hover:text-primary"
              >
                एजेंट से बात करें
              </Link>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
            <span className="material-symbols-outlined text-[300px]">architecture</span>
          </div>
        </section>
      </main>
    </>
  )
}
