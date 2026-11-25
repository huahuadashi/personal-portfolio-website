export type Lang = 'zh' | 'en'

export type Localized = { zh: string; en: string }

export type Asset = {
  id: string
  title: Localized
  type: 'image' | 'pdf' | 'doc'
  category: 'PRD' | 'Prototype' | 'Architecture' | 'Flow' | 'Presentation' | 'AI Solution' | 'Other'
  projectId?: string
  src: string
  download?: string
  note?: Localized
}

export type Project = {
  id: string
  title: Localized
  type: Localized
  status: 'From PPT' | '待补充'
  cover: string
  role: Localized
  period: Localized
  background: Localized
  goal?: Localized
  keywords: Localized[]
  facts: Localized[]
  inferred?: Localized[]
  sections: Array<{
    id: string
    title: Localized
    content: Localized
    bullets?: Localized[]
    assets?: string[]
  }>
}

const BASE = import.meta.env.BASE_URL
const img = (name: string) => `${BASE}assets/images/ppt-extracted/${name}`

export const profile = {
  name: { zh: '陆华洁', en: 'Lu Huajie' },
  role: { zh: 'Product Manager / Project Manager', en: 'Product Manager / Project Manager' },
  headline: {
    zh: '7 年 B 端产品经验，聚焦 AI+ 场景落地、复杂业务流程梳理与 0—1 产品建设。',
    en: '7 years of B2B product experience focused on AI implementation, complex workflow analysis and 0-to-1 product building.'
  },
  intro: {
    zh: '本科软件工程背景，长期服务生物制药实验室自动化、高校智慧档案/声像档案、专业工具型产品与业务平台等方向，擅长将业务现场问题转化为可落地的系统方案与交付计划。',
    en: 'With a software engineering background, I have worked across biopharma lab automation, university smart archives, audiovisual archive systems and professional tool platforms, translating field problems into practical product solutions and delivery plans.'
  },
  email: '531201675@qq.com',
  phoneWechat: '18121102822',
  wechat: '18121102822',
  resumePdf: `${BASE}assets/docs/resume-placeholder.pdf`,
  education: { zh: '本科｜软件工程', en: 'Bachelor｜Software Engineering' },
  experience: { zh: '7 年产品工作经验｜B 端产品规划', en: '7 years product experience｜B2B product planning' },
  domains: [
    { zh: '生物制药实验室自动化', en: 'Biopharma Lab Automation' },
    { zh: '高校智慧档案 / 声像档案', en: 'University Smart Archives / Audiovisual Archives' },
    { zh: '专业工具型产品与业务平台', en: 'Professional Tools & Business Platforms' }
  ],
  tags: [
    { zh: 'B 端产品规划', en: 'B2B Product Planning' },
    { zh: 'AI 算法产品化', en: 'AI Productization' },
    { zh: '业务调研', en: 'Business Research' },
    { zh: '流程梳理', en: 'Workflow Mapping' },
    { zh: '项目交付', en: 'Project Delivery' }
  ],
  metrics: [
    { label: { zh: '产品经验', en: 'Experience' }, value: '7 yrs' },
    { label: { zh: '重点项目', en: 'Projects' }, value: '6' },
    { label: { zh: 'PPT 素材', en: 'PPT Assets' }, value: '63' }
  ]
}

export const experiences = [
  {
    period: '2023.09—2026.11',
    company: { zh: '上海乾福花科技有限公司', en: 'Shanghai Qianfuhua Technology Co., Ltd.' },
    title: { zh: '自媒体 & 短视频运营', en: 'Self-media & Short Video Operations' },
    desc: { zh: 'PPT 仅列出公司、时间与岗位，具体职责和项目成果待补充。', en: 'The PPT only lists company, period and position; detailed responsibilities and results are pending.' }
  },
  {
    period: '2022.07—2023.08',
    company: { zh: '药明生物（驻场）', en: 'WuXi Biologics (On-site)' },
    title: { zh: '产品经理 / 项目经理', en: 'Product Manager / Project Manager' },
    desc: { zh: '参与实验室 AI+ 自动化项目，负责业务需求调研、需求拆分、文档管理、开发验收、项目计划与跨团队协同。', en: 'Participated in AI+ automation projects for laboratories, covering business research, requirement breakdown, documentation, acceptance, planning and cross-team collaboration.' }
  },
  {
    period: '2020.12—2022.05',
    company: { zh: '上海兑观信息科技有限公司', en: 'Shanghai Duiguan Information Technology Co., Ltd.' },
    title: { zh: '产品经理', en: 'Product Manager' },
    desc: { zh: '主导高校智慧档案管理系统迭代与高校智慧声像档案 0-1 建设，负责行业调研、产品规划、需求设计、算法对接及客户培训。', en: 'Led iterations of university smart archive management systems and 0-to-1 audiovisual archive products, covering research, planning, requirement design, AI algorithm integration and customer training.' }
  },
  {
    period: '2018.07—2020.12',
    company: { zh: '上海江村市隐智能科技有限公司', en: 'Shanghai Jiangcun Shiyin Intelligent Technology Co., Ltd.' },
    title: { zh: '产品经理', en: 'Product Manager' },
    desc: { zh: '参与公司产品规划，推动知识共享后台与命理排盘工具小程序 0—1 落地，负责产品规划、原型设计、研发协调及内部推广。', en: 'Participated in product planning and launched knowledge-sharing backend and astrology/metaphysics tool mini-programs from 0 to 1.' }
  }
]

export const skills = [
  { title: { zh: '产品设计', en: 'Product Design' }, items: [ { zh: 'B 端产品规划与 0—1 建设', en: 'B2B product planning and 0-to-1 building' }, { zh: 'PRD 编写与产品原型设计', en: 'PRD writing and prototyping' }, { zh: '功能拆解、需求边界与版本规划', en: 'Feature breakdown, requirement boundary and roadmap planning' } ] },
  { title: { zh: '需求与业务分析', en: 'Requirement & Business Analysis' }, items: [ { zh: '业务调研、现场观察与半结构化访谈', en: 'Business research, field observation and semi-structured interviews' }, { zh: '流程梳理、痛点分析与角色分析', en: 'Workflow mapping, pain point and stakeholder analysis' }, { zh: '竞品分析、行业趋势与客户需求管理', en: 'Competitor analysis, industry trend and customer requirement management' } ] },
  { title: { zh: 'AI 产品与自动化', en: 'AI Product & Automation' }, items: [ { zh: 'AI+ 场景识别与优先级判断', en: 'AI opportunity identification and prioritization' }, { zh: 'AI 模型、IoT 平台与自动化设备协同设计', en: 'Collaboration design among AI models, IoT platforms and automation devices' }, { zh: '算法能力产品化与业务系统集成', en: 'Productization of algorithms and business-system integration' } ] },
  { title: { zh: '项目管理与交付', en: 'Project Management & Delivery' }, items: [ { zh: '项目计划、资源计划与风险识别', en: 'Project planning, resource planning and risk identification' }, { zh: '跨团队协调、开发推进与功能验收', en: 'Cross-team collaboration, development tracking and acceptance' }, { zh: '培训、UAT、用户指南与交付复盘', en: 'Training, UAT, user guides and delivery retrospectives' } ] }
]

export const projects: Project[] = [
  {
    id: 'smart-lab',
    title: { zh: 'Smart Lab｜细胞培养 AIoT 自动化优化系统', en: 'Smart Lab｜AIoT Automation for Cell Culture' },
    type: { zh: 'AI+ 自动化 / 生物制药实验室', en: 'AI+ Automation / Biopharma Lab' },
    status: 'From PPT',
    cover: img('slide09_image01_8fc547599a.png'),
    role: { zh: '产品经理兼项目经理', en: 'Product Manager & Project Manager' },
    period: { zh: '2022.07—2023.08（PPT 第 3 页项目时间写法疑似异常，待确认）', en: '2022.07—2023.08 (project date on slide 3 needs confirmation)' },
    background: { zh: '响应公司 AI+ 自动化战略，推动生物制药实验室数字化与智能化转型，围绕上游细胞培养自动化补糖补料等场景落地。', en: 'Driven by an AI+ automation strategy, the project explored digital and intelligent transformation for biopharma labs, focusing on automated glucose/nutrient feeding in upstream cell culture.' },
    goal: { zh: '识别有业务价值的 AI+ 应用场景，评估技术可行性，推动至少 1 个 AI+ 场景完成试点验证并投入实际应用。', en: 'Identify valuable AI use cases, evaluate feasibility and push at least one scenario through pilot validation into real use.' },
    keywords: [ { zh: 'AIoT', en: 'AIoT' }, { zh: '实验室自动化', en: 'Lab Automation' }, { zh: '补糖补料', en: 'Feeding Automation' }, { zh: '项目交付', en: 'Delivery' } ],
    facts: [ { zh: '自动化补糖、补料功能上线并正式投产使用。', en: 'Automated glucose/nutrient feeding went live and entered production use.' }, { zh: '实验室反馈模型精准度约 70%。', en: 'Lab feedback indicated around 70% model accuracy.' }, { zh: '上游实验室工作量降低约 40%。', en: 'Workload in the upstream lab was reduced by around 40%.' } ],
    inferred: [ { zh: '第 3 页项目时间“2023.12-2023.08”顺序异常，网站中按驻场经历时间展示并标注待确认。', en: 'The project date on slide 3 is inconsistent; the site uses the on-site work period and marks it for confirmation.' } ],
    sections: [
      { id: 'overview', title: { zh: '项目概览', en: 'Overview' }, content: { zh: 'Smart Lab 是药明自动化实验室相关项目，上游自动化已在上海奉贤 CCPD 部门运行，并在实验室改造升级中探索 AI、IoT 与自动化设备协同。', en: 'Smart Lab is an automated laboratory project involving upstream automation at the Fengxian CCPD department, exploring collaboration among AI, IoT and automation equipment.' } },
      { id: 'research', title: { zh: '业务调研与痛点分析', en: 'Research & Pain Points' }, content: { zh: '通过半结构化访谈、硬件与软件对接走查、现场观察/非结构化访谈，梳理实验室规模细胞培养业务流程、软硬件数据流和高频痛点。', en: 'The work used semi-structured interviews, hardware/software walkthroughs and field observation to map cell culture workflows, data flows and pain points.' }, bullets: [ { zh: '关注实验室人员日常工作、完整细胞培养流程与高频痛点。', en: 'Focused on daily work, the end-to-end cell culture process and high-frequency pain points.' }, { zh: '梳理软件系统、硬件设备、自动化设备间的数据流向与交互关系。', en: 'Mapped data flows and interactions among software systems, hardware and automation devices.' } ] },
      { id: 'ai-priority', title: { zh: 'AI+ 场景识别与优先级', en: 'AI Scenario Prioritization' }, content: { zh: '围绕细胞复苏、初始培养、种子扩增、生产培养、培养结束等阶段评估 AI 介入价值，其中生产培养阶段的补糖/补料决策、细胞生长预测与异常预警被识别为 P0 场景。', en: 'AI opportunities were evaluated across cell recovery, initial culture, seed expansion, production culture and culture completion. Feeding decisions and growth/anomaly prediction in production culture were identified as P0.' }, bullets: [ { zh: 'P0：补糖、补料决策；细胞生长预测、异常预警。', en: 'P0: feeding decisions; cell growth prediction and anomaly warning.' }, { zh: 'P1：最佳接种时间预测、培养环境参数优化、最佳收获时间预测等。', en: 'P1: optimal inoculation timing, culture parameter optimization, harvest timing and more.' } ] },
      { id: 'solution', title: { zh: '产品方案与系统设计', en: 'Solution & System Design' }, content: { zh: '将实验室细胞培养业务流程转化为产品需求，梳理 AI Model、IoT 平台、自动取样单元、自动补料单元、监测设备、DeltaV 与 LDMS AUTO 的协作关系。', en: 'The solution translated cell culture workflows into product requirements and clarified collaboration among AI Model, IoT platform, sampling unit, feeding unit, monitoring devices, DeltaV and LDMS AUTO.' }, assets: ['smart-lab-cover'] },
      { id: 'delivery', title: { zh: '项目管理与研发交付', en: 'Project Management & Delivery' }, content: { zh: '负责制定项目进度计划与资源需求计划，进行需求拆分、文档管理、开发推进、测试跟进、功能验收、风险识别及汇报，并输出 PRD、变更请求、用例、测试用例、用户指南和 UAT 培训视频。', en: 'Responsibilities included planning, resource estimation, requirement breakdown, documentation, development tracking, testing, acceptance, risk reporting and deliverables such as PRD, change requests, use cases, test cases, user guides and UAT training videos.' } },
      { id: 'results', title: { zh: '项目成果与复盘', en: 'Results & Retrospective' }, content: { zh: '自动化补糖、补料功能已上线并投产使用；实验室反馈模型精准度约 70%，上游实验室工作量降低约 40%。后续可拓展至培养周期 AI 自动化预测、pH 校准、自动控温及历史培养数据自动训练。', en: 'Automated feeding went live and entered production. Lab feedback indicated around 70% model accuracy and about 40% workload reduction. Future optimization may include cycle prediction, pH calibration, temperature control and automatic training with historical culture data.' } }
    ]
  },
  {
    id: 'smart-writing',
    title: { zh: 'Smart Writing｜智能撰写平台', en: 'Smart Writing｜Intelligent Writing Platform' },
    type: { zh: '内部效率平台 / 文档自动化', en: 'Internal Efficiency Platform / Document Automation' },
    status: 'From PPT',
    cover: img('slide13_image01_c5e0341fad.png'),
    role: { zh: '产品经理相关工作（PPT 未明确岗位名称）', en: 'Product-related responsibilities (exact role not specified in PPT)' },
    period: { zh: '2022.07—2022.12', en: '2022.07—2022.12' },
    background: { zh: '药明生物内部撰写 IND 申报资料与技术报告的智能化撰写平台。', en: 'An internal intelligent writing platform for IND application materials and technical reports at WuXi Biologics.' },
    goal: { zh: '目标细节 PPT 未展开，待补充。', en: 'Detailed goals are not fully described in the PPT and remain pending.' },
    keywords: [ { zh: '文档自动化', en: 'Document Automation' }, { zh: 'Jira', en: 'Jira' }, { zh: '模板配置', en: 'Template Configuration' }, { zh: 'ETL', en: 'ETL' } ],
    facts: [ { zh: '完成调研及配置上线 39 份 IND 申报资料。', en: '39 IND application material templates were researched, configured and launched.' }, { zh: '完成调研及配置上线 18 份技术报告。', en: '18 technical report templates were researched, configured and launched.' } ],
    sections: [
      { id: 'overview', title: { zh: '项目概览', en: 'Overview' }, content: { zh: 'Smart Writing 面向内部申报资料与技术报告撰写场景，通过模板调研、变量确认、数据路径搭建和供应商方案验收提升文档生产效率。', en: 'Smart Writing targets internal report/document generation scenarios through template research, variable definition, data path setup and vendor solution acceptance.' } },
      { id: 'responsibility', title: { zh: '我的职责', en: 'Responsibilities' }, content: { zh: '收集部门用户反馈并提炼核心需求；撰写用户故事地图；进行产品功能演示与培训；维护 Jira 需求管理平台；按阶段性产品目标划分需求优先级并确认开发排期。', en: 'Collected user feedback, summarized core needs, wrote user story maps, delivered demos/training, maintained Jira requirements and prioritized development schedules.' } },
      { id: 'delivery', title: { zh: '模板与数据路径推进', en: 'Template & Data Path Delivery' }, content: { zh: '调研多个业务部门 IND 申报资料和技术报告模板，确认模板变量范围与路径，推进 ETL 工程师搭建数据路径，并推动开发供应商进行方案设计和成果验收。', en: 'Researched templates across departments, confirmed variable ranges and paths, coordinated ETL data paths and worked with development vendors on solution design and acceptance.' } },
      { id: 'results', title: { zh: '项目成果', en: 'Results' }, content: { zh: '完成 39 份 IND 申报资料与 18 份技术报告的调研、配置和上线。痛点、架构与复盘信息 PPT 未展开，待补充。', en: 'Completed research, configuration and launch of 39 IND documents and 18 technical reports. Pain points, architecture and retrospective details are pending.' } }
    ]
  },
  {
    id: 'nanda-zhixing',
    title: { zh: '南大智星｜高校综合档案管理系统', en: 'Nanda Zhixing｜University Archive Management System' },
    type: { zh: 'SaaS 平台 / 智慧档案', en: 'SaaS Platform / Smart Archives' },
    status: 'From PPT',
    cover: img('slide14_image01_f227b7eee4.png'),
    role: { zh: '产品经理', en: 'Product Manager' },
    period: { zh: '2020.12—2022.05', en: '2020.12—2022.05' },
    background: { zh: '公司已有 demo 版，但功能不合理、逻辑不闭环、无法满足客户需求；市场同质化产品多，但缺少行业标准性产品。', en: 'The company had a demo version with incomplete logic and insufficient customer fit; the market had many similar products but lacked a standard-setting solution.' },
    goal: { zh: '全面优化高校综合档案管理系统，探索 AI 在高校档案馆的应用场景，提升档案管理效率与档案利用率。', en: 'Optimize the university archive management system and explore AI scenarios to improve archive management efficiency and utilization.' },
    keywords: [ { zh: '高校档案', en: 'University Archives' }, { zh: 'SaaS', en: 'SaaS' }, { zh: '0-1 功能', en: '0-to-1 Features' }, { zh: '智能著录', en: 'Intelligent Cataloging' } ],
    facts: [ { zh: '主导智能著录、OA 归档、档案收集等 0-1 功能。', en: 'Led 0-to-1 features such as intelligent cataloging, OA archiving and archive collection.' }, { zh: '多个 0-1 功能在多个高校获得认可。', en: 'Several 0-to-1 features were recognized by multiple universities.' } ],
    sections: [
      { id: 'overview', title: { zh: '项目背景', en: 'Background' }, content: { zh: '档案管理产品是高校刚需，传统纸质档案逐渐电子化，旧系统在法规标准、稳定性、体验与智能化能力上难以满足高校档案管理需要。', en: 'Archive management is a core need for universities. As paper archives become digital, legacy systems struggle with compliance, stability, user experience and intelligence.' } },
      { id: 'role', title: { zh: '我的职责', en: 'Responsibilities' }, content: { zh: '负责产品迭代计划、售前售后客户需求沟通、用户调研、业务需求梳理、需求筛选与优先级排序、原型设计、开发推进、功能培训与售后支持。', en: 'Owned iteration planning, customer communication, user research, requirement analysis, prioritization, prototyping, development tracking, training and support.' } },
      { id: 'strategy', title: { zh: '产品规划与迭代方向', en: 'Planning & Roadmap' }, content: { zh: '从商业需求、功能需求、性能需求和用户体验需求制定产品指标；结合政策趋势、产品趋势、客户需求和现有功能问题制定迭代周期规划。', en: 'Product indicators were planned from business, functional, performance and user-experience needs, combining policy trends, product trends, customer requirements and current system issues.' }, assets: ['nanda-roadmap'] },
      { id: 'solution', title: { zh: '核心功能设计', en: 'Key Feature Design' }, content: { zh: '围绕智能著录、OA 归档、档案收集、远程利用、库房管理、业务系统归档等方向推进功能迭代，并与算法团队探索档案馆 AI 应用场景。', en: 'Feature iterations covered intelligent cataloging, OA archiving, archive collection, remote utilization, storage-room management and business-system archiving, while exploring AI scenarios with algorithm teams.' } },
      { id: 'results', title: { zh: '成果与限制', en: 'Results & Limits' }, content: { zh: '多个 0-1 功能在多个高校获得认可，改变传统档案著录模式，提高档案馆工作效率。具体客户数量、上线版本明细和量化指标 PPT 未展开。', en: 'Several features were recognized by universities, changing traditional cataloging practices and improving efficiency. Customer counts, release details and metrics are not fully provided in the PPT.' }, assets: ['nanda-prototype'] }
    ]
  },
  {
    id: 'duiguan-audio-visual',
    title: { zh: '兑观声像｜声像档案管理系统', en: 'Duiguan Audiovisual｜Archive Management System' },
    type: { zh: 'AI 检索 / 多媒体档案', en: 'AI Search / Multimedia Archives' },
    status: 'From PPT',
    cover: img('slide21_image01_5dccabd005.jpg'),
    role: { zh: '产品经理 / 项目经理', en: 'Product Manager / Project Manager' },
    period: { zh: '2020.12—2021.03', en: '2020.12—2021.03' },
    background: { zh: '公司业务拓展需要打造声像产品；市场稀缺声像类档案管理产品，属于蓝海市场。', en: 'The company needed an audiovisual archive product for business expansion, while the market lacked mature products in this category.' },
    goal: { zh: '从 0-1 搭建声像产品，支持人脸搜索、以图搜图、智能查重等能力。', en: 'Build an audiovisual archive product from 0 to 1, supporting face search, image search and intelligent duplicate checking.' },
    keywords: [ { zh: '0-1', en: '0-to-1' }, { zh: '人脸识别', en: 'Face Recognition' }, { zh: '以图搜图', en: 'Image Search' }, { zh: '多模态检索', en: 'Multimodal Retrieval' } ],
    facts: [ { zh: '构建行业内首个独立声像档案管理系统。', en: 'Built an independent audiovisual archive management system described in the PPT as the first in the industry.' }, { zh: '联合复旦大学档案馆获上海市档案 2021 年度科技研究项目立项。', en: 'Jointly with Fudan University Archives, the project was approved as a 2021 Shanghai Archives technology research project.' }, { zh: '获国家档案局 2021 年度科技项目立项。', en: 'The project was approved as a 2021 technology project by the National Archives Administration.' } ],
    sections: [
      { id: 'overview', title: { zh: '项目概览', en: 'Overview' }, content: { zh: '声像档案系统面向高校多媒体档案管理，围绕档案收集、档案管理、人物库、人脸搜索、以图搜图和智能查重等场景设计。', en: 'The system serves university multimedia archive management, covering collection, management, person libraries, face search, image search and duplicate checking.' } },
      { id: 'architecture', title: { zh: '系统架构', en: 'System Architecture' }, content: { zh: '架构包含应用层、算法层、数据层，以及档案行业标准规范、日志记录、权限控制等支撑模块。算法层覆盖多模态检索、以图搜图、跨年龄人脸识别和场景文字识别。', en: 'The architecture includes application, algorithm and data layers, supported by archive standards, logging and permission control. Algorithms cover multimodal retrieval, image search, cross-age face recognition and scene text recognition.' }, assets: ['duiguan-architecture'] },
      { id: 'features', title: { zh: '功能设计', en: 'Feature Design' }, content: { zh: '功能模块包括档案收集、回收站、新建文件夹、导入、全部档案、未分类、类目管理、人物标记、人物库、人脸搜索、以图搜图等。', en: 'Modules include archive collection, recycle bin, folders, import, all archives, uncategorized archives, category management, person tagging, person library, face search and image search.' }, assets: ['duiguan-feature-list'] },
      { id: 'prototype', title: { zh: '产品原型与界面展示', en: 'Prototype & UI' }, content: { zh: 'PPT 展示了人物标记与人物库、人脸搜索、以图搜图等核心界面，体现算法能力在业务场景中的产品化表达。', en: 'The PPT shows key interfaces such as person tagging/library, face search and image search, demonstrating productization of algorithm capabilities.' }, assets: ['duiguan-face', 'duiguan-search', 'duiguan-image-search'] },
      { id: 'results', title: { zh: '项目成果与复盘', en: 'Results & Retrospective' }, content: { zh: '系统联合复旦大学档案馆获得上海市档案 2021 年度科技研究项目立项，并获国家档案局 2021 年度科技项目立项。详细上线数据和使用效果指标待补充。', en: 'The project was approved by Shanghai Archives and the National Archives Administration as 2021 technology projects. Detailed usage metrics remain pending.' } }
    ]
  },
  {
    id: 'jiangcun-numerology',
    title: { zh: '江村数理｜命理师工作平台', en: 'Jiangcun Numerology｜Professional Work Platform' },
    type: { zh: '工具型产品 / 小程序', en: 'Professional Tool / Mini Program' },
    status: 'From PPT',
    cover: img('slide35_image01_1897cc5a4c.png'),
    role: { zh: '产品经理', en: 'Product Manager' },
    period: { zh: '2018.07—2020.09', en: '2018.07—2020.09' },
    background: { zh: '公司曾做失败几个传统文化产品，需要做一个大数据化命理产品，探索命理行业向大众化、科学化与数据化发展。', en: 'After several unsuccessful traditional-culture products, the company wanted a data-driven numerology product to explore a more popularized, scientific and data-oriented direction.' },
    goal: { zh: '为命理师打造工作平台，覆盖排盘、查看排盘信息、档案存储、记录批命信息、客户反馈等完整流程。', en: 'Build a professional work platform for numerologists, covering chart generation, interpretation, archive storage, notes and customer feedback.' },
    keywords: [ { zh: '0-1 小程序', en: '0-to-1 Mini Program' }, { zh: '专业工具', en: 'Professional Tool' }, { zh: '用户调研', en: 'User Research' }, { zh: '数据闭环', en: 'Data Loop' } ],
    facts: [ { zh: '访谈对象包括 4 个公司命理组内部人员、1 个命理师朋友、5 个命理群命理师。', en: 'Interviews included 4 internal numerology team members, 1 numerologist friend and 5 numerologists from groups.' }, { zh: 'PPT 展示了首页起盘、四柱八字、星占排盘、八字合盘、相似四柱、用户档案等原型界面。', en: 'The PPT shows prototype interfaces including chart setup, Four Pillars, astrology, compatibility, similar charts and user archives.' } ],
    sections: [
      { id: 'research', title: { zh: '行业与用户调研', en: 'Industry & User Research' }, content: { zh: '与命理总监共同分析行业现状，找到命理与大数据结合点；访谈内部命理组、命理师朋友和命理群命理师，了解命理师对工具产品和行业的看法。', en: 'Worked with the numerology director to analyze the industry and identify data opportunities, interviewing internal staff and external numerologists to understand tool needs.' }, assets: ['jiangcun-research'] },
      { id: 'problem', title: { zh: '核心问题识别', en: 'Problem Definition' }, content: { zh: '市面工具多仅完成排盘，缺少客户档案、断语记录、反馈与数据沉淀闭环；专业排盘工具用户粘性高，客户档案迁移成本高。', en: 'Existing tools mainly handled chart generation, lacking customer archives, interpretation records, feedback and data accumulation loops. Professional tools also had strong stickiness and high migration costs.' } },
      { id: 'workflow', title: { zh: '业务流程与产品思路', en: 'Workflow & Product Thinking' }, content: { zh: '对外形成输入信息、查看命盘、记录断语、客户反馈、校正断语的完整流程；对内形成选择专题、查看断语、查看反馈、获取算法、校正算法的算法获取流程。', en: 'The external workflow covers input, chart viewing, interpretation recording, customer feedback and correction. Internally, it supports topic selection, interpretation review, feedback, algorithm extraction and correction.' } },
      { id: 'architecture', title: { zh: '产品架构', en: 'Product Architecture' }, content: { zh: '产品架构包含个人中心、首页起盘、档案列表、档案信息、四柱、星占、辅助工具、档案设置等模块。', en: 'The product architecture includes personal center, chart setup, archive list, archive details, Four Pillars, astrology, auxiliary tools and archive settings.' }, assets: ['jiangcun-architecture'] },
      { id: 'prototype', title: { zh: '原型与功能展示', en: 'Prototype & Features' }, content: { zh: '原型覆盖首页起盘、四柱八字、星占排盘、八字合盘、相似四柱与用户档案，展示命理师专业工作台的核心流程。', en: 'Prototypes cover chart setup, Four Pillars, astrology, compatibility, similar charts and user archives, showing the workflow of a professional tool.' }, assets: ['jiangcun-home', 'jiangcun-bazi', 'jiangcun-astro', 'jiangcun-hepan', 'jiangcun-similar', 'jiangcun-archive'] },
      { id: 'retrospective', title: { zh: '复盘与限制', en: 'Retrospective & Limits' }, content: { zh: '复盘指出：产品差别化需要从进一步需求出发，给用户换用理由；核心业务在于将准确出生时间和生平经历数据化、核心化、模型化。量化上线成果、用户规模和最终业务结果待补充。', en: 'The retrospective notes that differentiation must provide reasons to switch, and core value lies in digitizing birth-time and life-experience data. Launch metrics and user scale are pending.' } }
    ]
  },
  {
    id: 'jiangcun-hr-backend',
    title: { zh: '江村测评后台｜人力资源 Web 后台', en: 'Jiangcun Assessment Backend｜HR Web Backend' },
    type: { zh: '后台产品 / 知识库', en: 'Backend Product / Knowledge Base' },
    status: 'From PPT',
    cover: img('slide06_image04_76f799c614.png'),
    role: { zh: '产品经理', en: 'Product Manager' },
    period: { zh: '2018.07—2020.09', en: '2018.07—2020.09' },
    background: { zh: '内部产品，为合作企业账户申请与开通、权限分配、档案留存提供功能性与数据留存后台。', en: 'An internal product providing backend capabilities for partner account application/opening, permission assignment and archive retention.' },
    goal: { zh: '目标细节 PPT 未展开，待补充。', en: 'Detailed goals are not fully described in the PPT and remain pending.' },
    keywords: [ { zh: 'Web 后台', en: 'Web Backend' }, { zh: '权限分配', en: 'Permission Management' }, { zh: '知识库', en: 'Knowledge Base' }, { zh: '内部系统', en: 'Internal System' } ],
    facts: [ { zh: '将初始知识库拓展到算法库、模型库、档案库。', en: 'Expanded the initial knowledge base into algorithm, model and archive libraries.' } ],
    sections: [
      { id: 'overview', title: { zh: '项目概览', en: 'Overview' }, content: { zh: '江村测评后台是内部 Web 后台产品，服务合作企业账户申请开通、权限分配与档案留存。', en: 'The assessment backend is an internal web product supporting partner account opening, permission management and archive retention.' } },
      { id: 'responsibility', title: { zh: '我的职责', en: 'Responsibilities' }, content: { zh: '与命理组人员沟通需求，明确用户目标，梳理需求并定制功能；上线后根据内部用户反馈梳理需求并排期规划，多次版本迭代；推进开发并验收功能。', en: 'Communicated with the numerology team, clarified user goals, customized features, planned iterations based on internal feedback and drove development/acceptance.' } },
      { id: 'pending', title: { zh: '待补充内容', en: 'Pending Information' }, content: { zh: 'PPT 仅在项目总览中描述该项目，缺少完整背景细节、业务流程、系统架构、量化成果与复盘。', en: 'The PPT only summarizes this project and lacks detailed background, workflow, architecture, metrics and retrospective.' } }
    ]
  }
]

export const works: Asset[] = [
  { id: 'smart-lab-cover', title: { zh: 'Smart Lab 项目配图', en: 'Smart Lab visual' }, type: 'image', category: 'AI Solution', projectId: 'smart-lab', src: img('slide09_image01_8fc547599a.png'), note: { zh: '来自 PPT 第 9 页，用于 Smart Lab 项目背景展示。', en: 'Extracted from slide 9 for Smart Lab context.' } },
  { id: 'nanda-roadmap', title: { zh: '南大智星迭代规划素材', en: 'Nanda Zhixing roadmap visual' }, type: 'image', category: 'Flow', projectId: 'nanda-zhixing', src: img('slide19_image01_7425c83747.png'), note: { zh: '来自 PPT 第 19 页，建议结合 HTML 时间轴重绘。', en: 'Extracted from slide 19; recommended to redraw as an HTML timeline.' } },
  { id: 'nanda-prototype', title: { zh: '南大智星原型入口', en: 'Nanda Zhixing prototype entry' }, type: 'image', category: 'Prototype', projectId: 'nanda-zhixing', src: img('slide20_image01_05d4a5304f.png'), note: { zh: 'PPT 第 20 页原型入口截图。', en: 'Prototype entry screenshot from slide 20.' } },
  { id: 'duiguan-architecture', title: { zh: '兑观声像系统架构图', en: 'Audiovisual archive architecture' }, type: 'image', category: 'Architecture', projectId: 'duiguan-audio-visual', src: img('slide23_image01_158ea7e4c7.png'), note: { zh: '来自 PPT 第 23 页，展示应用层、算法层、数据层与支撑模块。', en: 'Extracted from slide 23, showing application, algorithm, data and support layers.' } },
  { id: 'duiguan-feature-list', title: { zh: '兑观声像功能列表', en: 'Audiovisual archive feature list' }, type: 'image', category: 'PRD', projectId: 'duiguan-audio-visual', src: img('slide24_image01_bf1b60f330.png'), note: { zh: '来自 PPT 第 24 页，展示功能拆解。', en: 'Extracted from slide 24, showing feature breakdown.' } },
  { id: 'duiguan-face', title: { zh: '人物标记与人物库界面', en: 'Person tagging and person library UI' }, type: 'image', category: 'Prototype', projectId: 'duiguan-audio-visual', src: img('slide25_image01_23264bb47f.png'), note: { zh: '来自 PPT 第 25 页。', en: 'Extracted from slide 25.' } },
  { id: 'duiguan-search', title: { zh: '人脸搜索界面', en: 'Face search UI' }, type: 'image', category: 'Prototype', projectId: 'duiguan-audio-visual', src: img('slide26_image01_caf8c542bc.png'), note: { zh: '来自 PPT 第 26 页。', en: 'Extracted from slide 26.' } },
  { id: 'duiguan-image-search', title: { zh: '以图搜图界面', en: 'Image search UI' }, type: 'image', category: 'Prototype', projectId: 'duiguan-audio-visual', src: img('slide27_image01_b8fab136c6.png'), note: { zh: '来自 PPT 第 27 页。', en: 'Extracted from slide 27.' } },
  { id: 'jiangcun-research', title: { zh: '江村数理用户调研素材', en: 'Jiangcun user research visual' }, type: 'image', category: 'Flow', projectId: 'jiangcun-numerology', src: img('slide31_image01_de55a27ae4.png'), note: { zh: '来自 PPT 第 31 页。', en: 'Extracted from slide 31.' } },
  { id: 'jiangcun-architecture', title: { zh: '江村数理产品架构图', en: 'Jiangcun product architecture' }, type: 'image', category: 'Architecture', projectId: 'jiangcun-numerology', src: img('slide35_image01_1897cc5a4c.png'), note: { zh: '来自 PPT 第 35 页，展示小程序产品架构。', en: 'Extracted from slide 35, showing mini-program architecture.' } },
  { id: 'jiangcun-home', title: { zh: '首页起盘方案', en: 'Chart setup home UI' }, type: 'image', category: 'Prototype', projectId: 'jiangcun-numerology', src: img('slide36_image01_63a4ec1118.png'), note: { zh: '来自 PPT 第 36 页。', en: 'Extracted from slide 36.' } },
  { id: 'jiangcun-bazi', title: { zh: '四柱八字界面', en: 'Four Pillars UI' }, type: 'image', category: 'Prototype', projectId: 'jiangcun-numerology', src: img('slide37_image01_0cd21f17fc.png'), note: { zh: '来自 PPT 第 37 页。', en: 'Extracted from slide 37.' } },
  { id: 'jiangcun-astro', title: { zh: '星占排盘界面', en: 'Astrology chart UI' }, type: 'image', category: 'Prototype', projectId: 'jiangcun-numerology', src: img('slide38_image01_9f7d03be6d.png'), note: { zh: '来自 PPT 第 38 页。', en: 'Extracted from slide 38.' } },
  { id: 'jiangcun-hepan', title: { zh: '八字合盘界面', en: 'Compatibility chart UI' }, type: 'image', category: 'Prototype', projectId: 'jiangcun-numerology', src: img('slide39_image01_c9dc7975ed.png'), note: { zh: '来自 PPT 第 39 页。', en: 'Extracted from slide 39.' } },
  { id: 'jiangcun-similar', title: { zh: '相似四柱 / 辅助功能', en: 'Similar Four Pillars / Tools' }, type: 'image', category: 'Prototype', projectId: 'jiangcun-numerology', src: img('slide40_image01_c9e096eeba.png'), note: { zh: '来自 PPT 第 40 页。', en: 'Extracted from slide 40.' } },
  { id: 'jiangcun-archive', title: { zh: '用户档案界面', en: 'User archive UI' }, type: 'image', category: 'Prototype', projectId: 'jiangcun-numerology', src: img('slide41_image01_6bc0affcd6.png'), note: { zh: '来自 PPT 第 41 页。', en: 'Extracted from slide 41.' } },
  { id: 'resume-placeholder', title: { zh: 'PDF 简历占位文件', en: 'Resume PDF Placeholder' }, type: 'pdf', category: 'Other', src: `${BASE}assets/docs/resume-placeholder.pdf`, download: `${BASE}assets/docs/resume-placeholder.pdf`, note: { zh: '当前为可替换 PDF 占位。替换同名文件即可启用真实简历下载。', en: 'This is a replaceable PDF placeholder. Replace it with the real resume PDF.' } }
]

export const thinking = [
  { title: { zh: '从业务现场出发做需求定义', en: 'Define Requirements from Field Research' }, content: { zh: '在 Smart Lab 中，通过半结构化访谈、现场观察、软硬件走查，先理解业务流程、设备作用、数据流和痛点，再拆解为可执行需求。', en: 'In Smart Lab, requirements were defined after interviews, field observation and hardware/software walkthroughs to understand workflow, device roles, data flow and pain points.' } },
  { title: { zh: '用价值与可行性判断 AI 场景', en: 'Prioritize AI by Value and Feasibility' }, content: { zh: '按培养阶段梳理 AI 介入场景，并结合业务价值、数据基础、技术可行性与风险把控筛选 P0/P1/P2 优先级。', en: 'AI use cases were mapped by culture stage and prioritized as P0/P1/P2 using business value, data readiness, feasibility and risk control.' } },
  { title: { zh: '将零散需求转化为版本计划', en: 'Turn Fragmented Needs into Roadmaps' }, content: { zh: '在南大智星、Smart Writing 与 Smart Lab 中，分别使用周期规划、Jira 管理、优先级表与验收标准推动研发交付。', en: 'Across Nanda Zhixing, Smart Writing and Smart Lab, roadmaps, Jira, prioritization tables and acceptance criteria were used to drive delivery.' } },
  { title: { zh: '用反馈持续校准产品方向', en: 'Use Feedback to Calibrate Product Direction' }, content: { zh: '南大智星、兑观声像与江村数理均体现了基于用户反馈、市场反馈和内部使用反馈持续优化产品的工作方式。', en: 'Nanda Zhixing, Audiovisual Archives and Jiangcun Numerology all show continuous optimization based on user, market and internal feedback.' } }
]

export const navItems = [
  { href: '/', anchor: 'about', label: { zh: '关于我', en: 'About' } },
  { href: '/', anchor: 'projects', label: { zh: '项目经历', en: 'Projects' } },
  { href: '/', anchor: 'experience', label: { zh: '工作经历', en: 'Experience' } },
  { href: '/', anchor: 'methodology', label: { zh: '方法论', en: 'Methodology' } },
  { href: '/', anchor: 'contact', label: { zh: '联系', en: 'Contact' } }
]
