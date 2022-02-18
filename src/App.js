import React, {Component} from "react";
import {Route, Switch, withRouter,} from "react-router-dom";
import Level from "./Level";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Level" component={Level}/>
        </Switch>
    );

}


export default withRouter(App);
