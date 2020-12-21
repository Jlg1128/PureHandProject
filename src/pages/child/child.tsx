import React, { PureComponent, lazy, Suspense } from 'react';
import HookCom from './hookCom';
import Test from './test';

const Mylazy = lazy(() => import('./test'));

// @ts-ignore
Mylazy.defaultProps = '123';

console.log('lazy', Mylazy);
// @ts-ignore
console.log('lazy', Mylazy.defaultProps);

export default class Child extends PureComponent {
  ref: HTMLButtonElement | null = null;

  state = {
    count: 0,
  }
    render() {
      console.log('Function🐻🐻🐻🐻🐻', <HookCom></HookCom>);
      // console.log('Class🐻🐻🐻🐻🐻', <Test></Test>);
      console.log('HookCom🐻🐻🐻🐻🐻',<button ref={ref =>{ this.ref = ref;
      }}></button>);
      this.ref && console.log('ref🐽🐽🐽🐽🐽',  this.ref);      
        return (
          <div>
            <Suspense fallback={<div>loading</div>}>
              123
              {/* <Mylazy /> */}
            </Suspense>
            <button ref={ref => this.ref = ref} onClick={() => this.setState({ count: this.state.count + 1 })}>点击</button>
            <i>{this.state.count}</i>
            <HookCom>
              <div>
                <ul>
                  <li key="li1">nihao</li>
                  <li key="li2">nihao</li>
                  <li key="li3">nihao</li>
                  <li key="li4">nihao</li>
                </ul>
              </div>
            </HookCom>
            <Test name={'jlg'}></Test>
          </div>
        );
    }
}
