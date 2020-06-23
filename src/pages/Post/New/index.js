import React from 'react';
import Box from '@material-ui/core/Box';

import PostEditor from './Editor';
import PostPreview from './Preview';
import BottomBar from './BottomBar';
import { PostProvider } from '../../../context/PostContext';

function NewPost() {
  return (
    <PostProvider>
      <Box display="flex" height="calc(100% - 70px)" overflow="scroll">
        <Box width="50%" height="100%" padding={2} borderRight="1px solid #DDD">
          <PostEditor />
        </Box>
        <Box width="50%" height="100%" padding={2}>
          <PostPreview />
        </Box>
      </Box>
      <BottomBar />
    </PostProvider>
  );
}

export default NewPost;
