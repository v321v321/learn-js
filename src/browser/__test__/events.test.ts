import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import { preview } from 'vite';
import type { PreviewServer } from 'vite';
import * as puppeteer from 'puppeteer';
import type { Browser, Page } from 'puppeteer';

describe('basic', async () => {
  let server: PreviewServer;
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    server = await preview({ preview: { port: 3000 } });
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 1000,
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    await new Promise<void>((resolve, reject) => {
      server.httpServer.close((error) => (error ? reject(error) : resolve()));
    });
  });

  // TODO make more stable
  test.only('should have the correct title', async () => {
    try {
      await page.goto('http://localhost:5173');
      const button = (await page.$('#counter'))!;
      expect(button).toBeDefined();

      let text = await page.evaluate((btn) => btn.textContent, button);
      expect(text).toBe('count is 0');

      await button.click();
      text = await page.evaluate((btn) => btn.textContent, button);

      expect(text).toBe('count is 1');
    } catch (e) {
      console.error(e);
      expect(e).toBeUndefined();
    }
  }, 60_000);
});
