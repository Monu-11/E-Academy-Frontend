import { ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './redux/store';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// store.subscribe(() => {
//   console.log('subscribe', store.getState());
// });

root.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <App />
    </ChakraProvider>
  </Provider>
);
