import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HelmetProvider } from 'react-helmet-async';

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <HelmetProvider>
       <App />
    </HelmetProvider>
  </React.StrictMode>
);

//  ReactDOM.hydrate(<React.StrictMode>
//   <App />
// </React.StrictMode>,document.getElementById('root'));



