import React, { PureComponent } from 'react';

interface Props {
  name: string;
}

interface State {

}

export default class Test extends PureComponent<Props, State> {
  componentWillReceiveProps(nextProps: any, context: any ) {
    console.log('🐽🐽🐽🐽🐽🐽🐽', nextProps);
    console.log('🐽🐽🐽🐽🐽🐽🐽', context);
  }
    render() {
        return (
          <div>
            123
            我是我是
            我是我是
            我是我是
          </div>
        );
    }
}
