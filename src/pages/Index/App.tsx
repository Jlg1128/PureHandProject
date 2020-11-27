import React, { Component, Dispatch } from 'react';
import { AnyAction } from 'redux';
import Map1 from '@/components/echarts/echarts';
import MyTable from '@/components/echarts/table/table';
import axios from 'axios';
import { Button } from 'antd';
import img from '../../../public/logo1.png';
import styles from './App.scss';

// 引入柱状图
import 'echarts/lib/chart/bar';

// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

const config = {
  // baseURL: 'http://localhost:8089',
  timeout: 5000,
  'Content-Type': 'application/xml',
  'Access-Control-Allow-Origin': '*',
};

const instance = axios.create(config);
export interface User {
  name: string;
  age: number;
}
interface Props {
  store?: any;
  count?: number;
  dispatch?: Dispatch<AnyAction>;
  // sendAction: any;s
}
interface State {
  store: any;
}

class App extends Component<Props, State> {
  renderUser = (user: User) => user;

  handleClick = () => {
    instance.get('/api')
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }

  getUserInfo = () => {
    instance.get('/api/user')
    .then((res: any) => {
      console.log(res);
    })
    .catch((err: Error) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        {/* <img src={img} alt="" /> */}
        {/* <img src="./static/logo1.png" alt="" /> */}
        <Button onClick={this.handleClick}>点击</Button>
        <button onClick={this.getUserInfo}>点击获取用户星信息</button>
      </div>
    );
  }
}

// export default connect(
//   ({ counter }: any) => ({ count: counter.count }),
//   // (dispatch) => ({ ...bindActionCreators(sendAction,dispatch) })

// )(App)

export default App;
