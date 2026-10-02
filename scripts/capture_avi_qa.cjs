const { chromium } = require("C:/Users/Rishabh/Desktop/ANERGINA/client/node_modules/playwright");
const fs = require("fs");
const path = require("path");

const OUT_DIR = path.resolve(__dirname, "../screenshots");
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

async function run() {
  console.log("Launching Chromium for AVI QA...");
  const browser = await chromium.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
  });

  // ==============================================================
  // 1. DESKTOP VIEWPORT (1440 x 900) - FRESH VISIT (SESSION STORAGE CLEAR)
  // ==============================================================
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const page = await desktopContext.newPage();

  console.log("1. Visiting Homepage (Fresh Session)...");
  await page.goto("http://localhost:3001", { waitUntil: "networkidle" });

  // Phase 1 & 2: AVI Arrival & Notice (after ~1.5s)
  await page.waitForTimeout(1600);
  console.log("Capturing avi_01_hero_arrival.png...");
  await page.screenshot({ path: path.join(OUT_DIR, "avi_01_hero_arrival.png") });

  // Phase 3 & 4: Wave & Speech Bubble ("Hi, I'm AVI...")
  await page.waitForTimeout(2600);
  console.log("Capturing avi_02_hero_speech_bubble.png...");
  await page.screenshot({ path: path.join(OUT_DIR, "avi_02_hero_speech_bubble.png") });

  // Phase 5: Interactive Prompt ("Need help finding something?")
  await page.waitForTimeout(3000);
  console.log("Capturing avi_03_hero_interactive_prompt.png...");
  await page.screenshot({ path: path.join(OUT_DIR, "avi_03_hero_interactive_prompt.png") });

  // Phase 6: Wait for transition to complete and AVI to dock in the launcher (after ~6s)
  await page.waitForTimeout(5500);
  console.log("Capturing avi_04_docked_hero_rebalanced.png...");
  await page.screenshot({ path: path.join(OUT_DIR, "avi_04_docked_hero_rebalanced.png") });

  // 2. Hover over the bottom-right AVI launcher
  console.log("2. Hovering over AVI Launcher...");
  const aviLauncher = page.locator("button[aria-label*='Talk to AVI']");
  if (await aviLauncher.count() > 0) {
    await aviLauncher.hover();
    await page.waitForTimeout(400);
    console.log("Capturing avi_05_launcher_hover_tooltip.png...");
    await page.screenshot({ path: path.join(OUT_DIR, "avi_05_launcher_hover_tooltip.png") });

    // 3. Click AVI Launcher to Open Chat Panel
    console.log("3. Clicking AVI Launcher to open Chat Modal...");
    await aviLauncher.click();
    await page.waitForTimeout(600);
    console.log("Capturing avi_06_chat_modal_open.png...");
    await page.screenshot({ path: path.join(OUT_DIR, "avi_06_chat_modal_open.png") });

    // 4. Click a suggested question ("What does Zevats build?")
    console.log("4. Asking suggested question: 'What does Zevats build?'...");
    const suggestionBtn = page.locator("button:has-text('What does Zevats build?')").first();
    if (await suggestionBtn.count() > 0) {
      await suggestionBtn.click();
      await page.waitForTimeout(1200); // Allow typing & response
      console.log("Capturing avi_07_chat_response.png...");
      await page.screenshot({ path: path.join(OUT_DIR, "avi_07_chat_response.png") });
    }
  }

  await desktopContext.close();

  // ==============================================================
  // 2. MOBILE VIEWPORT (390 x 844)
  // ==============================================================
  console.log("5. Testing Mobile Viewport...");
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto("http://localhost:3001", { waitUntil: "networkidle" });
  await mobilePage.waitForTimeout(2000);

  console.log("Capturing avi_08_mobile_hero.png...");
  await mobilePage.screenshot({ path: path.join(OUT_DIR, "avi_08_mobile_hero.png") });

  // Fast forward to launcher on mobile
  await mobilePage.waitForTimeout(7500);
  const mobileLauncher = mobilePage.locator("button[aria-label*='Talk to AVI']");
  if (await mobileLauncher.count() > 0) {
    await mobileLauncher.click();
    await mobilePage.waitForTimeout(800);
    console.log("Capturing avi_09_mobile_chat_open.png...");
    await mobilePage.screenshot({ path: path.join(OUT_DIR, "avi_09_mobile_chat_open.png") });
  }

  await mobileContext.close();
  await browser.close();

  console.log("ALL AVI QA SCREENSHOTS CAPTURED SUCCESSFULLY!");
}

run().catch((e) => {
  console.error("QA Capture Error:", e);
  process.exit(1);
});
