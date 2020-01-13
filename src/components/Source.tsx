import React from 'react';
import { Accordion } from 'react-bootstrap';
import { Source as ISource } from '../scraper/types';
import styles from './Source.module.scss';

type Props = {
  source: ISource;
  index: string;
};

const Source: React.FC<Props> = ({ source, index }) => (
  <section className={styles.wrapper}>
    <Accordion.Toggle as="h2" eventKey={index} className={styles.header}>
      {source.name}
      <a href={source.url} target="_blank">
        <small className="text-muted ml-3">(Visit source)</small>
      </a>
    </Accordion.Toggle>

    <Accordion.Collapse eventKey={index}>
      <div className={styles.body}>
        {source.posts.map(post => (
          <article>
            <a href={post.link} target="_blank">
              <h3 className="post__title">{post.title}</h3>
              <small className="text-muted">Author: {post.author}</small>
            </a>
          </article>
        ))}
      </div>
    </Accordion.Collapse>
  </section>
);

export default Source;
