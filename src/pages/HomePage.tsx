import { ArrowRight, Download, Mail, ExternalLink, FileText, Images, Layers3, Sparkles } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Lightbox } from '../components/Lightbox'
import { Reveal, SectionTitle } from '../components/Section'
import type { Lang } from '../data/portfolio'
import { experiences, profile, projects, skills, thinking, works } from '../data/portfolio'
import { scrollToSection, t } from '../utils/i18n'

const workCategories = ['All', 'PRD', 'Prototype', 'Architecture', 'Flow', 'Presentation', 'AI Solution', 'Other'] as const

type Category = typeof workCategories[number]

export function HomePage({ lang }: { lang: Lang }) {
  const [category, setCategory] = useState<Category>('All')
  const [lightbox, setLightbox] = useState<number | null>(null)
  const imageWorks = works.filter((w) => w.type === 'image')
  const filteredWorks = useMemo(() => category === 'All' ? works : works.filter((w) => w.category === category), [category])

  return (
    <>
      <section id="about" className="relative min-h-screen overflow-hidden px-5 pt-32 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-slate-300">
              <Sparkles size={16} className="text-blue-300" /> {t(profile.role, lang)}
            </div>
            <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.06em] md:text-7xl lg:text-8xl">
              <span className="gradient-text">{t(profile.name, lang)}</span>
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-200 md:text-2xl">{t(profile.headline, lang)}</p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">{t(profile.intro, lang)}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {profile.tags.map((tag) => <span key={tag.zh} className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-slate-200">{t(tag, lang)}</span>)}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <button onClick={() => scrollToSection('projects')} className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-slate-950 shadow-glow transition hover:scale-[1.02]">
                {lang === 'zh' ? '查看作品集' : 'View Portfolio'} <ArrowRight size={18} />
              </button>
              <a href={profile.resumePdf} download className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/14 px-6 py-3 font-medium text-white hover:bg-white/8">
                <Download size={18} /> {lang === 'zh' ? '下载 PDF 简历' : 'Download Resume'}
              </a>
              <button onClick={() => scrollToSection('contact')} className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/14 px-6 py-3 font-medium text-white hover:bg-white/8">
                <Mail size={18} /> {lang === 'zh' ? '联系我' : 'Contact'}
              </button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="glass relative rounded-[2.5rem] p-5">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-900 via-blue-950 to-purple-950 p-8">
              <div className="flex h-full flex-col justify-between">
                <div className="h-32 w-32 rounded-full bg-gradient-to-br from-white/95 to-blue-200 p-1 shadow-glow">
                  <div className="grid h-full w-full place-items-center rounded-full bg-[#11182b] text-4xl font-semibold text-white">PM</div>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-blue-200">Portfolio Website</p>
                  <h2 className="mt-4 text-4xl font-semibold tracking-tight">Product Case Study System</h2>
                  <div className="mt-8 grid gap-3">
                    {profile.metrics.map((m) => (
                      <div key={m.value} className="rounded-2xl border border-white/12 bg-white/8 p-4">
                        <div className="text-2xl font-semibold">{m.value}</div>
                        <div className="text-sm text-slate-300">{t(m.label, lang)}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="profile" className="section-pad px-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle lang={lang} eyebrow={{ zh: 'About', en: 'About' }} title={{ zh: '关于我', en: 'About Me' }} desc={{ zh: '基于 PPT 提取的个人定位：本科软件工程背景，7 年产品工作经验，覆盖 B 端产品规划、AI 算法产品化与项目交付。', en: 'Based on the PPT: software engineering background, 7 years of product experience across B2B product planning, AI productization and project delivery.' }} />
          <div className="mb-8 grid gap-4 md:grid-cols-3">
            <div className="glass rounded-3xl p-6"><div className="text-sm text-slate-400">Education</div><div className="mt-2 text-xl font-semibold">{t(profile.education, lang)}</div></div>
            <div className="glass rounded-3xl p-6"><div className="text-sm text-slate-400">Experience</div><div className="mt-2 text-xl font-semibold">{t(profile.experience, lang)}</div></div>
            <div className="glass rounded-3xl p-6"><div className="text-sm text-slate-400">Domains</div><div className="mt-2 text-sm leading-6 text-slate-200">{profile.domains.map((d) => t(d, lang)).join(' / ')}</div></div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((s, idx) => (
              <Reveal key={s.title.zh} delay={idx * 0.05}>
                <div className="glass h-full rounded-3xl p-6">
                  <h3 className="mb-5 text-xl font-semibold">{t(s.title, lang)}</h3>
                  <ul className="space-y-3 text-sm leading-6 text-slate-300">
                    {s.items.map((item) => <li key={item.zh} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />{t(item, lang)}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-pad px-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle lang={lang} eyebrow={{ zh: 'Projects', en: 'Projects' }} title={{ zh: '项目经历 / Case Studies', en: 'Project Case Studies' }} desc={{ zh: '重点项目将以业务背景、问题分析、方案设计、原型/流程、交付复盘的结构呈现。', en: 'Key projects are structured by context, problem analysis, solution design, prototypes/flows and delivery retrospectives.' }} />
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((p, idx) => (
              <Reveal key={p.id} delay={idx * 0.05}>
                <article className="glass group overflow-hidden rounded-[2rem]">
                  <div className="aspect-[16/9] overflow-hidden bg-slate-900">
                    <img src={p.cover} alt={t(p.title, lang)} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-blue-500/15 px-3 py-1 text-xs text-blue-200">{t(p.type, lang)}</span>
                      <span className="rounded-full bg-amber-500/15 px-3 py-1 text-xs text-amber-200">{p.status}</span>
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight">{t(p.title, lang)}</h3>
                    <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-300">{t(p.background, lang)}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.keywords.map((k) => <span key={k.zh} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">{t(k, lang)}</span>)}
                    </div>
                    <Link to={`/projects/${p.id}`} className="focus-ring mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:scale-[1.02]">
                      {lang === 'zh' ? '查看项目详情' : 'View Case Study'} <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section-pad px-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle lang={lang} eyebrow={{ zh: 'Experience', en: 'Experience' }} title={{ zh: '工作经历', en: 'Work Experience' }} desc={{ zh: '从工具型产品到行业平台，再到 AIoT 自动化项目，持续积累 B 端产品规划与项目交付经验。', en: 'From professional tools to industry platforms and AIoT automation projects, building continuous experience in B2B product planning and delivery.' }} />
          <div className="grid gap-5 lg:grid-cols-4">
            {experiences.map((exp) => (
              <Reveal key={exp.period}>
                <div className="glass h-full rounded-3xl p-6">
                  <div className="text-sm font-semibold text-blue-200">{exp.period}</div>
                  <h3 className="mt-3 text-lg font-semibold">{t(exp.company, lang)}</h3>
                  <div className="mt-2 text-sm text-slate-300">{t(exp.title, lang)}</div>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{t(exp.desc, lang)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="works" className="section-pad px-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle lang={lang} eyebrow={{ zh: 'Works', en: 'Works' }} title={{ zh: '产品作品集', en: 'Product Works' }} desc={{ zh: '支持图片放大、PDF 在线预览与下载。真实素材可放入 public/assets/images 或 docs 后在 data/portfolio.ts 中维护。', en: 'Supports image lightbox, PDF preview and download. Add real assets to public/assets/images or docs and maintain them in data/portfolio.ts.' }} />
          <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
            {workCategories.map((cat) => <button key={cat} onClick={() => setCategory(cat)} className={`focus-ring shrink-0 rounded-full px-4 py-2 text-sm ${category === cat ? 'bg-white text-slate-950' : 'border border-white/12 text-slate-300 hover:bg-white/8'}`}>{cat}</button>)}
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredWorks.map((w) => (
              <Reveal key={w.id}>
                <div className="glass overflow-hidden rounded-3xl">
                  {w.type === 'image' ? (
                    <button onClick={() => setLightbox(imageWorks.findIndex((i) => i.id === w.id))} className="focus-ring block w-full text-left">
                      <img src={w.src} alt={t(w.title, lang)} className="aspect-[4/3] w-full object-cover" />
                    </button>
                  ) : (
                    <iframe src={w.src} title={t(w.title, lang)} className="h-72 w-full border-0 bg-slate-900" />
                  )}
                  <div className="p-5">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/8 px-3 py-1 text-xs text-slate-300">{w.type === 'pdf' ? <FileText size={14}/> : <Images size={14}/>} {w.category}</div>
                    <h3 className="font-semibold">{t(w.title, lang)}</h3>
                    {w.note && <p className="mt-2 text-sm leading-6 text-slate-400">{t(w.note, lang)}</p>}
                    {w.download && <a href={w.download} download className="mt-4 inline-flex items-center gap-2 text-sm text-blue-200 hover:text-white"><Download size={15} />{lang === 'zh' ? '下载文件' : 'Download'}</a>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Lightbox assets={imageWorks} index={lightbox} setIndex={setLightbox} lang={lang} />
      </section>

      <section id="methodology" className="section-pad px-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle lang={lang} eyebrow={{ zh: 'Methodology', en: 'Methodology' }} title={{ zh: '产品方法论', en: 'Product Methodology' }} desc={{ zh: '基于实际项目提炼的工作方法：从业务调研、AI 场景判断、版本规划到反馈驱动迭代。', en: 'Methods derived from real projects, covering business research, AI opportunity evaluation, roadmap planning and feedback-driven iteration.' }} />
          <div className="grid gap-5 md:grid-cols-3">
            {thinking.map((item, idx) => (
              <Reveal key={item.title.zh} delay={idx * 0.05}>
                <div className="glass h-full rounded-3xl p-7">
                  <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500"><Layers3 size={22} /></div>
                  <h3 className="text-xl font-semibold">{t(item.title, lang)}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{t(item.content, lang)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-pad px-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="glass overflow-hidden rounded-[2.5rem] p-8 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="mb-4 text-sm uppercase tracking-[0.28em] text-blue-200">Contact</div>
                <h2 className="text-3xl font-semibold md:text-5xl">{lang === 'zh' ? '期待与你交流产品机会' : 'Let’s Talk Product Opportunities'}</h2>
                <p className="mt-6 max-w-2xl text-slate-300 leading-8">{lang === 'zh' ? '邮箱、微信与简历均为可编辑占位。请在 data/portfolio.ts 与 public/assets/docs 中替换为真实信息。' : 'Email, WeChat and resume are editable placeholders. Replace them in data/portfolio.ts and public/assets/docs.'}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-slate-950" href={`mailto:${profile.email}`}><Mail size={18}/>{profile.email}</a>
                  <a className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/12 px-6 py-3" href={profile.resumePdf} download><Download size={18}/>{lang === 'zh' ? '下载简历' : 'Resume'}</a>
                </div>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6">
                <div className="grid aspect-square place-items-center rounded-3xl bg-gradient-to-br from-slate-900 to-blue-950 text-center">
                  <div>
                    <div className="mx-auto mb-4 grid h-24 w-24 place-items-center rounded-3xl bg-white text-slate-950">QR</div>
                    <p className="font-medium">{profile.wechat}</p>
                    <p className="mt-2 text-sm text-slate-400">{lang === 'zh' ? '微信二维码占位' : 'WeChat QR Placeholder'}</p>
                  </div>
                </div>
                <a href="https://www.wangzeyu.me/" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white">{lang === 'zh' ? '参考网站（外部链接）' : 'Reference site'} <ExternalLink size={15}/></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500 lg:px-8">© {new Date().getFullYear()} Personal Portfolio. Built with React, Vite, TypeScript & Tailwind CSS.</footer>
    </>
  )
}
