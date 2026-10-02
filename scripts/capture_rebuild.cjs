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
  console.log("Launching Chromium for Rebuild QA...");
  const browser = await chromium.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
  });

  // ==============================================================
  // 1. DESKTOP VIEWPORT (1440 x 900) - DEFAULT LIGHT MODE
  // ==============================================================
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const page = await desktopContext.newPage();

  console.log("1. Visiting Homepage in default Light Mode...");
  await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
  await page.waitForTimeout(2500); // Allow intro transition to settle

  console.log("Capturing rebuilt_01_home_light.png...");
  await page.screenshot({ path: path.join(OUT_DIR, "rebuilt_01_home_light.png") });

  console.log("Triggering scroll animations for light fullpage...");
  await triggerScrollAnimations(page);
  console.log("Capturing rebuilt_01b_home_light_fullpage.png...");
  await page.screenshot({ path: path.join(OUT_DIR, "rebuilt_01b_home_light_fullpage.png"), fullPage: true });

  // Toggle to Dark Mode
  console.log("Toggling to Dark Mode on Homepage...");
  const themeToggle = page.locator("button[aria-label*='Switch to']").first();
  await themeToggle.click();
  await page.waitForTimeout(700);

  console.log("Capturing rebuilt_02_home_dark.png...");
  await page.screenshot({ path: path.join(OUT_DIR, "rebuilt_02_home_dark.png") });

  console.log("Triggering scroll animations for dark fullpage...");
  await triggerScrollAnimations(page);
  console.log("Capturing rebuilt_02b_home_dark_fullpage.png...");
  await page.screenshot({ path: path.join(OUT_DIR, "rebuilt_02b_home_dark_fullpage.png"), fullPage: true });

  // 2. Navigate to /services via client-side navbar link
  console.log("2. Navigating to /services via client-side navbar link...");
  await page.locator("nav a:has-text('Services')").click();
  await page.waitForURL("http://localhost:3001/services");
  await page.waitForTimeout(600);

  console.log("Capturing rebuilt_03_services_dark.png...");
  await page.screenshot({ path: path.join(OUT_DIR, "rebuilt_03_services_dark.png") });

  console.log("Triggering scroll animations for services dark fullpage...");
  await triggerScrollAnimations(page);
  console.log("Capturing rebuilt_03b_services_dark_fullpage.png...");
  await page.screenshot({ path: path.join(OUT_DIR, "rebuilt_03b_services_dark_fullpage.png"), fullPage: true });

  // 3. Navigate to /solutions via navbar link
  console.log("3. Navigating to /solutions via navbar link...");
  await page.locator("nav a:has-text('Solutions')").click();
  await page.waitForURL("http://localhost:3001/solutions");
  await page.waitForTimeout(600);

  console.log("Capturing rebuilt_04_solutions_dark.png...");
  await page.screenshot({ path: path.join(OUT_DIR, "rebuilt_04_solutions_dark.png") });

  console.log("Triggering scroll animations for solutions dark fullpage...");
  await triggerScrollAnimations(page);
  console.log("Capturing rebuilt_04b_solutions_dark_fullpage.png...");
  await page.screenshot({ path: path.join(OUT_DIR, "rebuilt_04b_solutions_dark_fullpage.png"), fullPage: true });

  // 4. Navigate to /about via navbar link
  console.log("4. Navigating to /about via navbar link...");
  await page.locator("nav a:has-text('About')").click();
  await page.waitForURL("http://localhost:3001/about");
  await page.waitForTimeout(600);

  console.log("Capturing rebuilt_05_about_dark.png...");
  await page.screenshot({ path: path.join(OUT_DIR, "rebuilt_05_about_dark.png") });

  // 5. Navigate to /contact via "Get in touch" button
  console.log("5. Navigating to /contact via 'Get in touch' button...");
  await page.locator("header a:has-text('Get in touch')").click();
  await page.waitForURL("http://localhost:3001/contact");
  await page.waitForTimeout(600);

  console.log("Capturing rebuilt_06_contact_dark.png...");
  await page.screenshot({ path: path.join(OUT_DIR, "rebuilt_06_contact_dark.png") });

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
  await mobilePage.waitForTimeout(2500);

  console.log("Capturing rebuilt_07_mobile_home.png...");
  await mobilePage.screenshot({ path: path.join(OUT_DIR, "rebuilt_07_mobile_home.png") });

  // Open Mobile Drawer
  console.log("Opening Mobile Drawer...");
  await mobilePage.locator("button[aria-label*='menu']").click();
  await mobilePage.waitForTimeout(400);

  console.log("Capturing rebuilt_08_mobile_nav.png...");
  await mobilePage.screenshot({ path: path.join(OUT_DIR, "rebuilt_08_mobile_nav.png") });

  await mobileContext.close();
  await browser.close();

  console.log("ALL REBUILD QA SCREENSHOTS CAPTURED SUCCESSFULLY!");
}

run().catch((e) => {
  console.error("QA Capture Error:", e);
  process.exit(1);
});
