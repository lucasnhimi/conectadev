import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from '../../utils/axios';
import PostView from '../../components/PostView';

function Post() {
  const [post, setPost] = useState([]);
  const params = useParams();

  const getPost = useCallback(async () => {
    const feed = await axios.get(`/api/post/${params.slug}`);
    setPost(feed.data);
  }, [setPost, params.slug]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  return <PostView post={post} />;
}

export default Post;
