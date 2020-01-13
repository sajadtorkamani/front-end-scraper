import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import kentDoddsPosts from '../content/kent-dodds.json';
import cssTricksPosts from '../content/css-tricks.json';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />

    <h3>Kent C. Dodds Blog</h3>
    {kentDoddsPosts.map(post => (
      <article style={{ marginBottom: 20 }}>
        <a href={post.link} target="_blank">
          <h5 style={{ marginBottom: 0 }}>{post.title}</h5>
        </a>
        <small>
          Source: {post.source} | Author: {post.author}
        </small>
      </article>
    ))}

    <h3>CSS Tricks</h3>
    {cssTricksPosts.map(post => (
      <article style={{ marginBottom: 20 }}>
        <a href={post.link} target="_blank">
          <h5 style={{ marginBottom: 0 }}>{post.title}</h5>
        </a>
        <small>
          Source: {post.source} | Author: {post.author}
        </small>
      </article>
    ))}
  </Layout>
);

type PostListingProps = {
  post: PostData;
};
const PostListing = () => <article>Post...</article>;

export default IndexPage;
