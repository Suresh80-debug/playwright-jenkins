import { test, expect } from '@playwright/test';

test('Upload PDF', async ({ page }) => {

  await page.goto('https://www.ilovepdf.com/pdf_to_word');

  const fileChooserPromise = page.waitForEvent('filechooser');

  await page.locator('#pickfiles').click();

  const fileChooser = await fileChooserPromise;

  await fileChooser.setFiles(
    'C:/Users/Sanka/Downloads/Rithesh_Brahmnapally (3).pdf'
  );

  await page.waitForTimeout(3000);
await expect(page.getByText('Rithesh_Brahmnapally (3).pdf')).toBeVisible();
});

