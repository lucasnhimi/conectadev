import mock from '../utils/mock';

mock.onGet('/api/connections/followers/lucasnhimi').reply(200, {
  followers: [
    {
      id: 1,
      user: {
        id: 1,
        name: 'Fernanda Souza',
        username: 'fersouza10',
        avatar: '/images/avatars/avatar_10.png',
      },
      following: false,
    },
    {
      id: 2,
      user: {
        id: 2,
        name: 'Lucas Fernando',
        username: 'lucfernando',
        avatar: '/images/avatars/avatar_9.png',
      },
      following: true,
    },
    {
      id: 3,
      user: {
        id: 3,
        name: 'Matheus Henrique',
        username: 'm_henriques',
        avatar: '/images/avatars/avatar_8.png',
      },
      following: false,
    },
    {
      id: 4,
      user: {
        id: 4,
        name: 'Cleber Henrique',
        username: 'cleberh_11',
        avatar: '/images/avatars/avatar_7.png',
      },
      following: false,
    },
  ],
});

mock.onGet('/api/connections/following/lucasnhimi').reply(200, {
  following: [
    {
      id: 1,
      user: {
        id: 1,
        name: 'Fernanda Souza',
        username: 'fersouza10',
        avatar: '/images/avatars/avatar_10.png',
      },
    },
    {
      id: 2,
      user: {
        id: 2,
        name: 'Lucas Fernando',
        username: 'lucfernando',
        avatar: '/images/avatars/avatar_9.png',
      },
    },
    {
      id: 3,
      user: {
        id: 3,
        name: 'Matheus Henrique',
        username: 'm_henriques',
        avatar: '/images/avatars/avatar_8.png',
      },
    },
    {
      id: 4,
      user: {
        id: 4,
        name: 'Cleber Henrique',
        username: 'cleberh_11',
        avatar: '/images/avatars/avatar_7.png',
      },
    },
  ],
});
