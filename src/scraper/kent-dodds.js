const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://kentcdodds.com/blog');
  await page.addScriptTag({
    url: 'https://code.jquery.com/jquery-3.2.1.min.js'
  });

  const posts = await page.evaluate(() => {
    const $ = window.jQuery;

    return $('h2 a')
      .map(function() {
        const $post = $(this);

        const title = $post.text().trim();

        // Links are relative so prefix them with base path
        const link = location.origin + $post.attr('href');

        return {
          source: 'Kent C. Dodds Blog',
          author: 'Kent C. Dodds',
          title,
          link
        };
      })
      .toArray();
  });

  console.log('-------------------');
  console.log(JSON.stringify(posts, null, 2));
  console.log('-------------------');

  await browser.close();
})();
