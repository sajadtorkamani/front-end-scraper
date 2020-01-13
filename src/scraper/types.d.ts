export type ScrapeSource = {
  name: string;
  url: string;
  filename: string;

  getPosts(): Post[];
};

export interface Post {
  author: string;
  title: string;
  link: string | undefined;
}
