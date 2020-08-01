import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import NewPost from '../Post/New';
import Feed from '../Feed';
import Post from '../Post';
import Profile from '../Profile';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.dark,
  },
  main: {
    padding: 24,
  },
  toolbar: {
    minHeight: 64,
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.toolbar} />
      <main className={classes.main}>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/:username" element={<Profile />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/post/new" element={<NewPost />} />
          <Route path="/post/:slug" element={<Post />} />
          <Route path="*" element={<h1>404!</h1>} />
        </Routes>
      </main>
    </div>
  );
}

export default Home;
