import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';

test('user can complete an order for Backpack', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const checkoutOverviewPage = new CheckoutOverviewPage(page);

  await page.goto('https://www.saucedemo.com/');

  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addToCartItem();
  await inventoryPage.openCart();

  await cartPage.clickCheckout();

  await checkoutPage.enterCustomerDetails('Sankar', 'Tester', '500001');

  await checkoutOverviewPage.finishOrder();

  await expect(
    page.locator('[data-test="complete-header"]')
  ).toHaveText('Thank you for your order!');
});