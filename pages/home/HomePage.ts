import BasePage from "../BasePage";
import CartComponent from "../CartComponent";
import { ProductsTable } from "./ProductsTable";

/**
 * Dashboard Page page object
 * URL: /
 */

export default class HomePage extends BasePage {
  async waitUntilPageIsLoaded() {
    await this.waitForElement("//h2[contains(., 'Trending Products')]");
  }

  async openCart(): Promise<CartComponent> {
    await this.click("//button[contains(@aria-label, 'items in cart')]");
    await this.waitForElement(
      "//div[@data-block-name='woocommerce/mini-cart-contents']",
    );

    return new CartComponent(
      this.page.locator(
        "//div[@data-block-name='woocommerce/mini-cart-contents']",
      ),
    );
  }

  async getTrendingTitle(): Promise<string> {
    return this.getText("//p[contains(., 'Trending Now')]");
  }

  getTrendingProductsTable() {
    return new ProductsTable(
      this.page.locator(
        "//div[contains(@class, 'group')][contains(@class, 'has-background')][div[contains(., 'Trending Products')]]",
      ),
    );
  }

  getNewArrivalsProductsTable() {
    return new ProductsTable(
      this.page.locator(
        "//div[contains(@class, 'group')][contains(@class, 'has-background')][div[contains(., 'New Arrivals')]]",
      ),
    );
  }
}
