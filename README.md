# 陆华洁个人产品经理作品集网站

基于 React + Vite + TypeScript + Tailwind CSS + Framer Motion + React Router 开发的个人简历与项目作品集网站。

## 已接入内容

- 首页：姓名、职业定位、核心能力、核心项目入口、简历下载、联系入口。
- 关于我：教育背景、7 年产品经验、行业领域、工作经历时间线、能力分类。
- 项目经历：基于 PPT 提取 6 个项目：
  1. Smart Lab｜细胞培养 AIoT 自动化优化系统
  2. Smart Writing｜智能撰写平台
  3. 南大智星｜高校综合档案管理系统
  4. 兑观声像｜声像档案管理系统
  5. 江村数理｜命理师工作平台
  6. 江村测评后台｜人力资源 Web 后台
- 作品集：已导入 PPT 中导出的架构图、流程图、原型图等图片素材。
- 产品思考：基于 PPT 中体现的真实工作方式提炼，不虚构方法论。
- 联系我：邮箱、微信、简历下载。

## 本地运行

```bash
npm install
npm run dev
```

浏览器访问：`http://localhost:5173`

## 生产构建

```bash
npm run build
npm run preview
```

构建产物位于：`dist/`

## 修改个人资料

主要内容位于：

```text
src/data/portfolio.ts
```

可修改字段：

- `profile.name`：姓名
- `profile.headline`：首页一句话介绍
- `profile.intro`：个人简介
- `profile.email` / `profile.phoneWechat` / `profile.wechat`：联系方式
- `experiences`：工作经历
- `skills`：能力标签
- `projects`：项目详情
- `works`：作品素材
- `thinking`：产品思考

## 替换 PDF 简历

将真实简历 PDF 替换为：

```text
public/assets/docs/resume-placeholder.pdf
```

建议保持文件名不变，这样无需改代码。

## 更新项目作品素材

1. 将图片放入：

```text
public/assets/images/
```

或使用当前 PPT 导出目录：

```text
public/assets/images/ppt-extracted/
```

2. 在 `src/data/portfolio.ts` 的 `works` 数组中新增素材：

```ts
{
  id: 'unique-id',
  title: { zh: '中文标题', en: 'English Title' },
  type: 'image',
  category: 'Prototype',
  projectId: 'smart-lab',
  src: '/assets/images/your-image.png',
  note: { zh: '说明', en: 'Note' }
}
```

3. 如需在项目详情章节展示该素材，在对应项目 `sections` 中加入：

```ts
assets: ['unique-id']
```

## GitHub Pages 部署

1. 在 GitHub 创建新仓库，例如：`personal-portfolio-website`。
2. 在本项目目录执行：

```bash
git init
git add .
git commit -m "init portfolio website"
git branch -M main
git remote add origin https://github.com/<你的用户名>/personal-portfolio-website.git
git push -u origin main
```

3. 打开 GitHub 仓库：Settings → Pages。
4. Source 选择 GitHub Actions。
5. 推送后等待 Actions 完成，即可获得 GitHub Pages 公开链接。

> 注意：我无法代替你完成 GitHub 登录、仓库创建和授权，因此不能伪造公开 URL。

## 腾讯云 EdgeOne Pages 部署建议

适合中国大陆访问，可按以下步骤：

1. 将本项目推送到 GitHub / GitLab。
2. 登录腾讯云 EdgeOne Pages。
3. 新建 Pages 项目，授权代码仓库。
4. 构建命令填写：`npm run build`
5. 输出目录填写：`dist`
6. Node 版本建议：`20` 或平台默认 LTS。
7. 部署完成后平台会提供默认访问域名。
8. 如需绑定自定义域名，根据平台提示配置 CNAME；若使用中国大陆服务器或特定域名解析策略，可能需要按平台要求完成备案或实名认证。

## 技术栈

- React
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router
- Lucide Icons

## 说明

网站内容严格基于上传 PPT 提取。PPT 未提供的量化指标、用户规模、团队规模、商业成果等均标注为“待补充”，未进行虚构。
