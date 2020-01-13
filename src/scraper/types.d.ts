export type ScrapeSource = {
  name: string;
  url: string;
  filename: string;

  getPosts(): Post[];
};

export type Source = {
  name: string;
  url: string;
  posts: Post[];
};

export interface Post {
  author: string;
  title: string;
  link: string | undefined;
}
