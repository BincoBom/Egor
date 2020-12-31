import React from "react";
import Index from "pages/index";
import Proekty from "pages/proekty";
import Kontakty from "pages/kontakty";
import Page404 from "pages/page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export default () => (
    <Router>
        <GlobalStyles />
        <Switch>
        			<Route exact path='/' component={Index}/>
			<Route exact path='/index' component={Index}/>
			<Route exact path='/proekty' component={Proekty}/>
			<Route exact path='/kontakty' component={Kontakty}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);
