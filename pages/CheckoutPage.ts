import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
  private page: Page;
  private firstNameInput: Locator;
  private lastNameInput: Locator;
  private postalCodeInput: Locator;
  private continueButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.firstNameInput = this.page.locator('[data-test="firstName"]');
    this.lastNameInput = this.page.locator('[data-test="lastName"]');
    this.postalCodeInput = this.page.locator('[data-test="postalCode"]');
    this.continueButton = this.page.locator('[data-test="continue"]');
  }
async enterCustomerDetails(
  firstName: string,
  lastName: string,
  postalCode: string
) {
  await this.firstNameInput.fill(firstName);
  await this.lastNameInput.fill(lastName);
  await this.postalCodeInput.fill(postalCode);
  await this.continueButton.click();
}}