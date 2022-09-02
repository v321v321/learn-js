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

  /*
  test('should have the correct counter value', async () => {
    await page.goto('http://localhost:5173');
    const button = (await page.$('#counter'))!;
    expect(button).toBeDefined();

    let text = await page.evaluate((btn) => btn.textContent, button);
    expect(text).toBe('count is 0');

    await button.click();
    text = await page.evaluate((btn) => btn.textContent, button);

    expect(text).toBe('count is 1');
  });
  */

  // Создать форму с полями пользователя: имя, возраст, должность с кнопкой
  // При нажатии на кнопку в карточке пользователя отображаются новые значения
  test('should input user card values', async () => {
    await page.goto('http://localhost:5173');

    const inputValues = {
      name: 'John Smith',
      age: '40',
      position: 'CEO',
    };

    const submitButtonId = 'user-form-submit-button';

    const inputNameId = 'user-input-name';
    const inputAgeId = 'user-input-age';
    const inputPositionId = 'user-input-position';

    const nameId = 'user-name';
    const ageId = 'user-age';
    const positionId = 'user-position';

    const inputName = (await page.$(`#${inputNameId}`))!;
    await inputName.focus();
    await inputName.type(inputValues.name);

    const inputAge = (await page.$(`#${inputAgeId}`))!;
    await inputAge.focus();
    await inputAge.type(inputValues.age);

    const inputPosition = (await page.$(`#${inputPositionId}`))!;
    await inputPosition.focus();
    await inputPosition.type(inputValues.position);

    const button = (await page.$(`#${submitButtonId}`))!;
    await button.click();

    let userNameValue = await page.evaluate(
      (element) => element.textContent,
      await page.$(`#${nameId}`)
    );

    let userAgeValue = await page.evaluate(
      (element) => element.textContent,
      await page.$(`#${ageId}`)
    );

    let userPositionValue = await page.evaluate(
      (element) => element.textContent,
      await page.$(`#${positionId}`)
    );

    expect(userNameValue).toBe(inputValues.name);
    expect(userAgeValue).toBe(inputValues.age);
    expect(userPositionValue).toBe(inputValues.position);
  }, 60_000);
});
