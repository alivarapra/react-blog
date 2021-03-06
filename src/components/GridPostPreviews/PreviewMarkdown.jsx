import React from 'react';
import { Link } from 'gatsby';
import { Button, Icon, Skeleton } from 'antd';
import { Container } from 'components';
import { Colors } from 'config';

const PreviewMarkdown = ({ post }) => (
  <Container>
    <Skeleton
      paragraph={{ rows: Math.min(Math.floor(post.timeToRead / 2), 10) }}
    />
    <Button
      type="primary"
      shape="circle"
      size="large"
      style={{
        float: 'right',
        width: '2.5em',
        height: '2.5em',
        margin: 0,
        fontSize: '1.5em',
      }}
    >
      <Link to={`${post.slug}`} style={{ color: Colors.light }}>
        <Icon type="read" />
      </Link>
    </Button>
  </Container>
);

export default PreviewMarkdown;
