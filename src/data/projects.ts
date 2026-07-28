/**
 * Replaceable project catalog.
 *
 * Each entry maps to one folder under `/Asset`.
 * Swap placeholder copy (name, price, location, etc.) when real listing data is ready —
 * image paths stay driven by `assetFolder`.
 */

export type PropertyCategory = 'residential' | 'commercial' | 'land'

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

/** Placeholder metadata — edit this object when real data arrives. */
export const PROJECTS: ProjectMeta[] = [
  {
    id: 'project-1',
    assetFolder: '1',
    name: 'प्रोजेक्ट 1 आवास',
    location: 'लोकेशन जल्द अपडेट होगी',
    price: '$1,850,000',
    priceValue: 1850000,
    beds: 4,
    baths: 3,
    area: '3,200 वर्ग फुट',
    category: 'residential',
    status: 'तुरंत रहने योग्य',
    description:
      'प्रोजेक्ट 1 का अस्थायी विवरण। असली लिस्टिंग जानकारी मिलने पर यहाँ अपडेट करें।',
    sold: false,
    featured: true,
    badge: 'विशेष',
    nearby: 'विवरण जल्द',
    distanceNote: 'दूरी जल्द',
  },
  {
    id: 'project-2',
    assetFolder: '2',
    name: 'प्रोजेक्ट 2 आवास',
    location: 'लोकेशन जल्द अपडेट होगी',
    price: '$2,100,000',
    priceValue: 2100000,
    beds: 3,
    baths: 3,
    area: '2,800 वर्ग फुट',
    category: 'residential',
    status: 'पूर्ण',
    description:
      'प्रोजेक्ट 2 का अस्थायी विवरण। असली लिस्टिंग जानकारी मिलने पर यहाँ अपडेट करें।',
    sold: false,
    featured: true,
    nearby: 'विवरण जल्द',
    distanceNote: 'दूरी जल्द',
  },
  {
    id: 'project-3',
    assetFolder: '3',
    name: 'प्रोजेक्ट 3 एस्टेट',
    location: 'लोकेशन जल्द अपडेट होगी',
    price: '$3,400,000',
    priceValue: 3400000,
    beds: 5,
    baths: 4,
    area: '4,600 वर्ग फुट',
    category: 'residential',
    status: 'पूर्ण',
    description:
      'प्रोजेक्ट 3 का अस्थायी विवरण। असली लिस्टिंग जानकारी मिलने पर यहाँ अपडेट करें।',
    sold: false,
    featured: true,
    nearby: 'विवरण जल्द',
    distanceNote: 'दूरी जल्द',
  },
  {
    id: 'project-5',
    assetFolder: '5',
    name: 'प्रोजेक्ट 5 आवास',
    location: 'लोकेशन जल्द अपडेट होगी',
    price: '$2,750,000',
    priceValue: 2750000,
    beds: 4,
    baths: 4,
    area: '3,850 वर्ग फुट',
    category: 'residential',
    status: 'तुरंत रहने योग्य',
    description:
      'प्रोजेक्ट 5 का अस्थायी विवरण। असली लिस्टिंग जानकारी मिलने पर यहाँ अपडेट करें।',
    sold: false,
    featured: true,
    badge: 'विशेष',
    nearby: 'विवरण जल्द',
    distanceNote: 'दूरी जल्द',
  },
  {
    id: 'project-10',
    assetFolder: '10',
    name: 'प्रोजेक्ट 10 व्यावसायिक',
    location: 'लोकेशन जल्द अपडेट होगी',
    price: '$1,450,000',
    priceValue: 1450000,
    area: 'मिश्रित उपयोग',
    category: 'commercial',
    status: 'निर्माणाधीन',
    description:
      'प्रोजेक्ट 10 का अस्थायी विवरण। असली लिस्टिंग जानकारी मिलने पर यहाँ अपडेट करें।',
    sold: false,
    nearby: 'विवरण जल्द',
    distanceNote: 'दूरी जल्द',
  },
  {
    id: 'project-11',
    assetFolder: '11',
    name: 'प्रोजेक्ट 11 आवास',
    location: 'लोकेशन जल्द अपडेट होगी',
    price: '$980,000',
    priceValue: 980000,
    beds: 3,
    baths: 2,
    area: '2,100 वर्ग फुट',
    category: 'residential',
    status: 'ऑफ-प्लान',
    description:
      'प्रोजेक्ट 11 का अस्थायी विवरण। असली लिस्टिंग जानकारी मिलने पर यहाँ अपडेट करें।',
    sold: false,
    nearby: 'विवरण जल्द',
    distanceNote: 'दूरी जल्द',
  },
  {
    id: 'project-4',
    assetFolder: '4sold',
    name: 'प्रोजेक्ट 4 आवास',
    location: 'लोकेशन जल्द अपडेट होगी',
    price: '$2,450,000',
    priceValue: 2450000,
    beds: 4,
    baths: 3,
    area: '3,400 वर्ग फुट',
    category: 'residential',
    status: 'बिक चुकी',
    description:
      'बिक चुके प्रोजेक्ट 4 का अस्थायी विवरण। असली जानकारी मिलने पर अपडेट करें।',
    sold: true,
    dateSold: '14 अक्तूबर 2024',
    typeLabel: 'आवासीय',
  },
  {
    id: 'project-6',
    assetFolder: '6sold',
    name: 'प्रोजेक्ट 6 आवास',
    location: 'लोकेशन जल्द अपडेट होगी',
    price: '$3,100,000',
    priceValue: 3100000,
    beds: 5,
    baths: 4,
    area: '4,200 वर्ग फुट',
    category: 'residential',
    status: 'बिक चुकी',
    description:
      'बिक चुके प्रोजेक्ट 6 का अस्थायी विवरण। असली जानकारी मिलने पर अपडेट करें।',
    sold: true,
    dateSold: '28 सितंबर 2024',
    typeLabel: 'एस्टेट',
  },
  {
    id: 'project-8',
    assetFolder: '8sold',
    name: 'प्रोजेक्ट 8 व्यावसायिक',
    location: 'लोकेशन जल्द अपडेट होगी',
    price: '$4,800,000',
    priceValue: 4800000,
    area: 'व्यावसायिक',
    category: 'commercial',
    status: 'बिक चुकी',
    description:
      'बिक चुके प्रोजेक्ट 8 का अस्थायी विवरण। असली जानकारी मिलने पर अपडेट करें।',
    sold: true,
    dateSold: '12 अगस्त 2024',
    typeLabel: 'व्यावसायिक',
  },
  {
    id: 'project-9',
    assetFolder: '9sold',
    name: 'प्रोजेक्ट 9 आवास',
    location: 'लोकेशन जल्द अपडेट होगी',
    price: '$1,750,000',
    priceValue: 1750000,
    beds: 3,
    baths: 3,
    area: '2,600 वर्ग फुट',
    category: 'residential',
    status: 'बिक चुकी',
    description:
      'बिक चुके प्रोजेक्ट 9 का अस्थायी विवरण। असली जानकारी मिलने पर अपडेट करें।',
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
