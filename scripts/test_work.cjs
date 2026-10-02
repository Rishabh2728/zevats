const { chromium } = require("C:/Users/Rishabh/Desktop/ANERGINA/client/node_modules/playwright");

(async () => {
  const browser = await chromium.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
  });
  const page = await browser.newPage();
  page.on("console", (msg) => console.log("PAGE LOG:", msg.text()));
  page.on("pageerror", (err) => console.log("PAGE ERROR:", err.message));

  await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);

  // Scroll to #work
  await page.evaluate(() => {
    const el = document.getElementById("work");
    if (el) el.scrollIntoView();
  });
  await page.waitForTimeout(1000);

  const workCards = await page.$$eval('#work [data-cursor="project"]', (els) =>
    els.map((e) => ({
      text: e.innerText.slice(0, 100),
      opacity: window.getComputedStyle(e).opacity,
      visibility: window.getComputedStyle(e).visibility,
      display: window.getComputedStyle(e).display,
      height: e.offsetHeight,
      transform: window.getComputedStyle(e).transform,
    }))
  );

  console.log("Work cards count:", workCards.length);
  console.log("Work cards:", JSON.stringify(workCards, null, 2));

  await browser.close();
})();
