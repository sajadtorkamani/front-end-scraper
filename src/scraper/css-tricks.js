const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://css-tricks.com/tag/javascript/');
  await page.addScriptTag({
    url: 'https://code.jquery.com/jquery-3.2.1.min.js'
  });

  const posts = await page.evaluate(() => {
    const $ = window.jQuery;

    return $('.article-article')
      .map(function() {
        const $post = $(this);

        const title = $post
          .find('h2 a')
          .text()
          .trim();

        const link = $post.find('h2 a').attr('href');

        const author = $post
          .find('.author-name')
          .text()
          .replace(/Shared by/i, '') // Handle edge cases...
          .trim();

        return {
          source: 'CSS Tricks',
          author,
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
