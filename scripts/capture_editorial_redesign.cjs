const { chromium } = require("C:/Users/Rishabh/Desktop/ANERGINA/client/node_modules/playwright");
const fs = require("fs");
const path = require("path");

const OUT_DIR = path.resolve(__dirname, "../screenshots");
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

async function triggerScrollAnimations(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let total = 0;
      const step = 350;
      const interval = setInterval(() => {
        window.scrollBy(0, step);
        total += step;
        if (total >= document.body.scrollHeight) {
          clearInterval(interval);
          resolve();
        }
      }, 50);
    });
  });
  await page.waitForTimeout(500);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);
}

async function run() {
  console.log("Launching Chromium for Editorial Redesign QA...");
  const browser = await chromium.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
  });

  // ==============================================================
  // 1. DESKTOP VIEWPORT (1440 x 900)
  // ==============================================================
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const page = await desktopContext.newPage();

  console.log("1. Visiting Homepage...");
  await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);

  console.log("Capturing editorial_01_home_hero.png...");
  await page.screenshot({ path: path.join(OUT_DIR, "editorial_01_home_hero.png") });

  console.log("Triggering scroll animations for homepage fullpage...");
  await triggerScrollAnimations(page);
  console.log("Capturing editorial_02_home_fullpage.png...");
  await page.screenshot({ path: path.join(OUT_DIR, "editorial_02_home_fullpage.png"), fullPage: true });

  // 2. Navigate to /services
  console.log("2. Navigating to /services...");
  await page.locator("nav a:has-text('Services')").click();
  await page.waitForURL("http://localhost:3001/services");
  await page.waitForTimeout(600);

  console.log("Capturing editorial_03_services_top.png...");
  await page.screenshot({ path: path.join(OUT_DIR, "editorial_03_services_top.png") });

  await triggerScrollAnimations(page);
  console.log("Capturing editorial_04_services_fullpage.png...");
  await page.screenshot({ path: path.join(OUT_DIR, "editorial_04_services_fullpage.png"), fullPage: true });

  // 3. Navigate to /solutions
  console.log("3. Navigating to /solutions...");
  await page.locator("nav a:has-text('Solutions')").click();
  await page.waitForURL("http://localhost:3001/solutions");
  await page.waitForTimeout(600);

  console.log("Capturing editorial_05_solutions_top.png...");
  await page.screenshot({ path: path.join(OUT_DIR, "editorial_05_solutions_top.png") });

  // Expand the second problem question
  try {
    const questionButton = page.locator("button:has-text('Can our legacy software integrate')").first();
    if (await questionButton.count() > 0) {
      await questionButton.click();
      await page.waitForTimeout(400);
    }
  } catch (err) {
    console.log("Notice: Question button click skipped:", err.message);
  }

  await triggerScrollAnimations(page);
  console.log("Capturing editorial_06_solutions_fullpage.png...");
  await page.screenshot({ path: path.join(OUT_DIR, "editorial_06_solutions_fullpage.png"), fullPage: true });

  // 4. Navigate to /about
  console.log("4. Navigating to /about...");
  await page.locator("nav a:has-text('About')").click();
  await page.waitForURL("http://localhost:3001/about");
  await page.waitForTimeout(600);

  console.log("Capturing editorial_07_about_top.png...");
  await page.screenshot({ path: path.join(OUT_DIR, "editorial_07_about_top.png") });

  await triggerScrollAnimations(page);
  console.log("Capturing editorial_08_about_fullpage.png...");
  await page.screenshot({ path: path.join(OUT_DIR, "editorial_08_about_fullpage.png"), fullPage: true });

  // 5. Navigate to /contact
  console.log("5. Navigating to /contact...");
  await page.locator("header a:has-text('Get in touch')").click();
  await page.waitForURL("http://localhost:3001/contact");
  await page.waitForTimeout(600);

  console.log("Capturing editorial_09_contact_top.png...");
  await page.screenshot({ path: path.join(OUT_DIR, "editorial_09_contact_top.png") });

  await triggerScrollAnimations(page);
  console.log("Capturing editorial_10_contact_fullpage.png...");
  await page.screenshot({ path: path.join(OUT_DIR, "editorial_10_contact_fullpage.png"), fullPage: true });

  await desktopContext.close();

  // ==============================================================
  // 2. MOBILE VIEWPORT (390 x 844)
  // ==============================================================
  console.log("6. Opening Mobile Context...");
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
  });
  const mobilePage = await mobileContext.newPage();

  await mobilePage.goto("http://localhost:3001", { waitUntil: "networkidle" });
  await mobilePage.waitForTimeout(1000);

  console.log("Capturing editorial_11_mobile_home.png...");
  await mobilePage.screenshot({ path: path.join(OUT_DIR, "editorial_11_mobile_home.png") });

  // Open Mobile Drawer
  console.log("Opening Mobile Drawer...");
  await mobilePage.locator("button[aria-label*='menu']").click();
  await mobilePage.waitForTimeout(400);

  console.log("Capturing editorial_12_mobile_nav.png...");
  await mobilePage.screenshot({ path: path.join(OUT_DIR, "editorial_12_mobile_nav.png") });

  await mobileContext.close();
  await browser.close();

  console.log("ALL EDITORIAL REDESIGN QA SCREENSHOTS CAPTURED SUCCESSFULLY!");
}

run().catch((e) => {
  console.error("QA Capture Error:", e);
  process.exit(1);
});
