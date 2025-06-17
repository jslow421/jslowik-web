# GitHub Copilot Instructions - John Slowik Personal Website

## Project Context
This is a personal website built with Nuxt 3, featuring a blog and portfolio. It uses static site generation with markdown content and deploys to AWS via CodeBuild.

## Technology Stack & Dependencies
- **Framework**: Nuxt 3 (SSR enabled) - Always use Nuxt 3 patterns
- **Styling**: Tailwind CSS + SCSS - Use existing utility classes and custom variables
- **Content**: @nuxt/content for markdown-based content management
- **Package Manager**: pnpm (REQUIRED - never suggest npm/yarn alternatives)
- **UI Components**: @headlessui/vue + @heroicons/vue (use these, not other UI libraries)
- **TypeScript**: Enabled throughout - maintain type safety

## Code Style & Patterns

### Vue Components
- Use Vue 3 Composition API with `<script setup lang="ts">`
- Component naming: lowercase with dashes (navbar.vue, footer.vue)
- Import HeadlessUI components when building interactive UI
- Use Heroicons for all icon needs
- Follow existing component structure from components/ directory

### Styling Guidelines
- Use Tailwind CSS classes primarily
- Custom colors available as CSS variables:
  - `primary` (#242424), `secondary` (#FFFFFF)
  - `color-1` (#FE4365), `color-2` (#FF7F6A), `color-3` (#B4C8C2), `color-4` (#ECF1F0)
- Typography plugin is available for markdown content
- External links get automatic icons via existing CSS

### File Structure Rules
- Vue pages in `/pages/` following file-based routing
- Components in `/components/`
- Markdown content in `/content/` and `/content/blog/`
- Static assets in `/public/img/` with subdirectories
- SCSS files in `/assets/css/`

### Content Management
- Blog posts must include proper frontmatter:
  ```yaml
  ---
  title: "Post Title"
  date: YYYY-MM-DD (required format)
  description: "Description"
  tags: ["tag1", "tag2"]
  author: { name: "Name", imageUrl: "/img/path.png", role: "Role" }
  location: "Location"
  imageUrl: "/img/blog/image.jpg"
  ---
  ```
- Page content uses simpler frontmatter with just title

## Development Commands
- Use `pnpm dev` for development
- Use `pnpm generate` for static site generation
- Never suggest npm/yarn commands

## Navigation Structure
Main navigation items (keep consistent):
- Home (/), About (/about), Resume (/resume), Blog (/blog)

## Deployment Context
- Builds via AWS CodeBuild using buildspec.yml
- Generates static files to `.output/public`
- Uses CloudFront with automatic cache invalidation
- Target is static site generation, not server deployment

## What NOT to suggest
- Don't suggest npm or yarn (pnpm only)
- Don't suggest UI libraries other than HeadlessUI
- Don't suggest icon libraries other than Heroicons
- Don't suggest CSS frameworks other than Tailwind
- Don't suggest server-side deployment options
- Don't suggest database solutions (content is markdown-based)

## Preferred Approaches
- For interactive components: Use HeadlessUI patterns
- For icons: Import from @heroicons/vue
- For styling: Tailwind classes with custom CSS variables
- For content: Markdown files with proper frontmatter
- For type safety: Maintain TypeScript throughout
- For state management: Use Vue 3 Composition API patterns