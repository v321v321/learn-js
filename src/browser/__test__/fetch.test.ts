import { afterAll, afterEach, beforeAll, describe, expect, test } from 'vitest';
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
      headless: true,
      slowMo: 100,
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    await new Promise<void>((resolve, reject) => {
      server.httpServer.close((error) => (error ? reject(error) : resolve()));
    });
  });

  // Загрузить пользователей с github и отобразить их в списке,
  // элемент списка - div с идентификатором = github-user-{id пользователя},
  // содержимое элемента = #{id пользователя} - {login пользователя}
  // Пример <div id="github-user-1">#1 - mojombo</div>
  test('load github users', async () => {
    await page.goto('http://localhost:5173');

    const loadButtonId = 'load-github-users-button';

    const button = (await page.$(`#${loadButtonId}`))!;
    await button.click();

    await page.waitForSelector('#github-user-1');
    const githubUserItem = await page.$('#github-user-1');

    let text = await page.evaluate((el) => el.textContent, githubUserItem);
    expect(text).toBe('#1 - mojombo');
  });
});
