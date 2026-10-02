const { chromium } = require("C:/Users/Rishabh/Desktop/ANERGINA/client/node_modules/playwright");
const fs = require("fs");
const path = require("path");

const ARTIFACT_DIR = "C:/Users/Rishabh/.gemini/antigravity/brain/75974758-5601-45b9-934f-144be086755b";

async function run() {
  console.log("Launching Chromium for /about verification...");
  const browser = await chromium.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();

  console.log("Navigating to http://localhost:3001/about...");
  await page.goto("http://localhost:3001/about", { waitUntil: "networkidle", timeout: 20000 });
  await page.waitForTimeout(1500);

  // 1. Full page
  console.log("Capturing full page...");
  await page.screenshot({
    path: path.join(ARTIFACT_DIR, "about_00_fullpage.png"),
    fullPage: true,
  });

  // 2. Hero
  console.log("Capturing Hero...");
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.screenshot({
    path: path.join(ARTIFACT_DIR, "about_01_hero.png"),
  });

  // 3. What We Believe
  console.log("Capturing What We Believe...");
  await page.evaluate(() => window.scrollTo(0, 650));
  await page.waitForTimeout(500);
  await page.screenshot({
    path: path.join(ARTIFACT_DIR, "about_02_what_we_believe.png"),
  });

  // 4. How We Think (Principles)
  console.log("Capturing How We Think...");
  await page.evaluate(() => window.scrollTo(0, 1350));
  await page.waitForTimeout(500);
  await page.screenshot({
    path: path.join(ARTIFACT_DIR, "about_03_how_we_think.png"),
  });

  // 5. How We Work (Progression)
  console.log("Capturing How We Work...");
  await page.evaluate(() => window.scrollTo(0, 2050));
  await page.waitForTimeout(500);
  await page.screenshot({
    path: path.join(ARTIFACT_DIR, "about_04_how_we_work.png"),
  });

  // 6. What Makes Us Different
  console.log("Capturing What Makes Us Different...");
  await page.evaluate(() => window.scrollTo(0, 2800));
  await page.waitForTimeout(500);
  await page.screenshot({
    path: path.join(ARTIFACT_DIR, "about_05_differentiation.png"),
  });

  // 7. Technology Philosophy
  console.log("Capturing Technology Philosophy...");
  await page.evaluate(() => window.scrollTo(0, 3550));
  await page.waitForTimeout(500);
  await page.screenshot({
    path: path.join(ARTIFACT_DIR, "about_06_tech_philosophy.png"),
  });

  // 8. AI & Automation
  console.log("Capturing AI & Automation...");
  await page.evaluate(() => window.scrollTo(0, 4200));
  await page.waitForTimeout(500);
  await page.screenshot({
    path: path.join(ARTIFACT_DIR, "about_07_applied_ai.png"),
  });

  // 9. Final CTA
  console.log("Capturing Final CTA...");
  await page.evaluate(() => window.scrollTo(0, 5000));
  await page.waitForTimeout(500);
  await page.screenshot({
    path: path.join(ARTIFACT_DIR, "about_08_final_cta.png"),
  });

  // Mobile Viewport Check (390 x 844 iPhone)
  console.log("Checking Mobile layout (390x844)...");
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto("http://localhost:3001/about", { waitUntil: "networkidle", timeout: 20000 });
  await mobilePage.waitForTimeout(1000);
  await mobilePage.screenshot({
    path: path.join(ARTIFACT_DIR, "about_09_mobile_hero.png"),
  });

  // Verify other routes are completely healthy
  console.log("Verifying / is intact...");
  await page.goto("http://localhost:3001", { waitUntil: "networkidle", timeout: 20000 });
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: path.join(ARTIFACT_DIR, "about_check_home.png"),
  });

  console.log("Verifying /services is intact...");
  await page.goto("http://localhost:3001/services", { waitUntil: "networkidle", timeout: 20000 });
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: path.join(ARTIFACT_DIR, "about_check_services.png"),
  });

  console.log("Verifying /solutions is intact...");
  await page.goto("http://localhost:3001/solutions", { waitUntil: "networkidle", timeout: 20000 });
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: path.join(ARTIFACT_DIR, "about_check_solutions.png"),
  });

  await browser.close();
  console.log("All /about captures successfully completed!");
}

run().catch((err) => {
  console.error("Capture failed:", err);
  process.exit(1);
});
