import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

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
          <Routes>
            <Route path="/" element={<Home />} />
            <GuestRoute path="/sign-in" element={<SignIn />} />
            <Route path="*" element={<h1>404!</h1>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
     </Provider>
  );
}

export default App;
