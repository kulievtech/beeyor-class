import { test as base, Page } from "@playwright/test";
import { login } from "../utilities/login";
import MyAccountPage from "../pages/my-account/MyAccountPage";

/**
 * Define a custom fixture that logs in before each test.
 */

type AuthFixtures = {
  myAccountPage: MyAccountPage;
  user: { username: string; password: string };
};

export const test = base.extend<AuthFixtures>({
  myAccountPage: async ({ page }, use) => {
    const accountPage = await login(page);

    // Provide the logged-in page to the test
    await use(accountPage);
  },

  // Fixed user fixture
  user: async ({}, use) => {
    const userData = { username: "students", password: "Default1!" };

    // This makes `user` available in your tests
    await use(userData);
  },
});
