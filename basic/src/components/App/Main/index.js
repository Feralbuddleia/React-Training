import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HtmlTable from '../../Table';
import Iphone from '../../Iphone';
import Counter from '../../Counter';
import Timer from '../../Timer';

const Main = () => (
    <main className="App-article">
        <Switch>
            <Route exact path="/hw1" component={HtmlTable} />
            <Route path="/hw1/htmltable" component={HtmlTable} />
            <Route path="/hw1/iphone" component={Iphone} />
            <Route path="/hw2" component={Counter} />
            <Route path="/hw3" component={Timer}/>
        </Switch>
    </main>
)

export default Main;