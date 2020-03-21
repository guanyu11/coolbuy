import React, { Component } from 'react'
import AboutItem from "./aboutItem"
import MainText from "./mainText"
class Article extends Component {
    render() {
        console.log(this.props,"Article")
        return (
            <div>
               <head></head>
               <MainText  ref="MainText"></MainText>
               <AboutItem  ref="AboutItem"></AboutItem>
            </div>
        )
    }
}
export default Article