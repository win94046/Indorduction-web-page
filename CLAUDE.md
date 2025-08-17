# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based personal portfolio website for 陳宇凱 (Chen Yu-Kai), showcasing professional skills, work experience, and project portfolio. The site is designed for deployment to GitHub Pages and includes responsive design and YouTube video integration.

## Development Commands

### Core Development
- `npm start` - Start development server (React development mode, runs on http://localhost:3000)
- `npm run build` - Build production bundle for deployment
- `npm test` - Run test suite (React Testing Library/Jest)
- `npm test -- --watch` - Run tests in watch mode for development
- `npm run eject` - Eject from Create React App (irreversible)

### Deployment
- `npm run deploy` - Deploy to GitHub Pages using gh-pages
- `npm run predeploy` - Pre-deployment build step (runs automatically)

### Package Management
- `npm install` - Install all dependencies
- `npm ci` - Clean install for CI/CD (used in GitHub Actions)

## Architecture Overview

### Technology Stack
- **Framework**: React 18 with functional components
- **Build Tool**: Create React App (CRA) with react-scripts 5.0.1
- **Deployment**: GitHub Pages with automated CI/CD via GitHub Actions
- **Styling**: Pure CSS3 with Grid and Flexbox layouts

### Component Structure
The application follows a simple, flat component structure:

```
src/
├── App.js                 # Main app component with header and layout
├── index.js              # React DOM root and StrictMode wrapper
├── index.css             # Global styles with gradient background
└── components/           # All feature components (flat structure)
    ├── PersonalInfo.js   # Basic personal information display
    ├── Skills.js         # Programming languages, tools, frameworks
    ├── Experience.js     # Work experience timeline
    ├── Projects.js       # Project portfolio with descriptions
    ├── Education.js      # Educational background
    ├── Biography.js      # Personal background and interests
    └── Contact.js        # Contact information and links
```

### Key Design Patterns
- **Single Page Application**: All content rendered in one page with smooth scrolling
- **Component Composition**: App.js imports and renders all components in a fixed order
- **Static Data**: All content is hardcoded within components (no external data sources)
- **CSS Grid Layout**: Uses `.info-grid` and `.skills-container` for responsive layouts
- **Gradient Background**: Body uses CSS linear gradient for visual appeal
- **Internationalization**: HTML lang set to "zh-TW" (Traditional Chinese), all content in Chinese

### Deployment Pipeline
- **GitHub Actions**: Automated deployment on push to `main` branch
- **Build Process**: `npm ci` → `npm run build` → deploy to `gh-pages` branch
- **Node Version**: Pinned to Node.js 18 for consistency

## Content Customization

To update website content, edit the respective component files in `src/components/`. Each component contains hardcoded Chinese text and data arrays that can be modified directly.

### Key Content Areas
- **Personal Information**: Contact details, job preferences in `PersonalInfo.js`
- **Technical Skills**: Programming languages, tools, frameworks arrays in `Skills.js`
- **Professional Experience**: Work history and achievements in `Experience.js`
- **Project Portfolio**: Project descriptions and YouTube links in `Projects.js`
  - Projects include detailed technical responsibilities and tech stacks
  - YouTube integration for project demonstrations
- **Education**: Academic background in `Education.js`
- **Biography**: Personal interests and background in `Biography.js`
- **Contact**: Professional contact information in `Contact.js`

## Styling Approach

The project uses a single CSS file (`src/index.css`) with:
- **CSS Custom Properties**: Not currently used, but could be added for theming
- **Responsive Design**: Mobile-first approach with flexbox and grid
- **Color Scheme**: Purple gradient background (`#667eea` to `#764ba2`)
- **Typography**: System font stack with good cross-platform compatibility
- **Shadow Effects**: Box shadows and text shadows for depth

## GitHub Pages Configuration

The project is configured for GitHub Pages deployment:
- **Homepage**: Should be set in `package.json` to match GitHub Pages URL
- **Build Directory**: `./build` (standard CRA output)
- **Branch**: Deploys to `gh-pages` branch automatically
- **Domain**: Uses GitHub Pages default domain structure