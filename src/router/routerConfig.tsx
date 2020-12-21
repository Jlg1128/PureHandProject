import React, { FunctionComponent, ReactNode } from 'react';
import Child from '@/pages/child/child';
import Theme from '@/pages/Theme/Theme';
import App from '@/pages/Index/App';
import SecureLayout from '@/layout/secureLayout';
import ProductInfo from '@/pages/productInfo/productInfo';
// interface RouteType<T> {
//    [_: string] : T
// }

export interface RouterConfigType {
path: string;
component: any;
layout?: FunctionComponent;
}

const routerConfig: Array<RouterConfigType> = [
{
		path: '/',
		component: App,
		layout: SecureLayout,
	},
	{
		path: '/user',
		component: Child,
		layout: SecureLayout,
	},
	{
		path: '/home',
		component: Theme,
		layout: SecureLayout,
	},
	{
		path: '/pr',
		component: ProductInfo,
	},
];

export default routerConfig;
