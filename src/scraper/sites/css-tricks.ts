import scrape from '../utils/scrape';

const getPosts = () => {
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
        link,
      };
    })
    .toArray();
};

(async () => {
  await scrape({
    url: 'https://css-tricks.com/tag/javascript/',
    filename: 'css-tricks.json',
    getPosts,
  });
})();
