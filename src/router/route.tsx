import { createBrowserHistory } from 'history';
import React, { ReactNode } from 'react';

import { Router, Switch, Route, Redirect } from 'react-router-dom';
import routerConfig, { RouterConfigType } from './routerConfig';

const history = createBrowserHistory();

function renderRouteConf(container: ReactNode | null, router: Array<RouterConfigType>, publicPath: string) {
	const routerArr: any = [];
	function renderRoute(routerItem: RouterConfigType, contextPath: string) {
		const { path, component, layout = null } = routerItem;
		return <Route
			key={path}
			exact
			path={path}
			render={(routeProps: any) => (
				layout
					? React.createElement(layout, routeProps, React.createElement(component, routeProps))
					: React.createElement(component, routeProps)
			)}
		/>;
	}
	router.forEach((routerItem) => routerArr.push(
  <Switch key={routerItem.path}>
    {renderRoute(routerItem, '/')}
  </Switch>,
	));
	return routerArr;
}
const routeChildren = renderRouteConf(null, routerConfig, '/');
export default class Routers extends React.PureComponent {
	render() {
		return (
  <Router history={history}>
    {routeChildren}
  </Router>
		);
	}
}
