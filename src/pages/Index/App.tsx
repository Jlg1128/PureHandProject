import React, { Component, Dispatch } from 'react';
import { test } from '@/utils';
import styles from './App.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { AnyAction } from 'redux';
import { Link, BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Theme from '../Theme/Theme'
import Child from '../child/child'

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

class App extends Component<Props, State>{
  renderUser: <T>(user: T) => T = function <User>(user: User) {
    return user;
  }
  handleClick = () => {
    console.log(this.props);
    
  }
  componentDidMount() {
    test();
  }
  render() {
    return (
      <Router>
        <Switch >
        <Route path="/user" component={Child} />
        <Route path="/home" component={Theme} />
        <Route path="/" component={Theme} />
        <Redirect from="*" to="/user" />
        </Switch>
      </Router>
    );
  }
}

export default connect(
  ({ counter }: any) => ({ count: counter.count }),
  // (dispatch) => ({ ...bindActionCreators(sendAction,dispatch) })

)(App)  
