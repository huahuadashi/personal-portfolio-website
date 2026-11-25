import { ArrowLeft, CalendarDays, CheckCircle2, FileWarning, Lightbulb, Rocket } from 'lucide-react'
import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Lightbox } from '../components/Lightbox'
import { Reveal } from '../components/Section'
import type { Lang } from '../data/portfolio'
import { projects, works } from '../data/portfolio'
import { t } from '../utils/i18n'

export function ProjectDetailPage({ lang }: { lang: Lang }) {
  const { id } = useParams()
  const [lightbox, setLightbox] = useState<number | null>(null)
  const project = projects.find((p) => p.id === id)
  if (!project) return <Navigate to="/" replace />
  const projectAssets = works.filter((w) => w.type === 'image' && w.projectId === project.id)

  return (
    <div className="px-5 pb-24 pt-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Link to="/#projects" className="focus-ring mb-8 inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 text-sm text-slate-300 hover:bg-white/8">
          <ArrowLeft size={16} /> {lang === 'zh' ? '返回项目列表' : 'Back to Projects'}
        </Link>
        <Reveal>
          <div className="glass overflow-hidden rounded-[2.5rem]">
            <img src={project.cover} alt={t(project.title, lang)} className="aspect-[16/7] w-full object-cover" />
            <div className="p-7 md:p-10">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-500/15 px-3 py-1 text-xs text-blue-200">{t(project.type, lang)}</span>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-200">{project.status}</span>
              </div>
              <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">{t(project.title, lang)}</h1>
              <p className="mt-6 max-w-4xl text-lg leading-9 text-slate-300">{t(project.background, lang)}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {project.keywords.map((k) => <span key={k.zh} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">{t(k, lang)}</span>)}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <InfoCard icon={<Rocket />} title={lang === 'zh' ? '我的角色' : 'My Role'} content={t(project.role, lang)} />
          <InfoCard icon={<CalendarDays />} title={lang === 'zh' ? '项目时间' : 'Period'} content={t(project.period, lang)} />
          <InfoCard icon={<Lightbulb />} title={lang === 'zh' ? '业务目标' : 'Business Goal'} content={project.goal ? t(project.goal, lang) : (lang === 'zh' ? '待补充' : 'Pending')} />
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="glass h-full rounded-3xl p-7">
              <h2 className="mb-5 text-2xl font-semibold">{lang === 'zh' ? 'PPT 中确认的事实' : 'Verified Facts from PPT'}</h2>
              <ul className="space-y-3 text-slate-300">
                {project.facts.map((f) => <li key={f.zh} className="flex gap-3"><CheckCircle2 size={18} className="mt-1 shrink-0 text-emerald-300" />{t(f, lang)}</li>)}
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className="glass h-full rounded-3xl p-7">
              <h2 className="mb-5 text-2xl font-semibold">{lang === 'zh' ? '待确认 / 待补充' : 'To Confirm / Pending'}</h2>
              {project.inferred?.length ? (
                <ul className="space-y-3 text-slate-300">
                  {project.inferred.map((f) => <li key={f.zh} className="flex gap-3"><FileWarning size={18} className="mt-1 shrink-0 text-amber-300" />{t(f, lang)}</li>)}
                </ul>
              ) : (
                <p className="text-sm leading-7 text-slate-300">{lang === 'zh' ? '若 PPT 未提供量化指标或详细复盘，页面仅按“待补充”说明，不擅自补写。' : 'If metrics or retrospectives are not provided in PPT, the site marks them as pending rather than fabricating details.'}</p>
              )}
            </div>
          </Reveal>
        </div>

        <div className="mt-12 space-y-6">
          {project.sections.map((section, idx) => {
            const sectionAssets = (section.assets || []).map((assetId) => projectAssets.find((a) => a.id === assetId)).filter(Boolean) as typeof projectAssets
            return (
              <Reveal key={section.id} delay={idx * 0.03}>
                <section className="glass prose-case rounded-3xl p-7 md:p-9">
                  <div className="mb-4 text-sm font-semibold tracking-[0.22em] text-blue-200">{String(idx + 1).padStart(2, '0')}</div>
                  <h2 className="text-2xl font-semibold md:text-3xl">{t(section.title, lang)}</h2>
                  <p className="mt-5">{t(section.content, lang)}</p>
                  {section.bullets && <ul className="mt-5 space-y-3 text-slate-300">{section.bullets.map((b) => <li key={b.zh} className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />{t(b, lang)}</li>)}</ul>}
                  {sectionAssets.length > 0 && (
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                      {sectionAssets.map((asset) => {
                        const assetIndex = projectAssets.findIndex((a) => a.id === asset.id)
                        return (
                          <button key={asset.id} onClick={() => setLightbox(assetIndex)} className="focus-ring overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-left transition hover:border-blue-300/40">
                            <img src={asset.src} alt={t(asset.title, lang)} className="aspect-[16/10] w-full object-contain bg-slate-950" />
                            <div className="p-4">
                              <div className="text-sm font-semibold text-slate-100">{t(asset.title, lang)}</div>
                              {asset.note && <div className="mt-1 text-xs leading-5 text-slate-400">{t(asset.note, lang)}</div>}
                            </div>
                          </button>
                        )
                      })}
                    </div>
                  )}
                </section>
              </Reveal>
            )
          })}
        </div>
      </div>
      <Lightbox assets={projectAssets} index={lightbox} setIndex={setLightbox} lang={lang} />
    </div>
  )
}

function InfoCard({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) {
  return (
    <Reveal>
      <div className="glass h-full rounded-3xl p-6">
        <div className="mb-4 text-blue-200">{icon}</div>
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{content}</p>
      </div>
    </Reveal>
  )
}
