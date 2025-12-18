# CLAUDE.md - John Slowik Personal Website

## Project Overview
Personal website built with Nuxt 3, featuring a blog and portfolio. Uses static site generation with markdown content and deploys to AWS via CodeBuild.

## Technology Stack
- **Framework**: Nuxt 3 (SSR enabled)
- **Styling**: Tailwind CSS + SCSS
- **Content**: @nuxt/content (markdown-based)
- **Package Manager**: npm
- **UI Components**: HeadlessUI Vue + Heroicons
- **Deployment**: AWS (CodeBuild → S3 → CloudFront)

## Project Structure
```
├── app.vue                 # Main app wrapper with navbar/footer
├── components/            # Vue components (navbar, footer)
├── content/              # Markdown content (blog posts, pages)
├── pages/                # Vue pages using file-based routing
├── assets/css/           # SCSS stylesheets
├── public/               # Static assets (images, favicon)
└── buildspec.yml         # AWS CodeBuild configuration
```

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview generated site

## Content Management
- Content stored in `/content/` directory as markdown files
- Blog posts in `/content/blog/` with frontmatter metadata
- Pages use frontmatter for titles and meta information
- Blog post frontmatter includes: title, date, description, tags, author, location, imageUrl

## Styling Guidelines
- Uses Tailwind CSS with custom color variables:
  - `--primary` (#242424) - Main dark color
  - `--secondary` (#FFFFFF) - Light color
  - `--color-1` (#FE4365) - Accent red
  - `--color-2` (#FF7F6A) - Light red
  - `--color-3` (#B4C8C2) - Muted green
  - `--color-4` (#ECF1F0) - Light gray
- Typography plugin enabled for markdown content
- External links automatically get icon via CSS (main.scss:5-15)

## Component Patterns
- Use HeadlessUI for interactive components (Dialog, etc.)
- Use Heroicons for icons
- Components follow Vue 3 Composition API with `<script setup>`
- TypeScript enabled throughout

## Navigation Structure
Main navigation items (components/navbar.vue:79-84):
- Home (/)
- About (/about)
- Resume (/resume)
- Blog (/blog)

## AWS Deployment
- **Build Process**: Uses npm, runs `npm run generate`
- **Artifacts**: Static files from `.output/public`
- **CloudFront**: Distribution ID EY95NWP6MYHW0 (invalidated on deploy)
- **Build Commands**: See buildspec.yml for complete pipeline

## Development Best Practices
1. **Package Management**: Always use npm
2. **Content**: Use markdown files in `/content/` for blog posts and pages
3. **Styling**: Follow existing Tailwind patterns, use custom CSS variables
4. **Components**: Stick to HeadlessUI + Heroicons for consistency
5. **TypeScript**: Maintain type safety throughout
6. **Static Generation**: Use `npm run generate` for production builds

## File Naming Conventions
- Vue components: lowercase with dashes (navbar.vue, footer.vue)
- Pages: match URL structure
- Blog posts: date-prefixed markdown files (YYYY-MM-DD-title.md)
- Images: organized in `/public/img/` with subdirectories

## Key Dependencies
- `nuxt` ^3.5.1 - Framework
- `@nuxt/content` ^2.6.0 - Content management
- `tailwindcss` ^3.3.2 - Styling
- `@headlessui/vue` ^1.7.13 - UI components
- `@heroicons/vue` ^2.0.18 - Icons
- `sass` ^1.62.1 - SCSS support

## Content Frontmatter Schema
### Blog Posts
```yaml
---
title: "Post Title"
date: YYYY-MM-DD
description: "Post description"
tags: 
  - Tag1
  - Tag2
author: { 
    name: "Author Name",
    imageUrl: "/img/path.png",
    role: "Role"
}
location: "Location"
imageUrl: "/img/blog/image.jpg"
head: {
    title: "SEO Title"
}
---
```

### Pages
```yaml
---
title: "Page Title"
---
```