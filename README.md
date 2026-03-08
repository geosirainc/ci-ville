
# CI-VILLE Website

A modern, responsive web platform for CI-VILLE - a collaborative municipal citizen engagement tool.

## Features

- **Homepage** - Hero section, collaborative tools showcase, how-it-works guide, and call-to-action
- **Mobile App Page** - Dedicated page showcasing the mobile application features
- **Web App Page** - Dedicated page showcasing the web application features
- **Impact Page** - Impact section highlighting benefits for municipalities and citizens
- **Responsive Design** - Fully responsive on desktop, tablet, and mobile
- **Multilingual Support** - English and French language support
- **Modern Animations** - Smooth animations and transitions using motion/react

## Tech Stack

- **React** 18.3.1
- **Vite** 6.3.5 - Fast build tool and dev server
- **TypeScript** - Type-safe code
- **Tailwind CSS** 4.1.12 - Utility-first CSS framework
- **motion/react** 12.23.24 - Animation library
- **Lucide React** 0.487.0 - Icon library
- **Radix UI** - Accessible component primitives

## Getting Started

### Prerequisites
- Node.js v24.7.0 or higher
- npm or your preferred package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

## Project Structure

```
src/
├── app/
│   ├── components/           # Reusable React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx      # Impact section with advantage cards
│   │   ├── CollaborativeTools.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── GetStarted.tsx
│   │   ├── StatsBanner.tsx
│   │   ├── SectionBadge.tsx
│   │   └── StoreButtons.tsx
│   ├── pages/                # Page components
│   │   ├── HomePage.tsx
│   │   ├── MobilePage.tsx
│   │   ├── WebPage.tsx
│   │   └── ImpactPage.tsx
│   ├── contexts/             # Context API for state
│   │   └── LanguageContext.tsx
│   └── App.tsx              # Main app component with routing
├── assets/                   # Images, logos, and icons
└── styles/                   # Global styles

## Deployment

### Netlify

This project is configured to deploy on Netlify. The `netlify.toml` file contains the build configuration.

1. Connect your GitHub repository to Netlify
2. Netlify will automatically detect the Vite configuration
3. Deploy!

Environment variables needed:
- `NPM_CONFIG_PRODUCTION=false` (to install devDependencies during build)

## Contact

- **Phone**: +1 438 357 2118
- **Email**: geosirainc@gmail.com
- **Organization**: GEOSIRA INC.

## License

Private project
  