const { chromium } = require("C:/Users/Rishabh/Desktop/ANERGINA/client/node_modules/playwright");
const fs = require("fs");
const path = require("path");

const OUT_DIR = path.resolve(__dirname, "../screenshots");
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

async function scrollPage(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let count = 0;
      const step = 350;
      const totalHeight = document.body.scrollHeight;
      const timer = setInterval(() => {
        window.scrollBy(0, step);
        count++;
        if (
          window.scrollY + window.innerHeight >= totalHeight ||
          count > 60
        ) {
          clearInterval(timer);
          // Scroll back up slightly or settle
          resolve();
        }
      }, 70);
    });
  });
  await page.waitForTimeout(1000);
}

async function run() {
  console.log("Launching Chromium for Dark Mode QA...");
  const browser = await chromium.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
  });

  // ==========================================
  // 1. DARK MODE CAPTURE (1440 x 900 Desktop)
  // ==========================================
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    colorScheme: "dark", // Trigger dark mode preference
  });
  const page = await context.newPage();

  console.log("Navigating to http://localhost:3001 in Dark Mode...");
  await page.goto("http://localhost:3001", { waitUntil: "networkidle", timeout: 20000 });
  await page.waitForTimeout(1600);

  console.log("Capturing Dark Mode Hero...");
  await page.screenshot({ path: path.join(OUT_DIR, "dark_01_hero.png") });

  console.log("Scrolling through Dark Mode desktop...");
  await scrollPage(page);
  await page.waitForTimeout(600);

  console.log("Capturing Dark Mode Full Page...");
  await page.screenshot({
    path: path.join(OUT_DIR, "dark_02_fullpage.png"),
    fullPage: true,
  });

  // Open Contact Modal in Dark Mode
  console.log("Opening Contact Modal in Dark Mode...");
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
  const startProjectBtn = page.locator("button:has-text('Start a project')").first();
  await startProjectBtn.click();
  await page.waitForTimeout(500);

  await page.screenshot({ path: path.join(OUT_DIR, "dark_03_contact_modal.png") });

  // Close modal via close button
  await page.locator("button[aria-label='Close form']").click();
  await page.waitForTimeout(400);

  // Toggle to Light Mode via Sun/Moon toggle button
  console.log("Toggling theme to Light Mode...");
  const themeToggle = page.locator("button[aria-label*='Switch to']").first();
  await themeToggle.click();
  await page.waitForTimeout(800); // Allow smooth 550ms transition

  console.log("Capturing Light Mode Hero after toggle...");
  await page.screenshot({ path: path.join(OUT_DIR, "light_01_hero.png") });

  await context.close();

  // ==========================================
  // 2. MOBILE DARK MODE (390 x 844)
  // ==========================================
  console.log("Opening mobile context (Dark Mode)...");
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    colorScheme: "dark",
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto("http://localhost:3001", { waitUntil: "networkidle" });
  await mobilePage.waitForTimeout(1600);

  console.log("Capturing Mobile Dark Mode Hero...");
  await mobilePage.screenshot({ path: path.join(OUT_DIR, "dark_04_mobile_hero.png") });

  console.log("Scrolling through mobile...");
  await scrollPage(mobilePage);
  await mobilePage.waitForTimeout(600);

  console.log("Capturing Mobile Dark Mode Full Page...");
  await mobilePage.screenshot({
    path: path.join(OUT_DIR, "dark_05_mobile_fullpage.png"),
    fullPage: true,
  });

  await mobileContext.close();
  await browser.close();
  console.log("ALL DARK MODE QA SCREENSHOTS CAPTURED SUCCESSFULLY!");
}

run().catch((e) => {
  console.error("Error during capture:", e);
  process.exit(1);
});
