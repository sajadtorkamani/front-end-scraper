import React from 'react';
import { Accordion } from 'react-bootstrap';
import styled from 'styled-components';
import { Source as ISource } from '../scraper/types';

type Props = {
  source: ISource;
  index: string;
};

const Source: React.FC<Props> = ({ source, index }) => (
  <StyledSource>
    <Accordion.Toggle as="h2" eventKey={index} className="source-name">
      {source.name}
      <a href={source.url} target="_blank">
        <small className="text-muted ml-3">(Visit source)</small>
      </a>
    </Accordion.Toggle>

    <Accordion.Collapse eventKey={index}>
      <div className="post-list">
        {source.posts.map(post => (
          <article className="post" key={post.title}>
            <a href={post.link} target="_blank">
              <h3 className="post__title">{post.title}</h3>
              <small className="text-muted">Author: {post.author}</small>
            </a>
          </article>
        ))}
      </div>
    </Accordion.Collapse>
  </StyledSource>
);

const StyledSource = styled.section`
  background: #eee;
  margin-bottom: 30px;

  .source-name {
    align-items: center;
    display: flex;
    padding: 20px;

    &:hover {
      cursor: pointer;
    }

    small {
      vertical-align: middle;
    }
  }

  .post {
    margin-bottom: 12px;

    &__title {
      font-size: 20px;
      margin-bottom: 0;
    }
  }

  .post-list {
    padding: 0 20px 20px;
  }
`;

export default Source;
