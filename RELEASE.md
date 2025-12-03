# Release v4.2.0

## ArchitectUI React Dashboard v4.2.0

**Release Date:** December 3, 2025

This major release completes the modernization of ArchitectUI React with a full migration from Create React App to **Vite 7.2.6**, bringing dramatically faster build times and improved developer experience.

---

## Highlights

- **Vite Migration** - Build times reduced from ~30s to ~3s with instant HMR
- **348 Files Renamed** - All .js files converted to .jsx for better tooling
- **No API Keys Required** - Google Maps replaced with free Leaflet/OpenStreetMap
- **Enhanced Vector Maps** - Redesigned with proper sizing and interactivity
- **React 19 Compatibility** - New custom components replace deprecated packages

---

## What's Changed

### Build System Migration

The entire build system has been migrated from Create React App to Vite 7.2.6:

- Development server starts in under 1 second (previously ~15-20 seconds)
- Hot Module Replacement (HMR) is now instant
- Production builds complete in ~3 seconds (previously ~30 seconds)
- Removed `react-scripts`, `react-app-rewired`, and `config-overrides.js`
- Added new `vite.config.js` with Node.js polyfills and optimized settings

### File Extensions

All 348 JavaScript files have been renamed from `.js` to `.jsx` for:
- Better IDE tooling and IntelliSense support
- Explicit JSX syntax recognition
- Vite compatibility

### Maps Overhaul

**Leaflet/OpenStreetMap** (replaces Google Maps):
- No API key required
- Multiple map styles: Standard, Dark, Satellite, Topographic, Watercolor
- Full interactive controls (zoom, pan, markers)

**Enhanced Vector Maps**:
- Proper sizing that fills the card container
- Interactive hover effects on countries
- Zoom and pan functionality
- City markers with population tooltips

### New Custom Components

Created to replace deprecated React 18 packages:

| Component | Replaces | Technology |
|-----------|----------|------------|
| `LoadingOverlay` | react-loading-overlay-ts | Framer Motion |
| `TabsWrapper` | rc-tabs | Native React |
| `TransitionWrapper` | react-transition-group | Framer Motion |

### React 19 Compatibility

Added comprehensive npm overrides to resolve React version conflicts in third-party packages that bundle older React versions.

### SCSS Updates

Removed tilde (~) prefix from all SCSS imports for Vite compatibility.

---

## Removed Dependencies

| Package | Reason |
|---------|--------|
| `react-scripts` | Replaced by Vite |
| `react-app-rewired` | No longer needed |
| `react-loading-overlay-ts` | Replaced by custom component |
| `google-map-react` | Replaced by Leaflet |
| `rc-tabs` | Replaced by custom component |
| `react-transition-group` | Replaced by Framer Motion |

---

## Installation

```bash
# Clone the repository
git clone https://github.com/DashboardPack/architectui-react-theme-free.git
cd architectui-react-theme-free

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm start
```

The application will open at `http://localhost:3001`

---

## Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

Preview available at `http://localhost:4173`

---

## Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | React | 19.2.0 |
| Build Tool | Vite | 7.2.6 |
| UI Framework | Bootstrap | 5.3.8 |
| Components | Reactstrap | 9.2.3 |
| State | Redux Toolkit | 2.11.0 |
| Routing | React Router | 7.9.6 |
| Animations | Framer Motion | 12.23.25 |
| Charts | ApexCharts, Chart.js, Recharts | Latest |
| Maps | Leaflet, react-simple-maps | Latest |
| Styling | Sass | 1.94.2 |

---

## Security

**0 vulnerabilities** - Clean npm audit with all dependencies updated.

---

## Upgrade Notes

1. Delete `node_modules` and `package-lock.json` before upgrading
2. Run `npm install --legacy-peer-deps`
3. Note: `npm start` now uses Vite (port 3001)
4. Build output is now in `dist/` instead of `build/`

---

## Links

- **Live Demo**: [ArchitectUI React Demo](https://demo.dashboardpack.com/architectui-react-free)
- **PRO Version**: [Get PRO](https://dashboardpack.com/theme-details/architectui-dashboard-react-pro)
- **Report Issues**: [GitHub Issues](https://github.com/DashboardPack/architectui-react-theme-free/issues)

---

## Full Changelog

See [CHANGELOG.md](CHANGELOG.md) for complete version history.

**Full Changelog**: https://github.com/DashboardPack/architectui-react-theme-free/compare/v4.1.0...v4.2.0

---

**Made with care by [DashboardPack](https://dashboardpack.com/)**
