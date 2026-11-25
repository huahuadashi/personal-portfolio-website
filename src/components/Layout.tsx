import { Menu, X, ArrowUp, Globe2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import type { Lang } from '../data/portfolio'
import { navItems } from '../data/portfolio'
import { scrollToSection, t } from '../utils/i18n'

export function Navbar({ lang, setLang }: { lang: Lang; setLang: (lang: Lang) => void }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (anchor: string) => {
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      window.setTimeout(() => scrollToSection(anchor), 80)
    } else {
      scrollToSection(anchor)
    }
  }

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'bg-[#080b16]/82 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="focus-ring flex items-center gap-3 rounded-xl" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 font-bold">P</span>
          <span className="hidden text-sm font-semibold tracking-wide text-slate-100 sm:block">Portfolio</span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button key={item.anchor} onClick={() => go(item.anchor)} className="focus-ring rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/8 hover:text-white">
              {t(item.label, lang)}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')} className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/12 px-3 py-2 text-sm text-slate-200 hover:bg-white/8" aria-label="Switch language">
            <Globe2 size={16} /> {lang === 'zh' ? 'EN' : '中'}
          </button>
          <button className="focus-ring rounded-full p-2 text-slate-100 lg:hidden" onClick={() => setOpen(!open)} aria-label="Open menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="mx-5 mb-4 rounded-3xl border border-white/10 bg-[#0d1324]/95 p-3 shadow-2xl lg:hidden">
          {navItems.map((item) => (
            <button key={item.anchor} onClick={() => go(item.anchor)} className="block w-full rounded-2xl px-4 py-3 text-left text-slate-200 hover:bg-white/8">
              {t(item.label, lang)}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}

export function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return show ? (
    <button aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="focus-ring fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-white text-slate-950 shadow-glow transition hover:scale-105">
      <ArrowUp size={20} />
    </button>
  ) : null
}

export function Shell({ children, lang, setLang }: { children: React.ReactNode; lang: Lang; setLang: (lang: Lang) => void }) {
  return (
    <div className="min-h-screen bg-[#080b16] text-white">
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none fixed -top-40 right-0 h-[520px] w-[520px] rounded-full bg-blue-600/25 blur-[120px]" />
      <div className="pointer-events-none fixed left-0 top-1/3 h-[460px] w-[460px] rounded-full bg-purple-600/18 blur-[120px]" />
      <Navbar lang={lang} setLang={setLang} />
      <main className="relative z-10">{children}</main>
      <BackToTop />
    </div>
  )
}
