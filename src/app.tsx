import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';
import withTracker from './components/GATracker';
import './app.scss';

require('../public/images/favicon.ico');

import Main from './pages/main/main';
import Donate from './pages/donate/donate';

export default class App extends React.Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <ScrollToTop>
                    <Switch>
                        <Route exact path='/' component={ withTracker(Main, { /* additional attributes */ }) }/>
                        <Route path='/donate' component={ withTracker(Donate, { /* additional attributes */ }) }/>
                    </Switch>
                </ScrollToTop>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
