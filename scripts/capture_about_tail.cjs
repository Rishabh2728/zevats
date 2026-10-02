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
  await page.goto("http://localhost:3001/about", { waitUntil: "networkidle", timeout: 20000 });
  await page.waitForTimeout(1000);

  // Capture AI section
  console.log("Capturing AI section...");
  await page.evaluate(() => {
    const el = document.querySelector("section.bg-\\[\\#111111\\]");
    if (el) el.scrollIntoView();
  });
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "about_07_ai_exact.png") });

  // Capture CTA
  console.log("Capturing Final CTA...");
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "about_08_cta_exact.png") });

  await browser.close();
  console.log("Done!");
}

run();
