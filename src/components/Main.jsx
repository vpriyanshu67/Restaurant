import React from 'react';
import MenuPage from './menuPage';
import CartPage from './cartPage';
import Navbar from './navbar';
import { Route, Redirect, Switch } from "react-router-dom";
import HomePage from './homePage';



export default function Main(){
    return(
       <React.Fragment>
       <Navbar/>
       <Switch>
       <Route exact path="/" component={HomePage} />
       <Route exact path="/cartPage" component={CartPage} />
       <Route exact path="/menuPage" component={MenuPage} />
       </Switch>
       </React.Fragment>
    );
}


