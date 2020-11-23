import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import Routers from './router/route';

ReactDom.render(<Provider store={store}>
  <Routers />
                </Provider>, document.getElementById('app'));
