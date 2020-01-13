import * as path from 'path';
import Scraper from './lib/Scraper';

(async () => {
  new Scraper(
    path.join(__dirname, 'sources'),
    path.join(__dirname, '..', 'content')
  ).run();
})();
