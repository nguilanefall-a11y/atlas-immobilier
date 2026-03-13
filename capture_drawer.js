import { chromium } from 'playwright';

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage({
        viewport: { width: 390, height: 844 },
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true
    });

    await page.goto('http://localhost:5173/');
    await page.waitForTimeout(2000);

    // click navbar hamburger
    await page.click('button.lg\\:hidden');

    await page.waitForTimeout(1000); // wait for animation

    await page.screenshot({ path: 'drawer_bug.png' });

    await browser.close();
})();
