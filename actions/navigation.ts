import { Page } from "@playwright/test";
import LoginPage from "../pages/login/LoginPage";
import HomePage from "../pages/home/HomePage";
import { BASE_URL } from "../models/Arguments";

const goToStartPage = async (page: Page): Promise<void> => {
  await page.goto(BASE_URL);
};

const goToLoginPage = async (page: Page): Promise<LoginPage> => {
  await page.click("//a[contains(., 'Login')]");

  return new LoginPage(page);
};

const goToHomePage = async (page: Page): Promise<HomePage> => {
  await page.click("//div[@id='modal-2-content']//span[contains(., 'Shop')]");
  return new HomePage(page);
};

export { goToStartPage, goToLoginPage, goToHomePage };
