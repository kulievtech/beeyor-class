import test, { expect } from "@playwright/test";
import { login } from "../../utilities/login";

test(
  "Helper Login - Verify a user can login",
  { tag: ["@smoke"] },
  async ({ page }) => {
    // Login in to the application
    const accountPage = await login(page);
    const userData = { username: "students", password: "Default1!" };

    // Get the text of logout button
    const logOutText = await accountPage.getLogOutText();

    // Verify log out text has the correct text
    expect(logOutText).toBe("Log out");
  },
);
