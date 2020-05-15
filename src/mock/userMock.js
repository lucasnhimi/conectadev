import mock from '../utils/mock';

// mock.onPost('/api/home/login').reply(200, {
//   'id': 1,
//   'username': 'lucasnhimi',
//   'email': 'lucasnhimi@lucasnhimi.com.br'
// });

mock.onPost('/api/home/login').reply((config) => {
  const { email, password } = JSON.parse(config.data);

  if (email !== 'lucasnhimi@lucasnhimi.com.br' || password !== 'admin') {
    return [400, { message: 'Seu e-mail ou senha estão incorretos' }]
  }

  const user = {
    id: 1,
    name: 'Lucas Nhimi',
    username: 'lucasnhimi',
    email: 'lucasnhimi@lucasnhimi.com.br'
  }


  return [200, { user }]
});