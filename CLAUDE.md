# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is Elena Thomas's professional portfolio website built with Next.js 15 and React 19, focused on showcasing healthcare informatics expertise. The project uses the App Router architecture with TypeScript and Mantine UI components.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production server
npm run start

# Run ESLint
npm run lint
```

## Architecture & Key Patterns

### Tech Stack
- **Framework**: Next.js 15.5.4 with App Router (`/app` directory)
- **UI Library**: Mantine 8.3.2 for component library
- **Styling**: Hybrid approach using Mantine components + Tailwind CSS utilities
- **TypeScript**: Strict mode enabled with path alias `@/*` → `./src/*`
- **Package Manager**: pnpm (lock file present)
- **Node Version**: 22 (specified in .nvmrc)

### Project Structure
The codebase follows a minimal, single-page architecture:
- `/src/app/page.tsx` - Main portfolio page containing all sections (Hero, About, Featured Project, Footer)
- `/src/app/layout.tsx` - Root layout with Mantine provider and custom theme configuration
- `/src/app/globals.css` - Global styles including Tailwind imports and custom CSS variables

### Mantine Theme Configuration
The project uses a custom neutral color palette with gray and slate variants configured in `layout.tsx`. The theme includes:
- Primary color: gray
- Font family: Inter
- 10-shade color scales for both gray and slate
- Dark mode support via CSS custom properties

### Important Notes
- **No Testing Framework**: The project currently has no testing setup
- **Single Page Structure**: All content is in one file (`page.tsx`) rather than separated components
- **Image Assets**: Healthcare-related images stored in `/public/`
- **Contact Form**: Uses Mantine form components for the contact section