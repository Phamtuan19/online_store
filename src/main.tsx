import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '@Redux/store.ts';

import { BrowserRouter } from 'react-router-dom';
import Routers from './routes';

import './styles/global.css';

const rootElement = document.getElementById('root');

if (rootElement !== null) {
   const root = ReactDOM.createRoot(rootElement);

   root.render(
      <React.StrictMode>
         <Provider store={store}>
            <BrowserRouter>
               <Routers />
            </BrowserRouter>
         </Provider>
      </React.StrictMode>,
   );
}
