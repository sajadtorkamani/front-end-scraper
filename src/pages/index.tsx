import React from 'react';

import { Accordion, Card, Button } from 'react-bootstrap';
import Layout from '../components/layout';
import SEO from '../components/seo';
import kentDoddsContent from '../content/scrape-results/kent-dodds.json';
import overreactedContent from '../content/scrape-results/overreacted.json';
import cssTricksContent from '../content/scrape-results/css-tricks.json';
import hackerNoonContent from '../content/scrape-results/hacker-noon.json';
import Source from '../components/Source';

const contents = [
  kentDoddsContent,
  overreactedContent,
  cssTricksContent,
  hackerNoonContent,
];

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />

    <p style={{ marginBottom: 20 }}>
      Latest blog posts from popular front-end blogs.
    </p>

    <Accordion defaultActiveKey="0">
      {contents.map((content, index) => (
        <Source key={index} source={content} index={index.toString()} />
      ))}
    </Accordion>
  </Layout>
);

export default IndexPage;
