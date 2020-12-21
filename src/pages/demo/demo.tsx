import React, { Component } from 'react';
import Hook from './hook';
// @ts-ignore
import { unstable_trace as trace } from '../../../node_modules/scheduler/tracing.js';
const ThemeContext = React.createContext({ color: 'red' })

type Props = {
  name: string;
}

export default class Demo extends Component<Props> {
  state = {
    count: 1,
  }
  componentDidMount() {
    console.log(this.context);
    let arr = [1, 2, 3];
    let ch = this.props.children;
    // @ts-ignore
    let chi2 = this.props.children[1]
    console.log(ch);
    // @ts-ignore
    let it = ch[Symbol.iterator]();
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());
    // while (it.)
    
    console.log('🦀🦀🦀🦀', this.props.children);
  }


  handleClick = () => {
    // trace("Login button click", performance.now(), () => {
    //   this.setState({ count: this.state.count + 1 })
    // });
      this.setState({ count: this.state.count + 1 })
  }
  
  render() {
    return (
      <div>
        {/* {/* <h3>{this.state.count}</h3> */}
        <button onClick={() => this.handleClick()}>点击</button>
        <div>
          {/* <span key='1'>{this.state.count}</span>
          <span key='2'></span>
          <span key='3'></span>
          <span key='4'></span>
          <span key='5'></span>
          <span key='6'></span> */}
          我是你好

        </div>
        <Hook />
      </div>
    )
  }
}

Demo.contextType = ThemeContext;