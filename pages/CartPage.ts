import { Page, Locator } from '@playwright/test';

export class CartPage {
  private page: Page;
  private backpackName: Locator;
  private checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.backpackName = this.page.locator(
      '[data-test="inventory-item-name"]'
    );

    this.checkoutButton = this.page.locator('[data-test="checkout"]');
  }

  async isBackpackVisible(): Promise<boolean> {
    return await this.backpackName.isVisible();
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }
}