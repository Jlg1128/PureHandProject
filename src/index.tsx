import React, { Profiler } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import Routers from './router/route';
import Demo from './pages/demo/demo';
// @ts-ignore
import { unstable_trace as trace } from '../node_modules/scheduler/tracing.js';

// trace("initial render", performance.now(), () => ReactDom.render(
//   <Provider store={store}>
//     <Profiler id='demo' onRender={(...res) => console.log(res)}>
//     <Demo name={'jlg'}></Demo>
//     </Profiler>
//     {/* <React.StrictMode>
//      <Routers />
//     </React.StrictMode> */}
//   </Provider>, document.getElementById('app1'),
// )
// );
ReactDom.render(
  <Provider store={store}>
    <Demo name={'jlg'}>
      <div>
        <span>
          nihao
        </span>
      </div>
      <div>nihao</div>
    </Demo>
    {/* <React.StrictMode>
     <Routers />
    </React.StrictMode> */}
  </Provider>, document.getElementById('app1'),
)

