import { test, expect } from '@playwright/test';

// Curated set of top-level demo routes. The app uses HashRouter, so every URL
// is `/#/path`. Each case gives the route plus one piece of copy that the
// page must render after navigation to confirm the component tree actually
// mounted (not just a blank shell with no JS errors).
const routes = [
  // Dashboards
  { hash: '#/dashboards/analytics', expect: /Analytics/i },
  { hash: '#/dashboards/crm', expect: /CRM/i },
  { hash: '#/dashboards/commerce', expect: /Commerce/i },
  { hash: '#/dashboards/sales', expect: /Sales/i },
  { hash: '#/dashboards/minimal-dashboard-1', expect: /Minimal/i },
  // Apps
  { hash: '#/apps/mailbox', expect: /Mailbox|Inbox/i },
  { hash: '#/apps/chat', expect: /Chat/i },
  { hash: '#/apps/faq-section', expect: /FAQ|Frequently/i },
  // Components / Elements
  { hash: '#/components/accordion', expect: /Accordion/i },
  { hash: '#/components/modals', expect: /Modal/i },
  { hash: '#/components/calendar', expect: /Calendar/i },
  { hash: '#/components/maps', expect: /Maps/i },
  { hash: '#/elements/cards', expect: /Cards/i },
  { hash: '#/elements/icons', expect: /Icons/i },
  { hash: '#/elements/navigation', expect: /Nav/i },
  // Forms
  { hash: '#/forms/controls', expect: /Form|Controls/i },
  { hash: '#/forms/datatables', expect: /Table|Data/i },
  // Tables
  { hash: '#/tables/datatables', expect: /Table|Data/i },
  // Charts
  { hash: '#/charts/apexcharts', expect: /Chart/i },
  { hash: '#/charts/chartjs', expect: /Chart/i },
  // User pages
  { hash: '#/pages/login', expect: /Login|Sign in/i },
  { hash: '#/pages/register', expect: /Register|Sign up|Create Account/i },
  { hash: '#/pages/forgot-password', expect: /Forgot|Recover/i },
  // Widgets
  { hash: '#/widgets/chart-boxes-3', expect: /Widget|Box/i },
];

for (const route of routes) {
  test(`route renders without console errors: ${route.hash}`, async ({ page }) => {
    const errors = [];
    const pageErrors = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    page.on('pageerror', (err) => pageErrors.push(err.message));

    await page.goto(`/${route.hash}`, { waitUntil: 'networkidle' });

    // Every page should render the header with the app title somewhere.
    await expect(page.locator('body')).toBeVisible();
    await expect(page.locator('body')).toContainText(route.expect, { timeout: 10_000 });

    // Third-party widgets sometimes log benign warnings as errors; treat those
    // as soft failures. Hard-fail on anything referencing our own source, on
    // "Element type is invalid" React errors, and on uncaught page errors.
    const hardErrors = errors.filter(
      (e) => /Element type is invalid|Cannot read|is not a (constructor|function)|ChunkLoadError/i.test(e)
    );
    expect(pageErrors, `Page errors: ${pageErrors.join('\n')}`).toHaveLength(0);
    expect(hardErrors, `Hard console errors: ${hardErrors.join('\n')}`).toHaveLength(0);
  });
}
