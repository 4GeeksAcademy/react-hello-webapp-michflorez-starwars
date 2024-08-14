
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./views/home";
import { Details } from "./views/details";
import { ReadLater } from "./views/readLater";

import injectContext from "./store/appContext";
import Navbar from "./component/Navbar";


const App = () => (
    <Router>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
    
            <Route path="/read-later" component={ReadLater} />
            <Route path="/people/:id" element={<Details />} />
            <Route path="*" element={<h1>Not found!</h1>} />

        </Switch>
    </Router>
);

export default injectContext(App);
