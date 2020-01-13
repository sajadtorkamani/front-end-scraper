import { ScrapeSource } from '../types';

const kentDodds: ScrapeSource = {
  name: 'Kent Dodds',
  url: 'https://kentcdodds.com/blog',
  filename: 'kent-dodds.json',

  getPosts() {
    return $('h2 a')
      .map(function() {
        const $post = $(this);
        const title = $post.text().trim();
        // Links are relative so prefix them with base path.
        const link = location.origin + $post.attr('href');

        return { author: 'Kent C. Dodds', title, link };
      })
      .toArray();
  },
};

export default kentDodds;
