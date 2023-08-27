const { devices } = require('@playwright/test');

const config = {
  use: {
    baseURL: process.env.URL,
    headless: true, // false - headed : true - headless
    ignoreHTTPSErrors: true,

    screenshot: 'on',
    video: {
      mode: "on", // "retain-on-failure",
      size: { width: 1920, height: 1080 }
    },

    viewport: { width: 1280, height: 720 },
    trace: 'on',
    snapshot: 'on'
  },

  //testDir: './tests',
  retries: 1,
  // control the workers from here
  workers: 3,

  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: { timeout: 5000 },

  // Allure report
  reporter: [
    ['line'],
    ['allure-playwright']],

  projects: [
    /* Test against desktop browsers */
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against branded browsers. */
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' }, // or 'chrome-beta'
    },
    {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' }, // or 'msedge-dev'
    },

    /* Test against mobile viewports. */
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],
};

module.exports = config;
