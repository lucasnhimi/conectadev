import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Markdown from 'react-markdown';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { usePost } from '../../../../context/PostContext';

const useStyles = makeStyles((theme) => ({
  imagePreview: {
    width: '100%',
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
}));

function PostPreview() {
  const ctx = usePost();
  const { image, title, tags, markdownText } = ctx;
  const classes = useStyles();
  const account = useSelector((state) => state.account);

  return (
    <>
      {image && (
        <Box mb={2}>
          <img className={classes.imagePreview} src={image} alt="background" />
        </Box>
      )}
      <Box mb={2}>
        <Typography variant="h2">{title}</Typography>
      </Box>
      <Box display="flex" alignItems="center" mb={2}>
        <Box>
          <Avatar className={classes.avatar} src={account.user?.avatar} />
        </Box>
        <Box>
          <Typography variant="body1">{account.user?.name}</Typography>
          <Typography variant="body2" color="textSecondary">
            10 meses atrás
          </Typography>
        </Box>
      </Box>
      <Box mb={2}>
        <Typography variant="body1">
          {tags?.map((item) => item.title).join(',')}
        </Typography>
      </Box>
      <Divider />
      <Markdown source={markdownText} />
    </>
  );
}

export default PostPreview;
