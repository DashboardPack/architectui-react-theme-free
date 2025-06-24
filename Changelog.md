# Changelog

## [4.0.0] - 2025-06-24

### Changed
- **Upgraded to React 19.1.0:** Migrated the entire project to `react@^19.1.0` and `react-dom@^19.1.0`.
- **Comprehensive Dependency Update:** Updated numerous packages, including `framer-motion`, and resolved complex dependency conflicts.
- **Modernized SCSS:** Replaced deprecated Sass functions (`map-merge`, `nth`) with their modern module-based equivalents (`map.merge`, `list.nth`).
- **Webpack 5 Polyfills:** Integrated necessary polyfills (`crypto-browserify`, `stream-browserify`, etc.) for Node.js core modules no longer included in modern webpack.
- **Build Configuration:** Implemented a robust `config-overrides.js` to manage webpack fallbacks and suppress excessive console warnings from third-party libraries.
- **Bootstrap 5 Compatibility:** Updated all components and classes to be fully compatible with Bootstrap 5 (e.g., `text-bg-*` badges, `me/ms` spacing).

### Fixed
- **Fixed Collapsed Sidebar Alignment:** Resolved persistent icon alignment issues in the collapsed sidebar for both static and hover states, ensuring pixel-perfect centering.
- **Fixed User Profile Dropdown:** Corrected the positioning of the user profile dropdown to prevent it from rendering off-screen on larger viewports.
- **Fixed `reactstrap` Components:** Refactored `Form` and `FormGroup` components to remove the deprecated `inline` prop, aligning them with React 19 and Bootstrap 5 standards.
- **Fixed Vector Maps Component:** Resolved a critical data fetching error by replacing a dead URL with a local data source.

## [3.0.0] - 2023-11-20

### Changed

- Migrated to React v18.
- Import SCSS files from `node_modules` by using the sass-loader instead of relative paths like `../../node_modules`.
- Upgraded all dependencies to latest versions.

### Fixed

- Fixed SCSS bugs.

## [2.1.0] - 2022-08-19

### Changed
- Updated Libraries

## [2.0.0] - 2022-03-03

### Changed
- Updated to React 17
- Added react-app-rewired
- Updated to Bootstrap 5
- Updated to Reactstrap 9
- Updated all Libraries

## [1.1.0] - 2021-05-17

### Changed
- Updated Libraries

## [1.1.0] - 2021-04-06

### Changed
- Updated Libraries

## [1.0.0] - 2019-03-05

### Added
- Initial Release

[3.0.0]: https://github.com/DashboardPack/architectui-react-theme-free/releases/tag/v3.0.0
