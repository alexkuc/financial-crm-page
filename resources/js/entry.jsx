import App from './components/App';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, Container } from '@chakra-ui/react';

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
require('./bootstrap');

const rootEl = document.getElementById('root');

if (rootEl)
  ReactDOM.render(
    <BrowserRouter>
      <ChakraProvider>
        <Container mt={10}>
          <App jsonUrl={rootEl.dataset.url ?? null} />
        </Container>
      </ChakraProvider>
    </BrowserRouter>,
    rootEl
  );
