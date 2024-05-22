const { test, expect } = require('@playwright/test');

// only running the given test (test.only)
// skipping the test (test.skip)
// conditionaly skipping the test (firefox in the third test) 
// you can tag the test with @tagname; then run with --grep '@tagname'; or run all but the tag with --grep-invert '@tagname'
// we can group tests with test.describe

test.describe("Smoke Tests", () => {

  test.beforeEach(async ({page})=> {
    await page.goto('/');
  });

  test.afterEach(async ({page}) => {
    console.log("This test finished");
  });

  test('First test @smoke', async ({ page }) => {
    await page.locator("text=Add/Remove Elements").click();
    await page.click("text=Add Element");
    // screenshotting
    // await page.screenshot({path: "screenshot.png"});
    const element = page.locator("text=Delete");
    await element.click();
  });

  test('Second test', async ({ page }) => {
    await page.locator("text=Add/Remove Elements").click();
    await page.click("text=Add Element");
    const element = page.locator("text=Delete");
    await element.click();
  });

  test('Third test', async ({ page, browserName }) => {
    test.skip(browserName === "firefox", "Working on the firefox fix");
    await page.locator("text=Add/Remove Elements").click();
    await page.click("text=Add Element");
    const element = page.locator("text=Delete");
    await element.click();
  });
})

