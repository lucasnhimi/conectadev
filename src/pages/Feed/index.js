import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import PostCard from '../../components/PostCard';
import NavBar from './NavBar';

const useStyles = makeStyles(() => ({
  root: {},
}));

const posts = [
  {
    id: 1,
    author: {
      id: 1,
      name: 'Lucas Nhimi',
      username: 'lucasnhimi',
      avatar: '/images/avatars/avatar_1.jpeg',
    },
    title: 'Criando um App do zero utilizando React.js',
    date: 'April 7, 2020',
    description: 'Fala pessoal! Qual o framework favorito de vcs?',
    hashtags: '#dotnet, #javascript, #reactjs, #developer',
    image: '/images/posts/post9.jpeg',
  },
  {
    id: 2,
    author: {
      id: 1,
      name: 'Lucas Nhimi',
      username: 'lucasnhimi',
      avatar: '/images/avatars/avatar_1.jpeg',
    },
    title: 'Comparativo entre React.js e Vue.js - Performance',
    date: 'April 1, 2020',
    description:
      'Quero criar um bootcamp gratuito para passar um pouco da minha experiência pra vcs! Quem topa?',
    hashtags: '#framework, #javascript, #reactjs, #vue',
    image: '/images/posts/post8.png',
  },
];

function Feed() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Box display="flex">
        <NavBar />
        <div className={classes.root}>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </Box>
    </Container>
  );
}

export default Feed;
