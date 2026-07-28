import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { categoryAccent, getProjectById, projectGallery } from '../data/projects'

export function PropertyDetailsPage() {
  const { id } = useParams()
  const project = id ? getProjectById(id) : undefined
  const gallery = project ? projectGallery(project) : []
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    setActiveIndex(0)
  }, [id])

  if (!project || gallery.length === 0) {
    return <Navigate to="/properties" replace />
  }

  const mainImage = gallery[Math.min(activeIndex, gallery.length - 1)]
  const thumbLimit = 5
  const visibleThumbs = gallery.slice(0, thumbLimit)
  const remaining = Math.max(0, gallery.length - thumbLimit)
  const accent = categoryAccent[project.category]
  const config =
    project.beds != null && project.baths != null
      ? `${project.beds} बेड / ${project.baths} बाथ`
      : project.beds != null
        ? `${project.beds} बेड`
        : project.area

  return (
    <>
      <main className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        <nav className="mb-md flex items-center gap-xs font-label-sm text-label-sm text-on-surface-variant">
          <Link className="hover:text-primary" to="/properties">
            प्रॉपर्टी
          </Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="hover:text-primary">{accent.label}</span>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-primary font-semibold">{project.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-start">
          <div className="lg:col-span-8 space-y-lg">
            <section className="space-y-sm">
              <div className="aspect-[16/9] w-full bg-surface-container-highest rounded overflow-hidden relative">
                <img
                  className="w-full h-full object-cover transition-opacity duration-500"
                  id="main-image"
                  alt={`${project.name} फोटो ${activeIndex + 1}`}
                  src={mainImage}
                />
                <div className="absolute bottom-md right-md bg-primary/80 backdrop-blur-md text-on-primary px-sm py-1.5 rounded font-label-sm text-label-sm flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                  {activeIndex + 1}/{gallery.length} फोटो
                </div>
              </div>

              <div className="grid grid-cols-4 md:grid-cols-6 gap-sm">
                {visibleThumbs.map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    className={`aspect-square bg-surface-container-high rounded overflow-hidden transition-all hover:opacity-80 ${
                      index === activeIndex ? 'active-thumb ring-2 ring-primary' : ''
                    } ${index >= 4 ? 'hidden md:block' : ''}`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <img className="w-full h-full object-cover" alt={`${project.name} थंबनेल ${index + 1}`} src={src} />
                  </button>
                ))}
                {remaining > 0 ? (
                  <button
                    type="button"
                    className="relative aspect-square bg-surface-container-highest rounded overflow-hidden flex items-center justify-center hover:bg-surface-container-high transition-colors border border-outline-variant"
                    onClick={() => setActiveIndex(thumbLimit)}
                  >
                    <span className="font-label-md text-label-md text-primary">+{remaining} और</span>
                  </button>
                ) : null}
              </div>

              {gallery.length > thumbLimit ? (
                <div className="flex flex-wrap gap-sm pt-xs">
                  {gallery.map((src, index) => (
                    <button
                      key={`full-${src}`}
                      type="button"
                      className={`h-14 w-14 rounded overflow-hidden border transition-all ${
                        index === activeIndex
                          ? 'border-primary ring-1 ring-primary'
                          : 'border-outline-variant opacity-80 hover:opacity-100'
                      }`}
                      onClick={() => setActiveIndex(index)}
                      aria-label={`फोटो ${index + 1} दिखाएँ`}
                    >
                      <img className="w-full h-full object-cover" alt="" src={src} />
                    </button>
                  ))}
                </div>
              ) : null}
            </section>

            <section className="bg-surface-container-lowest border border-outline-variant p-md md:p-lg grid grid-cols-2 md:grid-cols-4 gap-md">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface-variant mb-xs">कीमत</span>
                <span className="font-headline-sm text-headline-sm text-primary">{project.price}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface-variant mb-xs">स्थिति</span>
                <div className="flex items-center gap-xs">
                  <span className="w-2 h-2 rounded-full bg-[#005226]" />
                  <span className="font-label-md text-label-md text-on-tertiary-fixed-variant">{project.status}</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface-variant mb-xs">क्षेत्रफल</span>
                <span className="font-label-md text-label-md text-primary">{project.area}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface-variant mb-xs">कॉन्फ़िगरेशन</span>
                <span className="font-label-md text-label-md text-primary">{config}</span>
              </div>
            </section>

            <section className="space-y-md">
              <h2 className="font-headline-sm text-headline-sm text-primary">{project.name}</h2>
              <div className="prose max-w-none text-on-surface-variant font-body-md leading-relaxed">
                <p>{project.description}</p>
                <p className="mt-base">{project.location}</p>
              </div>
            </section>

            <section className="space-y-md pt-md border-t border-outline-variant">
              <h3 className="font-label-md text-label-md text-primary tracking-widest">भवन सुविधाएँ</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-md">
                {[
                  ['local_parking', 'सुरक्षित पार्किंग'],
                  ['security', '24/7 सुरक्षा'],
                  ['bolt', 'पावर बैकअप'],
                  ['fitness_center', 'प्रीमियम जिम'],
                  ['pool', 'इनफ़िनिटी पूल'],
                  ['wifi', 'फ़ाइबर ऑप्टिक'],
                  ['deck', 'प्राइवेट डेक'],
                  ['dry_cleaning', 'कॉन्सियर्ज'],
                ].map(([icon, label]) => (
                  <div
                    key={label}
                    className="flex items-center gap-sm p-sm bg-surface-container-low border border-transparent hover:border-outline-variant transition-colors rounded"
                  >
                    <span className="material-symbols-outlined text-primary">{icon}</span>
                    <span className="font-body-sm text-body-sm">{label}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:col-span-4 sticky top-24">
            <div className="bg-surface-container-lowest border border-outline-variant p-lg shadow-sm">
              <h3 className="font-headline-sm text-headline-sm mb-base text-primary">इस प्रॉपर्टी के बारे में पूछें</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">
                हमारे वरिष्ठ सलाहकार आपकी निवेश यात्रा में मदद के लिए तैयार हैं।
              </p>
              <form className="space-y-md" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs">पूरा नाम</label>
                  <input
                    className="field-input w-full rounded px-sm py-2 font-body-md text-body-md"
                    placeholder="आपका नाम"
                    required
                    type="text"
                  />
                </div>
                <div>
                  <label className="mb-xs block font-label-sm text-label-sm text-on-surface-variant">ईमेल</label>
                  <input
                    className="field-input w-full rounded px-sm py-2 font-body-md text-body-md"
                    placeholder="you@example.com"
                    required
                    type="email"
                  />
                </div>
                <div>
                  <label className="mb-xs block font-label-sm text-label-sm text-on-surface-variant">संदेश</label>
                  <textarea
                    className="field-input w-full resize-none rounded px-sm py-2 font-body-md text-body-md"
                    placeholder="निजी विज़िट तय करने में रुचि है…"
                    rows={4}
                  />
                </div>
                <button
                  className="flex w-full items-center justify-center gap-xs rounded bg-primary py-3 font-label-md text-label-md text-on-primary transition-all hover:opacity-80"
                  type="submit"
                >
                  <span className="material-symbols-outlined text-[20px]">send</span>
                  पूछताछ भेजें
                </button>
              </form>
              <div className="mt-lg space-y-sm border-t border-outline-variant pt-md">
                <button className="flex w-full items-center justify-center gap-xs rounded border border-outline-variant py-3 font-label-md text-label-md text-primary transition-all hover:bg-surface-container-low">
                  <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                  विज़िट तय करें
                </button>
                <a
                  className="flex w-full items-center justify-center gap-xs rounded bg-whatsapp py-3 font-label-md text-label-md text-white transition-all hover:opacity-90"
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp पर लिखें
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  )
}
