import { Link } from 'react-router-dom'
import { featuredProjects, projectCover } from '../data/projects'
import { useStitchEffects } from '../hooks/useStitchEffects'

export function HomePage() {
  useStitchEffects()
  return (
    <>
<main>
      <section className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0">
      <img alt="आधुनिक आर्किटेक्चर" className="w-full h-full object-cover scale-105 animate-[pulse_10s_ease-in-out_infinite]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6mFGNTJISJq0JYdbufn3qU8kDzqDFEn2N8urt09j9Uizunc_XQmFIBRjMQ_keYZwqFwv_qJo-SnB_8zoGoYdDusHPfKJedE8WH-TcmA75dz04cSDl_lOjViJnos1-ZM-epd04PDIoqEushEjLgkhzZE59DH-u-lBL4ym3s7C70OX0pn6oXsEJ_-9UWYzC9xz8i4bRQ7UQK5cMuUd6CDTtwxWFvWYfdmtkFfP3lUGlQ970Ji61Lc6mQf8ILFuB3sNUNzdMOXFMijHo"/>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>
      </div>
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-secondary-container/20 blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-primary-fixed/10 blur-3xl animate-float" style={{ animationDelay: '-2s' }}></div>
      <div className="relative z-10 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop w-full">
      <div className="max-w-2xl reveal-on-scroll" id="hero-content">
      <span className="inline-block px-sm py-1 bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm rounded mb-sm">स्थापना 1994</span>
      <h1 className="font-display-lg text-white text-display-lg lg:text-[64px] lg:leading-[72px] mb-md tracking-tight">
                          आपका भविष्य बनाएँ, <span className="text-secondary-fixed">अपना घर पाएँ</span>
      </h1>
      <p className="font-body-lg text-body-lg text-white/80 mb-lg max-w-lg leading-relaxed">
                          दशकों का आर्किटेक्चरल अनुभव और भरोसेमंद प्रॉपर्टी सेवा। हम ब्लूप्रिंट को विरासत में बदलते हैं, और घरों को सुकून की जगह।
                      </p>
      <div className="flex flex-wrap gap-md">
      <Link to="/portfolio" className="bg-white text-primary px-xl py-md font-label-md text-label-md rounded hover:scale-105 active:scale-95 transition-all flex items-center gap-xs shadow-xl shadow-black/20">
                          पोर्टफोलियो देखें <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
      </Link>
      <Link to="/construction" className="border border-white/30 text-white backdrop-blur-sm px-xl py-md font-label-md text-label-md rounded hover:bg-white/10 transition-all">
                          कंस्ट्रक्शन सेवाएँ
                      </Link>
      </div>
      </div>
      </div>
      <div className="absolute bottom-lg left-1/2 -translate-x-1/2 flex flex-col items-center gap-xs text-white/50 animate-bounce">
      <span className="font-label-sm text-[12px]">और देखें</span>
      <span className="material-symbols-outlined">expand_more</span>
      </div>
      </section>

      <section className="bg-surface py-xl border-b border-outline-variant relative overflow-hidden">
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-xl">
      <div className="flex flex-col items-center text-center p-lg bg-surface-container-lowest border border-outline-variant rounded hover:shadow-lg transition-all duration-500 group reveal-on-scroll">
      <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-md group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-primary text-[32px]">history</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">
      <span className="counter" data-target="30">0</span>+ वर्ष
                      </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">डिज़ाइन और इंजीनियरिंग का अनुभव</p>
      </div>
      <div className="flex flex-col items-center text-center p-lg bg-surface-container-lowest border border-outline-variant rounded hover:shadow-lg transition-all duration-500 group reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
      <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-md group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-primary text-[32px]">engineering</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">
      <span className="counter" data-target="150">0</span>+ विशेषज्ञ
                      </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">प्रमाणित आर्किटेक्ट और कारीगरों की टीम</p>
      </div>
      <div className="flex flex-col items-center text-center p-lg bg-surface-container-lowest border border-outline-variant rounded hover:shadow-lg transition-all duration-500 group reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
      <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-md group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-primary text-[32px]">verified</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">
      <span className="counter" data-target="100">0</span>% जाँच
                      </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">हर प्रॉपर्टी पर गुणवत्ता और कानूनी सत्यापन</p>
      </div>
      </div>
      </section>

      <section className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-xl">
      <div className="flex flex-col md:flex-row justify-between items-end mb-xl reveal-on-scroll">
      <div className="max-w-xl">
      <h2 className="font-headline-md text-headline-md text-primary mb-xs">चुनिंदा प्रॉपर्टी</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">आपके भविष्य के लिए चुने हुए निवेश — टिकाऊ डिज़ाइन और प्रीमियम फिनिश के साथ।</p>
      </div>
      <Link className="group text-primary font-label-md text-label-md flex items-center gap-xs hover:gap-md transition-all" to="/properties">
                      सभी प्रॉपर्टी देखें <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
      </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      {featuredProjects.map((project, index) => (
      <div key={project.id} className="bg-surface-container-lowest border border-outline-variant rounded-xl group overflow-hidden hover:shadow-2xl transition-all duration-500 reveal-on-scroll" style={index ? { transitionDelay: `${index * 100}ms` } : undefined}>
      <div className="h-72 overflow-hidden relative">
      <img alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={projectCover(project)}/>
      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
      <Link to={`/properties/${project.id}`} className="bg-white text-primary px-lg py-sm rounded-full font-label-md scale-90 group-hover:scale-100 transition-transform">झलक देखें</Link>
      </div>
      </div>
      <div className="p-md relative">
      <div className="flex justify-between items-start mb-sm gap-sm">
      <h4 className="font-headline-sm text-headline-sm text-primary">{project.name}</h4>
      <span className="bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm px-xs py-base rounded whitespace-nowrap">बिक्री के लिए</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">{project.location}</p>
      <div className="flex items-center justify-between border-t border-outline-variant pt-md">
      <div className="flex gap-md text-on-surface-variant font-label-sm">
      {project.beds != null ? <span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[18px]">bed</span> {project.beds}</span> : null}
      {project.baths != null ? <span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[18px]">bathtub</span> {project.baths}</span> : null}
      </div>
      <span className="font-headline-sm text-headline-sm text-primary">{project.price}</span>
      </div>
      </div>
      </div>
      ))}
      </div>
      </section>

      <section className="bg-primary text-on-primary py-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/2"></div>
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
      <div className="grid lg:grid-cols-2 gap-xl items-center">
      <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-md">
      <div className="p-lg border border-on-primary/10 bg-on-primary/5 hover:bg-white hover:text-primary transition-all duration-500 rounded-xl group cursor-pointer reveal-on-scroll shadow-lg">
      <span className="material-symbols-outlined text-[40px] mb-sm group-hover:scale-110 transition-transform">architecture</span>
      <h4 className="font-headline-sm text-headline-sm mb-xs">निर्माण</h4>
      <p className="font-body-sm text-body-sm opacity-70 group-hover:opacity-100">मज़बूत संरचना के साथ ज़मीन से ऊपर तक बेहतरीन निर्माण।</p>
      </div>
      <div className="p-lg border border-on-primary/10 bg-on-primary/5 hover:bg-white hover:text-primary transition-all duration-500 rounded-xl group cursor-pointer reveal-on-scroll shadow-lg" style={{ transitionDelay: '100ms' }}>
      <span className="material-symbols-outlined text-[40px] mb-sm group-hover:scale-110 transition-transform">video_file</span>
      <h4 className="font-headline-sm text-headline-sm mb-xs">नवीनीकरण</h4>
      <p className="font-body-sm text-body-sm opacity-70 group-hover:opacity-100">पुरानी जगहों को आधुनिक और आरामदायक वातावरण में बदलना।</p>
      </div>
      <div className="p-lg border border-on-primary/10 bg-on-primary/5 hover:bg-white hover:text-primary transition-all duration-500 rounded-xl group cursor-pointer reveal-on-scroll shadow-lg" style={{ transitionDelay: '200ms' }}>
      <span className="material-symbols-outlined text-[40px] mb-sm group-hover:scale-110 transition-transform">build</span>
      <h4 className="font-headline-sm text-headline-sm mb-xs">मेंटेनेंस</h4>
      <p className="font-body-sm text-body-sm opacity-70 group-hover:opacity-100">आपकी संपत्ति की लंबे समय तक कीमत बनाए रखने की देखभाल।</p>
      </div>
      <div className="p-lg border border-on-primary/10 bg-on-primary/5 hover:bg-white hover:text-primary transition-all duration-500 rounded-xl group cursor-pointer reveal-on-scroll shadow-lg" style={{ transitionDelay: '300ms' }}>
      <span className="material-symbols-outlined text-[40px] mb-sm group-hover:scale-110 transition-transform">handshake</span>
      <h4 className="font-headline-sm text-headline-sm mb-xs">सलाहकार सेवा</h4>
      <p className="font-body-sm text-body-sm opacity-70 group-hover:opacity-100">प्लानिंग और प्रोजेक्ट संभावना पर व्यावहारिक मार्गदर्शन।</p>
      </div>
      </div>
      <div className="order-1 lg:order-2 mb-lg lg:mb-0 reveal-on-scroll">
      <h2 className="font-display-lg text-display-lg mb-md leading-tight">पूरी आर्किटेक्चरल सेवाएँ</h2>
      <p className="font-body-lg text-body-lg opacity-80 mb-lg">
                              हम कल्पना और अमल के बीच का पुल हैं। हमारी कंस्ट्रक्शन टीम समय पर और मानक से ऊपर डिलीवर करती है।
                          </p>
      <Link className="inline-flex items-center gap-xs font-label-md text-label-md border-b border-white pb-1 hover:gap-md transition-all" to="/construction">
                              सभी सेवाएँ देखें <span className="material-symbols-outlined">arrow_outward</span>
      </Link>
      </div>
      </div>
      </div>
      </section>

      <section className="py-xl bg-surface">
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="text-center mb-xl reveal-on-scroll">
      <h2 className="font-headline-md text-headline-md text-primary mb-xs">उद्योग के नेताओं का भरोसा</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">हमारी सफलता हमारे साथियों और परिवारों की संतुष्टि से मापी जाती है।</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
      <div className="bg-white p-lg rounded-xl flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-500 reveal-on-scroll border border-outline-variant/30">
      <p className="font-body-lg italic text-on-surface-variant mb-lg leading-relaxed">
                              "Structura ने हमारे मुख्यालय का नवीनीकरण बेहद सटीकता से पूरा किया। संरचना पर उनका ध्यान असाधारण था, और हर पड़ाव पर हमें जानकारी मिलती रही। सच में भरोसेमंद साझेदार।"
                          </p>
      <div className="flex items-center gap-md">
      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary-fixed group">
      <img alt="David Chen" className="w-full h-full object-cover transition-transform group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABBsU8_H0K_Pv3BiTqqAXvNLnTTwK_wBhCMm1ZFW4zMBYfcSaM8EmZMtcp0RlsJeYQJboZwVo75pr94OtVPXYu69ny_Npf6sG_0snrRlNxvC0hl7oxU-HNduxConAa7kTK1uGRIKlJ101IHF-2EIAVm6k6aJfxk_W9_up5ZUK1Y_Z1t0eWTfH0-p9ygSP3zIk6iu-y4UdcRBKUZ-qvK4lIDbCdXTvYTCad2QtMbBWCOSy7UML2zaKFW3DXC1KEpz0tcS-NV_xv9LDh"/>
      </div>
      <div>
      <p className="font-label-md text-label-md text-primary">David Chen</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">CEO, Nexus Global Tech</p>
      </div>
      </div>
      </div>
      <div className="bg-white p-lg rounded-xl flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-500 reveal-on-scroll border border-outline-variant/30" style={{ transitionDelay: '100ms' }}>
      <p className="font-body-lg italic text-on-surface-variant mb-lg leading-relaxed">
                              "हमारा हमेशा का घर ढूँढना तनावपूर्ण था, जब तक Structura से मुलाकात नहीं हुई। वे सिर्फ लिस्टिंग नहीं दिखा रहे थे — वे हमें वहाँ का जीवन कल्पना करने में मदद कर रहे थे। उनकी जाँची-परखी प्रॉपर्टी से हमें सुकून मिला।"
                          </p>
      <div className="flex items-center gap-md">
      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary-fixed group">
      <img alt="Sarah Jennings" className="w-full h-full object-cover transition-transform group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs44_KvtcVm-NsK6FlZbG3A7IsZJ0ktzxqPW-2ZeLLPAmEhF9F6-dr5sGjJ5hucfVF8rheiVsFWrvxBMv7ljDpcwQG9qCGL2B2cNVJ8ttb2nED8b-NJGWt6SCm5gYgpzNdc2irEqCQIcx-_xeUJ8aGE5_qNe4UTTWPgz6jAmD2QQv-5I2IuzXICLmB1IDtmE8jF1Bn9mZlMJIf7e5y_iY_ElONl0eS2iwdd1u7uYyq4mEWAFYkEJkqxak_2pAgsAD7MuLRnMQ7uypA"/>
      </div>
      <div>
      <p className="font-label-md text-label-md text-primary">Sarah Jennings</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">गृहस्वामी और डिज़ाइनर</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>

      <section className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-xl">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-primary">
      <div className="absolute inset-0 glass-shimmer animate-shimmer pointer-events-none opacity-40"></div>
      <div className="relative z-10 p-xl md:p-[100px] text-center flex flex-col items-center">
      <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-md reveal-on-scroll">क्या आप अपनी यात्रा शुरू करने को तैयार हैं?</h2>
      <p className="font-body-lg text-body-lg text-white/80 mb-xl max-w-2xl mx-auto reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
                          चाहे अगला लग्ज़री घर हो या व्यावसायिक प्रोजेक्ट का प्रबंधन — हमारे सलाहकार आपकी मदद के लिए तैयार हैं।
                      </p>
      <div className="flex flex-wrap justify-center gap-md reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
      <Link to="/contact" className="rounded-full bg-white px-xl py-md font-label-md text-label-md font-bold text-primary shadow-lg shadow-black/10 transition-all hover:bg-surface active:scale-95">
                              आज ही संपर्क करें
                          </Link>
      <Link to="/contact" className="rounded-full border border-white/30 px-xl py-md font-label-md text-label-md text-white backdrop-blur-md transition-all hover:bg-white/10">
                              कोटेशन माँगें
                          </Link>
      </div>
      </div>
      <div className="absolute top-0 left-0 w-64 h-64 border border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 border border-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>
      </section>
      </main>
    </>
  )
}
