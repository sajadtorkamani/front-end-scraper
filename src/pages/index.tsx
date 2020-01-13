import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import kentDoddsPosts from '../content/kent-dodds.json';
import cssTricksPosts from '../content/css-tricks.json';
import overreactedPosts from '../content/overreacted.json';
import SitePosts from '../components/SitePosts';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />

    <SitePosts posts={kentDoddsPosts} />
    <SitePosts posts={overreactedPosts} />
    <SitePosts posts={cssTricksPosts} />
  </Layout>
);

export default IndexPage;
