import { ScrapeSource } from '../types';

const cssTricks: ScrapeSource = {
  name: 'CSS Tricks',
  url: 'https://css-tricks.com/tag/javascript/',
  filename: 'css-tricks.json',

  getPosts() {
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

        return { author, title, link };
      })
      .toArray();
  },
};

export default cssTricks;
