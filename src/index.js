import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Switch} from 'react-router-dom'
import {createBrowserHistory} from 'history'

import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Menu from './components/Menu'
import MarkI from './components/MarkI'
import MarkII from './components/MarkII'
import MarkIII from './components/MarkIII'
import MarkIV from './components/MarkIV'

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <App>
            <Switch>
                <Route path="/mark-i" component={MarkI}/>
                <Route path="/mark-ii" component={MarkII}/>
                <Route path="/mark-iii" component={MarkIII}/>
                <Route path="/mark-iv" component={MarkIV}/>
                <Route path="/" component={Menu}/>
            </Switch>
        </App>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
