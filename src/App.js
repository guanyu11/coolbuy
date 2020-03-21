import React, { Component,Fragment } from 'react'
import {Switch,Route,Redirect} from "react-router-dom"

import {
  Home,
  Vendor,
  Cart,
  Mine,
  Classify,
  Find,
  Article,
  CareChoose,
   HotArticle 
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
        <Route path="/find" render={()=>{
          return(
           <Fragment>
            <Route  component={Find}/>
            <Redirect from="/find" to="/find/carechoose" exact></Redirect>

            <Switch>
              <Route path="/find/carechoose" component={CareChoose}></Route>
              <Route path="/find/hotArticle" component={HotArticle}></Route>
            </Switch>
          </Fragment>)
        }}/>
        <Route path="/article/:id" component={Article}/>

      </Switch>
    )
  }
}

export default App