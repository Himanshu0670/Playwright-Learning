import { test, expect } from '@playwright/test';  
// Import Playwright test runner and assertion library

test('Home Page', async ({ page }) => {  
// test() defines a test case
// async → Browser operations are async, so we use async/await to control execution order.)
// { page } → page is a fixture which contains many functions (if we want to click on a page, get text on a page, lunch our page etc.)

  await page.goto('http://65.1.109.241/login');  
  // await → wait until the page is fully loaded before moving to next line
  // page.goto() → opens the URL in the browser

  let title = await page.title();  
  // page.title() is async → browser must fetch title from the page
  // await → wait for browser to return the title
  // title now contains the actual page title string

  console.log("Page title is =", title);  
  // prints page title in terminal

  await expect(page).toHaveTitle('VR Sites');  
  // await → Playwright waits until title becomes 'VR Sites' (auto-waiting)

  await expect(page).toHaveURL('http://65.1.109.241/login');  
  // validates current page URL

  await page.close();  
  // closes the browser tab (page)
});