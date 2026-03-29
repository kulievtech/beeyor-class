import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: process.env.CI ? [["blob"], ["html"]] : "html",
  timeout: 30 * 1000,
  use: {
    headless: true,
    actionTimeout: 15 * 1000,
    trace: "retain-on-failure",
    video: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: {
        browserName: "chromium",
        viewport: null,
        launchOptions: {
          args: ["--start-maximized"],
        },
      },
    },
  ],
});
