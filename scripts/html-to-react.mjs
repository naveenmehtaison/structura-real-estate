import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const base = path.resolve(__dirname, '../../stitch_trustbuilt_real_estate_design')
const outDir = path.resolve(__dirname, '../src/pages')

const pages = [
  {
    file: 'home_structura_interactive_experience/code.html',
    out: 'HomePage.tsx',
    exportName: 'HomePage',
  },
  {
    file: 'browse_properties_structura/code.html',
    out: 'PropertiesPage.tsx',
    exportName: 'PropertiesPage',
  },
  {
    file: 'property_details_structura/code.html',
    out: 'PropertyDetailsPage.tsx',
    exportName: 'PropertyDetailsPage',
  },
  {
    file: 'sold_properties_proven_results/code.html',
    out: 'SoldPage.tsx',
    exportName: 'SoldPage',
  },
  {
    file: 'construction_skilled_services_structura/code.html',
    out: 'ConstructionPage.tsx',
    exportName: 'ConstructionPage',
  },
  {
    file: 'our_completed_projects_structura_portfolio/code.html',
    out: 'PortfolioPage.tsx',
    exportName: 'PortfolioPage',
  },
  {
    file: 'about_us_our_legacy_team/code.html',
    out: 'AboutPage.tsx',
    exportName: 'AboutPage',
  },
  {
    file: 'contact_us_structura_headquarters/code.html',
    out: 'ContactPage.tsx',
    exportName: 'ContactPage',
  },
]

function htmlToJsx(html) {
  let jsx = html

  // Remove scripts (handled separately / decorative)
  jsx = jsx.replace(/<script[\s\S]*?<\/script>/gi, '')

  // Comments
  jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}')

  // Attributes
  jsx = jsx.replace(/\sclass=/g, ' className=')
  jsx = jsx.replace(/\sfor=/g, ' htmlFor=')
  jsx = jsx.replace(/\sclip-path=/g, ' clipPath=')
  jsx = jsx.replace(/\sstroke-width=/g, ' strokeWidth=')
  jsx = jsx.replace(/\sstroke-linecap=/g, ' strokeLinecap=')
  jsx = jsx.replace(/\sstroke-linejoin=/g, ' strokeLinejoin=')
  jsx = jsx.replace(/\sfill-rule=/g, ' fillRule=')
  jsx = jsx.replace(/\sclip-rule=/g, ' clipRule=')
  jsx = jsx.replace(/\stabindex=/g, ' tabIndex=')
  jsx = jsx.replace(/\sreadonly/gi, ' readOnly')
  jsx = jsx.replace(/\sautocomplete=/gi, ' autoComplete=')
  jsx = jsx.replace(/\scrossorigin=/gi, ' crossOrigin=')
  jsx = jsx.replace(/\sallowfullscreen/gi, ' allowFullScreen')
  jsx = jsx.replace(/\sframeborder=/gi, ' frameBorder=')

  // Self-close void tags that aren't already closed
  jsx = jsx.replace(/<(img|input|br|hr|meta|link|source|area|col|embed|track|wbr)([^>]*?)(?<!\/)>/gi, '<$1$2 />')

  // Boolean / numeric HTML attrs → JSX
  jsx = jsx.replace(/\srequired(?:="")?(?=[\s/>])/gi, ' required={true}')
  jsx = jsx.replace(/\schecked(?:="")?(?=[\s/>])/gi, ' checked={true}')
  jsx = jsx.replace(/\sdisabled(?:="")?(?=[\s/>])/gi, ' disabled={true}')
  jsx = jsx.replace(/\sselected(?:="")?(?=[\s/>])/gi, ' selected={true}')
  jsx = jsx.replace(/\srows="(\d+)"/gi, ' rows={$1}')
  jsx = jsx.replace(/\scols="(\d+)"/gi, ' cols={$1}')
  jsx = jsx.replace(/\stabIndex="(\d+)"/gi, ' tabIndex={$1}')
  jsx = jsx.replace(/\smaxLength="(\d+)"/gi, ' maxLength={$1}')
  jsx = jsx.replace(/\smin="(\d+)"/gi, ' min={$1}')
  jsx = jsx.replace(/\smax="(\d+)"/gi, ' max={$1}')
  jsx = jsx.replace(/\sstep="(\d+)"/gi, ' step={$1}')
  jsx = jsx.replace(/\sviewbox=/gi, ' viewBox=')
  jsx = jsx.replace(/\sonclick=/gi, ' onClick=')
  jsx = jsx.replace(/\sonsubmit=/gi, ' onSubmit=')
  jsx = jsx.replace(/\sonchange=/gi, ' onChange=')
  jsx = jsx.replace(/\soninput=/gi, ' onInput=')
  jsx = jsx.replace(/\sonmouseover=/gi, ' onMouseOver=')
  jsx = jsx.replace(/\sonmouseout=/gi, ' onMouseOut=')

  // Strip inline JS handler string values that aren't valid React (keep handlers as no-ops)
  jsx = jsx.replace(/\sonClick="[^"]*"/gi, ' onClick={(e) => e.preventDefault()}')
  jsx = jsx.replace(/\sonSubmit="[^"]*"/gi, ' onSubmit={(e) => e.preventDefault()}')
  jsx = jsx.replace(/\sonChange="[^"]*"/gi, ' onChange={() => {}}')
  jsx = jsx.replace(/\sonInput="[^"]*"/gi, ' onInput={() => {}}')

  // style="..." → style={{...}}
  jsx = jsx.replace(/\sstyle="([^"]*)"/g, (_, style) => {
    const obj = style
      .split(';')
      .map((s) => s.trim())
      .filter(Boolean)
      .map((pair) => {
        const idx = pair.indexOf(':')
        if (idx === -1) return null
        const key = pair
          .slice(0, idx)
          .trim()
          .replace(/-([a-z])/g, (_, c) => c.toUpperCase())
        let val = pair.slice(idx + 1).trim()
        if (/^-?\d+(\.\d+)?$/.test(val)) {
          return `${key}: ${val}`
        }
        val = val.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
        return `${key}: '${val}'`
      })
      .filter(Boolean)
      .join(', ')
    return ` style={{ ${obj} }}`
  })

  jsx = jsx.replace(/\s+\/>/g, ' />')

  // data-alt is fine in React
  return jsx.trim()
}

function wireNav(jsx) {
  // Replace common nav anchors by surrounding text patterns — conservative
  const replacements = [
    [/href="#"(?=[^>]*>[\s\n]*HOME)/gi, 'to="/"'],
    [/href="#"(?=[^>]*>[\s\n]*Home)/g, 'to="/"'],
    [/href="#"(?=[^>]*>[\s\n]*PROPERTIES)/gi, 'to="/properties"'],
    [/href="#"(?=[^>]*>[\s\n]*Properties)/g, 'to="/properties"'],
    [/href="#"(?=[^>]*>[\s\n]*CONSTRUCTION)/gi, 'to="/construction"'],
    [/href="#"(?=[^>]*>[\s\n]*Construction)/g, 'to="/construction"'],
    [/href="#"(?=[^>]*>[\s\n]*ABOUT)/gi, 'to="/about"'],
    [/href="#"(?=[^>]*>[\s\n]*About)/g, 'to="/about"'],
    [/href="#"(?=[^>]*>[\s\n]*CONTACT)/gi, 'to="/contact"'],
    [/href="#"(?=[^>]*>[\s\n]*Contact)/g, 'to="/contact"'],
  ]

  let out = jsx
  for (const [re, to] of replacements) {
    out = out.replace(re, to)
  }

  // Convert <a ... to="..."> to <Link ...>
  out = out.replace(/<a(\s+[^>]*?\sto="[^"]+"[^>]*)>/g, '<Link$1>')
  out = out.replace(/<\/a>/g, (match, offset, str) => {
    // This blindly replaces all </a> — bad if some remain <a>
    return match
  })

  // Better: only replace pairs where opening was converted
  // Simpler approach: replace <a with to= to Link and matching close tags in a second pass
  // Reset and do cleaner:
  return jsx
}

function wireNavClean(jsx) {
  let out = jsx

  const linkMap = [
    { label: /HOME/i, to: '/' },
    { label: /PROPERTIES/i, to: '/properties' },
    { label: /CONSTRUCTION/i, to: '/construction' },
    { label: /ABOUT(?:\s+US)?/i, to: '/about' },
    { label: /CONTACT(?:\s+US)?/i, to: '/contact' },
  ]

  // Replace <a href="#">LABEL</a> patterns (possibly with nested whitespace/spans)
  out = out.replace(
    /<a\s+([^>]*?)href="#"([^>]*)>([\s\S]*?)<\/a>/gi,
    (full, pre, post, children) => {
      const text = children.replace(/<[^>]+>/g, '').trim()
      for (const item of linkMap) {
        if (item.label.test(text) && text.length < 40) {
          return `<Link ${pre}to="${item.to}"${post}>${children}</Link>`
        }
      }
      // Inquire CTA
      if (/inquire/i.test(text) && text.length < 30) {
        return `<Link ${pre}to="/contact"${post}>${children}</Link>`
      }
      if (/view portfolio|browse.*properties|explore.*services|all properties|project portfolio/i.test(text)) {
        const to = /construction|services/i.test(text)
          ? '/construction'
          : /portfolio|project/i.test(text)
            ? '/portfolio'
            : '/properties'
        return `<Link ${pre}to="${to}"${post}>${children}</Link>`
      }
      if (/sold/i.test(text) && text.length < 40) {
        return `<Link ${pre}to="/sold"${post}>${children}</Link>`
      }
      if (/contact us|get a valuation|speak to an agent|request a quote|schedule/i.test(text)) {
        return `<Link ${pre}to="/contact"${post}>${children}</Link>`
      }
      return full
    },
  )

  // Buttons that say Inquire — leave as button unless wrapped; convert common CTA buttons with onclick none
  return out
}

for (const page of pages) {
  const htmlPath = path.join(base, page.file)
  const html = fs.readFileSync(htmlPath, 'utf8')
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)
  if (!bodyMatch) {
    console.error('No body in', page.file)
    continue
  }

  let body = bodyMatch[1]
  // Drop trailing scripts already handled in htmlToJsx
  let jsx = htmlToJsx(body)
  jsx = wireNavClean(jsx)

  // Escape braces that aren't JSX expressions — risky for CSS in style tags
  // Convert leftover <style> blocks to style tags (valid in React)
  jsx = jsx.replace(/<style>([\s\S]*?)<\/style>/gi, (_, css) => {
    const escaped = css.replace(/\{/g, '{"{"').replace(/\}/g, '{"}"}')
    // Actually better use dangerouslySetInnerHTML for style blocks
    return `<style dangerouslySetInnerHTML={{ __html: \`${css.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />`
  })

  const content = `import { Link } from 'react-router-dom'

export function ${page.exportName}() {
  return (
    <>
${jsx
  .split('\n')
  .map((line) => '      ' + line)
  .join('\n')}
    </>
  )
}
`

  fs.writeFileSync(path.join(outDir, page.out), content, 'utf8')
  console.log('Wrote', page.out, 'chars', content.length)
}
