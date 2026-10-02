const { chromium } = require("C:/Users/Rishabh/Desktop/ANERGINA/client/node_modules/playwright");
const path = require("path");

const ARTIFACT_DIR = "C:/Users/Rishabh/.gemini/antigravity/brain/75974758-5601-45b9-934f-144be086755b";

async function run() {
  console.log("Launching Chromium for new /about verification...");
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
  await page.waitForTimeout(1200);

  // 1. Hero
  console.log("Capturing 01 Hero...");
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "v3_about_01_hero.png") });

  // 2. Who We Are
  console.log("Capturing 02 Who We Are...");
  const whoWeAre = await page.locator("h2:has-text('Software should make the business clearer')");
  await whoWeAre.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "v3_about_02_who_we_are.png") });

  // 3. What We Believe (Dark Centerpiece)
  console.log("Capturing 03 What We Believe...");
  const beliefs = await page.locator("h2:has-text('Good software should feel obvious')");
  await beliefs.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "v3_about_03_what_we_believe.png") });

  // 4. How We Work (Process Line)
  console.log("Capturing 04 How We Work...");
  const howWeWork = await page.locator("h2:has-text('From idea to software')");
  await howWeWork.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "v3_about_04_how_we_work.png") });

  // 5. How We Work With You
  console.log("Capturing 05 How We Work With You...");
  const workWithYou = await page.locator("h2:has-text('How we work with you')");
  await workWithYou.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "v3_about_05_work_with_you.png") });

  // 6. Technology + AI (Dark Section)
  console.log("Capturing 06 Technology + AI...");
  const tech = await page.locator("h2:has-text('Technology should serve the product')");
  await tech.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "v3_about_06_tech_and_ai.png") });

  // 7. Final CTA
  console.log("Capturing 07 Final CTA...");
  const cta = await page.locator("h2:has-text('Build something that fits')");
  await cta.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "v3_about_07_final_cta.png") });

  // 8. Mobile Hero
  console.log("Checking Mobile layout (390x844)...");
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto("http://localhost:3001/about", { waitUntil: "networkidle", timeout: 20000 });
  await mobilePage.waitForTimeout(1000);
  await mobilePage.screenshot({ path: path.join(ARTIFACT_DIR, "v3_about_08_mobile_hero.png") });

  await browser.close();
  console.log("All captures completed successfully!");
}

run().catch((err) => {
  console.error("Capture failed:", err);
  process.exit(1);
});
