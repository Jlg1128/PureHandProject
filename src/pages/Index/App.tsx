import React, { Component, Dispatch } from 'react';
import { AnyAction } from 'redux';
import Map1 from '@/components/echarts/echarts';
import MyTable from '@/components/echarts/table/table';

// 引入柱状图
import 'echarts/lib/chart/bar';

// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

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
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <Map1 />
        <MyTable />
      </div>
    );
  }
}

// export default connect(
//   ({ counter }: any) => ({ count: counter.count }),
//   // (dispatch) => ({ ...bindActionCreators(sendAction,dispatch) })

// )(App)

export default App;
