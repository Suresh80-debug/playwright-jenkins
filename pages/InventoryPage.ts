import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  private page: Page;
  private addToCart: Locator;
  private cartButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.addToCart = this.page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );

    this.cartButton = this.page.locator('.shopping_cart_link');
  }

  async addToCartItem() {
    await this.addToCart.click();
  }

  async openCart() {
    await this.cartButton.click();
  }
}