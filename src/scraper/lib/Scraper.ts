import * as path from 'path';
import { launch } from 'puppeteer';
import { promises as fs } from 'fs';
import { ScrapeSource, Post, Source } from '../types';

class Scraper {
  constructor(
    private readonly sourcesDir: string,
    private readonly saveDir: string
  ) {}

  /**
   * Scrape a source with puppeteer.
   *
   * @param source The source to scrape.
   */
  async scrapeSource(source: ScrapeSource) {
    const browser = await launch();
    const page = await browser.newPage();
    await page.goto(source.url);
    await page.addScriptTag({
      url: 'https://code.jquery.com/jquery-3.2.1.min.js',
    });

    // Scrape page using provided function.
    const posts = await page.evaluate(source.getPosts);

    this.saveResults(source, posts);

    await browser.close();
  }

  /**
   * Save the scraped results.
   *
   * @param filename Name of file to save>
   * @param posts Array of Post objects.
   */
  private async saveResults(source: ScrapeSource, posts: Post[]) {
    const results: Source = {
      name: source.name,
      url: source.url,
      posts: posts,
    };

    await fs.writeFile(
      path.join(this.saveDir, source.filename),
      JSON.stringify(results)
    );
  }

  /**
   * Run the scraper.
   */
  async run() {
    const sourceFiles = await fs.readdir(this.sourcesDir);

    sourceFiles.forEach(async sourceFile => {
      const source: ScrapeSource = require(path.join(
        this.sourcesDir,
        sourceFile
      )).default;

      console.log(`Scraping source: ${source.name}....`);
      await this.scrapeSource(source);
      console.log(`SUCCESS: Scraped source: ${source.name}....`);
    });
  }
}

export default Scraper;
