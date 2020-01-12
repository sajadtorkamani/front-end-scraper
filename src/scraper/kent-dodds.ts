import scrape from './utils/scrape';

const getPosts = () => {
  return $('h2 a')
    .map(function() {
      const $post = $(this);

      const title = $post.text().trim();

      // Links are relative so prefix them with base path.
      const link = location.origin + $post.attr('href');

      return {
        source: 'Kent C. Dodds Blog',
        author: 'Kent C. Dodds',
        title,
        link,
      };
    })
    .toArray();
};

(async () => {
  await scrape({
    url: 'https://kentcdodds.com/blog',
    filename: 'kent-dodds.json',
    getPosts,
  });
})();
