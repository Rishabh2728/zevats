const { chromium } = require("C:/Users/Rishabh/Desktop/ANERGINA/client/node_modules/playwright");
const fs = require("fs");
const path = require("path");

const OUT_DIR = path.resolve(__dirname, "../screenshots");

async function run() {
  const browser = await chromium.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();

  console.log("Navigating to home...");
  await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
  await page.waitForTimeout(2800);

  // Switch to dark mode
  console.log("Switching to dark mode...");
  const themeToggle = page.locator("button[aria-label*='Switch to']").first();
  await themeToggle.click();
  await page.waitForTimeout(500);

  // Scroll to Intelligence section
  console.log("Scrolling to Intelligence section...");
  const aiHeading = page.locator("h2:has-text('Intelligence when it helps.')");
  await aiHeading.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);

  // Click on "Automate repetitive decisions"
  console.log("Clicking Automate repetitive decisions...");
  await page.locator("text=Automate repetitive decisions").first().click();
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(OUT_DIR, "redesign_11_interactive_ai_automate.png") });

  // Scroll to How We Work section
  console.log("Scrolling to How we work...");
  const howHeading = page.locator("h2:has-text('How we work.')");
  await howHeading.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);

  // Click on "Build" stage button
  console.log("Clicking Build stage button...");
  await page.locator("button:has-text('Build')").first().click();
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(OUT_DIR, "redesign_12_interactive_process_build.png") });

  await context.close();
  await browser.close();
  console.log("INTERACTION QA SCREENSHOTS CAPTURED SUCCESSFULLY!");
}

run().catch((e) => {
  console.error("Interaction capture error:", e);
  process.exit(1);
});
