import { expect } from "@playwright/test";
import { test } from "../../fixtures/auth.ts";

test(
  "Helper Login Fixture",
  { tag: ["@smoke"] },
  async ({ myAccountPage, user }) => {
    // Get the text of logout button
    const logOutText = await myAccountPage.getLogOutText();

    console.log(user.username, user.password);

    // Verify log out text has the correct text
    expect(logOutText).toBe("Log out");
  },
);
