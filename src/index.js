import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ChakraProvider} from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";


import theme from './components/theme/index'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider theme={theme}>
    <App />
     </ChakraProvider>
     </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

