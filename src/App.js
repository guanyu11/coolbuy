import React, { Component } from 'react'
import {Switch,Route,Redirect} from "react-router-dom"

import {
  Home,
  Vendor,
  Cart,
  Mine,
  Classify,
  Find,
  Article,
} from "@pages"
export default class App extends Component {
  render() {
    return (

      <Switch>
        <Redirect from="/" to="/home" exact></Redirect>
        <Route path="/home" component={Home}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/mine" component={Mine}></Route>
        <Route path="/classify" component={Classify}></Route>
        <Route path="/vendor" component={Vendor}></Route>
        <Route path="/find" component={Find}></Route>
        <Route path="/article" component={Article}></Route>

      </Switch>
    )
  }
}
