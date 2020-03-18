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
 class App extends Component {
  render() {
    return (

      <Switch>
        <Redirect from="/" to="/home" exact></Redirect>
        <Route path="/home" component={Home}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/mine" component={Mine}/>
        <Route path="/classify" component={Classify}/>
        <Route path="/vendor" component={Vendor}/>
        <Route path="/find" component={Find}/>
        <Route path="/article" component={Article}/>

      </Switch>
    )
  }
}

export default App