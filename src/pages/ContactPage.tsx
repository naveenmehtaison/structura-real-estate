export function ContactPage() {
  return (
    <>
<main className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-xl">
      <div className="mb-xl text-center md:text-left">
      <h1 className="font-display-lg text-display-lg text-primary mb-base">Structura से जुड़ें</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">उत्कृष्टता के लिए खुली बातचीत ज़रूरी है। आपके अगले प्रोजेक्ट पर चर्चा का इंतज़ार रहेगा।</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
      <section className="md:col-span-7 bg-surface-container-lowest border border-outline-variant p-lg md:p-xl rounded shadow-sm">
      <h2 className="font-headline-sm text-headline-sm mb-lg">संपर्क करें</h2>
      <form className="space-y-md" id="contactForm">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
      <div className="space-y-xs">
      <label className="font-label-md text-label-md block text-on-surface-variant" htmlFor="name">पूरा नाम</label>
      <input className="field-input w-full rounded px-sm py-2 font-body-md text-body-md" id="name" name="name" placeholder="आपका नाम" required={true} type="text"/>
      </div>
      <div className="space-y-xs">
      <label className="font-label-md text-label-md block text-on-surface-variant" htmlFor="email">ईमेल पता</label>
      <input className="field-input w-full rounded px-sm py-2 font-body-md text-body-md" id="email" name="email" placeholder="you@example.com" required={true} type="email"/>
      </div>
      </div>
      <div className="space-y-xs">
      <label className="font-label-md text-label-md block text-on-surface-variant" htmlFor="subject">विषय</label>
      <select className="field-input w-full rounded px-sm py-2 font-body-md text-body-md" id="subject" name="subject" required={true}>
      <option value="">विषय चुनें</option>
      <option value="residential">आवासीय पूछताछ</option>
      <option value="commercial">व्यावसायिक विकास</option>
      <option value="consultation">डिज़ाइन परामर्श</option>
      <option value="careers">करियर और साझेदारी</option>
      </select>
      </div>
      <div className="space-y-xs">
      <label className="font-label-md text-label-md block text-on-surface-variant" htmlFor="message">संदेश</label>
      <textarea className="field-input w-full rounded px-sm py-2 font-body-md text-body-md" id="message" name="message" placeholder="अपने प्रोजेक्ट के लक्ष्य लिखें…" required={true} rows={5}></textarea>
      </div>
      <button className="w-full rounded bg-primary px-lg py-md font-label-md text-label-md text-on-primary transition-all hover:opacity-80" type="submit">
                              पूछताछ भेजें
                          </button>
      </form>
      </section>
      <aside className="md:col-span-5 space-y-md">
      <div className="bg-white border border-outline-variant p-lg rounded">
      <h3 className="font-headline-sm text-headline-sm mb-lg">कार्यालय जानकारी</h3>
      <div className="space-y-lg">
      <div className="flex gap-md">
      <span className="material-symbols-outlined text-primary">location_on</span>
      <div>
      <p className="font-label-md text-label-md text-on-surface mb-base">मुख्यालय</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">482 Architectural Way, Suite 100<br/>Design District, London, SW1A 1AA</p>
      </div>
      </div>
      <div className="flex gap-md">
      <span className="material-symbols-outlined text-primary">call</span>
      <div>
      <p className="font-label-md text-label-md text-on-surface mb-base">फ़ोन और सहायता</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">+44 (0) 20 7946 0123</p>
      </div>
      </div>
      <div className="flex gap-md">
      <span className="material-symbols-outlined text-primary">mail</span>
      <div>
      <p className="font-label-md text-label-md text-on-surface mb-base">ईमेल पूछताछ</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">office@structura-arch.com</p>
      </div>
      </div>
      <div className="flex gap-md">
      <span className="material-symbols-outlined text-primary">schedule</span>
      <div>
      <p className="font-label-md text-label-md text-on-surface mb-base">कार्य समय</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">सोम – शुक्र: 08:00 – 18:00<br/>शनि – रवि: केवल अपॉइंटमेंट पर</p>
      </div>
      </div>
      </div>
      </div>
      <a className="block rounded bg-whatsapp p-lg text-white transition-opacity hover:opacity-90 group" href="https://wa.me/1234567890" target="_blank" rel="noreferrer">
      <div className="flex items-center justify-between">
      <div className="flex items-center gap-md">
      <div className="bg-white/20 p-2 rounded-full">
      <span className="material-symbols-outlined">chat</span>
      </div>
      <div>
      <p className="font-label-md text-label-md">सीधी सलाह</p>
      <p className="font-body-sm text-body-sm opacity-90">WhatsApp पर संदेश भेजें</p>
      </div>
      </div>
      <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </div>
      </a>
      <div className="relative h-48 rounded overflow-hidden border border-outline-variant bg-surface-container-highest">
      <img className="w-full h-full object-cover opacity-80" alt="कार्यालय" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW9ajsbV4DkWbdGt8JAzjUpa72XJ-x2Oy511_7k_rdaujgCny1lzVkI_KMZPEEP_DFGiHvAUok2TRxGSOb3fBFOQw88ebzCux6ps2w_uslVxyFXxort4pPwXHW_jC5m1_7fwH4hF8kn47UQYj8B6Jch_FZUCtDfkS8Yx6JQVxxxe_A9IYOl49QeEW9H9QD6-8BV61jP_4i2xGzf3fd57DTucg9-WsumlvRUhz2Q3464bQyhzx2RREcuPqXr4HnpFjZKKdrgYOJm7Ns"/>
      <div className="absolute inset-0 bg-primary-container/10"></div>
      </div>
      </aside>
      </div>
      </main>
      <section className="w-full border-t border-outline-variant mt-xl">
      <div className="relative h-[450px] w-full bg-surface-container-high group">
      <div className="w-full h-full grayscale hover:grayscale-0 transition-standard duration-700">
      <div className="w-full h-full flex flex-col items-center justify-center space-y-md">
      <span className="material-symbols-outlined text-6xl text-primary animate-bounce">distance</span>
      <p className="font-label-md text-label-md text-on-surface-variant">इंटरैक्टिव साइट मैप</p>
      <div className="px-lg py-xs border border-primary rounded-full font-label-sm text-label-sm text-primary group-hover:bg-primary group-hover:text-on-primary transition-standard">
                              लोकेशन विस्तृत करें
                          </div>
      </div>
      </div>
      <div className="absolute bottom-lg left-margin-desktop bg-white p-md rounded shadow-lg border border-outline-variant max-w-xs hidden md:block">
      <p className="font-label-md text-label-md text-primary mb-base">Structura मुख्य कार्यालय</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">उत्तर गेट से प्रवेश। विज़िटर पार्किंग बेसमेंट B2 में उपलब्ध।</p>
      <button className="mt-md text-primary font-label-sm text-label-sm underline hover:no-underline">दिशा-निर्देश लें</button>
      </div>
      </div>
      </section>
</>
  )
}
