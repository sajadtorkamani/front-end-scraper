import React from 'react';

import { Accordion, Card, Button } from 'react-bootstrap';
import Layout from '../components/layout';
import SEO from '../components/seo';
import kentDoddsContent from '../content/kent-dodds.json';
import overreactedContent from '../content/overreacted.json';
import cssTricksContent from '../content/css-tricks.json';
import hackerNoonContent from '../content/hacker-noon.json';
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
        <Source source={content} index={index.toString()} />
      ))}
    </Accordion>
  </Layout>
);

export default IndexPage;
