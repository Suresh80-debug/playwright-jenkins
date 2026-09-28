import { Page, Locator } from '@playwright/test';

export class CheckoutOverviewPage {
  private page: Page;
  private finishButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.finishButton = this.page.locator('[data-test="finish"]');
  }

  async finishOrder() {
    await this.finishButton.click();
  }
}