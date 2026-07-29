/**
 * Strips page-local <header>…</header> and <footer>…</footer> blocks
 * so Layout SiteHeader/SiteFooter become the single chrome source.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const dir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src/pages')
const files = fs.readdirSync(dir).filter((f) => f.endsWith('Page.tsx'))

for (const file of files) {
  const full = path.join(dir, file)
  let src = fs.readFileSync(full, 'utf8')

  // Remove header blocks (non-greedy across lines)
  src = src.replace(/\s*<header[\s\S]*?<\/header>\s*/gi, '\n')
  // Remove footer blocks
  src = src.replace(/\s*<footer[\s\S]*?<\/footer>\s*/gi, '\n')

  // Replace hex colors with tokens
  src = src.replace(/bg-\[#00210b\]/g, 'bg-tertiary-container')
  src = src.replace(/bg-\[#49935c\]/g, 'bg-on-tertiary-container')
  src = src.replace(/text-\[#005226\]/g, 'text-on-tertiary-fixed-variant')
  src = src.replace(/bg-\[#ba1a1a\]/g, 'bg-error')
  src = src.replace(/bg-\[#25D366\]/gi, 'bg-whatsapp')
  src = src.replace(/bg-\[#25d366\]/g, 'bg-whatsapp')
  src = src.replace(/text-\[#EAB308\]/gi, 'text-ochre')
  src = src.replace(/Strucura/g, 'Structura')

  fs.writeFileSync(full, src)
  console.log('cleaned', file)
}
