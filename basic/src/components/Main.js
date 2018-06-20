import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HtmlTable from './HtmlTable';
import './style.css';

const Main = () => (
    <main className="container">
        <Switch>
            <Route path="/" component={HtmlTable} />
            <Route path="/hw1/htmltable" component={HtmlTable} />
        </Switch>
    </main>
)

export default Main;