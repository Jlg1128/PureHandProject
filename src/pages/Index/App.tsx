import React, { Component, Dispatch } from 'react';
import { AnyAction } from 'redux';
import md5 from '@/utils/md5';
import Map1 from '@/components/echarts/echarts';
import MyTable from '@/components/echarts/table/table';
import { Button } from 'antd';
import test from '@/utils';
import axiosInstance from '@/utils/request';
import img from '../../../public/logo1.png';
import styles from './App.scss';

// 引入柱状图
import 'echarts/lib/chart/bar';

// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

export const MyContext = React.createContext({ color: 'black' });

MyContext.displayName = 'myContext-jlg';
interface P {
  name: string;
  age: number;
  year: number;
}
interface K {
  age: number;
  year: number;
}
interface My<T extends K> {
  [key: string]: T,
}

const ref = React.createRef();

const myarr: My<P> = {
  'name': {
    name: 'jlg',
    age: 123,
    year: 123,
  },
};
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
  account: string,
  password: string,
}
class App extends Component<Props, State> {
  inputRef: HTMLInputElement | null = null;

  dashboardIdRef: HTMLInputElement | null = null;

  state = {
    account: '1231231232',
    password: '12312',
  }

  renderUser = (user: User) => user;

  handleClick = () => {
    axiosInstance.get('/api')
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }

  getUserInfo = () => {
    axiosInstance.post('/api/user', {
      params: {
        uid: '10',
        name: 'hefan',
        password: '123456',
        role: 0,
        sex: '男',
      },
    })
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }

  addUser = () => {
    axiosInstance.post('api/adduser', {
      params: {
        uid: '97',
        name: 'nihao',
        password: 'xixi21312',
        // role: 0,
        // sex: '男',
      },
    })
      .then((res) => {
        console.log(res);
      });
  }

  deleteUser = () => {
    axiosInstance.post('/api/deleteuser', { params: { uid: 2 } });
  }

  updataUser = () => {
    axiosInstance.post('/api/updateuser', { params: { uid: 3 } });
  }

  searchUser = () => {
    axiosInstance.get('/api/searchuser', { params: { uid: 2 } });
  }

  login = () => {
    const { account, password } = this.state;
    axiosInstance.post('/api', { params: { name: account, password: md5(password) } })
      .then((res) => {
        const { token } = res.data;
        !!token && sessionStorage.setItem('token', token);
      });
  }

  test = () => {
    const { account, password } = this.state;
    axiosInstance.post('/api/settings', { params: { name: 'hefan', password: md5(password) } })
      .then((res) => {
        const { token } = res.data;
        !!token && sessionStorage.setItem('token', token);
      });
  }

  dashboardTest = () => {
    axiosInstance.get('/api/v1/dashboard/getDashboard', {
      params: { dashboardId: this.dashboardIdRef && this.dashboardIdRef.value, type: 'dashboard' },
    })
      .then((res) => {
        console.log(res);
      });
  }

  handleUpdate = () => {
    console.dir(this.inputRef);
    // this.inputRef && axiosInstance.post('/api/v1/dashboard/updateDashboard', {
    this.inputRef && axiosInstance.post('/api/v1/dashboard/updateComponents', {
      params: {
        dashboardId: this.dashboardIdRef && this.dashboardIdRef.value,
        // componentsData: this.inputRef && this.inputRef.value,
        settings: this.inputRef && this.inputRef.value,
      },
    })
    .then(res => {
      console.log(res);
    });
  }

  show = () => {
    const node = (
      <MyContext.Provider value={{ color: 'white' }}>
        <div>
          {[1, 2, 3].map((item) => (
            <div key={item}>
              {item}
            </div>
          ))}
        </div>
      </MyContext.Provider>
    );
    return node;
  }

  componentDidMount() {
    // let obj = {
    //   name: 'jlg',
    // };
    // function mytest(x: any) {
    //   this.x = x;
    // }
    // Object.setPrototypeOf(obj, mytest.prototype);
    // console.log(Object.prototype.hasOwnProperty.call(obj, 'name'));
    console.log('ref', ref);
  }

  render() {
    console.log('app', this);
    console.log('context', this.context);
    const { show } = this;
    console.log('force');
    console.log(show());
    const a = Symbol.for('reacr.element');
    console.log(a);
    // const child1 = React.createElement('li', null, 'one');
    const Ul = React.createElement('div', { className: 'jlg', ref: '123123' }, this.show());
    console.log(Ul);

    return (
      <div>
        {/* <img src={img} alt="" /> */}
        {/* <img src="./static/logo1.png" alt="" /> */}
        <button type="button" onClick={this.addUser}>增加</button>
        <button type="button" onClick={this.deleteUser}>删除</button>
        <button type="button" onClick={this.updataUser}>更新</button>
        <button type="button" onClick={this.searchUser}>查询</button>
        <span>请输入账号</span>
        {Ul}
        <input onChange={((e) => this.setState({ account: e.target.value }))} type="text" />
        <span>请输入密码</span>
        <input onChange={((e) => this.setState({ password: e.target.value }))} type="text" />
        <button type="submit" onClick={this.login}>提交</button>
        <button type="button" onClick={this.test}>测试</button>
        <button type="button" onClick={this.dashboardTest}>仪表盘测试</button>
        <br />
        <span>请输入仪表盘id</span>
        <input type="text" ref={(ref) => { this.dashboardIdRef = ref; }} />
        <br />
        <span>请输入更新组件的内容</span>
        <input type="text" ref={(ref) => { this.inputRef = ref; }} />
        <button type="button" onClick={() => this.handleUpdate()}>更新内容</button>
        <button type="button" onClick={() => this.show()}>force</button>
      </div>
    );
  }
}

// export default connect(
//   ({ counter }: any) => ({ count: counter.count }),
//   // (dispatch) => ({ ...bindActionCreators(sendAction,dispatch) })

// )(App)
export default App;
