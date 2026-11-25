import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect } from 'react'
import type { Asset, Lang } from '../data/portfolio'
import { t } from '../utils/i18n'

export function Lightbox({ assets, index, setIndex, lang }: { assets: Asset[]; index: number | null; setIndex: (index: number | null) => void; lang: Lang }) {
  const active = index === null ? null : assets[index]
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIndex(null)
      if (e.key === 'ArrowRight' && index !== null) setIndex((index + 1) % assets.length)
      if (e.key === 'ArrowLeft' && index !== null) setIndex((index - 1 + assets.length) % assets.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, assets.length, setIndex])

  if (!active) return null
  return (
    <div className="fixed inset-0 z-[80] bg-black/86 p-4 backdrop-blur-md" role="dialog" aria-modal="true">
      <button className="focus-ring absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white hover:bg-white/20" onClick={() => setIndex(null)} aria-label="Close image viewer">
        <X />
      </button>
      {assets.length > 1 && (
        <>
          <button className="focus-ring absolute left-5 top-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20" onClick={() => setIndex((index! - 1 + assets.length) % assets.length)} aria-label="Previous image"><ChevronLeft /></button>
          <button className="focus-ring absolute right-5 top-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20" onClick={() => setIndex((index! + 1) % assets.length)} aria-label="Next image"><ChevronRight /></button>
        </>
      )}
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <img src={active.src} alt={t(active.title, lang)} className="max-h-[78vh] max-w-[92vw] rounded-3xl object-contain shadow-2xl" />
        <div className="max-w-3xl text-center">
          <h3 className="text-lg font-semibold">{t(active.title, lang)}</h3>
          {active.note && <p className="mt-2 text-sm text-slate-300">{t(active.note, lang)}</p>}
        </div>
      </div>
    </div>
  )
}
