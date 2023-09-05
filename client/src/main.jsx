import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ChakraProvider>
  </React.StrictMode>
);
