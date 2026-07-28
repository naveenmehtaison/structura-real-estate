import { Link } from 'react-router-dom'
import { Icon } from './Icon'

export function SiteFooter() {
  return (
    <footer className="mt-auto w-full border-t border-outline-variant bg-surface-container-highest">
      <div className="mx-auto grid max-w-max-width grid-cols-1 gap-gutter px-margin-mobile py-xl md:grid-cols-4 md:px-margin-desktop">
        <div>
          <Link
            to="/"
            className="mb-md block font-headline-md text-headline-md font-bold tracking-tighter text-primary"
          >
            Structura
          </Link>
          <p className="mb-md font-body-sm text-body-sm text-on-surface-variant">
            1994 से आर्किटेक्चरल उत्कृष्टता। भरोसे और सटीकता के साथ बेहतरीन आवासीय व व्यावसायिक
            स्थान बनाना।
          </p>
          <div className="flex gap-sm">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-outline text-on-surface-variant transition-all hover:bg-primary hover:text-on-primary"
              aria-label="वेबसाइट"
            >
              <Icon name="public" className="text-[18px]" />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-outline text-on-surface-variant transition-all hover:bg-primary hover:text-on-primary"
              aria-label="शेयर करें"
            >
              <Icon name="share" className="text-[18px]" />
            </a>
          </div>
        </div>

        <div>
          <h5 className="mb-md font-label-md text-label-md text-primary">कंपनी</h5>
          <ul className="flex flex-col gap-sm">
            <li>
              <Link
                to="/about"
                className="font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-primary"
              >
                हमारे बारे में
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-primary"
              >
                प्रोजेक्ट पोर्टफोलियो
              </Link>
            </li>
            <li>
              <Link
                to="/sold"
                className="font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-primary"
              >
                हमारा पिछला काम
              </Link>
            </li>
            <li>
              <Link
                to="/construction"
                className="font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-primary"
              >
                कंस्ट्रक्शन
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="mb-md font-label-md text-label-md text-primary">सहायता</h5>
          <ul className="flex flex-col gap-sm">
            <li>
              <Link
                to="/contact"
                className="font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-primary"
              >
                संपर्क करें
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-primary"
              >
                गोपनीयता नीति
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-primary"
              >
                सेवा की शर्तें
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-primary"
              >
                लाइसेंसिंग
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="mb-md font-label-md text-label-md text-primary">न्यूज़लेटर</h5>
          <p className="mb-md font-body-sm text-body-sm text-on-surface-variant">
            डिज़ाइन ट्रेंड और बाज़ार अपडेट के लिए सदस्यता लें।
          </p>
          <form
            className="flex"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <input
              type="email"
              required
              placeholder="आपका ईमेल"
              className="field-input w-full rounded-l border-r-0"
            />
            <button
              type="submit"
              className="rounded-r bg-primary px-md font-label-md text-label-md text-on-primary transition-opacity hover:opacity-80"
            >
              जुड़ें
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto max-w-max-width border-t border-outline-variant/30 px-margin-mobile py-md md:px-margin-desktop">
        <p className="font-label-sm text-label-sm text-on-surface-variant">
          © 2024 Structura Architectural Excellence. सर्वाधिकार सुरक्षित।
        </p>
      </div>
    </footer>
  )
}
