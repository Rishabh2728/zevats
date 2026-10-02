const { chromium } = require("C:/Users/Rishabh/Desktop/ANERGINA/client/node_modules/playwright");
const fs = require("fs");
const path = require("path");

async function run() {
  console.log("Launching Chromium for AVI Living Character QA...");
  const browser = await chromium.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
  });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });

  const page = await context.newPage();

  const screenshotDir = path.join(__dirname, "..", "screenshots");
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  try {
    // 1. First Visit: Opening intro in Hero
    console.log("1. Visiting Homepage (Fresh Session for Intro)...");
    await page.goto("http://localhost:3001/", { waitUntil: "networkidle" });
    await page.waitForTimeout(2000); // During phase 3 (wave)
    await page.screenshot({
      path: path.join(screenshotDir, "roaming_01_hero_intro_waving.png"),
    });
    console.log("Captured roaming_01_hero_intro_waving.png");

    // 2. Allow intro to finish or click Explore Zevats to trigger transition
    console.log("2. Waiting for AVI to shrink and land on headline...");
    const exploreBtn = page.locator("button:has-text('Explore Zevats')");
    if (await exploreBtn.isVisible()) {
      await exploreBtn.click();
    } else {
      await page.waitForTimeout(6000);
    }
    await page.waitForTimeout(1500);

    // Capture AVI sitting beside "your business." on the headline
    await page.screenshot({
      path: path.join(screenshotDir, "roaming_02_hero_headline_perched.png"),
    });
    console.log("Captured roaming_02_hero_headline_perched.png");

    // Capture the bottom-right dock cradle while AVI is roaming
    await page.screenshot({
      path: path.join(screenshotDir, "roaming_04_dock_cradle_empty.png"),
      clip: { x: 1250, y: 750, width: 180, height: 140 },
    });
    console.log("Captured roaming_04_dock_cradle_empty.png");

    // 3. Scroll to What We Build section
    console.log("3. Scrolling to What We Build...");
    await page.evaluate(() => {
      const el = document.getElementById("avi-anchor-services");
      if (el) el.scrollIntoView({ behavior: "instant" });
    });
    await page.waitForTimeout(1000);

    await page.screenshot({
      path: path.join(screenshotDir, "roaming_05_services_perched.png"),
    });
    console.log("Captured roaming_05_services_perched.png");

    // Switch service to "Web Applications & SaaS"
    console.log("4. Switching service to Web Applications & SaaS...");
    const saasTab = page.locator("text=Web Applications & SaaS").first();
    await saasTab.click();
    await page.waitForTimeout(800);

    await page.screenshot({
      path: path.join(screenshotDir, "roaming_06_services_switch.png"),
    });
    console.log("Captured roaming_06_services_switch.png");

    // 4. Scroll to Intelligence / AI section
    console.log("5. Scrolling to Intelligence section...");
    await page.evaluate(() => {
      const el = document.getElementById("avi-anchor-intelligence");
      if (el) el.scrollIntoView({ behavior: "instant" });
    });
    await page.waitForTimeout(1000);

    await page.screenshot({
      path: path.join(screenshotDir, "roaming_07_intelligence_floating.png"),
    });
    console.log("Captured roaming_07_intelligence_floating.png");

    // 5. Scroll to How We Work (Process) section
    console.log("6. Scrolling to How We Work (Process)...");
    await page.evaluate(() => {
      const el = document.getElementById("avi-anchor-process");
      if (el) el.scrollIntoView({ behavior: "instant" });
    });
    await page.waitForTimeout(1000);

    await page.screenshot({
      path: path.join(screenshotDir, "roaming_08_process_stage.png"),
    });
    console.log("Captured roaming_08_process_stage.png");

    // 6. Test Sleep Inactivity (wait 16s with no mouse or scroll)
    console.log("7. Waiting 16s for AVI to fall asleep naturally...");
    await page.waitForTimeout(16500);

    await page.screenshot({
      path: path.join(screenshotDir, "roaming_09_sleeping_inactivity.png"),
    });
    console.log("Captured roaming_09_sleeping_inactivity.png");

    // 7. Test summoning AVI to dock and opening Chat Modal
    console.log("8. Summoning AVI to dock and opening Chat Modal...");
    const dockBtn = page.locator("button[aria-label*='AVI']");
    await dockBtn.click({ force: true });
    await page.waitForSelector("text=Zevats Assistant · Online", { timeout: 8000 });
    await page.waitForTimeout(600);

    await page.screenshot({
      path: path.join(screenshotDir, "roaming_10_dock_and_chat_open.png"),
    });
    console.log("Captured roaming_10_dock_and_chat_open.png");

    console.log("ALL LIVING AVI QA SCREENSHOTS CAPTURED!");
  } catch (err) {
    console.error("QA Capture Error:", err);
  } finally {
    await browser.close();
  }
}

run();
