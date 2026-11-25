import { motion } from 'framer-motion'
import type { Lang, Localized } from '../data/portfolio'
import { t } from '../utils/i18n'

export function SectionTitle({ eyebrow, title, desc, lang }: { eyebrow: Localized; title: Localized; desc?: Localized; lang: Lang }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.55 }} className="mb-10 max-w-3xl">
      <div className="mb-4 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-blue-200">{t(eyebrow, lang)}</div>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{t(title, lang)}</h2>
      {desc && <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">{t(desc, lang)}</p>}
    </motion.div>
  )
}

export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-70px' }} transition={{ duration: 0.55, delay }}>
      {children}
    </motion.div>
  )
}
