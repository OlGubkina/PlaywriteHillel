import { test, expect } from '@playwright/test'

test.describe("Test Suite", ()=>{
  test.beforeAll(async ()=>{
    console.log('Before all')
  })
  test.beforeEach(async ()=>{
    console.log('Before EACH')
  })
  test.afterEach(async ()=>{
    console.log('After EACH')
  })
  test.afterAll(async ()=>{
    console.log('After all')
  })

  test('has title @smoke', async ({ page }) => {
    console.log('Test #1')
    await page.goto('https://playwright.dev/');
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });
  test('get started link', async ({ page }) => {
    console.log('Test #2')
    await page.goto('https://playwright.dev/');
    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();
    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });
})

// scripts:
// npx playwright test
// npx playwright show-report

/**
 Flacky - тест, который прошёл не с первого раза
 */