import React from 'react';
import { Post } from '../scraper/utils/scrape';

type Props = {
  posts: Post[];
};

const SitePosts: React.FC<Props> = ({ posts }) => (
  <>
    <h3>{posts[0].source}</h3>

    {posts.map(post => (
      <article style={{ marginBottom: 20 }}>
        <a href={post.link} target="_blank">
          <h5 style={{ marginBottom: 0 }}>{post.title}</h5>
        </a>
        <small>
          Source: {post.source} | Author: {post.author}
        </small>
      </article>
    ))}
  </>
);

export default SitePosts;
