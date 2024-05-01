import { e2e } from '@/utils/e2e';
import { test, expect } from '@playwright/test';

test('has heading', async ({ page }) => {
  await page.goto('/');

  const heading = page.getByTestId(e2e.home_heading['data-testid'])

  await expect(heading).toBeVisible();
});
