import { ScrapeSource } from '../types';

const overreacted: ScrapeSource = {
  name: 'Overreacted',
  url: 'https://overreacted.io/',
  filename: 'overreacted.json',

  getPosts() {
    return $('h3 a')
      .map(function() {
        const $post = $(this);
        const title = $post.text().trim();
        // Links are relative so prefix them with base path.
        const link = location.origin + $post.attr('href');

        return { author: 'Dan Abramov', title, link };
      })
      .toArray();
  },
};

export default overreacted;
