import React from 'react';
import { Layout } from '../layouts';
import { TagsCloud } from '../components';
import { ListPostPreviews } from '../components';

export default ({ pageContext: { tags, activeTag, posts } }) => (
  <React.Fragment>
    <Layout banner="Tags">
      <TagsCloud tags={tags} activeTag={activeTag} />
      {posts ? <ListPostPreviews posts={posts} /> : null}
    </Layout>
  </React.Fragment>
);
