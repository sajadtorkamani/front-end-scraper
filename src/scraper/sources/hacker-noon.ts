import { ScrapeSource } from '../types';

const hackerNoon: ScrapeSource = {
  name: 'Hacker Noon',
  url: 'https://hackernoon.com/tagged/javascript',
  filename: 'hacker-noon.json',

  getPosts() {
    return $('.stories-item')
      .map(function() {
        const $post = $(this);

        const title = $post
          .find('h2 a')
          .text()
          .trim();
        // Links are relative so prefix them with base path.
        const link = location.origin + $post.find('h2 a').attr('href');

        const author = $post
          .find('.meta a')
          .text()
          .trim();

        return { title, link, author };
      })
      .toArray();
  },
};

export default hackerNoon;
