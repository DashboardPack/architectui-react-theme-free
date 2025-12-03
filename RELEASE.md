# Release v4.1.0

## 🚀 ArchitectUI React Dashboard v4.1.0

**Release Date:** December 3, 2025

This release brings comprehensive dependency updates, performance improvements through dependency cleanup, and ensures compatibility with the latest React 19.2.0.

---

## ✨ Highlights

- **React 19.2.0** - Updated to the latest React release
- **Major Package Updates** - FontAwesome 7, ApexCharts 5, Recharts 3, and more
- **Leaner Dependencies** - Removed 22 unused packages (~100 total with transitive deps)
- **Zero Build Errors** - Clean compilation with no errors

---

## 📦 What's Changed

### Dependencies Updated

| Package | Previous | New |
|---------|----------|-----|
| `react` / `react-dom` | 19.1.0 | **19.2.0** |
| `@fortawesome/*` | 6.7.2 | **7.1.0** |
| `@fortawesome/react-fontawesome` | 0.2.2 | **3.1.1** |
| `apexcharts` | 4.7.0 | **5.3.6** |
| `recharts` | 2.13.3 | **3.5.1** |
| `framer-motion` | 12.19.1 | **12.23.25** |
| `react-router-dom` | 7.6.2 | **7.9.6** |
| `bootstrap` | 5.3.7 | **5.3.8** |
| `typescript` | 5.7.2 | **5.9.3** |
| `@reduxjs/toolkit` | 2.8.2 | **2.11.0** |
| `sass` | 1.89.2 | **1.94.2** |

*Plus 90+ additional minor/patch updates*

### Dependencies Removed (22 packages)

**Testing Libraries** (no test files in project):
- `@testing-library/jest-dom`
- `@testing-library/react`
- `@testing-library/user-event`

**Unused UI Components**:
- `chartist`, `jquery`, `rc-tree`, `react-compound-slider`
- `react-dnd`, `react-dnd-html5-backend`, `react-map-gl`
- `react-outside-click-handler`, `react-scroll`, `react-sizeme`
- `react-syntax-highlighter`

**Unused Redux Packages** (using @reduxjs/toolkit):
- `redux-form`, `redux-logger`, `redux-thunk`

**Other Unused**:
- `dropzone` (using react-dropzone), `globalize`, `install`
- `web-vitals`, `@types/markerclustererplus`

### Bug Fixes

- **Fixed namor compatibility**: Replaced `namor` package with browser-compatible inline name generator (namor v3 uses Node.js fs module which doesn't work in browsers)

---

## 📊 Stats

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Direct Dependencies | 123 | 101 | -22 |
| Total Packages (node_modules) | 1,908 | 1,807 | -101 |
| Build Status | ✅ | ✅ | Clean |
| Vulnerabilities | 2 moderate | 2 moderate | Same |

---

## 🔧 Installation

```bash
# Clone the repository
git clone https://github.com/DashboardPack/architectui-react-theme-free.git
cd architectui-react-theme-free

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

---

## ⚠️ Breaking Changes

### FontAwesome 7.x

If you have custom FontAwesome icon implementations, note that FontAwesome 7 has some API changes. The bundled components have been updated to work with v7.

### Recharts 3.x

Recharts has been updated to v3. If you've customized any chart components beyond the demo pages, review the [Recharts migration guide](https://recharts.org/en-US/guide/migration).

---

## 🙏 Upgrade Notes

1. Delete `node_modules` and `package-lock.json` before upgrading
2. Run `npm install` to get fresh dependencies
3. Test your build with `npm run build`
4. Start dev server with `npm start` to verify

---

## 📝 Full Changelog

See [CHANGELOG.md](CHANGELOG.md) for complete version history.

---

## 🔗 Links

- **Live Demo**: [ArchitectUI React Demo](https://demo.dashboardpack.com/architectui-react-free)
- **Documentation**: Included in repository
- **PRO Version**: [Get PRO](https://dashboardpack.com/theme-details/architectui-dashboard-react-pro)
- **Report Issues**: [GitHub Issues](https://github.com/DashboardPack/architectui-react-theme-free/issues)

---

**Made with ❤️ by [DashboardPack](https://dashboardpack.com/)**
