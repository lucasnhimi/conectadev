import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Auth from './components/Auth';
import GuestRoute from './routes/GuestRoute';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import theme from './theme';
import store from './store';
import './mock';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Auth>
            <Routes>
              <GuestRoute path="/sign-in" element={<SignIn />} />
              <Route path="//*" element={<Home />} />
            </Routes>
          </Auth>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
