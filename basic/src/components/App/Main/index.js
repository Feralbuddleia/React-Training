import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HtmlTable from '../../Table';
import Iphone from '../../Iphone';

const Main = () => (
    <main className="App-article">
        <Switch>
            <Route exact path="/hw1" component={HtmlTable} />
            <Route path="/hw1/htmltable" component={HtmlTable} />
            <Route path="/hw1/iphone" component={Iphone} />
        </Switch>
    </main>
)

export default Main;