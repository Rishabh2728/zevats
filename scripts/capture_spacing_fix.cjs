const { chromium } = require("C:/Users/Rishabh/Desktop/ANERGINA/client/node_modules/playwright");
const path = require("path");

const ARTIFACT_DIR = "C:/Users/Rishabh/.gemini/antigravity/brain/75974758-5601-45b9-934f-144be086755b";

async function run() {
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
  await page.waitForTimeout(1000);

  // 1. Hero top capture
  console.log("Capturing updated Hero...");
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "v4_about_01_hero_top.png") });

  // 2. Hero + transition to Who We Are
  console.log("Capturing Hero to Who We Are transition...");
  await page.evaluate(() => window.scrollTo(0, 300));
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "v4_about_02_transition.png") });

  await browser.close();
  console.log("Done capturing spacing adjustments!");
}

run();
