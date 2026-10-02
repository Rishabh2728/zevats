const { chromium } = require('C:/Users/Rishabh/Desktop/ANERGINA/client/node_modules/playwright');
const path = require('path');

const artifactDir = 'C:\\Users\\Rishabh\\.gemini\\antigravity\\brain\\75974758-5601-45b9-934f-144be086755b';
const BASE_URL = 'http://localhost:3001';
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

(async () => {
  const browser = await chromium.launch({
    executablePath: CHROME,
    headless: true,
    args: ['--no-sandbox']
  });

  // --- Test 1: Desktop Opening Introduction Sequence ---
  {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await ctx.newPage();
    // Ensure clean session so introduction plays
    await page.addInitScript(() => {
      sessionStorage.clear();
    });

    await page.goto(BASE_URL, { waitUntil: 'networkidle' });

    // Step 1: Entrance (at 1000ms)
    await sleep(1000);
    await page.screenshot({ path: path.join(artifactDir, 'avi_intro_01_entrance.png') });
    console.log('✓ 01: Entrance captured');

    // Step 2: Notice user & wave (at 2300ms)
    await sleep(1300);
    await page.screenshot({ path: path.join(artifactDir, 'avi_intro_02_look_and_wave.png') });
    console.log('✓ 02: Look and wave captured');

    // Step 3: Speech bubble 1 — "Hi, I'm AVI." (at 3700ms)
    await sleep(1400);
    await page.screenshot({ path: path.join(artifactDir, 'avi_intro_03_speech_bubble_1.png') });
    console.log('✓ 03: Speech bubble 1 captured');

    // Step 4: Speech bubble 2 — "I can help you explore Zevats." (at 5700ms)
    await sleep(2000);
    await page.screenshot({ path: path.join(artifactDir, 'avi_intro_04_speech_bubble_2.png') });
    console.log('✓ 04: Speech bubble 2 captured');

    // Step 5: Speech bubble 3 — "Need a hand?" (at 8000ms)
    await sleep(2300);
    await page.screenshot({ path: path.join(artifactDir, 'avi_intro_05_speech_bubble_3.png') });
    console.log('✓ 05: Speech bubble 3 captured');

    // Step 6: Settled calm state (at 10500ms)
    await sleep(2500);
    await page.screenshot({ path: path.join(artifactDir, 'avi_intro_06_settled.png') });
    console.log('✓ 06: Settled state captured');

    // Step 7: Hover tooltip ("Talk to me")
    const aviEl = await page.$('div[aria-label="Click to chat with AVI"]');
    if (aviEl) {
      await aviEl.hover();
      await sleep(350);
      await page.screenshot({ path: path.join(artifactDir, 'avi_intro_07_hover_talk_to_me.png') });
      console.log('✓ 07: Hover tooltip "Talk to me" captured');

      // Step 8: Click AVI to open chat
      await aviEl.click();
      await sleep(700);
      await page.screenshot({ path: path.join(artifactDir, 'avi_intro_08_click_opened_chat.png') });
      console.log('✓ 08: Chat opened after click captured');
    }

    await ctx.close();
  }

  // --- Test 2: Mobile Viewport Introduction ---
  {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const page = await ctx.newPage();
    await page.addInitScript(() => {
      sessionStorage.clear();
    });

    await page.goto(BASE_URL, { waitUntil: 'networkidle' });

    // Capture during speech bubble step on mobile
    await sleep(3800);
    await page.screenshot({ path: path.join(artifactDir, 'avi_intro_09_mobile_speech_bubble.png') });
    console.log('✓ 09: Mobile speech bubble captured');

    // Wait until settled
    await sleep(6500);
    await page.screenshot({ path: path.join(artifactDir, 'avi_intro_10_mobile_settled.png') });
    console.log('✓ 10: Mobile settled hero captured');

    await ctx.close();
  }

  await browser.close();
  console.log('\nAll introduction and design QA checks completed successfully.');
})();
