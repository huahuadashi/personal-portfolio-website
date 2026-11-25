import { useEffect, useState } from 'react'
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Shell } from './components/Layout'
import type { Lang } from './data/portfolio'
import { HomePage } from './pages/HomePage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'

function ScrollHash() {
  const location = useLocation()
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.pathname, location.hash])
  return null
}

function AppRoutes() {
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem('portfolio-lang') as Lang) || 'zh')
  useEffect(() => {
    localStorage.setItem('portfolio-lang', lang)
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
  }, [lang])
  return (
    <Shell lang={lang} setLang={setLang}>
      <ScrollHash />
      <Routes>
        <Route path="/" element={<HomePage lang={lang} />} />
        <Route path="/projects/:id" element={<ProjectDetailPage lang={lang} />} />
      </Routes>
    </Shell>
  )
}

export default function App() {
  return (
    <HashRouter>
  <AppRoutes />
</HashRouter>

  )
}
