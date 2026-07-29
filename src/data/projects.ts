/**
 * Replaceable project catalog.
 *
 * Each entry maps to one folder under `/Asset`.
 * Swap placeholder copy (name, price, location, etc.) when real listing data is ready —
 * image paths stay driven by `assetFolder`.
 */

export type PropertyCategory = 'residential' | 'commercial' | 'land'
export type ListingType = 'sale' | 'rent'
export type PropertyTypeFilter =
  | 'villa'
  | 'penthouse'
  | 'commercial'
  | 'apartment'

export type ProjectMeta = {
  /** URL slug, e.g. `project-1` */
  id: string
  /** Folder name under `Asset/`, e.g. `1` or `4sold` */
  assetFolder: string
  name: string
  location: string
  price: string
  priceValue: number
  beds?: number
  baths?: number
  area: string
  category: PropertyCategory
  listingType: ListingType
  propertyType: PropertyTypeFilter
  /** Listing status chip text */
  status: string
  description: string
  sold: boolean
  dateSold?: string
  featured?: boolean
  badge?: string
  /** Sold-page type chip */
  typeLabel?: string
  nearby?: string
  distanceNote?: string
}

const LOCATION = 'Pithoragarh, Uttarakhand'

/** Placeholder metadata — edit this object when real data arrives. */
export const PROJECTS: ProjectMeta[] = [
  {
    id: 'project-1',
    assetFolder: '1',
    name: 'प्रोजेक्ट 1 आवास',
    location: LOCATION,
    price: '₹1,850,000',
    priceValue: 1850000,
    beds: 4,
    baths: 3,
    area: '3,200 वर्ग फुट',
    category: 'residential',
    listingType: 'sale',
    propertyType: 'villa',
    status: 'तुरंत रहने योग्य',
    description:
      'पिथौरागढ़ में स्थित यह आवास उत्तराखंड की भूमि पर भरोसेमंद निवेश का विकल्प है।',
    sold: false,
    featured: true,
    badge: 'विशेष',
    nearby: 'मुख्य बाज़ार',
    distanceNote: 'राजमार्ग से 2 किमी',
  },
  {
    id: 'project-2',
    assetFolder: '2',
    name: 'प्रोजेक्ट 2 आवास',
    location: LOCATION,
    price: '₹2,100,000',
    priceValue: 2100000,
    beds: 3,
    baths: 3,
    area: '2,800 वर्ग फुट',
    category: 'residential',
    listingType: 'sale',
    propertyType: 'apartment',
    status: 'पूर्ण',
    description:
      'पहाड़ी नज़ारे वाली यह आवासीय प्रॉपर्टी परिवार और निवेश दोनों के लिए उपयुक्त है।',
    sold: false,
    featured: true,
    nearby: 'स्कूल एवं मंदिर',
    distanceNote: 'शहर केंद्र से 3 किमी',
  },
  {
    id: 'project-3',
    assetFolder: '3',
    name: 'प्रोजेक्ट 3 एस्टेट',
    location: LOCATION,
    price: '₹3,400,000',
    priceValue: 3400000,
    beds: 5,
    baths: 4,
    area: '4,600 वर्ग फुट',
    category: 'residential',
    listingType: 'sale',
    propertyType: 'villa',
    status: 'पूर्ण',
    description:
      'विशाल भूखंड और खुली जगह के साथ यह एस्टेट उत्तराखंड में दीर्घकालिक निवास के लिए तैयार है।',
    sold: false,
    featured: true,
    nearby: 'वन क्षेत्र',
    distanceNote: 'राजमार्ग से 5 किमी',
  },
  {
    id: 'project-5',
    assetFolder: '5',
    name: 'प्रोजेक्ट 5 आवास',
    location: LOCATION,
    price: '₹2,750,000',
    priceValue: 2750000,
    beds: 4,
    baths: 4,
    area: '3,850 वर्ग फुट',
    category: 'residential',
    listingType: 'sale',
    propertyType: 'villa',
    status: 'तुरंत रहने योग्य',
    description:
      'तुरंत रहने योग्य यह प्रॉपर्टी पिथौरागढ़ की भूमि पर सुकून भरा निवास प्रदान करती है।',
    sold: false,
    featured: true,
    badge: 'विशेष',
    nearby: 'अस्पताल',
    distanceNote: 'बाजार से 1.5 किमी',
  },
  {
    id: 'project-10',
    assetFolder: '10',
    name: 'प्रोजेक्ट 10 व्यावसायिक',
    location: LOCATION,
    price: '₹1,450,000',
    priceValue: 1450000,
    area: 'मिश्रित उपयोग',
    category: 'commercial',
    listingType: 'sale',
    propertyType: 'commercial',
    status: 'निर्माणाधीन',
    description:
      'उत्तराखंड में व्यावसायिक उपयोग हेतु मिश्रित भूमि — दुकान या छोटे कार्यालय के लिए उपयुक्त।',
    sold: false,
    nearby: 'मुख्य सड़क',
    distanceNote: 'बाजार से 500 मी',
  },
  {
    id: 'project-11',
    assetFolder: '11',
    name: 'प्रोजेक्ट 11 आवास',
    location: LOCATION,
    price: '₹45,000/माह',
    priceValue: 45000,
    beds: 3,
    baths: 2,
    area: '2,100 वर्ग फुट',
    category: 'residential',
    listingType: 'rent',
    propertyType: 'apartment',
    status: 'ऑफ-प्लान',
    description:
      'किराए के लिए उपलब्ध यह आवास पिथौरागढ़ में सुविधाजनक लोकेशन पर स्थित है।',
    sold: false,
    nearby: 'बस स्टैंड',
    distanceNote: 'केंद्र से 2 किमी',
  },
  {
    id: 'project-4',
    assetFolder: '4sold',
    name: 'प्रोजेक्ट 4 आवास',
    location: LOCATION,
    price: '₹2,450,000',
    priceValue: 2450000,
    beds: 4,
    baths: 3,
    area: '3,400 वर्ग फुट',
    category: 'residential',
    listingType: 'sale',
    propertyType: 'villa',
    status: 'बिक चुकी',
    description:
      'पिथौरागढ़ में सफलतापूर्वक बेची गई आवासीय प्रॉपर्टी।',
    sold: true,
    dateSold: '14 अक्तूबर 2024',
    typeLabel: 'आवासीय',
  },
  {
    id: 'project-6',
    assetFolder: '6sold',
    name: 'प्रोजेक्ट 6 आवास',
    location: LOCATION,
    price: '₹3,100,000',
    priceValue: 3100000,
    beds: 5,
    baths: 4,
    area: '4,200 वर्ग फुट',
    category: 'residential',
    listingType: 'sale',
    propertyType: 'villa',
    status: 'बिक चुकी',
    description:
      'उत्तराखंड में पूर्ण हुए सफल भूमि सौदे का उदाहरण।',
    sold: true,
    dateSold: '28 सितंबर 2024',
    typeLabel: 'एस्टेट',
  },
  {
    id: 'project-8',
    assetFolder: '8sold',
    name: 'प्रोजेक्ट 8 व्यावसायिक',
    location: LOCATION,
    price: '₹4,800,000',
    priceValue: 4800000,
    area: 'व्यावसायिक',
    category: 'commercial',
    listingType: 'sale',
    propertyType: 'commercial',
    status: 'बिक चुकी',
    description:
      'पिथौरागढ़ में बिक चुकी व्यावसायिक भूमि।',
    sold: true,
    dateSold: '12 अगस्त 2024',
    typeLabel: 'व्यावसायिक',
  },
  {
    id: 'project-9',
    assetFolder: '9sold',
    name: 'प्रोजेक्ट 9 आवास',
    location: LOCATION,
    price: '₹1,750,000',
    priceValue: 1750000,
    beds: 3,
    baths: 3,
    area: '2,600 वर्ग फुट',
    category: 'residential',
    listingType: 'sale',
    propertyType: 'apartment',
    status: 'बिक चुकी',
    description:
      'हिमालय होम्स द्वारा पूर्ण किया गया आवासीय सौदा।',
    sold: true,
    dateSold: '30 जुलाई 2024',
    typeLabel: 'आवासीय',
  },
]

/** Filenames per asset folder, sorted naturally (5.1 … 5.10). */
export const ASSET_FILES: Record<string, string[]> = {
  '1': ['1.1.jpeg', '1.3.jpeg', '1.4.jpeg', '1.6.jpeg', '1.7.jpeg', '1.8.jpeg', '1.9.jpeg'],
  '2': ['2.1.jpeg', '2.2.jpeg', '2.3.jpeg', '2.4.jpeg', '2.5.jpeg'],
  '3': ['3.1.jpeg', '3.2.jpeg', '3.5.jpeg', '3.6.jpeg'],
  '5': [
    '5.1.jpeg',
    '5.2.jpeg',
    '5.3.jpeg',
    '5.4.jpeg',
    '5.5.jpeg',
    '5.6.jpeg',
    '5.7.jpeg',
    '5.8.jpeg',
    '5.9.jpeg',
    '5.10.jpeg',
  ],
  '10': ['10.1.jpeg', '10.2.jpeg', '10.3.jpeg'],
  '11': ['11.1.jpeg', '11.2.jpeg', '11.3.jpeg', '11.4.jpeg', '11.5.jpeg'],
  '4sold': ['4.1.jpeg', '4.3.jpeg', '4.5.jpeg', '4.6.jpeg'],
  '6sold': ['6.1.jpeg', '6.2.jpeg', '6.3.jpeg', '6.4.jpeg', '6.5.jpeg', '6.6.jpeg', '6.7.jpeg'],
  '8sold': ['8.1.jpeg', '8.2.jpeg', '8.3.jpeg'],
  '9sold': ['9.1.jpeg', '9.2.jpeg', '9.3.jpeg', '9.5.jpeg', '9.6.jpeg', '9.7.jpeg', '9.8.jpeg'],
}

const assetModules = import.meta.glob('../../Asset/**/*.{jpeg,jpg,png,webp,JPEG,JPG,PNG,WEBP}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

function resolveAssetUrl(folder: string, file: string): string | undefined {
  const needle = `/Asset/${folder}/${file}`.replaceAll('\\', '/')
  const match = Object.entries(assetModules).find(([key]) => key.replaceAll('\\', '/').endsWith(needle))
  if (match) return match[1]
  return `/Asset/${folder}/${file}`
}

export function assetUrl(folder: string, file: string): string {
  return resolveAssetUrl(folder, file) ?? `/Asset/${folder}/${file}`
}

export function projectGallery(project: ProjectMeta): string[] {
  const files = ASSET_FILES[project.assetFolder] ?? []
  return files.map((file) => assetUrl(project.assetFolder, file))
}

export function projectCover(project: ProjectMeta): string {
  const gallery = projectGallery(project)
  return gallery[0] ?? ''
}

export function getProjectById(id: string): ProjectMeta | undefined {
  return PROJECTS.find((p) => p.id === id)
}

export const availableProjects = PROJECTS.filter((p) => !p.sold)
export const soldProjects = PROJECTS.filter((p) => p.sold)
export const featuredProjects = availableProjects.filter((p) => p.featured).slice(0, 3)

export const categoryAccent: Record<
  PropertyCategory,
  { text: string; bg: string; border: string; label: string }
> = {
  residential: {
    text: 'text-emerald',
    bg: 'bg-emerald/10',
    border: 'border-emerald',
    label: 'आवासीय',
  },
  commercial: {
    text: 'text-azure',
    bg: 'bg-azure/10',
    border: 'border-azure',
    label: 'व्यावसायिक',
  },
  land: {
    text: 'text-ochre',
    bg: 'bg-ochre/10',
    border: 'border-ochre',
    label: 'भूमि / मिश्रित',
  },
}

export function formatPriceLabel(value: number, listingType: ListingType): string {
  if (listingType === 'rent') {
    return `₹${value.toLocaleString('en-IN')}/माह`
  }
  if (value >= 10_000_000) return `₹${(value / 10_000_000).toFixed(1)} करोड़+`
  if (value >= 100_000) return `₹${Math.round(value / 100_000)} लाख`
  return `₹${value.toLocaleString('en-IN')}`
}
