import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const OUT_DIR = path.resolve("./screenshots");
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

async function run() {
  console.log("Launching Chromium...");
  const browser = await chromium.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
  });

  // 1. Capture Desktop View (1440 x 900)
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();

  console.log("Navigating to http://localhost:3001...");
  await page.goto("http://localhost:3001", { waitUntil: "networkidle" });

  // Initial wait for intro animation to settle
  await page.waitForTimeout(2000);

  console.log("Capturing Desktop Hero...");
  await page.screenshot({ path: path.join(OUT_DIR, "01_desktop_hero.png") });

  // Scroll through smoothly to trigger all viewport animations
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      const step = 400;
      const timer = setInterval(() => {
        window.scrollBy(0, step);
        if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 50);
    });
  });

  await page.waitForTimeout(1000);

  console.log("Capturing Desktop Full Page...");
  await page.screenshot({
    path: path.join(OUT_DIR, "02_desktop_fullpage.png"),
    fullPage: true,
  });

  // Open Contact Modal
  console.log("Opening Contact Modal...");
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);
  const startProjectBtn = page.locator("button:has-text('Start a project')").first();
  await startProjectBtn.click();
  await page.waitForTimeout(500);

  await page.screenshot({ path: path.join(OUT_DIR, "03_contact_modal.png") });

  await context.close();

  // 2. Capture Mobile View (390 x 844)
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto("http://localhost:3001", { waitUntil: "networkidle" });
  await mobilePage.waitForTimeout(2000);

  console.log("Capturing Mobile Hero...");
  await mobilePage.screenshot({ path: path.join(OUT_DIR, "04_mobile_hero.png") });

  // Scroll through mobile
  await mobilePage.evaluate(async () => {
    await new Promise((resolve) => {
      const step = 300;
      const timer = setInterval(() => {
        window.scrollBy(0, step);
        if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 50);
    });
  });

  await mobilePage.waitForTimeout(800);

  console.log("Capturing Mobile Full Page...");
  await mobilePage.screenshot({
    path: path.join(OUT_DIR, "05_mobile_fullpage.png"),
    fullPage: true,
  });

  await mobileContext.close();
  await browser.close();
  console.log("All screenshots captured successfully!");
}

run().catch((e) => {
  console.error("Error during capture:", e);
  process.exit(1);
});
