import type { Lang, Localized } from '../data/portfolio'

export const t = (value: Localized | string, lang: Lang) => {
  if (typeof value === 'string') return value
  return value[lang] || value.zh || value.en
}

export const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
