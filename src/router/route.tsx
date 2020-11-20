import { createBrowserHistory } from 'history';
import React, { Component } from 'react'
import { ReactNode } from 'react';
import { Link, BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { RouterConfigType } from './routerConfig';
export const history = createBrowserHistory();

const routerConfig = require('./routerConfig')


function renderRouteConf(container: ReactNode | null, router: Array<RouterConfigType>, contextPath: string) {
    let routerChildren: Array<any> = []
    function renderRoute(routerItem: RouterConfigType, contextPath: string) {
        const { path, component } = routerItem
        routerChildren.push(
            <Route
            key={path}
            exact
            path={path}
            render={() => {
                div
            }}
          />
        
        )
    }
}