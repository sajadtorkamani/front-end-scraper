import * as path from 'path';
import { promises as fs } from 'fs';
import * as puppeteer from 'puppeteer';

const destDir = path.join(__dirname, '..', '..', 'data');

type PostData = {
  source: string;
  author: string;
  title: string;
  link: string | undefined;
};

type ScrapeOptions = {
  url: string;
  filename: string;
  getPosts: ($: JQueryStatic) => PostData[];
};

const scrape = async (opts: ScrapeOptions) => {
  const { url, filename, getPosts } = opts;

  // Navigate to page.
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.addScriptTag({
    url: 'https://code.jquery.com/jquery-3.2.1.min.js',
  });

  // Scrape page using provided function.
  const posts = await page.evaluate(getPosts);

  // Save scraped data as JSON file.
  await fs.writeFile(path.join(destDir, filename), JSON.stringify(posts));
  await browser.close();
};

export default scrape;
