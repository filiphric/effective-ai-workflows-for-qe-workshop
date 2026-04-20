import { test, expect } from '@playwright/test';

test('open baseUrl', async ({ page, baseURL }) => {
  await page.goto(baseURL || '/');
  await expect(page).toHaveURL(baseURL || '/');
});