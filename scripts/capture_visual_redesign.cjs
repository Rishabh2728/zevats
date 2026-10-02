const { chromium } = require("C:/Users/Rishabh/Desktop/ANERGINA/client/node_modules/playwright");
const path = require("path");

const ARTIFACT_DIR = "C:/Users/Rishabh/.gemini/antigravity/brain/75974758-5601-45b9-934f-144be086755b";

async function run() {
  console.log("Launching Chromium for visual redesign inspection...");
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

  // 1. Hero
  console.log("Capturing 01 Hero with purple visual composition...");
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "v5_about_01_hero.png") });

  // 2. Who We Are
  console.log("Capturing 02 Who We Are with purple animated line...");
  const whoWeAre = await page.locator("h2:has-text('Software should make the business')");
  await whoWeAre.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "v5_about_02_who_we_are.png") });

  // 3. What We Believe
  console.log("Capturing 03 What We Believe with sticky left & active purple principles...");
  const beliefs = await page.locator("h2:has-text('Good software should feel obvious')");
  await beliefs.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "v5_about_03_what_we_believe.png") });

  // 4. How We Work
  console.log("Capturing 04 How We Work with purple travelling progress line...");
  const howWeWork = await page.locator("h2:has-text('From idea to')");
  await howWeWork.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "v5_about_04_how_we_work.png") });

  // 5. How We Work With You
  console.log("Capturing 05 How We Work With You with purple indicator dots...");
  const workWithYou = await page.locator("h2:has-text('How we work with')");
  await workWithYou.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "v5_about_05_work_with_you.png") });

  // 6. Technology + AI
  console.log("Capturing 06 Technology with purple axis...");
  const tech = await page.locator("h2:has-text('Technology should serve the')");
  await tech.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "v5_about_06_tech.png") });

  console.log("Capturing 06b AI Information Flow diagram...");
  const aiHeader = await page.locator("h3:has-text('When intelligence helps, we build it')");
  await aiHeader.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "v5_about_06_ai_flow.png") });

  // 7. Final CTA
  console.log("Capturing 07 Final CTA with purple highlight on fits...");
  const cta = await page.locator("h2:has-text('Build something that')");
  await cta.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "v5_about_07_cta.png") });

  await browser.close();
  console.log("All visual inspection captures completed!");
}

run().catch((err) => {
  console.error("Capture failed:", err);
  process.exit(1);
});
